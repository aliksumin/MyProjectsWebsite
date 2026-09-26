/*
 * build-favicon.js — generates the site's icon set from scratch.
 *
 *   node tools/build-favicon.js
 *
 * The mark is the monogram "AS" in paper on ink, using the site's own brand
 * tokens: --ink #13120D and --paper #F3F2EF (the oklch values in the pages,
 * converted to sRGB). The tracking is tight and the cap height large so that
 * both letters still separate at 16px, which is where a two-letter monogram
 * usually turns to mush.
 *
 * Typeface: the site sets JetBrains Mono, but it is a webfont and is not
 * installed on this machine, so sharp cannot typeset it — it silently falls
 * back to a proportional sans, which is worse than picking a monospace on
 * purpose. Consolas is used instead: same genre, near-identical proportions
 * at icon sizes, and always present on Windows. The family list degrades to
 * DejaVu Sans Mono for a Linux CI run.
 *
 * Outputs assets/icons/* plus favicon.ico at the site root.
 */
const sharp = require('./node_modules/sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'icons');

const INK = '#13120D';
const PAPER = '#F3F2EF';
const FAMILY = "Consolas, 'DejaVu Sans Mono', monospace";

/* One square of artwork at an arbitrary size. Everything is expressed as a
   fraction of `size` so a single definition serves 16px and 512px alike. */
function markSvg(size) {
  const fs_ = size * 0.58;          // cap height ~ 0.58 of the tile
  const tracking = -0.06 * fs_;     // pull A and S together
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${INK}"/>
  <text x="50%" y="50%" fill="${PAPER}"
        font-family="${FAMILY}" font-weight="bold" font-size="${fs_}"
        letter-spacing="${tracking}"
        text-anchor="middle" dominant-baseline="central">AS</text>
</svg>`;
}

const render = (size) =>
  sharp(Buffer.from(markSvg(size))).resize(size, size, { fit: 'fill' })
    .png({ compressionLevel: 9 }).toBuffer();

/* Minimal ICO writer: 6-byte header, a 16-byte directory entry per image,
   then the payloads. Since Vista each payload may be a PNG, which is what
   browsers expect. sharp cannot write .ico, and /favicon.ico is still
   requested by default at a site root. */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const dir = Buffer.alloc(16 * images.length);
  let offset = header.length + dir.length;

  images.forEach((img, i) => {
    const b = i * 16;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 0);
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 1);
    dir.writeUInt8(0, b + 2);
    dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4);
    dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(img.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += img.data.length;
  });

  return Buffer.concat([header, dir, ...images.map(i => i.data)]);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const log = [];

  for (const [name, size] of [
    ['favicon-16.png', 16],
    ['favicon-32.png', 32],
    ['favicon-48.png', 48],
    ['apple-touch-icon.png', 180],
    ['icon-512.png', 512],
  ]) {
    const buf = await render(size);
    fs.writeFileSync(path.join(OUT, name), buf);
    log.push(`${name.padEnd(22)} ${String(size).padStart(3)}px   ${(buf.length / 1024).toFixed(1)} KB`);
  }

  const ico = buildIco(await Promise.all([16, 32, 48].map(async s => ({ size: s, data: await render(s) }))));
  fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico);
  log.push(`favicon.ico            16+32+48  ${(ico.length / 1024).toFixed(1)} KB`);

  console.log(log.join('\n'));
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
