# Deployment Guide — Radar Platform

> 🇫🇷 [GUIDE_DEPLOIEMENT.fr.md](GUIDE_DEPLOIEMENT.fr.md) · Overview: [README.md](README.md)

Everything from a fresh machine to running live with Danny. Blocks marked
**[Internal]** apply only to the internal edition, **[Marketable]** only to
the marketable one.

---

## 0 · Prerequisites

- Python 3.11+ (3.12 recommended) and `pip`
- Node 18+ — **only** if you edit `apps/*/src` and rebuild bundles
- `flyctl` — only for deployment (§6)
- A Gmail (or Workspace) inbox dedicated to Matrix alerts

## 1 · Install & run locally

```bash
cd radar-platform-…                      # this folder
python -m venv .venv && . .venv/bin/activate     # optional but recommended
pip install -r requirements.txt
python -m radar_hub.seed                 # Danny tenant + demo data
python -m radar_acheteur.seed_demo       # [Marketable] buyer-intel demo data
uvicorn radar_hub.main:app --reload
```

The seed prints an **access map** — keep it visible:

```
Accès:  tableau de bord  http://localhost:8000/
        console ops     http://localhost:8000/ops
  👁 Marie-Claude Tremblay  /portail/<token>   ✉ alertes.radar+marieclaudetre-…@gmail.com
```

Open, in order: `/` (dashboard, live seeded clients), `/ops` (lead inbox with
priority scores), one `👁 /portail/<token>` URL (the client's Vitrine),
`/docs` (OpenAPI), and **[Marketable]** `/acheteur` (buyer intelligence).

## 2 · Automated tests

```bash
pytest            # [Marketable] 43 passed · [Internal] 40 passed, 3 skipped
```

What the suites guarantee: event idempotency, client-actor-only scoring,
stage derivation, the CASL gate, FUB import/writeback (mock transport),
Matrix parsers (visit / alert-created / **listing cards**), the Vitrine
webhook loop, portal KV + AI-proxy gating, the acheteur bridge
**[Marketable]**, the RPA Docker fence, and that the shipped sample emails
keep parsing. The 3 skips in the internal edition are the acheteur tests —
expected, since that module isn't in the box.

## 3 · Manual smoke walkthrough (10 minutes)

With the server from §1 running:

1. **Dashboard `/`** — top bar shows `RADARHUB`, a 🔥 hot-lead count, and the
   "👁 Ouvrir le portail d'un client…" selector. Cards show live engagement
   scores and stages from the seed.
2. **Ops `/ops`** — Radar tab: 4 leads sorted by priority with source labels
   and action hints. Click **→ Client Centris** on one: it moves to Clients
   with a portal token and intake address minted.
3. **Client drawer** — Clients tab → open Marie-Claude: Québec stage stepper,
   score breakdown, unified timeline, **👁 Portail client** and
   **✉ intake address** (click = copy) buttons, Matrix digest generator.
4. **Portal** — open her portal. Her three seeded Centris listings render
   with "Voir sur Centris ↗" links. Favorite one, request a visit, send a
   message.
5. **Loop check** — back in `/ops`, reopen her drawer: new events on the
   timeline, score up, stage on *En visites*. On `/`, her card reflects it.
6. **Simulated Matrix emails** — copy her ✉ address, then:

```bash
sed -i.bak "s/REPLACE_WITH_CLIENT_INTAKE_EMAIL/<paste-her-address>/" samples/matrix-alert-2-listings.eml
./scripts/ingest_email.sh samples/matrix-alert-2-listings.eml
./scripts/ingest_email.sh samples/matrix-visit-confirmed.eml
./scripts/ingest_email.sh samples/matrix-alert-created.eml
```

   Expected: first call → `routed_by_intake: true, listings_new: 2` (refresh
   her portal: 2 new cards). Second → a new "Jean Tremblay" lead in
   *En visites*. Third → seeded lead **Nadia Petrov auto-converts** to client
   (the alert-created detector).
7. **History queues** — `GET /api/connectors/matrix/notes` lists pending
   Matrix notes; `POST /api/connectors/fub/flush-writebacks` pushes FUB notes
   (marks `manual` without a key — normal).

## 4 · Keys & secrets

| Variable | Purpose | How to obtain |
|---|---|---|
| `RADAR_API_KEY` | Locks the hub API (`X-Radar-Key`) | `openssl rand -hex 24` |
| `ANTHROPIC_API_KEY` | Vitrine concierge + forecast web-search, Haiku parser fallback, report narrative, outreach/content drafting | console.anthropic.com → API Keys |
| `FUB_API_KEY` | Follow Up Boss import + note writeback | FUB → Admin → API → Create key |
| `MATRIX_IMAP_HOST/USER/PASS` | Hub's IMAP poll of the alerts inbox | Gmail: enable 2FA → Security → **App passwords** → Mail. Host `imap.gmail.com` |
| `INTAKE_EMAIL_MODE/USER/DOMAIN` | Shape of per-client intake addresses | `plus` + the same Gmail user (default) — or `alias` + a catch-all domain |
| `VITRINE_WEBHOOK_SECRET` | HMAC on portal webhooks | `openssl rand -hex 24` (same-origin deploys work without it; set it anyway) |
| `DB_PATH` | Radar Acheteur sqlite **[Marketable]** | a path on the persistent volume |
| `IMAP_HOST/USER/PASS`, `ALERT_SENDERS` | Acheteur module's own inbox settings **[Marketable]** | same Gmail app-password technique |
| `RADAR_TENANT_ID` | Instance identity (white-label = new value) | choose per deployment |

Locally, put them in `.env` (copy `.env.example`) and load before running:

```bash
cp .env.example .env && $EDITOR .env
set -a; . ./.env; set +a
uvicorn radar_hub.main:app
```

Everything degrades gracefully without keys: no Anthropic key → deterministic
parsers + template drafts + a polite concierge fallback; no FUB key → imports
report the missing key, writebacks mark `manual`.

## 5 · Wiring the integrations

### 5.1 Follow Up Boss
Set `FUB_API_KEY`, then `POST /api/connectors/fub/import` (button "↧ Importer
FUB" in `/ops`). People arrive as leads labeled `fub_import` with their FUB
origin (Zillow, Realtor.ca…) as sublabel — idempotent, re-run freely.
Writebacks: `POST /api/connectors/fub/flush-writebacks` pushes Vitrine
activity summaries as person notes. Schedule both (§7).

### 5.2 Matrix alert emails — the per-client loop
1. Create/choose the dedicated inbox; set `MATRIX_IMAP_*`.
2. Convert a lead → the hub prints/mints the client's ✉ intake address
   (visible in the `/ops` drawer, click to copy).
3. In Matrix, on that client's auto-email/alert, **add the intake address as
   an additional recipient (CC)** — exact field name varies by board setup;
   any field that makes Matrix send the alert to that address works.
4. From then on every Centris alert for that client also lands in your inbox,
   is routed by recipient, and its listings appear in their Vitrine.
5. Pull cycle: `POST /api/connectors/matrix/poll` (schedule it, §7), or test
   any single email with `scripts/ingest_email.sh`.

### 5.3 Vitrine webhook secret
Set `VITRINE_WEBHOOK_SECRET` on the server. The bundled portal is same-origin
so nothing else to configure; if you ever host the portal separately, sign
requests with HMAC-SHA256 of the body in `X-Vitrine-Signature`.

### 5.4 Anthropic
Set `ANTHROPIC_API_KEY` and the portal concierge, live forecast refresh
(server-side web search), sub-gate email parsing, monthly-report narrative,
and personalized outreach/content drafts all switch on. The key never reaches
the browser — the portal talks to `POST /api/vitrine/ai`.

### 5.5 Radar Acheteur **[Marketable]**
Set `DB_PATH` + the module's `IMAP_*`/`ALERT_SENDERS`. Its pipeline fills its
own DB; the intelligence UI lives at `/acheteur`. Mirror its signals into the
unified timeline with `POST /api/connectors/acheteur/sync` (schedule it, §7).

### 5.6 RPA suite **[Internal]** — Danny's account only
```bash
pip install -r internal/matrix-centris-rpa/requirements.txt
playwright install chromium
```
1. Fill the `PLACEHOLDER_…` selectors in `matrix_harvester.py`,
   `centris_agent.py`, `matrix_history_writer.py` against the live DOM
   (DevTools → right-click element → Copy → Copy selector).
2. First run of anything: **dry-run is the default** — read the output.
3. `python internal/matrix-centris-rpa/matrix_history_writer.py --hub
   http://localhost:8000 --key $RADAR_API_KEY` prints pending notes;
   add `--apply` only after selectors are filled and a manual spot-check.
4. Keep runs low-frequency and human-paced (built in). Never containerize or
   distribute this folder — `.dockerignore` already fences it.

## 6 · Deploying (Fly.io, YUL)

```bash
brew install flyctl            # or curl -L https://fly.io/install.sh | sh
fly auth login
fly launch --copy-config --no-deploy        # keeps the shipped fly.toml
fly volumes create radar_data --size 1 --region yul
fly secrets set \
  RADAR_API_KEY=… ANTHROPIC_API_KEY=… FUB_API_KEY=… \
  MATRIX_IMAP_HOST=imap.gmail.com MATRIX_IMAP_USER=… MATRIX_IMAP_PASS=… \
  INTAKE_EMAIL_USER=… VITRINE_WEBHOOK_SECRET=… \
  IMAP_HOST=imap.gmail.com IMAP_USER=… IMAP_PASS=…        # [Marketable]
fly deploy
fly logs            # watch first boot: it seeds the empty volume, then serves
fly open            # dashboard at /, ops at /ops
```

Data lives on the volume (`/data/*.db`) and survives deploys. Update = edit →
`fly deploy`. Custom domain: `fly certs add app.votredomaine.ca`. White-label
**[Marketable]**: new app name + volume + `RADAR_TENANT_ID` secret — nothing
else changes (decision #3).

**Going to production (no demo data)**: before the final deploy, remove
`python -m radar_hub.seed && ` from the Dockerfile `CMD` (or, after a first
demo run: `fly ssh console -C "rm /data/radar_hub.db"` then redeploy with the
cleaned CMD). Then import real leads via FUB (§8).

## 7 · Scheduled jobs

Any cron (server, GitHub Actions, or a tiny Fly machine) hitting:

```cron
*/10 * * * *  curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/matrix/poll
*/15 * * * *  curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/fub/flush-writebacks
0 */6 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/fub/import
0 */6 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/acheteur/sync   # [Marketable]
```

**[Internal]** the RPA writer runs from Danny's machine on demand or a gentle
schedule: `matrix_history_writer.py --hub https://<app>.fly.dev --key $KEY --apply`.

## 8 · Go-live checklist (Day 1 with Danny)

1. `fly logs` clean; `/api/health` returns the right edition.
2. Production without demo data (see end of §6): CMD without the seed line,
   clean volume.
3. `POST /api/connectors/fub/import` — Danny's real book arrives labeled.
4. Danny works the Radar inbox: contact → convert the first real client.
5. Copy that client's ✉ intake address → add as CC on their Matrix alert.
6. Wait for (or forward) one real alert → confirm listings in their portal.
7. Send the client their `/portail/<token>` link.
8. Watch the first real activity move the score/stage on `/`.
9. Flush writebacks → check the note in FUB; process the `matrix_note` queue
   (paste digest, or **[Internal]** run the writer with `--apply`).
10. Set up §7 crons + calendar a weekly `fly ssh sftp get /data/radar_hub.db`
    backup.

## 9 · Operations & troubleshooting

| Symptom | Cause / fix |
|---|---|
| `401 clé API invalide` | Send `X-Radar-Key`; matches `RADAR_API_KEY` secret |
| `401 jeton portail invalide` | Wrong/expired token — regenerate by re-checking the client in `/ops` |
| IMAP login fails | Use a Gmail **App password** (2FA required), not the account password |
| Alert ingested but `listings_new: 0` | Sender not in scope or card format unmatched — run the email through `scripts/ingest_email.sh` and inspect `parsed`; extend the regexes in `radar_hub/connectors/matrix_email.py` |
| `routed_by_intake: false` | The intake address isn't on the Matrix alert's recipients yet |
| Portal blank | Rebuild bundles: `./build_frontend.sh`; check browser console |
| Notes stuck `pending` | Marketable: that's the paste queue — mark via `/notes/{id}/mark`. Internal: run the writer |
| Backup | `fly ssh sftp get /data/radar_hub.db` (and `/data/radar_acheteur.db`) |

## 10 · Security & compliance recap

Set `RADAR_API_KEY` before exposing publicly. Keep the Anthropic key
server-side only (it already is). Sellable product touches Centris **only**
through notification emails and outbound hyperlinks. CASL gate is enforced in
code. Have a Québec tech lawyer review Loi 25 / LCAP / Centris ToS / OACIQ
posture before scaling past the pilot.
