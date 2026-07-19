---
name: testing-vitrine-portal
description: Test the Vitrine client portal (apps/vitrine) end-to-end against the radar_hub backend. Use when verifying Vitrine UI changes such as the listings Map/List view, live-listing merge, or portal rendering.
---

# Testing the Vitrine client portal

The Vitrine portal is a React app bundled to `apps/vitrine/dist/vitrine.js` and served by
the FastAPI hub at `/portail/{token}`. It fetches the client's **live Matrix listings**
from `/api/vitrine/listings/{token}` and merges them over demo templates via
`window.__VITRINE_MERGE__` (see `apps/vitrine/src/main.jsx`).

## Why "live" listings matter for testing
Many demo-only affordances (e.g. curated map pin coordinates in `BROWSE_META`) exist ONLY
for the two hard-coded demo listing ids. Bugs frequently hide on **live** listings whose
ids are not in those maps. So: test with a real client portal that has live listings, NOT
`/portail/demo?demo=1` (pure demo mode masks these bugs).

## Setup
1. Python 3.12 is required (`tomllib`). Use the repo venv: `source .venv312/bin/activate`
   (create with `python3.12 -m venv .venv312 && pip install -r requirements.txt` if absent).
2. Run the hub: `uvicorn radar_hub.main:app --port 8099 --log-level warning`
   (run it as a backgrounded process so it persists).
3. The DB is pre-seeded (`radar_hub/seed.py`). Find a client token WITH live listings:
   ```python
   from radar_hub.models import SessionLocal, Contact, Listing
   db=SessionLocal()
   for c in db.query(Contact).filter_by(lifecycle='client'):
       ls=db.query(Listing).filter_by(tenant_id=c.tenant_id, contact_id=c.id).all()
       if ls: print(c.name, c.portal_token, [l.centris_no for l in ls])
   ```
   (Marie-Claude Tremblay typically has 5 live listings.)
4. Open `http://127.0.0.1:8099/portail/<token>` in the browser.

## Before/after proof for bundle fixes
`dist/vitrine.js` is a committed esbuild bundle. To contrast old vs new behavior:
- Save the fixed bundle, drop the pre-fix committed bundle in place, reload, capture the
  broken state, then restore the fixed bundle and reload. Only swap the one file on disk;
  StaticFiles serves it per-request so no server restart is needed.
- Rebuild the bundle with `./build_frontend.sh` (esbuild + pinned deps). NOTE: this script
  runs `npm install ...` which may dirty the committed `node_modules`/`package.json`; if so,
  restore with `git checkout -- node_modules package.json package-lock.json`.

## Map view (list/map toggle)
- Toggle is the **Liste / Carte** buttons top-right of the Inscriptions view.
- Each pin renders via `translate(${r.xy[0]}, ${r.xy[1]})`. If a listing lacks `xy`, the
  whole map SVG can crash (blank white app + `TypeError: Cannot read properties of undefined
  (reading '0')`). Verify pins render for live listings and clicking a pin selects the
  matching listing (address + `Centris <no>`) in the detail card below the map.

## Devin Secrets Needed
None — testing runs fully locally against the seeded SQLite DB. External integrations
(Twilio, Anthropic, SMTP, etc.) are not needed for portal/map UI testing.
