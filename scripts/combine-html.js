#!/usr/bin/env node
/**
 * Combine multiple page_*.html files into a single HTML deck.
 * Usage:
 *   node scripts/combine-html.js "presentations/Beyond+Vibe+Coding_+When+the+Magic+Fades+and+Reality+Sets+In" presentations/beyond-vibe-coding.html
 */
import fs from 'fs';
import path from 'path';

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1].trim() : html.trim();
}

function naturalSortPageFiles(files) {
  return files
    .filter((f) => /^page_\d+\.html$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/(\d+)/)[1], 10);
      const nb = parseInt(b.match(/(\d+)/)[1], 10);
      return na - nb;
    });
}

function buildDeckHtml(slidesHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Beyond Vibe Coding - Combined</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { margin: 0; background: #0a0a0a; color: #e5e5e5; overflow: hidden; }
    .slides-container { width: 100vw; height: 100vh; overflow: hidden; position: relative; }
    .slide { width: 100vw; height: 100vh; position: absolute; top: 0; left: 0; display: none; }
    .slide.active { display: block; }
    .controls { position: fixed; bottom: 12px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; align-items: center; }
    .nav { background: rgba(255,255,255,0.1); border: 0; color: #fff; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; }
    .counter { background: rgba(0,0,0,0.3); padding: 6px 12px; border-radius: 10px; font-size: 14px; }
  </style>
  <!-- NOTE: Each source page includes its own styles; we preserve inner markup as-is inside slides. -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <!-- You can add more shared libs here if needed -->
  </head>
<body>
  <main id="slides" class="slides-container">
${slidesHtml.join('\n')}
  </main>
  <div class="controls">
    <button id="prev" class="nav" aria-label="Previous">&#9664;</button>
    <span id="counter" class="counter"></span>
    <button id="next" class="nav" aria-label="Next">&#9654;</button>
  </div>
  <script>
    const slides = Array.from(document.querySelectorAll('.slide'));
    let i = 0;
    function show(idx){
      slides.forEach((s, j) => s.classList.toggle('active', j === idx));
      document.getElementById('counter').textContent = (idx+1) + ' / ' + slides.length;
      document.getElementById('prev').disabled = idx === 0;
      document.getElementById('next').disabled = idx === slides.length - 1;
    }
    document.getElementById('prev').addEventListener('click', () => { if (i>0) { i--; show(i);} });
    document.getElementById('next').addEventListener('click', () => { if (i<slides.length-1) { i++; show(i);} });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') document.getElementById('prev').click();
      if (e.key === 'ArrowRight') document.getElementById('next').click();
    });
    show(i);
  </script>
</body>
</html>`;
}

async function main() {
  const srcDir = process.argv[2];
  const outPath = process.argv[3];
  if (!srcDir || !outPath) {
    console.error('Usage: node scripts/combine-html.js <srcDir> <outFile>');
    process.exit(1);
  }
  const absSrc = path.isAbsolute(srcDir) ? srcDir : path.join(process.cwd(), srcDir);
  const files = fs.readdirSync(absSrc);
  const pageFiles = naturalSortPageFiles(files);
  if (pageFiles.length === 0) {
    console.error('No page_*.html files found in', absSrc);
    process.exit(1);
  }
  const slides = [];
  for (const f of pageFiles) {
    const html = fs.readFileSync(path.join(absSrc, f), 'utf8');
    const inner = extractBody(html);
    // Wrap each page body inside a positioned .slide; keep original content intact
    slides.push(`    <section class="slide">\n${inner}\n    </section>`);
  }
  const combined = buildDeckHtml(slides);
  const outAbs = path.isAbsolute(outPath) ? outPath : path.join(process.cwd(), outPath);
  fs.writeFileSync(outAbs, combined, 'utf8');
  console.log('Wrote combined deck to', outAbs, 'with', slides.length, 'slides.');
}

main().catch((e) => { console.error(e); process.exit(1); });


