# Architecture Portfolio — Albert Sumin

Static site. No build step, no dependencies. Every page is plain HTML with inline CSS;
all content lives in one data file.

## Run it locally

```bash
python -m http.server 8080
```

Then open <http://localhost:8080>. Opening `index.html` directly via `file://` will
**not** work — the pages load `assets/js/*.js`, which browsers block on `file://`.

## Structure

```
index.html              Home — "Projects" index (solo work)
collaborations.html     "Team Works" index
project.html            Renders any project: project.html?p=NN
about.html              Profile
contact.html            Contact details
wavy-square.html        Project 03 — has its own page (interactive canvas)
urban3d.html            Project 04 — has its own page

assets/css/
  mobile.css            ALL phone/tablet rules, for every page  ← mobile lives here
assets/js/
  content.js            ALL project data + text + image lists  ← main content file
  about-data.js         About-page chapters and Contact details
  responsive.js         Picks the right image tier per device
  wavy-square.js        Interactive canvas for wavy-square.html
  switcher.js           Retired no-op stub, kept so old calls don't error

content/                Media, mirrored against the pages that use it (≤2000px)
  about/                → about.html
  projects/NN-slug/     → project.html?p=NN
content-sm/             Same tree at ≤900px  — phones and tablets
content-xs/             Same tree at ≤400px  — index thumbnails

tools/
  migrate.js            One-shot reorganiser used to build this layout (historic)
  optimize-media.js     Regenerates the three image tiers from the master
  verify.js             Integrity check — run after editing content
  check-mobile.js       Confirms every page is wired for mobile
  package.json          sharp, used only by optimize-media.js

_source/                Preserved originals. NOT published (see .gitignore)
  uploads/              609 raw files: PDFs, DOCX, CV, camera originals, .pde sketches
  content-full/         Full-resolution master of every site image (2.96 GB)
  original-export/      The 21 HTML/JS files exactly as exported, before any edits
  legacy-pages/         11 superseded standalone pages, kept for reference
```

The three `content*` trees hold the **same filenames in the same folders** — only
the top-level name differs. That is what lets one path in `content.js` serve all
three: `responsive.js` swaps the prefix to build a `srcset`, and the browser picks
a tier from the viewport and pixel density.

## Finding and replacing content

Media folder names carry the project number, so they match the page URL directly:

| Page | Media folder |
|---|---|
| `project.html?p=01` | `content/projects/01-science-city/` |
| `project.html?p=02` | `content/projects/02-dadonghai-sanya/` |
| `wavy-square.html` (p=03) | `content/projects/03-wavy-square/` |
| `urban3d.html` (p=04) | `content/projects/04-urban3d/` |
| `project.html?p=05` | `content/projects/05-woven-tower/` |
| `project.html?p=06` | `content/projects/06-ice-threshold/` |
| `project.html?p=07` | `content/projects/07-lora-models/` *(4 subfolders, one per model)* |
| `project.html?p=08` | `content/projects/08-grid-city/` |
| `project.html?p=09` | `content/projects/09-ski-resort/` |
| `project.html?p=10` | `content/projects/10-puppetry/` |
| `project.html?p=11` | `content/projects/11-northern-lights/` |
| `project.html?p=12` | `content/projects/12-bim-office/` |
| `project.html?p=13` | `content/projects/13-office-building/` |
| `project.html?p=14` | `content/projects/14-dormitory/` |
| `project.html?p=15` | `content/projects/15-copenhagen-library/` |
| `project.html?p=16` | `content/projects/16-lakhta-center/` |
| `project.html?p=17` | `content/projects/17-tartu-cultural-center/` |
| `project.html?p=18` | `content/projects/18-dubai-airport/` |
| `project.html?p=19` | `content/projects/19-sca-arena/` |
| `project.html?p=20` | `content/projects/20-ipai/` |
| `project.html?p=21` | `content/projects/21-stuttgart-office/` |
| `project.html?p=22` | `content/projects/22-three-piers/` |
| `about.html` | `content/about/` |

**To swap an image:** drop the new full-resolution file into
`_source/content-full/<same path and filename>`, then run:

```bash
node tools/optimize-media.js --apply
```

That regenerates all three tiers. Editing `content/` directly also works for a
quick local look, but the next optimizer run rebuilds it from the master and your
edit is lost — the master is the source of truth.

**To add or remove an image:** edit that project's entry in `assets/js/content.js`
(paths are always written in the `content/...` form), then run the check below.

## Mobile

There is no separate mobile site. Every page adapts by screen width, so a phone
gets the phone layout instantly with no redirect, and it also covers tablets and
rotation. All the rules live in one file, `assets/css/mobile.css`, which each page
loads *after* its inline `<style>` so it can override it.

What it changes on phones:

- **Navigation.** The pages originally hid their whole nav below 680px — the
  homepage was left showing nothing but a clock. The header now becomes two rows
  and keeps all four links.
- **Project imagery.** The three preview thumbnails were hidden below 780px,
  leaving an architecture portfolio with no architecture. They now sit under each
  title as a full-width three-up strip.
- **Headline.** Scaled so "COMPUTATIONAL" fits a 320px screen instead of clipping.
- **Touch.** Hover-only styling is neutralised, so a tapped row does not stay
  stuck in its hover state.
- **wavy-square's canvas** no longer traps scrolling. Its `touch-action: none`
  plus near-fullscreen height meant a swipe on the stage scrolled nothing; it is
  now `pan-y` and shorter, so the page scrolls while the simulation keeps
  horizontal gestures.

Check it with:

```bash
node tools/check-mobile.js
```

### Tuning which image a phone downloads

Each `<img>` declares a `sizes` hint saying how wide it renders; the browser
combines that with the device pixel ratio to choose a tier. A 3x phone showing a
full-width image asks for ~1170px, so it takes the 2000px tier rather than the
900px one — sharper, but a larger download. If you would rather cap phones at the
900px tier, lower the mobile part of the hint (for example `(max-width:780px) 60vw`)
in the `imgAttrs(...)` calls. Getting this hint wrong only costs bandwidth; it can
never break an image.

## Check integrity after editing

```bash
node tools/verify.js
```

It confirms every image, video and internal link resolves to a real file, and warns
about filenames that would break on a case-sensitive host. It should print
`OK — every reference and link resolves.`

## Publishing to GitHub Pages

Published from <https://github.com/aliksumin/MyProjectsWebsite>, branch `main`,
folder `/ (root)`. Live at <https://aliksumin.github.io/MyProjectsWebsite/>.

`.nojekyll` is present, so Jekyll will not strip anything. `_source/` is excluded by
`.gitignore` — the raw uploads are ~3.3 GB and must not enter the repo, and they
contain personal documents (CV, interview notes) that should not be public.

### Enabling Pages (one time)

Repository → **Settings** → **Pages** → Source: *Deploy from a branch* →
Branch: `main`, folder `/ (root)` → **Save**. The first build takes a few minutes.

### Publishing later changes

```bash
node tools/verify.js        # must print OK before pushing
git add -A
git commit -m "…"
git push
```

Anything under `_source/` stays local by design; if you replace an image there,
re-run `node tools/optimize-media.js --apply` so the published tiers pick it up.

### Size

The full-resolution set was 2.96 GB, which would not have deployed — GitHub Pages
has a 1 GB soft limit on the published site and a 100 GB/month bandwidth cap.
After `tools/optimize-media.js`:

| tree | files | size |
|---|---:|---:|
| `content/` (≤2000px) | 552 | 530.6 MB |
| `content-sm/` (≤900px) | 549 | 86.9 MB |
| `content-xs/` (≤400px) | 549 | 20.2 MB |
| HTML + assets | — | 1.5 MB |
| **published total** | | **639 MB** |
| `_source/` (not published) | | 6.11 GB |

The small tiers hold 549 rather than 552 files: the three `.mp4` clips exist only
in `content/`, since nothing resizes them and pages reference video only through
that path. `tools/verify.js` excludes video from its tier-parity check for the
same reason.

That is a 74% reduction, and pages only fetch the tier a device needs — the
homepage's 45 thumbnails come from `content-xs/`, so it loads a few hundred KB
rather than tens of MB.

If you want more headroom, lowering the `content/` tier from 2000px to 1600px in
`TIERS` at the top of `tools/optimize-media.js` and re-running would cut roughly
another third, at no visible cost on anything but a large retina display.

## Where the untouched source lives

This folder is not under version control, so `_source/original-export/` holds the
17 HTML and 4 JS files exactly as they came out of the design project, before any
path rewriting, `srcset`, mobile CSS or the email fix. Diff against it to see
precisely what changed:

```bash
diff _source/original-export/directions/01-index.html index.html
```

The upstream project at claude.ai/design remains the ultimate backup — nothing
here was deleted there.

## Known notes

- Six images in `content/` are not referenced by any page. They were unreferenced in
  the original export too; they have been kept, not deleted. `tools/verify.js` lists them.
- `_source/legacy-pages/` holds older standalone copies of `project.html`. Nothing links
  to them. They read project data from `assets/js/content.js`, whose paths are relative
  to the site root, so their images only resolve if the file is moved back to the root.
