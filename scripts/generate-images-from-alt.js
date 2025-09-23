#!/usr/bin/env node
/**
 * Generate simple SVG images from <img alt> text for the given HTML file.
 * - Saves images under public/images
 * - Replaces placehold.co (or placeholder.svg) srcs with /images/<slug>.svg
 *
 * Usage: node scripts/generate-images-from-alt.js presentations/vibe-coding.html
 */

import fs from 'fs';
import path from 'path';

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function slugify(text, fallback, maxLen = 64) {
  if (!text || typeof text !== 'string') return fallback;
  const normalized = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\-\s_가-힣]/g, '') // keep basic latin, spaces, hyphen, underscore, korean
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
  const limited = normalized.slice(0, maxLen) || fallback;
  return limited;
}

function buildSvg({ title, width = 1216, height = 832 }) {
  const safeTitle = (title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  // Simple dark background with centered title
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <g>
    <rect x="64" y="64" rx="24" ry="24" width="${width - 128}" height="${height - 128}" fill="#111827" stroke="#374151" stroke-width="2"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#93c5fd" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="42" font-weight="600">
      ${safeTitle}
    </text>
  </g>
</svg>`;
}

function replaceSrcInTag(imgTag, newSrc) {
  const hasSrc = /\bsrc\s*=\s*(["'])[^"']*\1/i.test(imgTag);
  if (hasSrc) {
    return imgTag.replace(/\bsrc\s*=\s*(["'])[\s\S]*?\1/i, `src="${newSrc}"`);
  }
  return imgTag.replace(/<img\b/i, `<img src="${newSrc}"`);
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: node scripts/generate-images-from-alt.js <path-to-html>');
    process.exit(1);
  }

  const projectRoot = process.cwd();
  const htmlPath = path.isAbsolute(target) ? target : path.join(projectRoot, target);
  const publicImagesDir = path.join(projectRoot, 'public', 'images');

  ensureDirSync(publicImagesDir);

  let html = fs.readFileSync(htmlPath, 'utf8');

  // Find all <img ...> tags
  const imgTagRegex = /<img\b[^>]*>/gi;
  const tags = html.match(imgTagRegex) || [];

  let counter = 1;
  const processed = new Set();

  for (const tag of tags) {
    const srcMatch = tag.match(/\bsrc\s*=\s*(["'])(.*?)\1/i);
    const altMatch = tag.match(/\balt\s*=\s*(["'])(.*?)\1/i);

    const src = srcMatch ? srcMatch[2] : '';
    const alt = altMatch ? altMatch[2].trim() : '';

    const isPlaceholder = /placehold\.co|placeholder\.svg/i.test(src);
    if (!isPlaceholder || !alt) continue;

    // Build unique filename
    const base = slugify(alt, `image-${counter}`);
    let filename = `${base}.svg`;
    let attempt = 1;
    while (processed.has(filename) || fs.existsSync(path.join(publicImagesDir, filename))) {
      filename = `${base}-${++attempt}.svg`;
    }

    const svg = buildSvg({ title: alt });
    fs.writeFileSync(path.join(publicImagesDir, filename), svg, 'utf8');
    processed.add(filename);

    const newSrc = `/images/${filename}`;
    const newTag = replaceSrcInTag(tag, newSrc);
    html = html.replace(tag, newTag);
    counter += 1;
  }

  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Updated HTML and generated images at', publicImagesDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


