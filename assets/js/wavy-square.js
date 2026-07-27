/* ============================================================
   WAVY SQUARE — interactive wave-field engine
   ------------------------------------------------------------
   Faithful re-build of Albert Sumin's Processing sketch:
   • Each person is a travelling-wave source.
       amplitude Aᵢ = Ao / distance
       phase     Fᵢ = ω·t − k·distance
   • Surface height is the PHASOR SUM of every source:
       S = Σ Aᵢ·sin(Fᵢ)   (= Aglobal·sin(Fglobal), the original math)
   • Grid points are coloured black→cyan(0,90,130) by height,
     and displaced in z — rendered as a projected point cloud.
   • Autonomous "people" flock (boids: align / separate / cohere);
     the cursor is a live source ("your presence"); click drops a
     person; at critical mass the lighting shifts and the canopy
     releases water it collected from rain.
   ============================================================ */
(function () {
  "use strict";

  // ---- tunable model constants (from the original sketch) -------------
  const CFG = {
    plane: 600,          // world size of the square (matches Processing 600×600)
    grid: 132,           // grid resolution per side (point cloud density)
    Ao: 50,              // base wave amplitude
    w: 20,               // angular frequency (ω)
    v: 300,              // wave speed
    koef: 2,             // height divisor
    dMin: 9,             // min distance clamp (avoids singularity at source)
    color: [0, 90, 130], // cyan crest colour
    Dia: 3,              // colour mapping range
    // flocking — tuned to keep people roaming independently (no clumping)
    aliMag: 0.06, sepMag: 2.4, cohMag: 0.0,
    aliProx: 28, sepProx: 120, cohProx: 95,
    maxVel: 0.62, maxForce: 0.05, damp: 0.9,
    wanderMag: 0.07, minVel: 0.28,
    // experience
    crit: 9,             // people needed to trigger "critical mass"
    startPeople: 7,
  };
  CFG.T = 1 / CFG.w;
  CFG.L = CFG.T * CFG.v;
  CFG.k = 6.28 / CFG.L;

  // ---- small vec helpers ----------------------------------------------
  const rnd = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;

  // =====================================================================
  //  AGENT  — a person on the square (boid + wave source)
  // =====================================================================
  class Agent {
    constructor(x, y, fixed) {
      this.x = x; this.y = y;
      this.wander = Math.random() * 6.28;   // smoothly-drifting heading
      this.wanderVel = 0;                   // angular velocity (2nd-order = smooth curves)
      this.turn = rnd(0.008, 0.022);        // personal turn-rate (varies the path)
      this.wMag = CFG.wanderMag * rnd(0.7, 1.5);  // personal wander strength
      this.spd = rnd(0.78, 1.22);           // each person walks at a different pace
      this.vx = Math.cos(this.wander) * 0.3; this.vy = Math.sin(this.wander) * 0.3;
      this.ax = 0; this.ay = 0;
      this.fixed = !!fixed;     // dropped people drift slowly
      this.born = performance.now();
      this.phase = Math.random() * 6.28;
    }
    // Reynolds-style steering: accumulate a small, force-limited acceleration
    // each tick (no per-frame velocity re-normalisation — that was the jitter).
    flock(agents) {
      let ax = 0, ay = 0;
      // wander — heading turns via a smoothly-varying angular velocity, each
      // person with their own turn-rate & strength → varied, independent paths.
      this.wanderVel = this.wanderVel * 0.92 + rnd(-this.turn, this.turn);
      this.wander += this.wanderVel;
      ax += Math.cos(this.wander) * this.wMag;
      ay += Math.sin(this.wander) * this.wMag;
      // alignment
      let sx = 0, sy = 0, c = 0;
      for (const a of agents) {
        if (a === this) continue;
        const d = Math.hypot(a.x - this.x, a.y - this.y);
        if (d > 0 && d < CFG.aliProx) { sx += a.vx; sy += a.vy; c++; }
      }
      if (c) { ax += (sx / c) * CFG.aliMag; ay += (sy / c) * CFG.aliMag; }
      // separation
      sx = 0; sy = 0; c = 0;
      for (const a of agents) {
        if (a === this) continue;
        const dx = this.x - a.x, dy = this.y - a.y, d = Math.hypot(dx, dy);
        if (d > 0 && d < CFG.sepProx) { sx += (dx / d) / d; sy += (dy / d) / d; c++; }
      }
      if (c) { ax += sx * CFG.sepMag * 14; ay += sy * CFG.sepMag * 14; }
      // cohesion
      sx = 0; sy = 0; c = 0;
      for (const a of agents) {
        if (a === this) continue;
        const dx = a.x - this.x, dy = a.y - this.y, d = Math.hypot(dx, dy);
        if (d > 0 && d < CFG.cohProx) { sx += dx / d; sy += dy / d; c++; }
      }
      if (c) { ax += (sx / c) * CFG.cohMag; ay += (sy / c) * CFG.cohMag; }
      // gentle wall avoidance (smoother than a hard bounce)
      const P = CFG.plane, m = 70;
      if (this.x < m) ax += (m - this.x) / m * 0.08;
      if (this.x > P - m) ax -= (this.x - (P - m)) / m * 0.08;
      if (this.y < m) ay += (m - this.y) / m * 0.08;
      if (this.y > P - m) ay -= (this.y - (P - m)) / m * 0.08;
      // limit the steering force so direction changes are gradual
      const fmag = Math.hypot(ax, ay), maxF = CFG.maxForce * (this.fixed ? 0.7 : 1);
      if (fmag > maxF) { ax = ax / fmag * maxF; ay = ay / fmag * maxF; }
      this.ax = ax; this.ay = ay;
    }
    move() {
      // integrate with inertia (damping) and a capped speed
      this.vx = (this.vx + this.ax) * CFG.damp;
      this.vy = (this.vy + this.ay) * CFG.damp;
      let sp = Math.hypot(this.vx, this.vy);
      const maxS = CFG.maxVel * this.spd * (this.fixed ? 0.7 : 1);
      if (sp > maxS) { this.vx = this.vx / sp * maxS; this.vy = this.vy / sp * maxS; sp = maxS; }
      // keep everyone gently walking — never let a person stall in place
      const minS = CFG.minVel * (this.fixed ? 0.7 : 1);
      if (sp < minS) {
        if (sp < 1e-4) { this.vx = Math.cos(this.wander); this.vy = Math.sin(this.wander); sp = 1; }
        this.vx = this.vx / sp * minS; this.vy = this.vy / sp * minS;
      }
      this.x += this.vx; this.y += this.vy;
      const P = CFG.plane;
      if (this.x < 2) { this.x = 2; this.vx = Math.abs(this.vx) * 0.5; }
      if (this.x > P - 2) { this.x = P - 2; this.vx = -Math.abs(this.vx) * 0.5; }
      if (this.y < 2) { this.y = 2; this.vy = Math.abs(this.vy) * 0.5; }
      if (this.y > P - 2) { this.y = P - 2; this.vy = -Math.abs(this.vy) * 0.5; }
    }
  }

  // =====================================================================
  //  FIELD  — the whole interactive
  // =====================================================================
  class Field {
    constructor(canvas, opts) {
      this.cv = canvas;
      this.ctx = canvas.getContext("2d");
      this.opts = opts || {};
      this.agents = [];
      this.mouse = { x: CFG.plane / 2, y: CFG.plane / 2, on: false };
      this.t = 0;
      this.crit = 0;          // 0..1 critical-mass blend
      this.flood = 0;         // 0..1 rising-water blend
      this.drops = [];        // released-water particles
      this.dpr = 1;
      this.paused = false;

      this._buildGrid();
      this._buildCanopy();
      this._buildCity();
      for (let i = 0; i < CFG.startPeople; i++)
        this.agents.push(new Agent(rnd(120, 480), rnd(120, 480), false));

      this._bind();
      this.resize();
      this._loop = this._loop.bind(this);
      requestAnimationFrame(this._loop);
    }

    // grid of world points (z filled each frame)
    _buildGrid() {
      const N = CFG.grid, P = CFG.plane, step = P / (N - 1);
      this.N = N; this.step = step;
      this.gx = new Float32Array(N * N);
      this.gy = new Float32Array(N * N);
      this.gz = new Float32Array(N * N);
      let i = 0;
      for (let r = 0; r < N; r++)
        for (let c = 0; c < N; c++) { this.gx[i] = c * step; this.gy[i] = r * step; i++; }
    }

    // Voronoi-diagram canopy (the "cracked earth" cellular structure overhead)
    _buildCanopy() {
      const P = CFG.plane, H = 330;
      // seeds on a jittered grid → even-ish Voronoi cells like the project plan
      const seeds = [], n = 12, inset = 22, span = P - 2 * inset, cw = span / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
          seeds.push({
            x: inset + (i + 0.5) * cw + rnd(-cw * 0.34, cw * 0.34),
            y: inset + (j + 0.5) * cw + rnd(-cw * 0.34, cw * 0.34),
            z: H + rnd(-15, 15),
          });
      const box = [-4, -4, P + 4, P + 4];
      const edges = [], verts = [];
      for (const s of seeds) {
        const poly = this._voronoiCell(s, seeds, box);
        if (poly.length < 3) continue;
        for (let i = 0; i < poly.length; i++) {
          const a = poly[i], b = poly[(i + 1) % poly.length];
          edges.push([{ x: a.x, y: a.y, z: s.z }, { x: b.x, y: b.y, z: s.z }]);
          // thin strands hanging from cell vertices (the "rain")
          if (Math.random() < 0.6) {
            const len = rnd(40, H * 0.82);
            verts.push([{ x: a.x, y: a.y, z: s.z }, { x: a.x + rnd(-3, 3), y: a.y + rnd(-3, 3), z: s.z - len }]);
          }
        }
      }
      const cols = [];
      for (let i = 0; i < 6; i++) cols.push({ x: rnd(110, 490), y: rnd(110, 490) });
      this.canopy = { edges, verts, cols, H };
    }

    // Voronoi cell of `s` = bounding box clipped by every perpendicular bisector
    _voronoiCell(s, sites, box) {
      let poly = [
        { x: box[0], y: box[1] }, { x: box[2], y: box[1] },
        { x: box[2], y: box[3] }, { x: box[0], y: box[3] },
      ];
      for (const q of sites) {
        if (q === s) continue;
        const mx = (s.x + q.x) / 2, my = (s.y + q.y) / 2, nx = q.x - s.x, ny = q.y - s.y;
        poly = this._clipHalf(poly, mx, my, nx, ny);
        if (poly.length < 3) break;
      }
      return poly;
    }
    // keep the half of `poly` on `s`'s side of the bisector (Sutherland–Hodgman)
    _clipHalf(poly, mx, my, nx, ny) {
      const out = [], L = poly.length;
      const side = p => (p.x - mx) * nx + (p.y - my) * ny;
      for (let i = 0; i < L; i++) {
        const A = poly[i], B = poly[(i + 1) % L];
        const da = side(A), db = side(B);
        if (da <= 0) out.push(A);
        if ((da < 0 && db > 0) || (da > 0 && db < 0)) {
          const t = da / (da - db);
          out.push({ x: A.x + t * (B.x - A.x), y: A.y + t * (B.y - A.y) });
        }
      }
      return out;
    }

    // stylized wireframe city ringing the plaza (the Paris fabric, ref 3)
    _buildCity() {
      const P = CFG.plane, blocks = [];
      // a regular street grid (aligned to the plaza) with a building in each
      // block; the plaza is a void in the grid, so avenues run out of the square
      // between the surrounding buildings.
      const g = 120, sw = 20, out = 500;
      const k0 = Math.floor(-out / g), k1 = Math.ceil((P + out) / g);
      for (let i = k0; i <= k1; i++) {
        for (let j = k0; j <= k1; j++) {
          const cx0 = i * g, cy0 = j * g;
          // skip cells overlapping the plaza rectangle (keep the square open)
          if (cx0 < P && cx0 + g > 0 && cy0 < P && cy0 + g > 0) continue;
          if (Math.random() < 0.16) continue;                 // a few empty lots
          const bx = cx0 + sw + rnd(0, 8), by = cy0 + sw + rnd(0, 8);
          const bw = (g - 2 * sw) * rnd(0.62, 1), bd = (g - 2 * sw) * rnd(0.62, 1);
          const cx = bx + bw / 2, cy = by + bd / 2;
          const dc = Math.hypot(cx - P / 2, cy - P / 2);
          let hh = rnd(34, 82) + Math.max(0, dc - 280) * rnd(0.04, 0.13);
          if (cy < 0) hh = Math.min(hh, rnd(30, 64));          // keep foreground low
          blocks.push({ x: bx, y: by, w: bw, d: bd, h: clamp(hh, 26, 150) });
        }
      }
      // street centre-lines (grid lines); drawn as ground segments outside plaza
      const linesV = [], linesH = [];
      for (let k = k0; k <= k1; k++) { const v = k * g; if (v >= -out && v <= P + out) { linesV.push(v); linesH.push(v); } }
      this.city = blocks;
      this.streets = { linesV, linesH, lo: -out, hi: P + out };
    }

    _bind() {
      const cv = this.cv;
      const toWorld = (cx, cy) => {
        // exact inverse of the isometric projection on the ground plane (z=0)
        const P = CFG.plane, a = 0.866, b = 0.5, s = this.isoScale;
        if (!s) return null;
        const u = (cx - this.W / 2) / (a * s);   // = X - Y
        const v = (cy - this.cy0) / (b * s);     // = X + Y
        return { x: (u + v) / 2 + P / 2, y: (v - u) / 2 + P / 2 };
      };
      const onMove = (e) => {
        const r = cv.getBoundingClientRect();
        const p = (e.touches ? e.touches[0] : e);
        const w = toWorld(p.clientX - r.left, p.clientY - r.top);
        if (w) { this.mouse.x = w.x; this.mouse.y = w.y; this.mouse.on = true; }
      };
      cv.addEventListener("mousemove", onMove);
      cv.addEventListener("mouseleave", () => (this.mouse.on = false));
      // On phones the canvas can fill the whole screen, so swallowing every
      // touchmove would trap the page and make it impossible to scroll past.
      // `touch-action: pan-y` (see assets/css/mobile.css) lets the browser own
      // vertical panning — those events arrive non-cancelable, so we only
      // preventDefault on the horizontal gestures still delivered to us.
      cv.addEventListener("touchmove", (e) => {
        onMove(e);
        if (e.cancelable) e.preventDefault();
      }, { passive: false });
      cv.addEventListener("mousedown", (e) => {
        const r = cv.getBoundingClientRect();
        const w = toWorld(e.clientX - r.left, e.clientY - r.top);
        if (w) this.addPerson(w.x, w.y);
      });
      cv.addEventListener("touchstart", (e) => {
        const r = cv.getBoundingClientRect();
        const p = e.touches[0];
        const w = toWorld(p.clientX - r.left, p.clientY - r.top);
        if (w) this.addPerson(w.x, w.y);
      });
      window.addEventListener("resize", () => this.resize());
    }

    addPerson(x, y) {
      this.agents.push(new Agent(clamp(x, 20, CFG.plane - 20), clamp(y, 20, CFG.plane - 20), true));
      this._notify();
    }
    clearPeople() {
      this.agents.length = 0;
      for (let i = 0; i < 3; i++) this.agents.push(new Agent(rnd(180, 420), rnd(180, 420), false));
      this._notify();
    }
    _notify() { if (this.opts.onCount) this.opts.onCount(this.agents.length, this.agents.length >= CFG.crit); }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.dpr = dpr;
      const w = this.cv.clientWidth, h = this.cv.clientHeight;
      this.cv.width = Math.round(w * dpr);
      this.cv.height = Math.round(h * dpr);
      this.W = w; this.H = h;
      // isometric fit: scale so the plaza diamond + the canopy above it fit
      const P = CFG.plane, a = 0.866, b = 0.5;
      const canopyH = this.canopy ? this.canopy.H : 330;
      const wWorld = 2 * P * a;            // diamond width per unit scale
      const hWorld = 2 * P * b + canopyH;  // plaza height + canopy clearance above
      this.isoScale = Math.min(w / (wWorld * 1.06), h / (hWorld * 1.08));
      // vertical centre so the whole composition is balanced in the frame
      this.cy0 = h / 2 + canopyH * this.isoScale / 2;
    }

    // ---- isometric (orthographic) projection ----------------------------
    _project(x, y, z) {
      const P = CFG.plane, a = 0.866, b = 0.5, s = this.isoScale;
      const X = x - P / 2, Y = y - P / 2, Z = z;
      const sx = this.W / 2 + (X - Y) * a * s;
      const sy = this.cy0 + (X + Y) * b * s - Z * s;
      // back-to-front ordering: smaller (X+Y) is farther → larger depth
      const depth = -(X + Y) - Z * 0.4;
      return { x: sx, y: sy, f: s, depth };
    }

    _wave(x, y) {
      // S = Σ Aᵢ·sin(ω·t − k·dᵢ)   over every source (people + cursor)
      let s = 0;
      const ag = this.agents, w = CFG.w, k = CFG.k, t = this.t, Ao = CFG.Ao, dMin = CFG.dMin;
      for (let i = 0; i < ag.length; i++) {
        const dx = x - ag[i].x, dy = y - ag[i].y;
        let d = Math.sqrt(dx * dx + dy * dy); if (d < dMin) d = dMin;
        s += (Ao / d) * Math.sin(w * t - k * d + ag[i].phase);
      }
      if (this.mouse.on) {
        const dx = x - this.mouse.x, dy = y - this.mouse.y;
        let d = Math.sqrt(dx * dx + dy * dy); if (d < dMin) d = dMin;
        s += (Ao * 1.15 / d) * Math.sin(w * t - k * d);
      }
      return s;
    }

    _loop() {
      if (!this.paused) this._step();
      requestAnimationFrame(this._loop);
    }

    _step() {
      const ctx = this.ctx, dpr = this.dpr;
      // small wave-time step → ripples propagate smoothly instead of strobing
      this.t += 0.04;
      // camera: fixed (no drift) → a stable, correct perspective
      this.yaw = -0.06;
      this.pitch = 0.92;

      // critical-mass blend
      const over = this.agents.length >= CFG.crit;
      this.crit = lerp(this.crit, over ? 1 : 0, 0.03);
      this.flood = lerp(this.flood, over ? 1 : 0, 0.012);

      // flock
      for (const a of this.agents) a.flock(this.agents);
      for (const a of this.agents) a.move();

      ctx.save();
      ctx.scale(dpr, dpr);
      // background — deep night, warms slightly at critical mass
      const bg = ctx.createLinearGradient(0, 0, 0, this.H);
      const cr = this.crit;
      bg.addColorStop(0, `rgb(${2 + cr * 2},${3 + cr * 6},${6 + cr * 14})`);
      bg.addColorStop(1, `rgb(0,0,0)`);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, this.W, this.H);

      this._drawAtmosphere(ctx);
      this._drawField(ctx);     // plaza sits BEHIND the line work
      this._drawStreets(ctx);
      this._drawCity(ctx);
      this._drawCanopy(ctx);
      this._drawPeople(ctx);    // figures on top, clearly readable
      this._drawDrops(ctx);

      ctx.restore();
    }

    // soft cyan halo blooming up from the plaza
    _drawAtmosphere(ctx) {
      const c = this._project(CFG.plane / 2, CFG.plane / 2, 0);
      const rad = this.W * (0.42 + 0.12 * this.crit);
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, rad);
      const a = 0.1 + this.crit * 0.16;
      g.addColorStop(0, `rgba(40,150,210,${a})`);
      g.addColorStop(1, `rgba(10,30,60,0)`);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, this.W, this.H);
      ctx.globalCompositeOperation = "source-over";
    }

    // stylized wireframe city around the plaza (sorted far→near, depth-faded)
    // gold street grid radiating out of the plaza between the buildings
    _drawStreets(ctx) {
      const P = CFG.plane, s = this.streets, cr = this.crit;
      const seg = (ax, ay, bx, by, alpha) => {
        const a = this._project(ax, ay, 0), b = this._project(bx, by, 0);
        ctx.strokeStyle = `rgba(${236 - cr * 10},${lerp(186, 200, cr)},${lerp(96, 120, cr)},${alpha})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      };
      ctx.lineWidth = 1.4;
      // vertical avenues (constant x), drawn only outside the plaza
      for (const x of s.linesV) {
        if (x > 0 && x < P) { seg(x, s.lo, x, 0, 0.5); seg(x, P, x, s.hi, 0.5); }
        else { seg(x, s.lo, x, s.hi, 0.34); }
      }
      for (const y of s.linesH) {
        if (y > 0 && y < P) { seg(s.lo, y, 0, y, 0.5); seg(P, y, s.hi, y, 0.5); }
        else { seg(s.lo, y, s.hi, y, 0.34); }
      }
      // plaza rim — a bright gold square defining the wave-field edge
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = `rgba(245,196,104,0.7)`;
      const r = [this._project(0, 0, 0), this._project(P, 0, 0), this._project(P, P, 0), this._project(0, P, 0)];
      ctx.beginPath(); ctx.moveTo(r[0].x, r[0].y);
      for (let i = 1; i < 4; i++) ctx.lineTo(r[i].x, r[i].y);
      ctx.closePath(); ctx.stroke();
    }

    _drawCity(ctx) {
      const cr = this.crit;
      const items = this.city.map(b => {
        const cx = b.x + b.w / 2, cy = b.y + b.d / 2;
        const c = this._project(cx, cy, 0);
        return { b, depth: c.depth };
      }).sort((u, v) => v.depth - u.depth);
      ctx.lineWidth = 1;
      for (const { b, depth } of items) {
        // gold wireframe, fading with distance into the atmosphere
        const fade = clamp(1.2 - (depth - 1850) / 2300, 0.14, 0.66);
        ctx.strokeStyle = `rgba(${232 - cr * 8},${lerp(180, 198, cr)},${lerp(96, 122, cr)},${fade * 0.5})`;
        const x0 = b.x, x1 = b.x + b.w, y0 = b.y, y1 = b.y + b.d, h = b.h;
        const T = [
          this._project(x0, y0, h), this._project(x1, y0, h),
          this._project(x1, y1, h), this._project(x0, y1, h),
        ];
        const Bm = [
          this._project(x0, y0, 0), this._project(x1, y0, 0),
          this._project(x1, y1, 0), this._project(x0, y1, 0),
        ];
        ctx.beginPath();
        // top rectangle
        ctx.moveTo(T[0].x, T[0].y);
        for (let i = 1; i < 4; i++) ctx.lineTo(T[i].x, T[i].y);
        ctx.closePath();
        // verticals
        for (let i = 0; i < 4; i++) { ctx.moveTo(Bm[i].x, Bm[i].y); ctx.lineTo(T[i].x, T[i].y); }
        ctx.stroke();
      }
    }

    _drawCanopy(ctx) {
      const cyanGlow = this.crit;
      ctx.lineWidth = 1;
      // strands (rain hanging from the Voronoi cells)
      ctx.strokeStyle = `rgba(${lerp(190,150,cyanGlow)},${lerp(205,200,cyanGlow)},${lerp(220,235,cyanGlow)},0.3)`;
      ctx.beginPath();
      for (const [a, b] of this.canopy.verts) {
        const pa = this._project(a.x, a.y, a.z), pb = this._project(b.x, b.y, b.z);
        ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y);
      }
      ctx.stroke();
      // Voronoi lattice (the cracked-earth canopy)
      ctx.strokeStyle = `rgba(${lerp(220,160,cyanGlow)},${lerp(232,210,cyanGlow)},${lerp(240,245,cyanGlow)},0.5)`;
      ctx.beginPath();
      for (const [a, b] of this.canopy.edges) {
        const pa = this._project(a.x, a.y, a.z), pb = this._project(b.x, b.y, b.z);
        ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y);
      }
      ctx.stroke();
      // structural columns to ground
      ctx.strokeStyle = `rgba(200,205,210,0.10)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (const c of this.canopy.cols) {
        const top = this._project(c.x, c.y, this.canopy.H * 0.5);
        const bot = this._project(c.x, c.y, 0);
        ctx.moveTo(top.x, top.y); ctx.lineTo(bot.x, bot.y);
      }
      ctx.stroke();
    }

    _drawField(ctx) {
      const N = this.N, gx = this.gx, gy = this.gy;
      const col = CFG.color, hScale = 1.0;
      const cr = this.crit;
      // track plane bounds (for pointer→world mapping) + render points
      let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
      // point size from the iso grid spacing so the plaza reads as a dense field
      const sizeBase = (CFG.plane / (N - 1)) * this.isoScale * 1.05 + 0.4;
      // gather agent screen positions for silhouettes after field
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          const i = r * N + c;
          const x = gx[i], y = gy[i];
          const s = this._wave(x, y);
          const z = (s / CFG.koef) * hScale + this.flood * 26; // flood raises plane
          const p = this._project(x, y, z);
          if (p.x < minx) minx = p.x; if (p.x > maxx) maxx = p.x;
          if (p.y < miny) miny = p.y; if (p.y > maxy) maxy = p.y;
          // colour: black trough → cyan crest, brightened at critical mass
          const tcol = clamp((s + CFG.Dia) / (2 * CFG.Dia), 0, 1);
          const glow = tcol * tcol;
          const R = (col[0] + 6) * glow + cr * 26 * glow;
          const G = (col[1] + 24 + cr * 70) * glow;
          const B = (col[2] + 36 + cr * 80) * glow;
          // crest highlight → near white
          const hi = clamp((tcol - 0.74) / 0.26, 0, 1) * (0.55 + 0.45 * cr);
          ctx.fillStyle = `rgb(${R + hi * 190},${G + hi * 175},${B + hi * 130})`;
          ctx.fillRect(p.x, p.y, sizeBase, sizeBase);
        }
      }
      this._planeBounds = { minx, miny, maxx, maxy };
    }

    _drawPeople(ctx) {
      // figures stand on the ground plane (z=0) so they glide smoothly and never
      // bob with the ripples; sorted by depth so nearer figures draw on top.
      const list = this.agents.map(a => {
        const p = this._project(a.x, a.y, 0);
        return { a, p };
      }).sort((u, v) => v.p.depth - u.p.depth);
      // additive glow pools (bloom)
      ctx.globalCompositeOperation = "lighter";
      for (const { p } of list) {
        const h = clamp(this.isoScale * 64, 14, 92);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, h * 1.15);
        g.addColorStop(0, `rgba(110,205,255,0.55)`);
        g.addColorStop(0.5, `rgba(50,140,215,0.22)`);
        g.addColorStop(1, `rgba(30,90,170,0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, h * 1.15, 0, 6.2832); ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      // crisp white silhouettes
      for (const { p } of list) {
        const h = clamp(this.isoScale * 64, 14, 92);
        this._silhouette(ctx, p.x, p.y, h);
      }
    }

    // clean minimal white human figure, feet at (x,y)
    _silhouette(ctx, x, y, h) {
      const w = h * 0.26;
      ctx.fillStyle = "#fff";
      ctx.save();
      ctx.translate(x, y);
      // body (head + torso + legs as one tapered capsule-ish path)
      ctx.beginPath();
      const headR = w * 0.34;
      ctx.arc(0, -h + headR, headR, 0, 6.2832);     // head
      ctx.fill();
      ctx.beginPath();                                // torso+legs
      ctx.moveTo(-w * 0.34, -h + headR * 1.7);
      ctx.lineTo(w * 0.34, -h + headR * 1.7);
      ctx.lineTo(w * 0.26, -h * 0.42);
      ctx.lineTo(w * 0.30, 0);
      ctx.lineTo(w * 0.06, 0);
      ctx.lineTo(0, -h * 0.40);
      ctx.lineTo(-w * 0.06, 0);
      ctx.lineTo(-w * 0.30, 0);
      ctx.lineTo(-w * 0.26, -h * 0.42);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    _drawDrops(ctx) {
      // at critical mass the canopy releases collected rain into the square
      if (this.crit > 0.4 && Math.random() < this.crit * 0.6) {
        const n = top => Math.random() * CFG.plane;
        this.drops.push({ x: n(), y: n(), z: this.canopy.H * rnd(0.4, 0.9), vz: 0 });
      }
      ctx.strokeStyle = `rgba(150,220,255,0.5)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = this.drops.length - 1; i >= 0; i--) {
        const d = this.drops[i];
        d.vz += 0.9; d.z -= d.vz;
        const a = this._project(d.x, d.y, d.z);
        const b = this._project(d.x, d.y, d.z + d.vz * 1.6);
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        if (d.z <= 0) this.drops.splice(i, 1);
      }
      ctx.stroke();
      if (this.drops.length > 260) this.drops.splice(0, this.drops.length - 260);
    }
  }

  window.WavySquare = { Field, CFG };
})();
