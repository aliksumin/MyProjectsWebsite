/*
 * optimize-media.js — produce web-sized image tiers from the full-resolution set.
 *
 *   node tools/optimize-media.js            # report what would happen
 *   node tools/optimize-media.js --apply    # do it
 *   node tools/optimize-media.js --apply --only=ob-gh   # just matching paths
 *
 * The first --apply run MOVES the current content/ tree to _source/content-full/
 * (instant, same volume) and treats that as the immutable master from then on.
 * Every later run regenerates all tiers from the master, so it is repeatable and
 * never re-compresses an already-compressed file.
 *
 * Tiers — filenames and extensions are identical across tiers so that a single
 * path in content.js maps to all three:
 *
 *   content/      long edge <= 2000px   full view + lightbox
 *   content-sm/   long edge <=  900px   phones and tablets
 *   content-xs/   long edge <=  400px   index thumbnails
 *
 * Videos are copied untouched — resizing them needs ffmpeg, which is out of scope.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const MASTER = path.join(ROOT, '_source', 'content-full');
const APPLY = process.argv.includes('--apply');
const ONLY = (process.argv.find(a => a.startsWith('--only=')) || '').slice(7);

/* sharp refuses inputs over 268.4 megapixels by default. Two legitimate files
   here exceed it: a 4128x2304 GIF with 101 animation frames (960 MP once the
   frames are counted) and a 26502x13886 Grasshopper screenshot (368 MP). The
   guard exists to blunt decompression-bomb attacks; these are our own assets,
   so lift it — otherwise they fall back to a plain copy and ship full size in
   every tier, which is exactly what the optimizer is meant to prevent. */
const IN = { limitInputPixels: false };

const TIERS = [
  { dir: 'content',    max: 2000, lossyPng: false },
  { dir: 'content-sm', max: 900,  lossyPng: true  },
  { dir: 'content-xs', max: 400,  lossyPng: true  },
];

const RASTER = /\.(jpe?g|png)$/i;
const PASSTHROUGH = /\.(mp4|webm|mov|svg)$/i;
const GIF = /\.gif$/i;

const walk = (dir, base = '', out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? base + '/' + e.name : e.name;
    e.isDirectory() ? walk(path.join(dir, e.name), rel, out) : out.push(rel);
  }
  return out;
};

const mb = b => (b / 1024 / 1024).toFixed(1);

async function main() {
  // ---- establish the master copy ----
  if (!fs.existsSync(MASTER)) {
    if (!APPLY) {
      console.log(`DRY RUN\n  would move content/ -> _source/content-full/  (master, preserved)`);
    } else {
      fs.mkdirSync(path.dirname(MASTER), { recursive: true });
      fs.renameSync(path.join(ROOT, 'content'), MASTER);
      console.log('moved content/ -> _source/content-full/  (master)');
    }
  }
  const src = fs.existsSync(MASTER) ? MASTER : path.join(ROOT, 'content');
  let files = walk(src);
  if (ONLY) {
    files = files.filter(f => f.includes(ONLY));
    console.log(`--only=${ONLY} -> ${files.length} file(s)\n`);
  }

  const srcBytes = files.reduce((s, f) => s + fs.statSync(path.join(src, f)).size, 0);
  console.log(`master: ${files.length} files, ${mb(srcBytes)} MB\n`);

  if (!APPLY) {
    const big = files.filter(f => RASTER.test(f) && fs.statSync(path.join(src, f)).size > 2 * 1024 * 1024);
    console.log(`would write ${TIERS.map(t => t.dir).join(', ')}`);
    console.log(`  rasters to resize : ${files.filter(f => RASTER.test(f)).length}  (${big.length} over 2 MB)`);
    console.log(`  gifs              : ${files.filter(f => GIF.test(f)).length}`);
    console.log(`  copied untouched  : ${files.filter(f => PASSTHROUGH.test(f)).length}`);
    console.log('\nRe-run with --apply.');
    return;
  }

  const totals = Object.fromEntries(TIERS.map(t => [t.dir, 0]));
  let done = 0, failed = [], oversized = [];

  for (const rel of files) {
    const from = path.join(src, rel);
    for (const tier of TIERS) {
      // Video and SVG have no tiers — nothing resizes them, and pages only ever
      // reference them through content/. Writing them into the smaller trees
      // would add dead bytes that no device ever requests (48.7 MB of mp4 on
      // the first run). Keep one copy, in content/.
      if (PASSTHROUGH.test(rel) && tier.dir !== 'content') continue;

      // Nothing here resizes video, so an oversized source would be copied
      // through verbatim. GitHub refuses any file over 100 MB outright, and a
      // rejected push is discovered only after the whole repo has uploaded.
      // Leave it in the master and say so, rather than poisoning content/.
      if (PASSTHROUGH.test(rel) && fs.statSync(from).size > 90 * 1024 * 1024) {
        oversized.push(`${rel} (${mb(fs.statSync(from).size)} MB)`);
        continue;
      }

      const to = path.join(ROOT, tier.dir, rel);
      fs.mkdirSync(path.dirname(to), { recursive: true });

      try {
        if (PASSTHROUGH.test(rel)) {
          fs.copyFileSync(from, to);
        } else if (GIF.test(rel)) {
          // Animated: resize every frame. `height` must not be constrained here
          // — with animated input sharp treats the image as one tall strip of
          // frames, so a height cap would squash the animation.
          await sharp(from, { animated: true, ...IN })
            .resize({ width: tier.max, fit: 'inside', withoutEnlargement: true })
            .gif()
            .toFile(to);
        } else if (/\.png$/i.test(rel)) {
          const p = sharp(from, IN).resize({ width: tier.max, height: tier.max, fit: 'inside', withoutEnlargement: true });
          // Full tier stays lossless so plans and diagrams keep crisp linework.
          // Small tiers are displayed far below native size, where palette
          // quantisation is invisible but saves several times the bytes.
          await (tier.lossyPng
            ? p.png({ compressionLevel: 9, effort: 10, palette: true, quality: 82, dither: 0.6 })
            : p.png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true })
          ).toFile(to);
        } else {
          await sharp(from, IN)
            .resize({ width: tier.max, height: tier.max, fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true, progressive: true })
            .toFile(to);
        }
        totals[tier.dir] += fs.statSync(to).size;
      } catch (err) {
        failed.push(`${tier.dir}/${rel} :: ${err.message}`);
        try { fs.copyFileSync(from, to); totals[tier.dir] += fs.statSync(to).size; } catch {}
      }
    }
    if (++done % 50 === 0) console.log(`  ${done}/${files.length}`);
  }

  console.log('\n=== result ===');
  console.log(`master (_source/content-full)  ${mb(srcBytes).padStart(9)} MB   preserved`);
  for (const t of TIERS)
    console.log(`${t.dir.padEnd(30)} ${mb(totals[t.dir]).padStart(9)} MB   (<= ${t.max}px)`);
  const published = TIERS.reduce((s, t) => s + totals[t.dir], 0);
  console.log(`published total                ${mb(published).padStart(9)} MB`);
  console.log(`reduction vs master            ${(100 - (published / srcBytes) * 100).toFixed(1)}%`);
  if (failed.length) {
    console.log(`\n${failed.length} file(s) fell back to a plain copy:`);
    failed.slice(0, 20).forEach(f => console.log('  ' + f));
  }
  if (oversized.length) {
    console.log(`\n${oversized.length} file(s) NOT published — over GitHub's 100 MB limit:`);
    oversized.forEach(f => console.log('  ' + f));
    console.log('  Kept in _source/content-full/. Compress or host them externally,');
    console.log('  the way other projects use a `youtube:` id, before referencing them.');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
