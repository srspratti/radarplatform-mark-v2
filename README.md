# Radar Platform

> 🇫🇷 **Version française : [README.fr.md](README.fr.md)** · Step-by-step
> setup, keys, integrations, deploy & go-live: **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**
> / [GUIDE_DEPLOIEMENT.fr.md](GUIDE_DEPLOIEMENT.fr.md) · Edition rules: [EDITION.md](EDITION.md)

Deployable monorepo for the Québec-broker platform: the **Radar Hub**
integration layer plus every existing artifact, wired together. One process
serves everything.

| Route | What it is |
|---|---|
| `/` | Realtor engagement dashboard (`realtor-engagement-dashboard.jsx`, **live data**) |
| `/portail/{token}` | Vitrine v2 client portal (`vitrine-mvp-v2.jsx`, event bridge + live listings) |
| `/ops` | Operations console — lead inbox, agents, writebacks, client drawer |
| `/api/…` | Hub API — events, leads, clients, connectors, agents (OpenAPI at `/docs`) |
| `/acheteur` | Radar Acheteur buyer-intelligence module *(marketable edition)* |
| `internal/` | Matrix/Centris RPA tooling *(internal edition — never in a Docker image)* |

## The workflow

1. **Leads in, labeled** — Follow Up Boss import (third-party origin preserved
   as sublabel), Danny's channels, Matrix visit requests, own forms,
   prospecting agent. Immutable first-touch source label. AI priority score +
   action hint on every lead (`/ops` Radar tab).
2. **Convert** — button in `/ops`, or auto-detected when a Matrix
   "alert created" email arrives for an existing lead. Conversion mints the
   **Vitrine portal token** and a **client-specific intake address**
   (e.g. `alertes.radar+mctremblay-dxec68@gmail.com`) — designed on the fly,
   zero per-client server config.
3. **Listings flow** — Danny adds the intake address as **second recipient**
   on the client's Matrix alert. Every Centris email is routed by recipient,
   parsed into listing cards (Centris #, address, price, beds, type, URL),
   deduplicated, and served to that client's Vitrine — each card deep-links
   **"Voir sur Centris ↗"**. Receiving a match never inflates engagement.
4. **Engagement back** — every portal action (views, 3D tours, favorites,
   messages, visit requests) hits the webhook → decay-weighted engagement
   score (client-actor-only) and Québec pipeline stage (derived from the
   event log) update live on Danny's dashboard.
5. **History everywhere** — each portal batch queues a Follow Up Boss note
   (pushed via API) **and** a `matrix_note`. Marketable edition: paste-ready
   list + per-client digest. Internal edition: `matrix_history_writer.py`
   (RPA, dry-run default) writes them into Matrix automatically.
6. **View as client** — "👁 Ouvrir le portail d'un client…" selector in the
   dashboard top bar; "👁 Portail client" button in `/ops`; seed prints every
   portal URL and intake address.

## Quickstart

```bash
pip install -r requirements.txt
python -m radar_hub.seed                # Danny tenant + demo data + access map
python -m radar_acheteur.seed_demo      # marketable edition only (optional)
uvicorn radar_hub.main:app --reload
pytest                                  # marketable: 43 · internal: 40 + 3 skipped
```

Frontends ship precompiled (`apps/*/dist`); rebuild with
`./build_frontend.sh` (Node 18+) after editing sources.

## Integration contracts (condensed)

**Vitrine → Hub** `POST /api/webhooks/vitrine`
(`X-Vitrine-Signature` = HMAC-SHA256 when a secret is set):

```json
{"client_token":"<portal_token>","events":[
  {"type":"listing.viewed","event_id":"v2","listing_id":"21877102"},
  {"type":"visit.requested","event_id":"v4","listing_id":"21877102"}]}
```

Accepted types: `portal.session_started`, `listing.viewed`,
`listing.favorited`, `listing.shared`, `tour3d.viewed`, `message.sent`,
`visit.requested`, `note.added`, `centris.clicked`. `event_id` is the
idempotency key.

**Client listings** `GET /api/vitrine/listings/{token}` — token-gated, feeds
the portal. **Portal state** `GET/PUT/DELETE /api/vitrine/storage/{token}/{key}`.
**AI proxy** `POST /api/vitrine/ai` — token-gated; server-side key only.

**Matrix** — `POST /api/connectors/matrix/ingest-raw` (one raw email) or
`POST /api/connectors/matrix/poll` (IMAP). Deterministic parsers first; Claude
Haiku only under the 0.75 confidence gate.
**Matrix history queue** — `GET /api/connectors/matrix/notes?status=pending`,
`POST /api/connectors/matrix/notes/{id}/mark`.

**Follow Up Boss** — `POST /api/connectors/fub/import`,
`POST /api/connectors/fub/flush-writebacks`.
**Radar Acheteur bridge** — `POST /api/connectors/acheteur/sync`.
**Generic events** — `POST /api/events` (32 types, 7 families).

**Seller Intelligence** (platinum · `/ops` → 🤖 Agents → 🏠) —
`POST /api/agents/seller/run` (likely-to-list scoring: tenure, renewal
window, succession, FSBO, assessment gap), `GET /api/agents/seller/market/{sector}`
(market-conditions snapshot that shapes the outreach copy),
`POST …/prospects/{id}/outreach` (letter/call always; email/SMS need a CASL
basis; automated voice needs EXPRESS consent — CRTC ADAD), `…/promote`.

**Portal capabilities** (per-plan, served by `GET /api/vitrine/features/{token}`)
— real listing photos (`POST /api/listings/{no}/photos`), live visit slots
(`POST /api/vitrine/book/{token}`), offer-readiness checklist, installable
portal + new-listing notifications (`/portail-manifest.webmanifest`),
OSM real map (`GET /api/geo`), co-buyer mode, mortgage handoff
(`mortgage.interest` event). Plus: engagement trend (week-over-week on
`/api/dashboard/clients-rich`), deadline sentinel
(`POST /api/agents/deadlines/run`), post-visit feedback
(`POST /api/agents/feedback/run` → `/fb/{token}`), Loi 25 data rights
(`GET /api/privacy/{cid}/export`, `POST /api/privacy/{cid}/erase`). Every
capability is a feature flag — tier or `[overrides]` in `features.toml`.

**AI voice agents** (platinum · `/ops` → 🤖 Agents → 📞) —
`POST /api/agents/voice/outreach/run` (priority-score leads: cloned-voice call
or SMS + qualification form `/q/{token}` + callback task),
`POST /api/agents/voice/checkins/run` (engagement-score client check-ins),
`POST /api/webhooks/voice-inbound` (missed-call receptionist, Québécois FR +
EN; `?format=twiml` for a Twilio number). Transport: Twilio for SMS/calls,
ElevenLabs (`ELEVENLABS_API_KEY` + `ELEVENLABS_VOICE_ID`) for the broker's
cloned voice — unset = everything queues "simulated". CASL/Loi 25 gates apply
(consent registry, one touch per lead, per-client cooldown).

## Architecture decisions

1. Only `actor=client` events feed the engagement score.
2. `idempotency_key` on every event — two-way sync can't double-count.
3. `tenant_id` everywhere — the sole structural difference between Danny's
   instance and a white-label deployment.
4. Pipeline stage is always **derived from the event log**, never hand-set.
5. Immutable first-touch source label, preserved through conversion.
6. Lead vs client = a lifecycle status on one table, not two tables.
7. Two separate instruments: **priority** (pre-conversion, act-now) vs
   **engagement** (post-conversion, decay-weighted). Never compared to each
   other or to raw counts.
8. Queue-based writeback, CRM-first: FUB gets API notes; Matrix gets a
   digest/queue (no public write API; automated logins breach Centris ToS —
   the internal RPA is the only exception, on Danny's own account).
9. Portal token + intake address are minted **at conversion**, never before.

## Compliance posture (not legal advice — review before scaling)

Centris/Matrix: notification-email ingestion only in the sellable product —
no scraping, no automated logins. CASL/LCAP: prospecting email drafts are
blocked (HTTP 422) without a declared consent basis; letters/call scripts
always allowed; unsubscribe wording built in; targeting signals never appear
in message content. Loi 25: data minimization — the hub stores only what the
flow requires; portal state is token-scoped.

## Layout

```
radar_hub/            hub (API, scoring, stages, agents, connectors, /ops)
radar_acheteur/       buyer-intel module (marketable edition)
apps/vitrine/         verbatim portal + bridge + prebuilt dist
apps/dashboard/       prototype (1 documented line) + adapter + dist
internal/…rpa/        Danny-only tooling (internal edition)
samples/  scripts/    test emails + ingest helper (see the guide)
tests/                full suite  ·  make_editions.sh  ·  build_frontend.sh
```
