# Radar Platform — PRD & Working Log

## Problem statement (verbatim)
> Can you improve the UI UX for this repo and provide me recommendations for improvement
> — user then approved **Phase 1** of the roadmap I proposed.

## Product context
Monorepo for a Québec real-estate broker platform. One FastAPI process serves:
- `/`               Realtor engagement dashboard (React, `apps/dashboard`)
- `/portail/{token}` Vitrine client portal (React, `apps/vitrine`)
- `/ops`            Operations console (React, `apps/ops` — new in Phase 1)
- `/api/*`          Radar Hub API (leads, clients, events, agents)
- `/acheteur`       Radar Acheteur buyer-intel module

## User personas
1. **Danny** — the broker. Uses `/ops` on desktop + tablet, `/` on desktop, mobile drive-by.
2. **Broker's clients** — receive a `/portail/{token}` link; consume on phone.
3. **Broker's operator** — same as Danny for now (single-tenant).

## Static core requirements
- One FastAPI process, no separate frontend server.
- Bilingual FR/EN across every surface (single `radar_lang` key).
- CASL / Loi 25 compliance posture visible.
- Never break existing routes / API contracts.
- Sub-second first paint on `/ops` (was ~3 s with CDN Babel).

---

## What's been implemented

### 2026-01 — UI/UX audit (delivered `docs/ux-audit/UI_UX_RECOMMENDATIONS.md`)
Full audit of the four frontends, 10 prioritised fixes, per-surface deep dives,
5-phase roadmap, one business-enhancement idea.

### 2026-01 — Phase 1 (shared foundation + ops migration)
- **`apps/_shared/tokens.css`** — one source of truth for colours, type ramp,
  motion, radius, shadow. Two themes: light (civic Québec) + dark (petrol/amber).
- **`apps/_shared/ui.jsx`** — 8 shared components: `ScoreRing`, `Trend`, `Chip`,
  `SourceChip`, `Toast`, `Stepper`, `Drawer`, `Modal`, `StatusPip`, `Button`.
  Every interactive element carries a `data-testid`.
- **`apps/_shared/i18n.js`** — extracted the FR⇄EN toggle so all four apps
  can share `T()` and `flipLang()`.
- **`/ops` migrated off CDN Tailwind + `@babel/standalone`.** The former
  ~1 200-line JSX-inside-a-Python-string in `radar_hub/dashboard.py` is now
  a proper esbuild-bundled app in `apps/ops/src/` (8 files, ≤ 500 lines each):
    - `main.jsx` — App root, nav, KeyGate wiring, Toast
    - `i18n.js`, `api.js`, `kit.jsx` — helpers
    - `views/{radar,contacts,agents,analytics,plans}.jsx`
    - `panels/notif-bell.jsx`
- **`build_frontend.sh`** now builds all three apps; ops bundle is 222 KB
  (replacing ~2 MB of CDN + runtime Babel compilation).
- **`radar_hub/main.py`** mounts `/static/ops` and `ops_console()` serves the
  new HTML shell (falls back to legacy inline HTML if the bundle isn't built).
- **Data-testids added** across every ops nav item, view root, KPI card,
  action button, filter chip, form input, and drawer control.
- **Contrast fix** — `--mute` on dark bumped from `#6f939d` (4.28:1) to
  `#8fb0b8` (5.55:1) for WCAG AA.
- **Focus ring** — universal `outline: 2px solid var(--focus)` on all
  interactive elements in `ops.css` + `tokens.css`.
- **`prefers-reduced-motion`** now honoured in ops (was missing).

### Files added
- `docs/ux-audit/UI_UX_RECOMMENDATIONS.md`
- `apps/_shared/{tokens.css, ui.jsx, i18n.js}`
- `apps/ops/src/{main.jsx, api.js, i18n.js, kit.jsx, ops.css}`
- `apps/ops/src/views/{radar,contacts,agents,analytics,plans}.jsx`
- `apps/ops/src/panels/notif-bell.jsx`
- `apps/ops/dist/{index.html, ops.js, ops.css, tw.css}`

### Files modified
- `build_frontend.sh` — added ops bundle + tailwind pass; scans `_shared`.
- `radar_hub/main.py` — mounts `/static/ops`; `ops_console` prefers new bundle.

### Verified (this session)
- `./build_frontend.sh` completes in ~3 s (vitrine 868 KB, dashboard 182 KB, ops 222 KB).
- `curl /ops` returns the new 997-byte shell (was ~50 000 bytes of inline JSX).
- `/ops` no longer references `cdn.tailwindcss.com`, `@babel/standalone`, or React UMD.
- Playwright: `/ops` renders 14 contacts, 5 nav tabs, KPI grid, drawers all functional.
- ESLint clean.

## Prioritized backlog

### P0 — next
- Move `radar_hub/dashboard.py` (~1 200 lines of dead inline JSX) to
  `radar_hub/_legacy_dashboard.py` and add a deprecation note. It still
  works as a fallback but should be retired once CI builds the bundle.
- Kill the ~22 `window.prompt / confirm` calls in ops (Modal component is
  ready in `_shared/ui.jsx`). Use `KeyGate` for the API-key flow.
- Dashboard (`/`) — swap inline `ScoreRing`, `Trend`, `Stepper`, `Chip` for
  the shared components. Add data-testids matching the ops convention.
- Wire `/api/dashboard/summary → alerts` into the dashboard attention rail
  (currently hand-coded).

### P1
- Ops nav — desktop left rail + mobile bottom tab bar (from audit §3.3).
- Vitrine decomposition — split `vitrine-mvp-v2.jsx` (2 649 lines) into
  ~15 feature components.
- Storybook for shared kit (design agent sign-off without hitting backend).

### P2
- Font consolidation — drop Archivo, Space Grotesk, Newsreader,
  Spline Sans Mono. Keep only Bricolage Grotesque + Public Sans + one mono.
- Emoji-to-lucide replacement (60+ sites — see audit §2.5).
- Acheteur route re-implemented as a React app sharing the ops kit.

## Next tasks (immediate)
1. Retire `radar_hub/dashboard.py` once CI runs `./build_frontend.sh`.
2. Modal-ise ops prompts (Phase 2 kickoff).
3. Port dashboard `/` to shared UI kit + data-testids.

## Notes for future sessions
- The build script writes into `apps/*/dist/`. Do NOT gitignore these paths
  yet — the README explicitly commits the prebuilt bundles.
- Tailwind content globs now include `apps/_shared/*.{jsx,js}` — new shared
  components will get their classes purged correctly.
- The ops bundle uses arbitrary `bg-[var(--petrol)]` tailwind classes; the
  variables are defined in `apps/ops/src/ops.css` (not in tokens.css) since
  they belong to a legacy palette. Phase 3 will migrate them to `--paper`,
  `--ink` etc. from tokens.css.
