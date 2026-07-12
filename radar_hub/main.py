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
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, Response
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


@app.get("/ops", response_class=HTMLResponse, include_in_schema=False)
def ops_console() -> str:
    # The ops console (RADAR leads inbox / CLIENTS / AGENTS + writebacks). It is
    # a self-contained single-file React page — the CDN versions are pinned in
    # dashboard.py (esp. Babel 7.x) so the in-browser JSX transform works.
    return DASHBOARD_HTML
