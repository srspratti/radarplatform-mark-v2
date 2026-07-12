# Radar Acheteur — deployable MVP

Matrix/Centris notification emails → scored, flagged leads inside **Follow Up Boss**.
No Centris login, no scraping — the pipeline only reads the alert emails Matrix already
sends. This is the **sellable** product.

Works day one: emails it can't parse deterministically go to a Claude fallback, so you get
correct extraction immediately and drive cost down over time by tuning the parsers.

---

## What it does

```
IMAP mailbox ──▶ parse (deterministic + Claude fallback) ──▶ SQLite
                                                               │
                                            decay-weighted scoring
                                                               │
                        hot leads ──▶ Follow Up Boss (tags + task + why-now note)
                                                               │
                                          8 a.m. digest email to the broker
```

## Setup (10 minutes)

```bash
cd radar-acheteur
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # then fill in the 4 required values
```

**Required in `.env`:** `IMAP_USER`, `IMAP_PASS` (Gmail App Password), `ANTHROPIC_API_KEY`, `FUB_API_KEY`.

**Point Matrix at the mailbox:** in Matrix, set saved-search alerts + client-activity
notifications to send to (or CC) the mailbox in `IMAP_USER`. That's the only Matrix-side change.

## Run

```bash
python -m radar_acheteur.run --once            # single pass
python -m radar_acheteur.run --once --digest   # pass + send the morning digest
python -m radar_acheteur.run --loop --interval 300   # every 5 min
python -m radar_acheteur.run --digest-only     # just the digest (put on an 8am cron)
```

Recommended production shape: a **cron** every 5–15 min for ingestion (`--once`) and a
separate 8 a.m. cron for `--digest-only`. Cheaper than a always-on loop.

## Files

| File | Role |
|---|---|
| `config.py` | env-driven settings + scoring knobs |
| `ingest.py` | IMAP fetch of unread alert emails |
| `parse.py` | template classify → deterministic parse → Claude fallback |
| `score.py` | decay-weighted activity scoring |
| `fub.py` | Follow Up Boss REST client (events, tags, notes, tasks) |
| `digest.py` | why-now briefs + morning digest email |
| `pipeline.py` | one end-to-end run |
| `run.py` | CLI |

## Tuning during the pilot

- Watch the parse line: `deterministic X | claude fallback Y (Z% → tune parsers…)`.
  Every % you move from fallback to deterministic is direct API savings.
- Adjust `HOT_THRESHOLD` / `WARM_THRESHOLD` / `HALF_LIFE_DAYS` in `.env` with the broker.
- Add signal types or bonuses in `score.py` (price escalation, geo-clustering).

---

## 💰 Cost breakdown & how to cut it

**Current Anthropic rates (verify before budgeting):** Haiku 4.5 is **$1 / $5** per million
input/output tokens — the cheapest current model — and this MVP defaults to it. Prompt
caching cuts cached input by ~90%; the Batch API cuts everything 50%.

### Where the money goes

| Cost | Driver | Typical pilot (1 broker) |
|---|---|---|
| **LLM (Claude)** | fallback parses + why-now briefs | **$1–8 / month** |
| **Hosting** | one small always-on process | **$0–5 / month** |
| **Database** | SQLite file on the same box | **$0** |
| **Email in** | IMAP on an existing mailbox | **$0** |
| **Email out (digest)** | SMTP on the same mailbox | **$0** |
| **SMS (only if v1.1 outreach on)** | Twilio per-segment | usage-based |
| **Total pilot** | | **≈ $1–15 / month** |

A Matrix email is tiny (~1–4K tokens). Even if *every* email hit the Claude fallback:
1,000 emails/mo × ~3K in + ~0.3K out ≈ 3M in + 0.3M out ≈ **$3 in + $1.5 out ≈ $5/mo**.
Tuning parsers so only ~10% fall back drops that toward **$1/mo**.

### Cost-cutting levers (biggest first)

1. **Tune deterministic parsers** — each email parsed in code is a $0 parse. This is the
   single biggest lever; the fallback rate is printed every run so you can track it.
2. **Stay on Haiku 4.5** — already the default. Don't reach for Sonnet/Opus unless brief
   quality is visibly lacking (5–25× more expensive).
3. **Prompt caching is already wired** (`cache_control` on the system/tool blocks) — the
   schema + instructions are cached, so repeated calls pay ~10% on that portion.
4. **Batch the briefs** — if volume grows, move why-now briefs to the Batch API (50% off);
   they aren't latency-sensitive.
5. **Brief only newly-hot contacts** — already implemented (`briefed` flag), so you never
   re-brief the same lead.
6. **SQLite for single-tenant** — no managed DB bill. Only move to Postgres at multi-tenant.
7. **Cron over always-on** — pay for compute only when a pass runs.
8. **Cap email size** — `parse.py` truncates to 20K chars so a rogue newsletter can't blow up tokens.

### Cheapest possible deploy (≈ **$0–5/mo total infra**)

- **Fly.io** shared-cpu-1x (256 MB) in `yul` (Montréal, keeps data in Canada) — free
  allowance covers a tiny cron worker; or
- A **$4–6/mo** VPS (Hetzner/DigitalOcean) running the same cron; or
- **Your own always-on machine** (Danny's office PC) via Task Scheduler/cron — $0.

Ship the pilot on SQLite + cron + Haiku. Total run cost is realistically a **few dollars a
month** until you turn on SMS outreach — and at that point Twilio, not Claude, is the line item.

### When you go multi-tenant (post-pilot)

Add Postgres (Supabase Canadian region free tier → ~$25/mo Pro when you outgrow it), one
worker per N tenants, Stripe for billing. Your gross margin stays high because the LLM cost
per broker is a rounding error against a $200–400/mo price point.

---

## Compliance notes baked in

- No Centris/Matrix automation — email-only ingestion.
- Canadian hosting recommended (Law 25).
- Outreach (v1.1) must pass a CASL consent gate before any send; not enabled in this MVP.
