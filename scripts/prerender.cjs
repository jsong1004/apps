/**
 * prerender.cjs
 *
 * Uses Puppeteer to load the Vite-built SPA (via `vite preview`), waits for
 * the JavaScript to fully render the DOM, then writes the resulting static HTML
 * back to dist/index.html. This allows fast crawlers (Googlebot, AI agents,
 * social bots) to see real content instead of an empty <body>.
 *
 * Run AFTER `vite build` and WITH `vite preview` already running on port 4173.
 * Used via: npm run prerender
 */

'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PREVIEW_URL = 'http://localhost:4173';
const OUTPUT_PATH = path.resolve(__dirname, '../dist/index.html');
// Extra wait after DOMContentLoaded to let async section renders settle (ms)
const RENDER_WAIT_MS = 1500;

(async () => {
    console.log('[prerender] Starting Puppeteer...');

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
        ],
        // When PUPPETEER_EXECUTABLE_PATH is set (e.g. in Alpine/Docker),
        // Puppeteer uses that binary instead of the bundled Chromium.
        ...(process.env.PUPPETEER_EXECUTABLE_PATH
            ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
            : {}),
    });

    try {
        const page = await browser.newPage();

        // Suppress console noise from the page
        page.on('console', () => {});
        page.on('pageerror', (err) => console.warn('[prerender] Page error:', err.message));

        console.log(`[prerender] Navigating to ${PREVIEW_URL}...`);
        await page.goto(PREVIEW_URL, {
            waitUntil: 'domcontentloaded',
            timeout: 30000,
        });

        // Wait for the SPA's renderAll() to populate sections
        console.log(`[prerender] Waiting ${RENDER_WAIT_MS}ms for JS render...`);
        await new Promise((resolve) => setTimeout(resolve, RENDER_WAIT_MS));

        // Verify the page actually rendered (at least one <h2> should exist)
        const h2Count = await page.$$eval('h2', (els) => els.length);
        if (h2Count === 0) {
            console.warn('[prerender] WARNING: No <h2> elements found — page may not have rendered correctly.');
        } else {
            console.log(`[prerender] Render check passed: ${h2Count} <h2> elements found.`);
        }

        const html = await page.content();

        fs.writeFileSync(OUTPUT_PATH, html, 'utf8');
        console.log(`[prerender] Written rendered HTML to ${OUTPUT_PATH}`);
    } finally {
        await browser.close();
        console.log('[prerender] Done.');
    }
})().catch((err) => {
    console.error('[prerender] Fatal error:', err);
    process.exit(1);
});
