/* Direction-switcher — retired. Only the INDEX direction remains, so this is
   now a no-op. Kept as a stub so existing mountSwitcher() calls don't error. */
window.mountSwitcher = function () { return; };

/* eslint-disable no-unreachable */
window.mountSwitcher.__legacy = function (current) {
  const dirs = [
    { key: "index",     n: "01", label: "INDEX",    href: "index.html" },
  ];
  // every page now lives at the site root, so paths need no adjustment
  const fix = (h) => h;

  const el = document.createElement("nav");
  el.className = "dir-switch";
  el.innerHTML = `
    <a class="dir-switch__home" href="${fix("index.html")}" title="Back to overview">◄ ALL</a>
    <span class="dir-switch__sep"></span>
    ${dirs.map(d => `
      <a class="dir-switch__item ${d.key === current ? "is-active" : ""}" href="${fix(d.href)}">
        <em>${d.n}</em>${d.label}
      </a>`).join("")}
  `;
  const css = document.createElement("style");
  css.textContent = `
    .dir-switch{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);
      z-index:9999;display:flex;align-items:center;gap:4px;padding:6px;
      font-family:var(--mono,monospace);font-size:11px;letter-spacing:.08em;
      background:color-mix(in oklch, var(--switch-bg,#0a0a0a) 78%, transparent);
      backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
      border:1px solid var(--switch-bd,rgba(255,255,255,.16));border-radius:100px;
      box-shadow:0 10px 40px rgba(0,0,0,.4);}
    .dir-switch__home{color:var(--switch-mut,rgba(255,255,255,.5));text-decoration:none;
      padding:8px 12px;border-radius:100px;transition:color .2s;}
    .dir-switch__home:hover{color:var(--switch-fg,#fff);}
    .dir-switch__sep{width:1px;height:18px;background:var(--switch-bd,rgba(255,255,255,.16));}
    .dir-switch__item{display:flex;align-items:center;gap:7px;text-decoration:none;
      color:var(--switch-mut,rgba(255,255,255,.55));padding:8px 14px;border-radius:100px;
      transition:color .2s,background .2s;white-space:nowrap;}
    .dir-switch__item em{font-style:normal;opacity:.5;}
    .dir-switch__item:hover{color:var(--switch-fg,#fff);}
    .dir-switch__item.is-active{background:var(--switch-fg,#fff);color:var(--switch-bg,#0a0a0a);}
    .dir-switch__item.is-active em{opacity:.55;}
    @media (max-width:560px){.dir-switch__item em{display:none;}}
  `;
  document.head.appendChild(css);
  document.body.appendChild(el);
};
