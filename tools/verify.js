/*
 * verify.js — check the published site is internally consistent.
 *   node tools/verify.js
 * Exits non-zero if any reference or link does not resolve on disk.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const PAGES = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
let errors = 0;
const err = m => { console.log('  FAIL ' + m); errors++; };

/* ---- 1. assets referenced by the data layer actually exist ---- */
global.window = global;
global.document = { createElement: () => ({ getContext: () => null }) };
global.placeholderImg = () => 'ph';
require(path.join(ROOT, 'assets/js/content.js'));
require(path.join(ROOT, 'assets/js/about-data.js'));

function refsOf(obj) {
  const out = new Set();
  (function walk(o) {
    if (!o) return;
    if (typeof o === 'string') {
      // drop absolute URLs first — an external host may itself have an
      // /assets/ or /content/ path segment that is not ours to resolve
      const local = o.replace(/https?:\/\/[^"'`)\s>]+/g, '');
      const re = /(?:content|assets)\/[^"'`)\s>]+/g;
      let m; while ((m = re.exec(local))) out.add(m[0]);
      return;
    }
    if (Array.isArray(o)) return o.forEach(walk);
    if (typeof o === 'object') for (const k in o) walk(o[k]);
  })(obj);
  return out;
}

const dataRefs = new Set([...refsOf(global.PORTFOLIO), ...refsOf(global.ABOUT), ...refsOf(global.CONTACT)]);
console.log(`data-layer asset references: ${dataRefs.size}`);
for (const r of dataRefs) if (!fs.existsSync(path.join(ROOT, r))) err(`content.js/about-data.js -> ${r}`);

/* ---- 2. assets + links referenced inline by each page ---- */
let pageRefs = 0, pageLinks = 0;
for (const p of PAGES) {
  const t = fs.readFileSync(path.join(ROOT, p), 'utf8');

  // data-full carries the lightbox's full-resolution target on the static pages
  for (const m of t.matchAll(/data-full\s*=\s*["']([^"']+)["']/g)) {
    if (!fs.existsSync(path.join(ROOT, m[1]))) err(`${p} data-full -> ${m[1]}`);
    else if (!m[1].startsWith('content/'))
      err(`${p} data-full should point at the full tier, got ${m[1]}`);
  }

  // every srcset candidate must exist, or that tier breaks only on some devices
  for (const m of t.matchAll(/srcset\s*=\s*["']([^"']+)["']/g)) {
    for (const cand of m[1].split(',')) {
      const u = cand.trim().split(/\s+/)[0];
      if (!u || u.includes('${')) continue;
      if (!fs.existsSync(path.join(ROOT, u))) err(`${p} srcset -> ${u}`);
    }
  }

  for (const m of t.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/g)) {
    const raw = m[1];
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/.test(raw)) continue;
    if (raw.includes('${')) continue;                       // template literal
    const clean = decodeURIComponent(raw.split('#')[0].split('?')[0]);
    if (!clean) continue;
    if (!fs.existsSync(path.join(ROOT, clean))) err(`${p} -> ${raw}`);
    clean.endsWith('.html') ? pageLinks++ : pageRefs++;
  }

  // string-literal asset paths inside inline <script>
  for (const m of t.matchAll(/["'`](content\/[^"'`\s]+\.(?:png|jpe?g|webp|gif|mp4|svg))["'`]/g))
    if (!fs.existsSync(path.join(ROOT, m[1]))) err(`${p} (inline) -> ${m[1]}`);
}
console.log(`inline asset refs: ${pageRefs}   inline page links: ${pageLinks}`);

/* ---- 3. no stale paths left behind ---- */
const scan = [...PAGES.map(p => path.join(ROOT, p)),
              ...fs.readdirSync(path.join(ROOT, 'assets/js')).map(f => path.join(ROOT, 'assets/js', f))];
for (const f of scan) {
  const t = fs.readFileSync(f, 'utf8');
  for (const bad of [/(?:\.\.\/)?shared\//, /(?:\.\.\/)?media\//, /\b01-index\.html/, /\b02-collaborations\.html/])
    if (bad.test(t)) err(`stale path ${bad} in ${path.relative(ROOT, f)}`);
}

/* ---- 4. every file on disk under content/ is reachable, and vice versa ---- */
const onDisk = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const fp = path.join(d, e.name);
    e.isDirectory() ? walk(fp) : onDisk.push(path.relative(ROOT, fp).split(path.sep).join('/'));
  }
})(path.join(ROOT, 'content'));

const allRefs = new Set(dataRefs);
for (const p of PAGES) {
  const t = fs.readFileSync(path.join(ROOT, p), 'utf8');
  for (const m of t.matchAll(/content\/[^"'`)\s>]+/g)) allRefs.add(m[1] || m[0]);
}
const orphans = onDisk.filter(f => !allRefs.has(f));
console.log(`files under content/: ${onDisk.length}   never referenced: ${orphans.length}`);
orphans.forEach(o => console.log('       orphan (kept): ' + o));

/* ---- 4b. every tier mirrors content/ exactly ----
   responsive.js maps one stored path to all three trees by swapping only the
   top-level folder, so a file missing from a tier becomes a broken image on
   whichever device picks that tier — invisible on the machine you test from. */
const TIERS = ['content-sm', 'content-xs'];
for (const tier of TIERS) {
  const dir = path.join(ROOT, tier);
  if (!fs.existsSync(dir)) { err(`tier ${tier}/ does not exist — run tools/optimize-media.js --apply`); continue; }
  const tierFiles = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, e.name);
      e.isDirectory() ? walk(fp) : tierFiles.push(path.relative(dir, fp).split(path.sep).join('/'));
    }
  })(dir);
  // Video/SVG deliberately live only in content/ — they have no smaller variants
  // and are never referenced through a tier prefix, so exclude them from parity.
  const base = onDisk
    .filter(f => !/\.(mp4|webm|mov|svg)$/i.test(f))
    .map(f => f.replace(/^content\//, ''));
  const missingInTier = base.filter(f => !tierFiles.includes(f));
  const extraInTier = tierFiles.filter(f => !base.includes(f));
  console.log(`tier ${tier}: ${tierFiles.length} files, missing ${missingInTier.length}, extra ${extraInTier.length}`);
  missingInTier.slice(0, 10).forEach(f => err(`${tier}/ missing ${f}`));
  extraInTier.slice(0, 10).forEach(f => err(`${tier}/ has orphan ${f}`));
}

/* ---- 4c. the "next project" chain ----
   Two failures here are invisible until you click: a next-link that points at
   project.html?p=NN for a project owning a dedicated page renders it through
   the generic template with no content, and a hardcoded link silently sends
   every visitor to the same wrong project. */
require(path.join(ROOT, 'assets/js/nav.js'));
if (typeof global.nextProject !== 'function') {
  err('assets/js/nav.js did not define nextProject');
} else {
  const projects = global.PORTFOLIO.projects;
  for (const p of projects) {
    const nx = global.nextProject(p.n);
    if (!nx) { err(`no next project resolved for ${p.n} ${p.title}`); continue; }

    // the target page must exist on disk
    const file = nx.href.split('?')[0].split('#')[0];
    if (!fs.existsSync(path.join(ROOT, file))) err(`${p.n} next -> missing page ${file}`);

    // a project with its own page must be linked to that page, not the template
    const target = projects.find(x => x.n === nx.n);
    if (target && target.href && nx.href !== target.href)
      err(`${p.n} next -> ${nx.href}, but ${nx.n} owns ${target.href}`);

    // next must stay inside the current project's track
    const sameTrack = (a, b) => (a.track === 'team') === (b.track === 'team');
    if (target && !sameTrack(p, target))
      err(`${p.n} (${p.track || 'solo'}) next -> ${nx.n} (${target.track || 'solo'}) crosses tracks`);
  }

  // Following next repeatedly must reproduce the order the index page lists,
  // exactly. Team Works sorts by year while the array is authored in another
  // order, so a chain built from the raw array silently pointed at a project
  // nowhere near the one below it in the list.
  for (const track of ['solo', 'team']) {
    const pool = global.projectsInTrack(track);
    if (!pool.length) continue;
    const listed = pool.map(p => p.n);
    const walked = [];
    let n = listed[0];
    for (let i = 0; i < pool.length; i++) { walked.push(n); n = global.nextProject(n).n; }
    if (n !== listed[0]) err(`${track} next-chain does not return to its start (ended at ${n})`);
    if (walked.join(',') !== listed.join(','))
      err(`${track} next-chain order does not match the index page\n        listed: ${listed.join(' ')}\n        walked: ${walked.join(' ')}`);
    else console.log(`next-chain ${track}: ${pool.length} projects, matches index order, closed loop`);
  }
}

/* ---- 4d. the index pages must not re-order projects themselves ----
   The Team Works sort used to live inside collaborations.html, where the
   next-link logic could not see it. Both index pages now take their order
   from nav.js; a local filter/sort here would silently reintroduce the drift. */
for (const p of ['index.html', 'collaborations.html']) {
  const t = fs.readFileSync(path.join(ROOT, p), 'utf8');
  if (!/const PROJECTS\s*=\s*window\.projectsInTrack\(/.test(t))
    err(`${p} builds its project list itself instead of using window.projectsInTrack()`);
  if (!/<script src="assets\/js\/nav\.js"><\/script>/.test(t))
    err(`${p} uses projectsInTrack but never loads assets/js/nav.js`);

  // The row number must be the position in the list, not the project's global
  // id. p.n is unique across both tracks, so rendering it made the Projects
  // list read 01…14 then jump to 22, and disagree with the "15 / 15" shown on
  // that project's own page.
  if (/<span class="row__n">\$\{p\.n\}<\/span>/.test(t))
    err(`${p} shows the global project id as the row number instead of its position`);
}

/* ---- 5. names that break on a case-sensitive host ---- */
for (const f of onDisk) {
  const base = f.split('/').pop();
  if (/[A-Z]/.test(base)) console.log('       WARN uppercase in name: ' + f);
  if (/[^\w.\-/]/.test(base)) err(`unsafe character in published filename: ${f}`);
}

console.log(errors ? `\n${errors} PROBLEM(S)` : '\nOK — every reference and link resolves.');
process.exit(errors ? 1 : 0);
