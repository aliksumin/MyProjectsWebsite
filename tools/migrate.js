/*
 * migrate.js — reorganise the exported design project into a publish-ready site.
 *
 *   node tools/migrate.js          # dry run: print the plan, touch nothing
 *   node tools/migrate.js --apply  # perform the move + rewrite
 *
 * Layout produced (all HTML at root so relative paths work identically on
 * every page, and on a GitHub Pages project site served from /<repo>/):
 *
 *   index.html, about.html, contact.html, collaborations.html,
 *   project.html, wavy-square.html, urban3d.html
 *   assets/js/*.js
 *   content/about/…              media for the About page
 *   content/projects/NN-slug/…   media for project NN (matches project.html?p=NN)
 *   _source/uploads/…            original uploads, preserved, not published
 *   _source/legacy-pages/…       orphaned standalone project pages, preserved
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const STAGE = path.join(ROOT, '_staging');
const APPLY = process.argv.includes('--apply');

const log = [];
const say = (...a) => { const s = a.join(' '); log.push(s); console.log(s); };

/* ---------- 1. read the project table straight from content.js ---------- */
global.window = global;
global.document = { createElement: () => ({ getContext: () => null }) };
global.placeholderImg = () => 'ph';
require(path.join(STAGE, 'shared/content.js'));
const PROJECTS = global.PORTFOLIO.projects;

// media folder -> destination folder, derived from the data, not hardcoded
const mediaMap = { about: 'content/about' };
for (const p of PROJECTS) {
  const dest = `content/projects/${p.n}-${p.slug}`;
  const folders = new Set();
  (function walk(o) {
    if (!o) return;
    if (typeof o === 'string') {
      const re = /(?:\.\.\/)?media\/([^/"'`)\s]+)\//g;
      let m; while ((m = re.exec(o))) folders.add(m[1]);
      return;
    }
    if (Array.isArray(o)) return o.forEach(walk);
    if (typeof o === 'object') for (const k in o) walk(o[k]);
  })(p);
  for (const f of folders) {
    // A project owning several media folders (LoRA) keeps them as subfolders.
    mediaMap[f] = folders.size > 1 ? `${dest}/${f.replace(/^lora-/, '')}` : dest;
  }
}

// media folders present on disk but referenced by no project must still move
for (const d of fs.readdirSync(path.join(STAGE, 'media'), { withFileTypes: true })) {
  if (d.isDirectory() && !mediaMap[d.name]) {
    mediaMap[d.name] = `content/unassigned/${d.name}`;
    say(`  ! media/${d.name} is referenced by no project -> content/unassigned/`);
  }
}

/* ---------- 2. page moves ---------- */
const pageMap = {
  '01-index.html': 'index.html',
  '02-collaborations.html': 'collaborations.html',
  'about.html': 'about.html',
  'contact.html': 'contact.html',
  'project.html': 'project.html',
  'urban3d.html': 'urban3d.html',
  'wavy-square.html': 'wavy-square.html',
};
const legacyPages = fs.readdirSync(path.join(STAGE, 'directions'))
  .filter(f => f.endsWith('.html') && !(f in pageMap));

/* ---------- 3. reference rewriting ---------- */
// `up` is the prefix needed to reach the site root from the file's own folder.
function rewrite(text, up) {
  let t = text;

  // scripts: ../shared/x.js -> {up}assets/js/x.js
  t = t.replace(/(?:\.\.\/)?shared\//g, `${up}assets/js/`);

  // media: ../media/<folder>/ -> {up}<mapped>/
  t = t.replace(/(?:\.\.\/)?media\/([A-Za-z0-9_-]+)\//g, (m, folder) => {
    const dest = mediaMap[folder];
    if (!dest) { say(`  ! no mapping for media/${folder}/`); return m; }
    return `${up}${dest}/`;
  });

  // the runtime path test that looked for "/media/" in a string
  t = t.replace(
    /\/\\\/media\\\/\.\+\\\.\(png\|jpe\?g\|webp\)\$\/i/g,
    '/content\\/.+\\.(png|jpe?g|webp)$/i'
  );
  t = t.replace(/\/media\/ image found anywhere/g, '/content/ image found anywhere');

  // inter-page links for the two renamed pages
  t = t.replace(/(["'(])(?:\.\.\/)?01-index\.html/g, `$1${up}index.html`);
  t = t.replace(/(["'(])(?:\.\.\/)?02-collaborations\.html/g, `$1${up}collaborations.html`);

  // remaining sibling page links need the root prefix when the file is nested
  if (up) {
    for (const dest of Object.values(pageMap)) {
      if (dest === 'index.html' || dest === 'collaborations.html') continue;
      t = t.replace(new RegExp(`(["'(])${dest.replace('.', '\\.')}`, 'g'), `$1${up}${dest}`);
    }
  }
  return t;
}

/* ---------- 4. build the plan ---------- */
const moves = [];   // [from, to]  (directories or files)
const writes = [];  // [absPath, contentProducer]
const drops = [];

for (const [src, dest] of Object.entries(pageMap))
  moves.push([`directions/${src}`, dest]);
for (const f of legacyPages)
  moves.push([`directions/${f}`, `_source/legacy-pages/${f}`]);
for (const f of fs.readdirSync(path.join(STAGE, 'shared')))
  moves.push([`shared/${f}`, `assets/js/${f}`]);
for (const [src, dest] of Object.entries(mediaMap))
  moves.push([`media/${src}`, dest]);
moves.push(['uploads', '_source/uploads']);
if (fs.existsSync(path.join(STAGE, '.thumbnail')))
  moves.push(['.thumbnail', '_source/.thumbnail']);
drops.push('screenshots');

say('=== PAGES ===');
for (const [a, b] of moves.filter(m => m[0].startsWith('directions/'))) say(`  ${a}  ->  ${b}`);
say('\n=== SCRIPTS ===');
for (const [a, b] of moves.filter(m => m[0].startsWith('shared/'))) say(`  ${a}  ->  ${b}`);
say('\n=== MEDIA ===');
for (const [a, b] of moves.filter(m => m[0].startsWith('media/')).sort((x, y) => x[1].localeCompare(y[1])))
  say(`  ${a.padEnd(28)}  ->  ${b}`);
say('\n=== PRESERVED (not published) ===');
say('  uploads/  ->  _source/uploads/   (609 files)');
say(`  ${legacyPages.length} orphaned standalone pages  ->  _source/legacy-pages/`);
say('\n=== DROPPED ===');
say('  screenshots/  (42 development QA images, per your instruction)');

if (!APPLY) { say('\nDRY RUN — nothing changed. Re-run with --apply.'); process.exit(0); }

/* ---------- 5. execute ---------- */
const mkdirp = d => fs.mkdirSync(d, { recursive: true });
for (const [from, to] of moves) {
  const src = path.join(STAGE, from);
  const dst = path.join(ROOT, to);
  if (!fs.existsSync(src)) { say(`  ! missing source ${from}`); continue; }
  mkdirp(path.dirname(dst));
  if (fs.existsSync(dst) && fs.statSync(dst).isDirectory()) {
    // merge (LoRA subfolders land under one parent)
    for (const e of fs.readdirSync(src)) fs.renameSync(path.join(src, e), path.join(dst, e));
    fs.rmdirSync(src);
  } else {
    if (fs.existsSync(dst)) fs.rmSync(dst, { recursive: true, force: true });
    fs.renameSync(src, dst);
  }
}
for (const d of drops) fs.rmSync(path.join(STAGE, d), { recursive: true, force: true });

// rewrite every HTML/JS now sitting in its final home
const targets = [];
const collect = (dir, up) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isFile() && /\.(html|js)$/.test(e.name)) targets.push([fp, up]);
  }
};
collect(ROOT, '');
collect(path.join(ROOT, 'assets/js'), '');            // consumed by root pages
collect(path.join(ROOT, '_source/legacy-pages'), '../../');

for (const [fp, up] of targets) {
  if (fp.includes(`${path.sep}tools${path.sep}`)) continue;
  const before = fs.readFileSync(fp, 'utf8');
  const after = rewrite(before, up);
  if (after !== before) { fs.writeFileSync(fp, after, 'utf8'); say(`  rewrote ${path.relative(ROOT, fp)}`); }
}

say('\nAPPLIED.');
fs.writeFileSync(path.join(__dirname, 'migrate-report.txt'), log.join('\n'), 'utf8');
