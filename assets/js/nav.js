/* ============================================================================
   nav.js — the "next project" rule, defined once.

   Two things make this easy to get wrong, and both had gone wrong:

   1. Projects are numbered globally (01…22) but browsed within their track:
      the Projects index lists solo work, Team Works lists the rest. "Next"
      therefore steps through the current project's track and wraps inside it,
      not through the global list.

   2. Most projects render through `project.html?p=NN`, but a few own a
      dedicated page and declare it as `href` in content.js (Wavy Square,
      Urban 3D Analysis). A link built as `project.html?p=` + n ignores that
      and sends the visitor to a generic render of a project that has no
      generic content — which is why Wavy Square arrived with nothing but
      "[ image to come ]" placeholders when reached from Dadonghai, yet looked
      correct when opened directly.

   Returning the resolved href here keeps both rules in one place; the three
   pages that show a "next project" link just consume it.
   ========================================================================== */
(function () {
  // Last 4-digit year in a string like "2015—2020", so ranges sort by their end.
  function endYear(p) {
    var m = String(p.year || '').match(/\d{4}(?!.*\d{4})/);
    return m ? parseInt(m[0], 10) : 0;
  }

  /* The order a track is listed in, and therefore the order "next" must follow.
     Team Works sorts newest first; the Projects index keeps the authored order.
     That difference used to live only inside collaborations.html, so the next
     link stepped through the raw array instead and pointed at a project that
     was nowhere near the one below it in the list. Both index pages and
     nextProject now read the order from here. */
  window.projectsInTrack = function (track) {
    var P = window.PORTFOLIO;
    if (!P || !P.projects) return [];
    var list = P.projects.filter(function (p) {
      return track === 'team' ? p.track === 'team' : p.track !== 'team';
    });
    if (track === 'team') list.sort(function (a, b) { return endYear(b) - endYear(a); });
    return list;
  };

  window.nextProject = function (currentN) {
    var P = window.PORTFOLIO;
    if (!P || !P.projects) return null;

    var cur = P.projects.filter(function (p) { return p.n === currentN; })[0];
    if (!cur) return null;

    var pool = window.projectsInTrack(cur.track === 'team' ? 'team' : 'solo');
    var i = pool.map(function (p) { return p.n; }).indexOf(currentN);
    if (i < 0) return null;

    var next = pool[(i + 1) % pool.length];
    return {
      n: next.n,
      title: next.title,
      href: next.href || ('project.html?p=' + next.n)
    };
  };
})();
