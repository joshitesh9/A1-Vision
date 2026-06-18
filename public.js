/* ============================================================
   Northline Property — stylesheet
   Palette: eucalypt green + warm clay on soft paper
   Type: Bricolage Grotesque (display) + Inter (body)
   ============================================================ */

:root {
  --ink:        #18211C;   /* near-black text, green undertone */
  --eucalypt:   #25382C;   /* primary brand green            */
  --eucalypt-2: #324a3a;   /* lighter green for hovers        */
  --clay:       #BC6A3C;   /* warm accent / CTA               */
  --clay-dark:  #a4582f;
  --paper:      #F7F5EF;   /* page background                 */
  --surface:    #FFFFFF;   /* cards                           */
  --line:       #E4E0D5;   /* hairlines / borders             */
  --muted:      #6E7A6F;   /* secondary text                  */
  --sand:       #EFEADD;   /* soft fill (chips, hero base)    */
  --good:       #2f7d56;
  --shadow:     0 1px 2px rgba(24,33,28,.05), 0 12px 32px -12px rgba(24,33,28,.18);
  --radius:     14px;
  --radius-sm:  9px;
  --maxw:       1180px;
  --display: "Bricolage Grotesque", "Inter", system-ui, sans-serif;
  --body: "Inter", system-ui, -apple-system, sans-serif;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--body);
  color: var(--ink);
  background: var(--paper);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }

.wrap { width: 100%; max-width: var(--maxw); margin-inline: auto; padding-inline: 22px; }

.eyebrow {
  font-size: 12px; letter-spacing: .16em; text-transform: uppercase;
  color: var(--clay); font-weight: 600; margin: 0 0 10px;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 15px;
  padding: 12px 20px; border-radius: 999px; border: 1px solid transparent;
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
}
.btn:active { transform: translateY(1px); }
.btn-primary { background: var(--clay); color: #fff; }
.btn-primary:hover { background: var(--clay-dark); }
.btn-dark { background: var(--eucalypt); color: #fff; }
.btn-dark:hover { background: var(--eucalypt-2); }
.btn-ghost { background: transparent; border-color: var(--line); color: var(--ink); }
.btn-ghost:hover { border-color: var(--eucalypt); }
.btn-block { width: 100%; justify-content: center; }

/* ---------- Header ---------- */
.site-head {
  position: sticky; top: 0; z-index: 40;
  background: rgba(247,245,239,.85);
  backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--line);
}
.head-row { display: flex; align-items: center; justify-content: space-between; height: 70px; }
.brand { display: flex; align-items: center; gap: 11px; }
.brand-mark {
  width: 34px; height: 34px; border-radius: 9px; background: var(--eucalypt);
  display: grid; place-items: center; color: #fff; font-family: var(--display);
  font-weight: 800; font-size: 19px;
}
.brand-name { font-family: var(--display); font-weight: 700; font-size: 19px; letter-spacing: -.01em; }
.brand-name span { color: var(--clay); }

.nav { display: flex; align-items: center; gap: 4px; }
.nav a {
  padding: 8px 13px; border-radius: 999px; font-weight: 500; font-size: 15px;
  color: var(--ink); transition: background .15s ease, color .15s ease;
}
.nav a:hover, .nav a.is-active { background: var(--sand); color: var(--eucalypt); }
.nav .nav-admin { color: var(--muted); }

.menu-btn { display: none; background: none; border: 0; padding: 8px; }
.menu-btn svg { width: 26px; height: 26px; }

/* ---------- Hero ---------- */
.hero { position: relative; padding: 60px 0 30px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center; }
.hero h1 {
  font-family: var(--display); font-weight: 800; letter-spacing: -.02em;
  font-size: clamp(40px, 6vw, 68px); line-height: .98; margin: 14px 0 18px;
}
.hero h1 em { font-style: normal; color: var(--clay); }
.hero p.lede { font-size: 18px; color: var(--muted); max-width: 46ch; margin: 0 0 26px; }
.hero-stats { display: flex; gap: 30px; margin-top: 30px; }
.hero-stat .n { font-family: var(--display); font-weight: 700; font-size: 30px; line-height: 1; }
.hero-stat .l { font-size: 13px; color: var(--muted); letter-spacing: .02em; }

.hero-art {
  position: relative; border-radius: 20px; overflow: hidden; min-height: 420px;
  background: linear-gradient(150deg, var(--eucalypt) 0%, #1c2c22 60%, #14201a 100%);
  box-shadow: var(--shadow);
  display: grid; place-items: center;
}
.hero-art::after {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(circle at 78% 18%, rgba(188,106,60,.35), transparent 42%),
    repeating-linear-gradient(115deg, rgba(255,255,255,.04) 0 2px, transparent 2px 26px);
}
.hero-art-card {
  position: relative; z-index: 2; background: rgba(255,255,255,.96);
  border-radius: 14px; padding: 18px; width: min(78%, 320px);
  box-shadow: 0 24px 50px -18px rgba(0,0,0,.5);
}
.hero-art-card .ha-price { font-family: var(--display); font-weight: 700; font-size: 24px; }
.hero-art-card .ha-addr { color: var(--muted); font-size: 14px; margin: 2px 0 12px; }
.hero-art-card .specs { gap: 14px; }

/* ---------- Search / filter bar ---------- */
.searchbar {
  margin-top: 34px; background: var(--surface); border: 1px solid var(--line);
  border-radius: 16px; box-shadow: var(--shadow); padding: 10px;
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr auto; gap: 8px; align-items: end;
}
.searchbar .field { padding: 4px 8px; }
.searchbar label { display: block; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: 3px; }
.searchbar input, .searchbar select {
  width: 100%; border: 0; background: transparent; font-size: 15px; font-family: inherit;
  color: var(--ink); padding: 4px 0; outline: none;
}
.searchbar .field + .field { border-left: 1px solid var(--line); padding-left: 14px; }
.searchbar .btn { height: 46px; }

/* ---------- Section heads ---------- */
.section { padding: 56px 0; }
.section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 26px; flex-wrap: wrap; }
.section-head h2 { font-family: var(--display); font-weight: 700; font-size: clamp(26px,3.4vw,38px); letter-spacing: -.015em; margin: 0; }
.section-head p { color: var(--muted); margin: 6px 0 0; }

/* status filter tabs */
.tabs { display: inline-flex; background: var(--sand); border-radius: 999px; padding: 4px; gap: 2px; }
.tabs button {
  border: 0; background: transparent; padding: 9px 18px; border-radius: 999px;
  font-weight: 600; font-size: 14px; color: var(--muted); transition: all .15s ease;
}
.tabs button.is-active { background: var(--surface); color: var(--eucalypt); box-shadow: 0 1px 4px rgba(0,0,0,.08); }

/* ---------- Listing grid + cards ---------- */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }

.card {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
  overflow: hidden; box-shadow: var(--shadow); transition: transform .18s ease, box-shadow .18s ease;
  cursor: pointer; display: flex; flex-direction: column;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px -18px rgba(24,33,28,.32); }
.card:focus-visible { outline: 3px solid var(--clay); outline-offset: 2px; }
.card-media { position: relative; aspect-ratio: 4/3; overflow: hidden; background: var(--sand); }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.tag {
  position: absolute; top: 12px; left: 12px; z-index: 2;
  font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
  padding: 6px 11px; border-radius: 999px; color: #fff; background: var(--eucalypt);
}
.tag.rent { background: #2c5f7a; }
.tag.sold { background: var(--ink); }
.card-body { padding: 16px 17px 18px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.card-price { font-family: var(--display); font-weight: 700; font-size: 21px; }
.card-addr { font-size: 14px; }
.card-sub { font-size: 13px; color: var(--muted); }

.specs { display: flex; gap: 16px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--line); }
.spec { display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--ink); }
.spec svg { width: 18px; height: 18px; color: var(--muted); }
.spec.area { color: var(--muted); font-weight: 500; }

.empty {
  grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--muted);
  border: 1px dashed var(--line); border-radius: var(--radius); background: var(--surface);
}
.empty strong { display: block; color: var(--ink); font-family: var(--display); font-size: 18px; margin-bottom: 4px; }

/* ---------- Detail modal ---------- */
.modal-back {
  position: fixed; inset: 0; z-index: 80; background: rgba(20,28,22,.55);
  display: none; align-items: flex-start; justify-content: center; padding: 30px 18px; overflow-y: auto;
}
.modal-back.open { display: flex; }
.modal {
  background: var(--paper); width: min(960px, 100%); border-radius: 18px; overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.5); animation: pop .2s ease;
}
@keyframes pop { from { transform: translateY(12px); opacity: 0; } to { transform: none; opacity: 1; } }
.modal-gallery { position: relative; background: var(--ink); aspect-ratio: 16/9; }
.modal-gallery img { width: 100%; height: 100%; object-fit: cover; }
.modal-thumbs { display: flex; gap: 8px; padding: 10px; background: var(--ink); overflow-x: auto; }
.modal-thumbs img { width: 78px; height: 56px; object-fit: cover; border-radius: 6px; opacity: .55; cursor: pointer; flex: none; }
.modal-thumbs img.is-active { opacity: 1; outline: 2px solid var(--clay); }
.modal-x {
  position: absolute; top: 14px; right: 14px; z-index: 5; width: 40px; height: 40px;
  border-radius: 50%; border: 0; background: rgba(255,255,255,.92); font-size: 22px; line-height: 1;
}
.modal-body { padding: 26px 30px 32px; }
.modal-body h2 { font-family: var(--display); font-size: 30px; margin: 4px 0 2px; letter-spacing: -.01em; }
.modal-body .m-addr { color: var(--muted); margin-bottom: 16px; }
.modal-body .specs { border: 0; padding-top: 0; gap: 22px; }
.modal-desc { margin: 20px 0; white-space: pre-wrap; }
.feature-list { columns: 2; gap: 18px; padding: 0; margin: 14px 0 22px; list-style: none; }
.feature-list li { padding: 5px 0 5px 24px; position: relative; }
.feature-list li::before { content: "✓"; position: absolute; left: 0; color: var(--good); font-weight: 700; }
.agent-box {
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 18px;
}
.agent-box .a-name { font-weight: 700; }
.agent-box .a-meta { color: var(--muted); font-size: 14px; }
.agent-box .agent-cta { margin-left: auto; display: flex; gap: 10px; }

/* ---------- Strip / CTA ---------- */
.cta-strip { background: var(--eucalypt); color: #fff; border-radius: 22px; padding: 46px; text-align: center; }
.cta-strip h2 { font-family: var(--display); font-size: clamp(26px,3.4vw,40px); margin: 0 0 10px; }
.cta-strip p { color: rgba(255,255,255,.8); max-width: 52ch; margin: 0 auto 22px; }

/* ---------- Footer ---------- */
.site-foot { background: var(--ink); color: rgba(255,255,255,.75); margin-top: 60px; padding: 50px 0 30px; }
.foot-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 36px; }
.site-foot .brand-name { color: #fff; }
.site-foot h4 { color: #fff; font-family: var(--display); font-size: 16px; margin: 0 0 12px; }
.site-foot a:hover { color: #fff; }
.site-foot ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; font-size: 14px; }
.foot-bottom { border-top: 1px solid rgba(255,255,255,.12); margin-top: 36px; padding-top: 18px; font-size: 13px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }

/* ============================================================
   ADMIN
   ============================================================ */
.admin-shell { min-height: 100vh; }
.auth-screen { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
.auth-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 18px;
  box-shadow: var(--shadow); padding: 34px; width: min(420px, 100%);
}
.auth-card .brand { justify-content: center; margin-bottom: 18px; }
.auth-card h1 { font-family: var(--display); font-size: 24px; margin: 0 0 4px; text-align: center; }
.auth-card .sub { color: var(--muted); text-align: center; margin: 0 0 22px; font-size: 14px; }

.field-group { margin-bottom: 15px; }
.field-group label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
.input, textarea.input, select.input {
  width: 100%; padding: 11px 13px; border: 1px solid var(--line); border-radius: 10px;
  font-family: inherit; font-size: 15px; background: var(--surface); color: var(--ink); outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.input:focus, textarea.input:focus, select.input:focus { border-color: var(--eucalypt); box-shadow: 0 0 0 3px rgba(37,56,44,.12); }
textarea.input { min-height: 120px; resize: vertical; }
.hint { font-size: 12.5px; color: var(--muted); margin-top: 5px; }
.note {
  font-size: 13px; background: var(--sand); border: 1px solid var(--line); border-radius: 10px;
  padding: 11px 13px; color: var(--ink); margin-top: 14px;
}
.note b { color: var(--clay-dark); }
.error-msg { color: #b3261e; font-size: 14px; margin-top: 10px; min-height: 18px; }

/* admin top bar */
.admin-top {
  background: var(--eucalypt); color: #fff; position: sticky; top: 0; z-index: 30;
}
.admin-top .head-row { height: 64px; }
.admin-top .brand-name, .admin-top .brand-name span { color: #fff; }
.admin-top .at-actions { display: flex; align-items: center; gap: 10px; }
.admin-top .at-actions .who { font-size: 13px; color: rgba(255,255,255,.75); margin-right: 6px; }
.admin-top .btn-ghost { color: #fff; border-color: rgba(255,255,255,.3); }
.admin-top .btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,.1); }

.admin-main { padding: 30px 0 80px; }
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 22px; flex-wrap: wrap; }
.toolbar h1 { font-family: var(--display); font-size: 28px; margin: 0; }
.toolbar .tb-actions { display: flex; gap: 10px; flex-wrap: wrap; }

.admin-list { display: grid; gap: 12px; }
.row {
  display: grid; grid-template-columns: 84px 1fr auto; gap: 16px; align-items: center;
  background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 12px;
}
.row-thumb { width: 84px; height: 64px; border-radius: 8px; object-fit: cover; background: var(--sand); }
.row-main .r-title { font-weight: 700; }
.row-main .r-sub { color: var(--muted); font-size: 13px; }
.row-badge { font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; color: #fff; background: var(--eucalypt); margin-left: 8px; }
.row-badge.rent { background: #2c5f7a; }
.row-badge.sold { background: var(--ink); }
.row-actions { display: flex; gap: 8px; }
.icon-btn { border: 1px solid var(--line); background: var(--surface); border-radius: 8px; padding: 8px 12px; font-size: 13px; font-weight: 600; }
.icon-btn:hover { border-color: var(--eucalypt); }
.icon-btn.danger { color: #b3261e; }
.icon-btn.danger:hover { border-color: #b3261e; background: #fdf2f1; }

/* editor form */
.editor { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 26px; box-shadow: var(--shadow); }
.editor h2 { font-family: var(--display); margin: 0 0 18px; font-size: 22px; }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.form-grid .col-span { grid-column: 1/-1; }
.form-grid .col-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; grid-column: 1/-1; }
.form-grid .col-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; grid-column: 1/-1; }

.dropzone {
  border: 2px dashed var(--line); border-radius: 12px; padding: 22px; text-align: center;
  color: var(--muted); transition: border-color .15s ease, background .15s ease;
}
.dropzone.drag { border-color: var(--clay); background: var(--sand); }
.dropzone strong { color: var(--ink); }
.thumbs { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.thumb { position: relative; width: 96px; height: 72px; border-radius: 8px; overflow: hidden; border: 1px solid var(--line); }
.thumb img { width: 100%; height: 100%; object-fit: cover; }
.thumb .del { position: absolute; top: 3px; right: 3px; width: 22px; height: 22px; border-radius: 50%; border: 0; background: rgba(0,0,0,.65); color: #fff; font-size: 13px; line-height: 1; }
.editor-actions { display: flex; gap: 12px; margin-top: 22px; }

.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(20px);
  background: var(--ink); color: #fff; padding: 12px 20px; border-radius: 999px; font-size: 14px;
  opacity: 0; pointer-events: none; transition: all .25s ease; z-index: 100;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 30px; }
  .hero-art { min-height: 300px; }
  .searchbar { grid-template-columns: 1fr 1fr; }
  .searchbar .field + .field { border-left: 0; padding-left: 8px; }
  .searchbar .btn { grid-column: 1/-1; }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .foot-grid { grid-template-columns: 1fr 1fr; }
  .form-grid, .form-grid .col-3, .form-grid .col-4 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .nav { display: none; }
  .nav.open {
    display: flex; flex-direction: column; position: absolute; top: 70px; right: 18px;
    background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 10px;
    box-shadow: var(--shadow); align-items: stretch; min-width: 180px;
  }
  .menu-btn { display: block; }
  .grid { grid-template-columns: 1fr; }
  .feature-list { columns: 1; }
  .foot-grid { grid-template-columns: 1fr; }
  .row { grid-template-columns: 64px 1fr; }
  .row-thumb { width: 64px; height: 48px; }
  .row-actions { grid-column: 1/-1; }
  .modal-body { padding: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; scroll-behavior: auto !important; transition: none !important; }
}
