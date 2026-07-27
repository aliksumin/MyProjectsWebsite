/* ============================================================================
   responsive.js — pick the right image tier per device.

   tools/optimize-media.js writes three mirrored trees with identical filenames:

     content-xs/  <= 400px    index thumbnails
     content-sm/  <= 900px    phones and tablets
     content/     <= 2000px   full view and lightbox

   Because only the top-level folder differs, one stored path (always the
   `content/...` form used throughout content.js) maps to all three.

   `imgAttrs()` returns the src/srcset/sizes attribute string for an <img>.
   The browser then chooses a tier using the viewport AND the device pixel
   ratio, so a 3x phone still gets a sharp image — just not a 19 MB one.

   Pass a `sizes` hint describing how wide the image renders. Getting it wrong
   only costs bandwidth, never correctness: the default 100vw is always safe.
   ========================================================================== */
(function () {
  var TIERS = [
    { dir: 'content-xs', w: 400 },
    { dir: 'content-sm', w: 900 },
    { dir: 'content',    w: 2000 },
  ];

  function esc(s) { return String(s).replace(/"/g, '&quot;'); }

  window.imgAttrs = function (src, sizes) {
    // Leave anything that is not one of our own assets exactly as it is —
    // YouTube thumbnails and generated data: placeholders have no tiers.
    if (!src || src.indexOf('content/') !== 0) return 'src="' + esc(src || '') + '"';

    var set = TIERS.map(function (t) {
      return esc(src.replace(/^content\//, t.dir + '/')) + ' ' + t.w + 'w';
    }).join(', ');

    return 'src="' + esc(src) + '" srcset="' + set + '" sizes="' + esc(sizes || '100vw') + '"';
  };

  // Same mapping for code that needs a single URL rather than attributes,
  // e.g. swapping the lightbox to the full tier.
  window.imgTier = function (src, tier) {
    if (!src || src.indexOf('content/') !== 0) return src;
    return tier === 'content' ? src : src.replace(/^content\//, tier + '/');
  };
})();
