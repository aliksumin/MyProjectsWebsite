/*
 * annotate-museum-diagram.js
 *
 * Rebuilds content/projects/02-dadonghai-sanya/museum-04-diagram.png.
 *
 * The version that shipped was a 785x573 raster — the only annotated copy that
 * existed — so it looked soft next to every other image on the page. The clean
 * 2179x1587 render has no annotations, so the labels are redrawn here as vector
 * and composited onto it. They end up sharper than the original, because the
 * text is rendered at full resolution rather than upscaled.
 *
 * Coordinates are authored in the 785x573 space of the original annotated file,
 * whose framing is identical (2179/785 = 2.776, 1587/573 = 2.770), and the SVG
 * is scaled to the full size on render. Re-run after changing any label:
 *
 *   node tools/annotate-museum-diagram.js            # preview at 785px
 *   node tools/annotate-museum-diagram.js --apply    # write the master
 */
const sharp = require('./node_modules/sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = process.argv.find(a => a.startsWith('--src='))?.slice(6)
         || 'C:/Users/white/Desktop/Temp/Picture1.png';
const DST = path.join(ROOT, '_source/content-full/projects/02-dadonghai-sanya/museum-04-diagram.png');
const APPLY = process.argv.includes('--apply');

const W = 785, H = 573;            // authoring space
const OUT_W = 2179, OUT_H = 1587;  // native size of the clean render

const INK = '#1a1a1a';
const LEAD = '#1f4e79';   // dashed leader lines
const RED = '#c0392b';    // entrance arrows
const FONT = "Arial, 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif";
const FS = 14.5;          // label size in authoring space
const LH = 17.5;          // line height

/* Each label: the English lines, the Chinese line, and where the text sits.
   `lead` is a polyline from the text to the thing it names; `arrow` is a block
   arrow drawn instead of a leader for the two entrances. */
const LABELS = [
  {
    x: 11, y: 27,
    en: ['Proposed museum building', 'concept'],
    cn: '博物馆建筑的提案概念',
    lead: [[152, 74], [243, 133]],
  },
  {
    x: 443, y: 123,
    en: ['Reconstruction of the building with', 'a new museum function'],
    cn: '带有新博物馆功能的建筑改造',
    lead: [[447, 175], [585, 175], [651, 241]],
  },
  {
    x: 35, y: 339,
    en: ['Entrance to the new', 'museum building'],
    cn: '进入新博物馆建筑',
    arrow: { x: 217, y: 331, dir: 'right' },
  },
  {
    x: 110, y: 431,
    en: ['Connecting passage between two', 'museum buildings'],
    cn: '两座博物馆建筑之间的连接通道',
    lead: [[352, 483], [481, 483], [489, 338]],
  },
  {
    x: 533, y: 488,
    en: ['Entrance to the reconstructed', 'building'],
    cn: '进入改造中的建筑',
    arrow: { x: 726, y: 415, dir: 'left' },
  },
];

// Block arrow outline, drawn centred on (x,y), pointing left or right.
function arrowPath({ x, y, dir }) {
  const L = 30, HW = 7, HEAD = 14, HH = 14;   // length, shaft half-width, head length, head half-height
  const s = dir === 'right' ? 1 : -1;
  const back = x - s * L / 2, tip = x + s * L / 2, neck = tip - s * HEAD;
  return [
    [back, y - HW], [neck, y - HW], [neck, y - HH], [tip, y],
    [neck, y + HH], [neck, y + HW], [back, y + HW],
  ].map(p => p.join(',')).join(' ');
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const parts = [];
for (const L of LABELS) {
  L.en.forEach((line, i) => {
    parts.push(`<text x="${L.x}" y="${L.y + i * LH}" font-family="${FONT}" font-size="${FS}" fill="${INK}">${esc(line)}</text>`);
  });
  const cnY = L.y + L.en.length * LH + 3;
  parts.push(`<text x="${L.x}" y="${cnY}" font-family="${FONT}" font-size="${FS}" fill="${INK}">${esc(L.cn)}</text>`);

  if (L.lead) {
    parts.push(`<polyline points="${L.lead.map(p => p.join(',')).join(' ')}" fill="none" stroke="${LEAD}" stroke-width="1.1" stroke-dasharray="4.5 3.5"/>`);
  }
  if (L.arrow) {
    parts.push(`<polygon points="${arrowPath(L.arrow)}" fill="none" stroke="${RED}" stroke-width="2" stroke-linejoin="round"/>`);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OUT_W}" height="${OUT_H}" viewBox="0 0 ${W} ${H}">${parts.join('')}</svg>`;

(async () => {
  if (!fs.existsSync(SRC)) { console.error('source not found:', SRC); process.exit(1); }

  // Both layers are materialised to exact-size buffers before compositing.
  // Chaining .resize().composite() on one instance fails with "must have same
  // dimensions or smaller" — sharp does not apply them in the order written.
  const overlay = await sharp(Buffer.from(svg))
    .resize(OUT_W, OUT_H, { fit: 'fill' }).png().toBuffer();

  const baseBuf = await sharp(SRC, { limitInputPixels: false })
    .resize(OUT_W, OUT_H, { fit: 'fill' }).png().toBuffer();

  // Composite to a finished buffer before any further resizing. sharp applies
  // resize BEFORE composite within one instance whatever order they are
  // called in, so chaining .composite().resize(785) would shrink the base
  // first and then reject the full-size overlay.
  const composedBuf = await sharp(baseBuf)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9 })
    .toBuffer();

  if (APPLY) {
    fs.writeFileSync(DST, composedBuf);
    const m = await sharp(DST).metadata();
    console.log(`wrote ${path.relative(ROOT, DST)}  ${m.width}x${m.height}  ${(fs.statSync(DST).size / 1024).toFixed(0)} KB`);
    console.log('now run: node tools/optimize-media.js --apply --only=museum-04-diagram');
  } else {
    const preview = path.join(__dirname, 'annotated-preview.png');
    await sharp(composedBuf).resize({ width: 785 }).png().toFile(preview);
    console.log('preview written to', preview, '(785px — compare against the old file)');
    console.log('re-run with --apply to write the master');
  }
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
