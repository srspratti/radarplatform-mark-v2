"""Radar Hub — platform assembly. One deployment serves:

  /                → Realtor engagement dashboard (apps/dashboard, live data)
  /portail/{token} → Vitrine client portal (apps/vitrine, event bridge wired)
  /ops             → embedded ops console (leads inbox, agents, writebacks)
  /api/…           → hub API (events, leads, clients, connectors, agents)
  /acheteur        → Radar Acheteur intelligence app (own DB, marketable module)

internal/matrix-centris-rpa is deliberately NOT mounted or imported — it is
Danny-internal tooling, excluded from the Docker image via .dockerignore.
Its path into the hub is indirect and ToS-clean: harvester → FUB → hub import.
"""
import sys

if sys.version_info < (3, 10):  # bare `uvicorn` often resolves to Anaconda base 3.9
    raise SystemExit(
        f"\nRadar Hub requiert Python 3.10+ (déploiement: 3.12) — vous êtes sur "
        f"{sys.version.split()[0]}.\n"
        "Lancer plutôt :\n"
        "  conda activate radar-platform-mark-v2\n"
        "  uvicorn radar_hub.main:app --reload\n"
        "ou simplement :  ./run_dev.sh\n")

import re
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import (FileResponse, HTMLResponse, JSONResponse,
                               RedirectResponse, Response)
from fastapi.staticfiles import StaticFiles
from .models import init_db
from .api import router
from .dashboard import DASHBOARD_HTML
from . import __version__

REPO_ROOT = Path(__file__).resolve().parents[1]
DASH_DIST = REPO_ROOT / "apps" / "dashboard" / "dist"
VITRINE_DIST = REPO_ROOT / "apps" / "vitrine" / "dist"
PWA_DIR = Path(__file__).resolve().parent / "static" / "pwa"


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    try:  # Radar Acheteur keeps its own sqlite — make sure its schema exists
        from radar_acheteur import db as ach_db
        from radar_acheteur.config import cfg as ach_cfg
        ach_db.init(ach_cfg.db_path)
    except Exception:  # noqa: BLE001
        pass
    yield


app = FastAPI(title="Radar Hub", version=__version__, lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"],
                   allow_headers=["*"])
app.include_router(router)

if DASH_DIST.exists():
    app.mount("/static/dashboard", StaticFiles(directory=DASH_DIST),
              name="dash-static")
if VITRINE_DIST.exists():
    app.mount("/static/vitrine", StaticFiles(directory=VITRINE_DIST),
              name="vitrine-static")
if PWA_DIR.exists():
    app.mount("/static/pwa", StaticFiles(directory=PWA_DIR), name="pwa-static")


# --- PWA: installable on iOS ("Sur l'écran d'accueil") and Android ----------
_MANIFEST = {
    "name": "Radar Hub — Plateforme courtier",
    "short_name": "RadarHub",
    "description": "Leads, clients Centris, agents et analytique du courtier.",
    "start_url": "/ops",
    "scope": "/",
    "display": "standalone",
    "background_color": "#06171c",
    "theme_color": "#06171c",
    "icons": [
        {"src": "/static/pwa/icon-192.png", "sizes": "192x192",
         "type": "image/png", "purpose": "any"},
        {"src": "/static/pwa/icon-512.png", "sizes": "512x512",
         "type": "image/png", "purpose": "any"},
        {"src": "/static/pwa/icon-512-maskable.png", "sizes": "512x512",
         "type": "image/png", "purpose": "maskable"},
    ],
}

# Minimal SW: a fetch handler is required for Android install prompts.
# Network-first passthrough — no caching, so the console is never stale.
_SW_JS = """self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
"""


@app.get("/manifest.webmanifest", include_in_schema=False)
def pwa_manifest():
    return JSONResponse(_MANIFEST, media_type="application/manifest+json")


@app.get("/portail-manifest.webmanifest", include_in_schema=False)
def portal_manifest(t: str = ""):
    """Client-portal manifest (portal_pwa) — start_url carries the client's
    own token so 'Add to Home Screen' reopens THEIR portal."""
    safe = "".join(ch for ch in t if ch.isalnum() or ch in "-_")[:64]
    return JSONResponse({
        **_MANIFEST,
        "name": "Vitrine — votre portail immobilier",
        "short_name": "Vitrine",
        "description": "Vos inscriptions, visites 3D et alertes personnelles.",
        "start_url": f"/portail/{safe}" if safe else "/portail",
        "background_color": "#F6F8FA",
        "theme_color": "#1656B4",
    }, media_type="application/manifest+json")


@app.get("/sw.js", include_in_schema=False)
def service_worker():
    return Response(_SW_JS, media_type="application/javascript")

# Radar Acheteur — marketable buyer-intel module, mounted with its own DB/API.
try:
    from radar_acheteur.api import app as acheteur_app
    app.mount("/acheteur", acheteur_app)
    ACHETEUR_MOUNTED = True
except Exception:  # noqa: BLE001 — hub must boot even without the subpackage
    ACHETEUR_MOUNTED = False


@app.get("/", response_class=HTMLResponse, include_in_schema=False)
def realtor_dashboard():
    index = DASH_DIST / "index.html"
    if index.exists():
        return FileResponse(index)
    return HTMLResponse(DASHBOARD_HTML)  # fallback if dist not built


_PORTAL_LANDING = """<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Vitrine — accès</title></head>
<body style="margin:0;background:#F6F8FA;font-family:system-ui;color:#111B2E;
display:grid;place-items:center;min-height:100vh">
<div style="max-width:420px;padding:32px;background:#fff;border:1px solid #DCE2EA;
border-radius:16px">
<div style="font-weight:800;font-size:22px">Vitrine</div>
<p style="color:#5A6577;font-size:14px;line-height:1.5">Portail privé de vos
inscriptions. L'accès se fait par le lien personnel fourni par votre
courtier·ère — <code>/portail/&lt;votre-jeton&gt;</code>.</p>
<form onsubmit="location.href='/portail/'+document.getElementById('t').value.trim();return false">
<input id="t" placeholder="Coller votre jeton" style="width:100%;padding:10px;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px"/>
<button style="margin-top:10px;width:100%;padding:11px;border:0;border-radius:10px;
background:#1656B4;color:#fff;font-weight:700;font-size:14px">Ouvrir mon portail</button>
</form>
<p style="color:#5A6577;font-size:12px">Courtier·ère: chaque client a un bouton
« Portail » dans le tableau de bord et la console /ops.
<a href="/portail/demo?demo=1">Voir la démo</a>.</p>
</div></body></html>"""


@app.get("/portail", response_class=HTMLResponse, include_in_schema=False)
@app.get("/portail/{token}", response_class=HTMLResponse, include_in_schema=False)
def vitrine_portal(token: str = "", demo: str = ""):
    if not token and not demo:
        return HTMLResponse(_PORTAL_LANDING)
    index = VITRINE_DIST / "index.html"
    if index.exists():
        return FileResponse(index)
    return HTMLResponse("<h1>Vitrine non compilée — lancer build_frontend.sh</h1>",
                        status_code=503)


_OPEN_HOUSE_PAGE = """<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Porte ouverte — inscription</title></head>
<body style="margin:0;background:#F6F8FA;font-family:system-ui;color:#111B2E;
display:grid;place-items:center;min-height:100vh;padding:16px;box-sizing:border-box">
<form id="f" style="max-width:420px;width:100%;padding:28px;background:#fff;
border:1px solid #DCE2EA;border-radius:16px;position:relative">
<button type="button" id="lang" style="position:absolute;top:14px;right:14px;
border:1px solid #DCE2EA;background:#fff;border-radius:99px;padding:5px 10px;
font-size:12px;font-weight:700;color:#111B2E;cursor:pointer">🌐 FR</button>
<div id="t_hi" style="font-weight:800;font-size:22px"></div>
<p id="t_intro" style="color:#5A6577;font-size:14px;line-height:1.5"></p>
<input id="n" required style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin-bottom:8px"/>
<input id="p" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin-bottom:8px"/>
<input id="e" type="email" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin-bottom:10px"/>
<label style="display:flex;gap:8px;align-items:flex-start;font-size:12px;color:#5A6577;line-height:1.4">
<input id="c" type="checkbox" style="margin-top:2px"/><span id="t_consent"></span></label>
<button id="t_btn" style="margin-top:12px;width:100%;padding:12px;border:0;border-radius:10px;
background:#1656B4;color:#fff;font-weight:700;font-size:14px"></button>
<div id="ok" style="display:none;text-align:center;padding:12px 0 0;color:#2F7D5C;
font-weight:700"></div>
</form>
<script>
const I18N = {
  fr: { hi:"Bienvenue ! 👋",
        intro:"Merci de votre visite — laissez vos coordonnées pour recevoir la fiche complète et les mises à jour de cette propriété (réf. __REF__).",
        name:"Votre nom", phone:"Téléphone", email:"Courriel",
        consent:"J'accepte de recevoir des communications au sujet de cette propriété et d'inscriptions similaires (désabonnement en tout temps — LCAP/Loi 25).",
        btn:"M'inscrire", ok:"Merci ! Bonne visite. ✅", flag:"🌐 FR" },
  en: { hi:"Welcome! 👋",
        intro:"Thanks for visiting — leave your details to receive the full listing sheet and updates about this property (ref. __REF__).",
        name:"Your name", phone:"Phone", email:"Email",
        consent:"I agree to receive communications about this property and similar listings (unsubscribe anytime — CASL/Law 25).",
        btn:"Sign me up", ok:"Thank you! Enjoy the visit. ✅", flag:"🌐 EN" },
};
let lang = localStorage.getItem("radar_lang") || "fr";
function apply() {
  const d = I18N[lang];
  document.documentElement.lang = lang;
  t_hi.textContent = d.hi; t_intro.textContent = d.intro;
  n.placeholder = d.name; p.placeholder = d.phone; e.placeholder = d.email;
  t_consent.textContent = d.consent; t_btn.textContent = d.btn;
  ok.textContent = d.ok; document.getElementById("lang").textContent = d.flag;
}
document.getElementById("lang").onclick = () => {
  lang = lang === "fr" ? "en" : "fr";
  localStorage.setItem("radar_lang", lang); apply();
};
apply();
document.getElementById("f").onsubmit = async (ev) => {
  ev.preventDefault();
  const b = { name: n.value.trim(), phone: p.value.trim(),
              email: e.value.trim(), consent: c.checked,
              language: lang };
  if (!b.name) return;
  const r = await fetch("/api/openhouse/__REF__", { method: "POST",
    headers: {"Content-Type": "application/json"}, body: JSON.stringify(b) });
  if (r.ok) { ok.style.display = "block";
              ev.target.querySelector("#t_btn").disabled = true; }
};
</script></body></html>"""


@app.get("/oh/{ref}", response_class=HTMLResponse, include_in_schema=False)
def open_house_form(ref: str):
    safe = "".join(ch for ch in ref if ch.isalnum() or ch in "-_")[:40]
    return HTMLResponse(_OPEN_HOUSE_PAGE.replace("__REF__", safe or "visite"))


_QUALIFICATION_PAGE = """<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Préparer votre rappel</title></head>
<body style="margin:0;background:#F6F8FA;font-family:system-ui;color:#111B2E;
display:grid;place-items:center;min-height:100vh;padding:16px;box-sizing:border-box">
<form id="f" style="max-width:440px;width:100%;padding:28px;background:#fff;
border:1px solid #DCE2EA;border-radius:16px;position:relative">
<button type="button" id="lang" style="position:absolute;top:14px;right:14px;
border:1px solid #DCE2EA;background:#fff;border-radius:99px;padding:5px 10px;
font-size:12px;font-weight:700;color:#111B2E;cursor:pointer">🌐 FR</button>
<div id="t_hi" style="font-weight:800;font-size:22px"></div>
<p id="t_intro" style="color:#5A6577;font-size:14px;line-height:1.5"></p>
<label id="l_budget" style="font-size:12px;color:#5A6577"></label>
<input id="budget" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin:2px 0 10px"/>
<label id="l_tl" style="font-size:12px;color:#5A6577"></label>
<select id="tl" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin:2px 0 10px;
background:#fff"></select>
<label id="l_areas" style="font-size:12px;color:#5A6577"></label>
<input id="areas" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;margin:2px 0 10px"/>
<label style="display:flex;gap:8px;align-items:flex-start;font-size:13px;
color:#111B2E;margin-bottom:10px">
<input id="pq" type="checkbox" style="margin-top:2px"/><span id="t_pq"></span></label>
<textarea id="msg" rows="3" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;resize:vertical"></textarea>
<button id="t_btn" style="margin-top:12px;width:100%;padding:12px;border:0;
border-radius:10px;background:#1656B4;color:#fff;font-weight:700;font-size:14px"></button>
<div id="ok" style="display:none;text-align:center;padding:12px 0 0;color:#2F7D5C;
font-weight:700"></div>
<p id="t_legal" style="color:#5A6577;font-size:11px;line-height:1.4;margin:12px 0 0"></p>
</form>
<script>
const I18N = {
  fr: { hi:"Préparons votre rappel 📞",
        intro:"30 secondes — vos réponses aident votre courtier à préparer un rappel utile.",
        budget:"Budget approximatif", tlLabel:"Horizon d'achat",
        tl:["Dès que possible","0–3 mois","3–6 mois","6–12 mois","J'explore"],
        areas:"Secteurs recherchés (ex: Rosemont, Longueuil)",
        pq:"Je suis préapprouvé·e pour un prêt hypothécaire",
        msg:"Autre chose à mentionner ? (optionnel)",
        btn:"Envoyer", ok:"Merci ! Votre courtier vous rappelle bientôt. ✅",
        legal:"Vos réponses servent uniquement à préparer votre rappel (Loi 25 — minimisation des données).",
        flag:"🌐 FR" },
  en: { hi:"Let's prep your callback 📞",
        intro:"30 seconds — your answers help your realtor make the callback count.",
        budget:"Approximate budget", tlLabel:"Buying timeline",
        tl:["As soon as possible","0–3 months","3–6 months","6–12 months","Just exploring"],
        areas:"Areas of interest (e.g. Rosemont, Longueuil)",
        pq:"I'm pre-approved for a mortgage",
        msg:"Anything else to mention? (optional)",
        btn:"Send", ok:"Thank you! Your realtor will call you back shortly. ✅",
        legal:"Your answers are used only to prepare your callback (Law 25 — data minimization).",
        flag:"🌐 EN" },
};
let lang = localStorage.getItem("radar_lang") || "fr";
function apply() {
  const d = I18N[lang];
  document.documentElement.lang = lang;
  t_hi.textContent = d.hi; t_intro.textContent = d.intro;
  l_budget.textContent = d.budget; l_tl.textContent = d.tlLabel;
  l_areas.textContent = d.areas; t_pq.textContent = d.pq;
  msg.placeholder = d.msg; t_btn.textContent = d.btn; ok.textContent = d.ok;
  t_legal.textContent = d.legal;
  document.getElementById("lang").textContent = d.flag;
  const cur = tl.selectedIndex;
  tl.innerHTML = d.tl.map(o => `<option>${o}</option>`).join("");
  tl.selectedIndex = cur >= 0 ? cur : 0;
}
document.getElementById("lang").onclick = () => {
  lang = lang === "fr" ? "en" : "fr";
  localStorage.setItem("radar_lang", lang); apply();
};
apply();
document.getElementById("f").onsubmit = async (ev) => {
  ev.preventDefault();
  const b = { budget: budget.value.trim(), timeline: tl.value,
              prequalified: pq.checked, areas: areas.value.trim(),
              message: msg.value.trim() };
  const r = await fetch("/api/forms/qualification/__QID__", { method: "POST",
    headers: {"Content-Type": "application/json"}, body: JSON.stringify(b) });
  if (r.ok) { ok.style.display = "block";
              ev.target.querySelector("#t_btn").disabled = true; }
};
</script></body></html>"""


@app.get("/q/{qid}", response_class=HTMLResponse, include_in_schema=False)
def qualification_form(qid: str):
    """Qualification form the AI outreach agent texts to hot leads. The token
    is self-validating (contact id + HMAC-ish signature) — invalid links get
    a 404 instead of a form that would silently go nowhere."""
    from .agents.voice import parse_qual_token
    safe = "".join(ch for ch in qid if ch.isalnum() or ch == "-")[:24]
    if parse_qual_token(safe) is None:
        return HTMLResponse("<h1>Formulaire introuvable</h1>", status_code=404)
    return HTMLResponse(_QUALIFICATION_PAGE.replace("__QID__", safe))


_FEEDBACK_PAGE = """<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Votre visite</title></head>
<body style="margin:0;background:#F6F8FA;font-family:system-ui;color:#111B2E;
display:grid;place-items:center;min-height:100vh;padding:16px;box-sizing:border-box">
<form id="f" style="max-width:420px;width:100%;padding:28px;background:#fff;
border:1px solid #DCE2EA;border-radius:16px;position:relative">
<button type="button" id="lang" style="position:absolute;top:14px;right:14px;
border:1px solid #DCE2EA;background:#fff;border-radius:99px;padding:5px 10px;
font-size:12px;font-weight:700;cursor:pointer">🌐 FR</button>
<div id="t_hi" style="font-weight:800;font-size:22px"></div>
<p id="t_intro" style="color:#5A6577;font-size:14px;line-height:1.5"></p>
<div id="l_int" style="font-size:13px;font-weight:700;margin-bottom:6px"></div>
<div id="stars" style="font-size:28px;letter-spacing:4px;cursor:pointer;margin-bottom:14px"></div>
<div id="l_price" style="font-size:13px;font-weight:700;margin-bottom:6px"></div>
<div id="prices" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px"></div>
<textarea id="c" rows="3" style="width:100%;padding:11px;box-sizing:border-box;
border:1px solid #DCE2EA;border-radius:10px;font-size:14px;resize:vertical"></textarea>
<button id="t_btn" style="margin-top:12px;width:100%;padding:12px;border:0;
border-radius:10px;background:#1656B4;color:#fff;font-weight:700;font-size:14px"></button>
<div id="ok" style="display:none;text-align:center;padding:12px 0 0;color:#2F7D5C;
font-weight:700"></div>
</form>
<script>
const I18N = {
  fr: { hi:"Comment était la visite ? 🏡",
        intro:"3 petites questions — vos réponses ajustent la suite de la recherche.",
        int:"Votre intérêt pour cette propriété", price:"Le prix vous semble…",
        prices:[["juste","Juste"],["trop_cher","Trop élevé"],["aubaine","Une aubaine"]],
        c:"Autre chose à mentionner ? (optionnel)", btn:"Envoyer",
        ok:"Merci ! Votre courtier ajuste la recherche. ✅", flag:"🌐 FR" },
  en: { hi:"How was the visit? 🏡",
        intro:"3 quick questions — your answers fine-tune the search.",
        int:"Your interest in this property", price:"The price feels…",
        prices:[["juste","Fair"],["trop_cher","Too high"],["aubaine","A bargain"]],
        c:"Anything else to mention? (optional)", btn:"Send",
        ok:"Thanks! Your realtor is adjusting the search. ✅", flag:"🌐 EN" },
};
let lang = localStorage.getItem("radar_lang") || "fr";
let interest = 0, price = "";
function stars() {
  document.getElementById("stars").innerHTML = [1,2,3,4,5].map(i =>
    `<span data-i="${i}" style="color:${i<=interest?"#E8A33D":"#DCE2EA"}">★</span>`).join("");
}
function pricesRow() {
  const d = I18N[lang];
  document.getElementById("prices").innerHTML = d.prices.map(([k,l]) =>
    `<button type="button" data-k="${k}" style="border:1.5px solid ${price===k?"#1656B4":"#DCE2EA"};
     background:${price===k?"#E8EEF9":"#fff"};color:${price===k?"#1656B4":"#111B2E"};
     border-radius:99px;padding:7px 14px;font-size:13px;font-weight:700;cursor:pointer">${l}</button>`).join("");
}
function apply() {
  const d = I18N[lang];
  document.documentElement.lang = lang;
  t_hi.textContent = d.hi; t_intro.textContent = d.intro;
  l_int.textContent = d.int; l_price.textContent = d.price;
  c.placeholder = d.c; t_btn.textContent = d.btn; ok.textContent = d.ok;
  document.getElementById("lang").textContent = d.flag;
  stars(); pricesRow();
}
document.getElementById("lang").onclick = () => {
  lang = lang === "fr" ? "en" : "fr";
  localStorage.setItem("radar_lang", lang); apply();
};
document.getElementById("stars").onclick = (e) => {
  const i = e.target.dataset.i; if (i) { interest = +i; stars(); } };
document.getElementById("prices").onclick = (e) => {
  const k = e.target.dataset.k; if (k) { price = k; pricesRow(); } };
apply();
document.getElementById("f").onsubmit = async (ev) => {
  ev.preventDefault();
  const v = new URLSearchParams(location.search).get("v") || 0;
  const tok = location.pathname.split("/").pop();
  const r = await fetch("/api/feedback/" + tok, { method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ visit_event_id: +v, interest: interest || 3,
                           price_opinion: price, comments: c.value.trim() }) });
  if (r.ok) { ok.style.display = "block";
              ev.target.querySelector("#t_btn").disabled = true; }
};
</script></body></html>"""


@app.get("/fb/{token}", response_class=HTMLResponse, include_in_schema=False)
def visit_feedback_form(token: str):
    return HTMLResponse(_FEEDBACK_PAGE)


_TRACKER_PAGE = """<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Suivi de votre dossier</title></head>
<body style="margin:0;background:#F6F8FA;font-family:system-ui;color:#111B2E;
padding:20px;box-sizing:border-box">
<div id="app" style="max-width:520px;margin:0 auto">
<div style="font-size:14px;color:#5A6577">…</div></div>
<script>
const I18N = {
  fr: { file:"Votre dossier", hi:(n)=>`Bonjour ${n} !`, stage:"Étape actuelle :",
        miles:"Jalons complétés", notfound:"Dossier introuvable — vérifiez votre lien.",
        foot:"Une question ? Appelez ou textez votre courtier — cette page se met à jour automatiquement.",
        flag:"🌐 FR" },
  en: { file:"Your file", hi:(n)=>`Hello ${n}!`, stage:"Current stage:",
        miles:"Completed milestones", notfound:"File not found — check your link.",
        foot:"Questions? Call or text your realtor — this page updates automatically.",
        flag:"🌐 EN" },
};
const STAGE_EN = { nouveau:"New lead", contacte:"Contacted",
  client_actif:"Client (Centris)", en_reperage:"Scouting",
  en_visites:"Touring", offre:"Offer submitted",
  transaction:"In transaction", cloture:"Closed" };
const MILESTONE_EN = { "visit.completed":"Visit completed",
  "offer.submitted":"Offer submitted", "offer.accepted":"Offer accepted",
  "inspection.completed":"Inspection completed",
  "financing.confirmed":"Financing confirmed",
  "notary.scheduled":"Notary appointment booked",
  "transaction.closed":"Transaction closed 🎉" };
let lang = localStorage.getItem("radar_lang") || "fr";
let data = null;
function render() {
  const el = document.getElementById("app");
  const t = I18N[lang];
  document.documentElement.lang = lang;
  const langBtn = `<button onclick="flip()" style="position:absolute;top:16px;right:16px;
    border:1px solid #DCE2EA;background:#fff;border-radius:99px;padding:5px 10px;
    font-size:12px;font-weight:700;cursor:pointer">${t.flag}</button>`;
  if (!data) { el.innerHTML = `<div style="position:relative;background:#fff;border:1px solid #DCE2EA;
    border-radius:16px;padding:24px">${langBtn}<p>${t.notfound}</p></div>`; return; }
  const d = data;
  const idx = d.stage_order.indexOf(d.stage);
  const sLabel = (s) => lang === "fr" ? (d.stage_labels[s]||s) : (STAGE_EN[s]||d.stage_labels[s]||s);
  const steps = d.stage_order.map((s, i) => `
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="width:14px;height:14px;border-radius:99px;margin-top:2px;flex-shrink:0;
        background:${i<=idx?"#1656B4":"#fff"};border:2px solid ${i<=idx?"#1656B4":"#DCE2EA"}"></div>
      <div style="padding-bottom:${i<d.stage_order.length-1?"18px":"0"};
        border-left:${i<d.stage_order.length-1?"2px solid "+(i<idx?"#1656B4":"#DCE2EA"):"0"};
        margin-left:-8px;padding-left:14px;transform:translateX(-6px)">
        <div style="font-weight:${i===idx?"800":"600"};font-size:14px;
          color:${i<=idx?"#111B2E":"#94A3B8"}">${sLabel(s)}</div>
      </div>
    </div>`).join("");
  const miles = d.milestones.map(m => `
    <div style="display:flex;justify-content:space-between;font-size:13px;padding:7px 0;
      border-bottom:1px solid #EEF1F5"><span>✅ ${lang==="fr"?m.label:(MILESTONE_EN[m.type]||m.label)}</span>
      <span style="color:#5A6577">${m.ts.slice(0,10)}</span></div>`).join("");
  el.innerHTML = `
    <div style="position:relative;background:#fff;border:1px solid #DCE2EA;border-radius:16px;padding:24px">
      ${langBtn}
      <div style="font-size:12px;letter-spacing:.1em;color:#5A6577;text-transform:uppercase">${t.file}</div>
      <h1 style="margin:4px 0 2px;font-size:22px">${t.hi(d.first_name)}</h1>
      <p style="color:#5A6577;font-size:14px;margin:0 0 18px">${t.stage}
        <b style="color:#1656B4">${sLabel(d.stage)}</b></p>
      ${steps}
      ${miles ? `<div style="margin-top:18px;font-weight:700;font-size:14px">${t.miles}</div>${miles}` : ""}
      <p style="color:#5A6577;font-size:12px;margin-top:16px">${t.foot}</p>
    </div>`;
}
function flip() { lang = lang === "fr" ? "en" : "fr";
  localStorage.setItem("radar_lang", lang); render(); }
(async () => {
  const tok = location.pathname.split("/").pop();
  const r = await fetch("/api/portal/" + tok + "/progress");
  if (r.ok) data = await r.json();
  render();
})();
</script></body></html>"""


@app.get("/suivi/{token}", response_class=HTMLResponse, include_in_schema=False)
def transaction_tracker(token: str):
    return HTMLResponse(_TRACKER_PAGE)


@app.get("/l/{token}/{centris_no}", include_in_schema=False)
def tracked_listing_link(token: str, centris_no: str):
    """Tracked link used in the hub's own alert emails (alert_mailer):
    click → email.link_clicked event → redirect into the client portal with
    the listing deep-linked. Centris' own email links cannot be instrumented
    (we don't control their HTML) — this mirror link is the capture point.
    Demo/unknown tokens redirect without ingesting anything."""
    no = re.sub(r"\D", "", centris_no)[:12]
    dest = f"/portail/{token}" + (f"?listing={no}" if no else "")
    if token == "demo" or not no:
        return RedirectResponse(dest, status_code=302)
    from .config import settings as _st
    from .models import SessionLocal, Contact, Listing
    db = SessionLocal()
    try:
        contact = (db.query(Contact)
                   .filter_by(tenant_id=_st.DEFAULT_TENANT, portal_token=token)
                   .first())
        if not contact:
            return RedirectResponse(dest, status_code=302)
        row = (db.query(Listing)
               .filter_by(tenant_id=contact.tenant_id, contact_id=contact.id,
                          centris_no=no).first())
        from .events import ingest_event
        ingest_event(db, tenant_id=contact.tenant_id, contact_id=contact.id,
                     etype="email.link_clicked", actor="client", origin="email",
                     payload={"listing_id": no,
                              "address": row.address if row else "",
                              "via": "email"})
        from .automations import check_engagement_threshold
        check_engagement_threshold(db, contact.tenant_id, contact)
    except Exception:  # noqa: BLE001 — tracking must never break the redirect
        pass
    finally:
        db.close()
    return RedirectResponse(dest, status_code=302)


@app.get("/ops", response_class=HTMLResponse, include_in_schema=False)
def ops_console() -> str:
    # The ops console (RADAR leads inbox / CLIENTS / AGENTS + writebacks). It is
    # a self-contained single-file React page — the CDN versions are pinned in
    # dashboard.py (esp. Babel 7.x) so the in-browser JSX transform works.
    return DASHBOARD_HTML
