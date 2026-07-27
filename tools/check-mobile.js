/*
 * check-mobile.js — static audit of the mobile adaptations.
 *   node tools/check-mobile.js
 * Confirms every page loads mobile.css and that no page still hides its
 * whole navigation on phones. Complements the in-browser checks.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

let bad = 0;
console.log('page                   mobile.css  viewport-meta  inline-nav-hide-rule');
for (const p of pages) {
  const t = fs.readFileSync(path.join(ROOT, p), 'utf8');
  const css = t.includes('assets/css/mobile.css');
  const vp = /name=["']viewport["']/.test(t);
  // the inline rules that used to strip navigation on phones
  const hide = (t.match(/\.hd__nav a[^{]*\{\s*display:\s*none/g) || []).length;
  // mobile.css must be linked AFTER the last inline <style> to win the cascade
  const order = css && t.lastIndexOf('assets/css/mobile.css') > t.lastIndexOf('</style>');
  if (!css || !vp || !order) bad++;
  console.log(
    p.padEnd(22),
    (css ? 'yes' : 'NO ').padEnd(11),
    (vp ? 'yes' : 'NO ').padEnd(14),
    hide + (order ? '  (overridden, correct order)' : '  (BAD ORDER — will not override)')
  );
}
console.log(bad ? `\n${bad} page(s) need attention` : '\nAll pages wired for mobile.');
process.exit(bad ? 1 : 0);
