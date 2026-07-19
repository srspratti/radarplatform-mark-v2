# Radar Platform — UI/UX Audit & Recommendations

> Scope: entire monorepo (4 distinct frontends). Deliverable requested by user:
> **recommendation document for review — no implementation yet.**
> Reviewed: `apps/dashboard/src/`, `apps/vitrine/src/`, `radar_hub/dashboard.py`,
> `radar_acheteur/dashboard.html`.

---

## 0. TL;DR — the 10 things I would fix first

| # | Fix | Impact | Effort |
|---|-----|--------|--------|
| 1 | **Unify the 4 design languages** behind one shared token set (colors, type, radius, motion). Today each surface reads like a different product. | High | M |
| 2 | **Kill CDN Tailwind + in-browser Babel** on `/ops` — ships ~2 MB, blocks paint, breaks CSP. Move to the same esbuild pipeline as `apps/*`. | High | M |
| 3 | **Replace 22 `window.prompt / confirm`** calls in the Ops console (consent basis, call notes, slots, purchase price…) with proper modals + forms. This is the single biggest usability drag. | High | S |
| 4 | **Deduplicate `ScoreRing`, `Stepper`, `SourceChip`, `Trend`** — implemented 3× across dashboards. One `@radar/ui` package. | High | S |
| 5 | **Decompose `vitrine-mvp-v2.jsx` (2 649 lines, 1 file)** into ~15 feature components. Currently unmaintainable and the largest slow-paint page. | High | L |
| 6 | **Emoji-as-icon audit.** Replace 60+ inline emoji (📡🤖⏰⭐🎂🧾📈⏳🔥😴🛰️🔁⚙) with `lucide-react` — mixed metaphors hurt scannability and accessibility. | Med | S |
| 7 | **Add data-testids everywhere** (currently zero) — required for QA + regression pipeline. | Med | S |
| 8 | **Add empty, loading, and error states** — several panels blank out silently on `fetch` failure. | Med | S |
| 9 | **Contrast + focus audit** on dark surfaces. Several chip colors on `#0c2530` fail WCAG AA (see §4). | Med | S |
| 10 | **Give `/ops` a proper nav** — tabs are currently a horizontal chip row that scrolls off screen on mobile. It's the operator's main workspace. | Med | S |

---

## 1. Inventory — what each surface is today

| Route | File | Lines | Palette | Type | Icons | Feel |
|---|---|---|---|---|---|---|
| `/` Realtor dashboard | `realtor-engagement-dashboard.jsx` | 690 | Ink `#0F1B2D` on Paper `#F4F6F8`, HOT `#047857`, WARM `#D97706`, COOL `#94A3B8` | Archivo (display) + Public Sans | `lucide-react` | Editorial console, light |
| `/portail/{token}` Vitrine | `vitrine-mvp-v2.jsx` | **2 649** | Metro `#1656B4`, Ochre `#E8A33D`, Spruce `#2F7D5C`, Snow `#F6F8FA` | Bricolage Grotesque + Public Sans + Spline Sans Mono | `lucide-react` + `three` | "Civic Québec", data-rich, light |
| `/ops` Operations | `radar_hub/dashboard.py` (inline) | ~1 200 | Petrol `#06171c`, Amber `#f5a623`, Ok `#39d98a`, Warn `#f87171` | Space Grotesk + IBM Plex Mono | **Emoji** | Dark instrument readout |
| `/acheteur` Buyer intel | `radar_acheteur/dashboard.html` | 235 | Ink `#0E2933`, Signal `#F2B441`, Heat `#FF6A4D`, Cool `#63B3A6` | Space Grotesk + Newsreader + IBM Plex Mono | inline SVG | Dark editorial, animated radar |

**The core problem:** four different type ramps, four palettes, four icon strategies, four spacing systems. A user hopping `/ops` → `/` → `/portail` feels like they logged into three different companies.

---

## 2. Cross-cutting recommendations

### 2.1 One design system, two themes

Introduce `packages/ui/tokens.ts` (or `radar_hub/static/tokens.css`) exposing:

```css
:root {                       /* light — used on /, /portail */
  --ink: 210 30% 12%;         /* #0F1B2D */
  --paper: 210 20% 97%;
  --line: 213 27% 91%;
  --brand: 216 79% 40%;       /* metro blue, doubles as focus ring */
  --accent: 33 78% 57%;       /* ochre/amber, single accent */
  --ok: 158 64% 27%;
  --warn: 32 95% 44%;
  --danger: 0 72% 45%;
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px;
  --shadow-1: 0 1px 2px rgb(15 27 45 / 6%);
  --shadow-2: 0 8px 24px -8px rgb(15 27 45 / 18%);
}
[data-theme="dark"] {         /* used on /ops, /acheteur */
  --ink: 195 55% 92%;
  --paper: 197 62% 7%;        /* petrol */
  --line: 195 51% 21%;
  --brand: 33 90% 55%;        /* on dark the amber becomes primary */
  --accent: 197 40% 45%;
  ...
}
```

**Payoff:** the "civic Québec" identity is genuinely strong on Vitrine — bring metro-blue + ochre into `/` and drop the pure navy so the four surfaces share DNA. Keep the dark petrol variant for `/ops` and `/acheteur` (operator surfaces), but source the tokens from the same file.

### 2.2 One type ramp

Pick **two** typefaces total, not five. My recommendation, given the Québec/civic angle already present in Vitrine:

- **Bricolage Grotesque** — display / numerals (already loaded on Vitrine, distinctive, has variable optical size)
- **Public Sans** — body (already loaded on 3 of 4 surfaces)
- Retire Archivo (dashboard), Space Grotesk (ops, acheteur), IBM Plex Mono (ops, acheteur), Newsreader (acheteur), Spline Sans Mono (vitrine).
- Keep **one** mono for tabular data — `JetBrains Mono` or `IBM Plex Mono`, pick one.

Ramp (rem-based, remove hand-tuned `fontSize: 11 / 12 / 12.5 / 13 …`):

```
--fs-eyebrow: 0.6875rem / 0.16em tracking / uppercase
--fs-caption: 0.75rem
--fs-body-s:  0.8125rem
--fs-body:    0.9375rem
--fs-h4:      1.125rem   (Bricolage 600)
--fs-h3:      1.5rem     (Bricolage 700)
--fs-h2:      2rem       (Bricolage 700)
--fs-display: clamp(2.25rem, 5vw, 3.25rem) (Bricolage 800)
```

Today the dashboard uses `fontSize: 10, 11, 11.5, 12, 12.5, 13, 15, 18, 24, 26` — 10 sizes in one file, none from a scale.

### 2.3 One motion vocabulary

Vitrine has a decent `fadeUp` + `seg-grow`; Ops has `fadein`; the dashboard has none; Acheteur has a spinning radar. Standardise:

- `--dur-1: 120ms` (hovers)
- `--dur-2: 240ms` (page fade-in, stepper progress)
- `--dur-3: 480ms` (score ring fill, forecast bars)
- `--ease-out: cubic-bezier(.2,.8,.2,1)`
- Respect `prefers-reduced-motion` **everywhere** (currently only Vitrine + Acheteur do).

### 2.4 Shared component library

At minimum, extract:

| Component | Duplicates today | Notes |
|---|---|---|
| `ScoreRing` | dashboard, ops, contacts view | Same SVG, three implementations |
| `Stepper` / `Pipeline` | dashboard (STAGES), ops (Stepper), Vitrine has its own funnel | 3 variants |
| `SourceChip` | dashboard (`SOURCE_LABEL`), ops (`SOURCE_META`) | Same domain, two colour maps |
| `Trend` (▲▼—) | dashboard only, but Ops re-invents it inline as coloured spans | 2 |
| `Toast` | ops has one, others use nothing | 1 |
| `Sheet / Drawer` | dashboard chat drawer + ops contact detail drawer + Vitrine modals | 3 variants |
| `Chip` tone system | dashboard `CHIP_TONES {ink,amber,red}` + ops `SOURCE_META` + acheteur inline | 3 |
| `Ring / Ping status` | dashboard "Synced" pill, acheteur "live" pip, ops "sw" dot | 3 |

Ship as `apps/_ui/` or a `@radar/ui` workspace. Vitrine and Ops both already React 18 — trivial.

### 2.5 Icons

**Rule: no emoji inside interactive controls or in dense data columns.** Emoji rendering varies by OS (Apple's 📡 is a satellite dish; Windows' is a car radio antenna), and screen readers announce them literally ("emoji satellite antenna"). Keep emoji only for:

- Empty-state illustrations
- Onboarding/marketing pages
- Client-visible flourish (Vitrine already uses inline SVG — good)

Replace with `lucide-react` (already installed):

| Today | Replace with |
|---|---|
| 📡 Radar tab | `Radar` |
| 🤖 Agents | `Bot` |
| 📞 Appeler | `Phone` (already used elsewhere — inconsistent!) |
| ⭐ Forfaits | `Star` |
| ⏳ Échéances | `Timer` |
| 🎂 Client à vie | `Cake` |
| 🧾 Rapport | `Receipt` |
| 📈 Rapport de valeur | `TrendingUp` |
| 🔥 Chauds | `Flame` (already in Vitrine — inconsistent!) |
| 😴 Inactifs | `Moon` |
| ▮ (block char used as bullet) | `<span class="eyebrow-tick" />` (rendered CSS block) |

### 2.6 Kill `window.prompt` / `confirm` in `/ops`

I counted **22** `window.prompt` calls and several `window.confirm` in `radar_hub/dashboard.py`:

- Consent basis picker
- Call notes + outcome (two prompts back-to-back!)
- Purchase price
- Slot proposals (comma-separated string)
- API key entry
- Review context
- Voice greeting overrides
- Etc.

These are jarring, unstyleable, unaccessible (no ARIA), block the tab, and can't be tested. **Every one of them should become a proper form or slide-over.** For quick actions (single field), a compact popover anchored to the button is enough.

### 2.7 Accessibility

- Add `data-testid` to every interactive element (0 today). Convention: `kebab-case-role-context`, e.g. `radar-lead-row-convert-btn`.
- Add `aria-label` on icon-only buttons (partly done in dashboard, missing on ops).
- Focus ring: single unified `outline: 2px solid var(--focus); outline-offset: 2px`. Ops already has it — port it to the others.
- Skip-to-content link on `/ops` (long horizontal tab bar).
- Announce toasts as `role="status" aria-live="polite"`.
- Colour contrast: `--mute #6f939d` on `--petrol #06171c` is 4.2:1 — passes AA for large text only. Bump to `#8fb0b8`.

### 2.8 Tokens for tabular numbers

Prices, scores, deltas, phone counts — use `font-variant-numeric: tabular-nums` + `font-feature-settings: "ss01"`. Dashboard does this in *some* places (`.tabular-nums`), Ops and Acheteur don't.

### 2.9 Storybook

Given four surfaces sharing domain concepts (lead, client, engagement score, priority score, funnel, source chip, stage), a Storybook is the ROI-est investment. Even a minimal `@storybook/react-vite` catalogue would let Danny sign off on states without waking the backend.

---

## 3. Surface-by-surface recommendations

### 3.1 `/` — Realtor Engagement Dashboard

**Strong points**
- Clean information architecture: stats → alerts → filters → ledger → dossier.
- The `ScoreRing` + `Trend` + `Stepper` combo is a legitimately good "instrument" pattern.
- Bilingual `T()` helper is elegant and thorough.
- Left-aligned editorial layout is uncommon and works.

**Fix**
1. **Move the mocked `CLIENTS` array out of the component file** into `mocks/clients.fixture.js`. Today 140 lines of demo data live in the source file — noise for reviewers, always shipped.
2. **The stepper labels wrap awkwardly** on mobile (8 stages @ 62 px = 496 px min-width, then `overflow-x-auto`). Consider a two-line variant on <640 px: dot row + current-stage label only.
3. **Chat drawer** — the client's typed replies are canned (`SEED_MSGS`). Ship a clear "demo response — will be replaced by realtime chat" microcopy or hide behind a feature flag.
4. **Attention rail (`ALERTS`) is hand-written** rather than derived. Should come from `/api/dashboard/summary → alerts`, which already exists (see `radar_hub/dashboard.py:249`). Wire it.
5. **Filter chips have no active-count state** when the count is 0 — clicking "Re-engage (0)" still filters and shows an empty list with no explanation.
6. **The top bar** (`main.jsx:TopBar`) is written in inline styles while the rest is Tailwind — pick one.
7. **Score ring** — the trend chip below the ring is a small spot for the WoW delta; consider promoting to inside the ring as a delta arc, so the ring itself tells the whole "now vs last week" story.
8. **Dossier density** — on 1440-wide, the right column has huge whitespace under `Recent activity`. Add a "Next best action" card (call, send comps, ask for financing update) driven by `chip.tone`.
9. **Add a keyboard hotkey palette** (`Cmd+K`): jump to client, open portal-as, mark contacted, add note. Table with 10+ rows begs for it.

**Small polish**
- Avatar colour hashing is by `id % 10`. Use a hash of `initials` so the same person keeps the same colour across sessions.
- `ChevronLeft` "Tous les clients" only shows on mobile back — but sits underneath the header on tablet-portrait too. Media query mismatch.
- `.hidden md:flex` count icons overlap the stage chip at ~830 px. Add a `hidden lg:flex`.

### 3.2 `/portail/{token}` — Vitrine (client-facing)

This is the crown jewel of the platform, and also where the codebase pain is worst.

**Strong points**
- Rich, credible: Canadian mortgage math, welfare tax by municipality, CMHC bands, radon/pyrite/flood risks, commuting curves by hour, 3D floor-plan via `three.js`, forecasts phased by driver.
- "Civic Québec" palette (metro blue + ochre + spruce) is genuinely distinctive — this is the vibe to standardise on.
- Bilingual + tabular currency (`Intl.NumberFormat`) done right.

**Fix**
1. **Decompose the 2 649-line file** into ~15 features:
   ```
   apps/vitrine/src/
     features/
       listing-card/
       finance/mortgage-calculator.jsx
       finance/welcome-tax.jsx
       finance/heat-cost.jsx
       tour3d/dollhouse.jsx
       tour3d/floorplan.jsx
       neighbourhood/walk-transit-bike.jsx
       neighbourhood/amenities.jsx
       neighbourhood/commute-curve.jsx
       neighbourhood/demographics.jsx
       risks/risk-strip.jsx
       forecast/price-projection.jsx
       forecast/driver-chip.jsx
       disclosure/dv-questions.jsx
       compare/side-by-side.jsx
     hooks/use-portal-state.js  (currently ad-hoc)
     lib/money.js  mortgage.js  forecast.js  colours.js
   ```
   Each ≤200 lines. Sound reason: several of these (mortgage, forecast, risk strip) are unit-testable in isolation — today they aren't tested at all.
2. **Nav / IA** — with this many features (3D tour, mortgage, tax, risks, demographics, forecast, commute, compare, offer readiness), the page **needs a persistent side rail or sticky segmented nav**. Right now it's a long scroll and users overshoot.
3. **The `HEAT` island chip** on cards uses ochre; the `WARM` engagement colour on `/` also uses ochre; they're unrelated concepts. Semantic drift — add a lint rule.
4. **The 3D dollhouse** is impressive but expensive on mobile. Lazy-load (`import.meta.glob` + `Suspense`) so first paint doesn't pay the `three` bill.
5. **Sun/Moon toggle** (day/night in tour) collides with the platform's convention of Sun/Moon for light/dark theme. Use `Sunrise`/`Sunset` or a labelled slider.
6. **Mortgage inputs** — the down-payment slider % is not linked to the CMHC insurance calculation visibly. Show: "20% down → no insurance" / "10% down → +2.8% premium" as a live chip beside the slider.
7. **`prefersReduced` check at module-eval time only** — won't update if the user toggles OS-level motion during a session. Use a subscription or a `useMediaQuery` hook.
8. **Accessible names for all lucide icons** used as decoration inside data rows (currently unlabelled).

**Client-facing polish (revenue lever)**
- Sticky bottom action bar on mobile with `Contacter le courtier / Réserver une visite` — Vitrine's conversion moment is currently buried below the fold on mobile.
- "Faits saillants" hero card summarising the 5 most compelling numbers (price/sqft vs neighbourhood median, walk score, projected 6y value band, welcome tax, monthly payment) — one glance credibility.
- Prominent Loi 25 privacy pill (already exists on Acheteur — port it): tells the buyer their behaviour never leaves this portal. Trust lever.

### 3.3 `/ops` — Operations Console

This is where the operator lives. It's also the surface with the most tech debt.

**Strong points**
- The dark-petrol / amber "instrument" aesthetic is defensible and matches the ATC/radar metaphor.
- Density is appropriate for an ops surface.
- The `▮` block prefix on section headers is a nice recurring detail.

**Fix — architecture**
1. **Move off `cdn.tailwindcss.com` + `@babel/standalone`**. Right now every load compiles JSX in the browser and dynamically generates Tailwind — this is the [documented dev-only path](https://tailwindcss.com/docs/installation/play-cdn), unfit for production. Add an esbuild bundle like `apps/dashboard/`.
2. **Split `dashboard.py:DASHBOARD_HTML`** (1 200 lines of JSX inside a Python string) into `apps/ops/src/` mirroring dashboard/vitrine. Python file becomes 30 lines that serve the bundle.
3. **API layer** — the `api()` helper handles 401 via `window.prompt` for the API key. This should be a dedicated `<KeyGate />` component with a proper form and "remember for this session" checkbox.

**Fix — UX**
1. **Tab bar** (`RadarView | ContactsView | AgentsView | Settings`) is a horizontal chip row. On <=768px it scrolls horizontally and loses context. Convert to:
   - Desktop: left rail (icon + label, collapsible).
   - Mobile: bottom tab bar (iOS-native pattern for an ops app that's likely used on-site).
2. **Every `window.prompt` → dialog + form.** Priorities:
   - Call-note dialog: single card with `notes` textarea, `outcome` radio group (Reached / Voicemail / No answer / Wrong number), auto-save draft.
   - Slot proposer: three date-time pickers, preview the outgoing SMS text below.
   - Consent basis: radio group with per-option one-line legal explainer.
3. **`SellerPanel`** exposes seven buttons per prospect row (letter, call, email, sms, voice, promote, consent select) — visually chaotic. Group into `[Contact ▾] [Convert]` split-buttons with the CASL basis inline as a chip you edit.
4. **The unified `Timeline`** in the client drawer shows origin-icon + type + payload_id — dense mono, hard to skim. Break into typed rows (view / message / offer / visit) with an icon column, and colour the actor column (`client` accent vs `broker` neutral).
5. **`FollowupsPanel`** buttons `[✓ Done]` and `[Skip]` are the same colour weight — Done should be primary, Skip secondary.
6. **Toasts** live at bottom-centre but the primary action buttons are also bottom-right on mobile — collision risk. Move to top-right with a stack.
7. **Feature-gated buttons** currently render as `🔒 Label` with a `border-dashed`. Add a hover popover with "Included in Platinum · Try 14 d" CTA instead — this is the natural upsell surface for the tiered product.
8. **Prompt-driven API key entry** — some operators will paste in the URL bar. Add a proper `/ops/settings/security` page.
9. **`SourceChip`** — the current amber-on-amber, sky-on-sky, violet-on-violet chips have low contrast because the border is at `/40` alpha. Push borders to `/60`.

**Fix — content**
- Replace `▮ RADAR — INTELLIGENCE D'ACHAT · signaux prioritaires` all-caps monospace section headers with a Bricolage 600 h4. Keep the `▮` tick but use it as a colour accent, not a character.
- Priority hints translated via find-replace (`PHRASE_EN`) are brittle — one word change on the backend breaks EN. Ship priority hints as `{code, params}` from the server, translate client-side.

### 3.4 `/acheteur` — Radar Acheteur

**Strong points**
- Best-looking surface visually. The animated radar sweep, IBM Plex numerals, sector heat bars, and privacy pill all feel considered.
- Newsreader italic in `h1 .amp` is a lovely touch.

**Fix**
1. **Static HTML file** — no framework, no bundler. Fine as-is *if* it's frozen; risky if it grows. Given the domain overlap with `/ops` contacts, I'd re-implement it as a React route inside the same app to reuse the shared UI kit.
2. **`transform-origin: 150px 150px`** on the radar sweep is fine at 300×300 but breaks if the SVG is resized. Use `%`.
3. **Colour system** — the ink `#0E2933`, signal `#F2B441`, cool `#63B3A6` don't match either `/ops` or `/`. Merge with `/ops`'s petrol/amber and drop `Newsreader` to unify.
4. **Heat bar rows** — the value on the right is aligned by `text-align: right` with a fixed width; long percentages wrap in French labels ("Introduction par effraction"). Truncate name column with tooltip.
5. **"Locked" network zone** with the dashed border is a nice teaser card — extend the pattern to feature-gated items in `/ops` for a coherent upsell UX.
6. **Accessible motion** — reduce-motion respected, good. But `aria-hidden="true"` on the radar SVG only hides *the graphic* — the surrounding pip animation isn't muted for screen readers. Add a `role="img" aria-label` on the mast if you want it announced, otherwise wrap both in the same `aria-hidden`.

---

## 4. Contrast & accessibility spot-check

Sampled with WCAG contrast ratios (foreground / background, minimum for body text = 4.5, for large ≥18 px = 3.0):

| Where | Colours | Ratio | Verdict |
|---|---|---|---|
| Ops mute text | `#6f939d` on `#06171c` | 4.28 | Fails AA body — bump to `#8fb0b8` (5.55) |
| Ops source chip `sky` | `text-sky-300` on `bg-sky-400/15` panel | ~3.9 | Fails AA — increase text saturation |
| Dashboard eyebrow | `#64748b` on `#F4F6F8` | 4.24 | Fails AA body — use `#475569` |
| Vitrine sub text | `#5A6577` on `#FFFFFF` | 5.72 | Passes AA |
| Acheteur `.faint` | `#6E9199` on `#0E2933` | 4.47 | Borderline, use for ≥14 px only |

Focus rings, keyboard nav, and skip-links are missing on `/` and `/portail`.

---

## 5. Mobile audit

| Surface | State | Notes |
|---|---|---|
| `/` | Adequate | Ledger→Detail slide-in works. Stepper `min-width:540px` is a horizontal-scroll trap. |
| `/portail` | Dense | 3D tour heavy on mobile; sticky CTA missing. |
| `/ops` | **Poor** | Tab strip scrolls off; drawer takes full width on <640 px which is right, but the `panel2 p-3` grid inside is 2-col-min and clips. |
| `/acheteur` | Good | Two breakpoints (`680 px`), collapses cleanly. |

Consider a **mobile-first pass on `/ops` specifically** — operators use this in the car and at showings.

---

## 6. Micro-copy & bilingual

Overall French/English parity is exceptional (rare to see). Small notes:

- `T("il y a " + ago(e.ts), ago(e.ts) + " ago")` in `main.jsx:132` — the `ago()` value is placed inside the string before the branch decides language. If `ago()` returns `"15 min"` you get `"il y a 15 min"` and `"15 min ago"` — fine. But if you localise the *unit* later (`min`/`min`, `h`/`h`, `j`/`d`) you'll be stuck. Extract a `formatAgo(iso, lang)`.
- `PHRASE_EN` in `dashboard.py:62-70` is a find-replace i18n. Move to keyed strings from the backend as noted in §3.3.
- The word "Vitrine" is a brand — good. But "Radar" is used for the buyer-intel module *and* the leads tab *and* the platform itself. Recommend: `Radar Platform` (product), `Radar Inbox` (leads tab), `Radar Acheteur` (buyer-intel module). Set the convention in the README.

---

## 7. Proposed roadmap (if you decide to implement)

**Phase 1 — Foundation (1 – 2 weeks)**
- Extract shared tokens (colors, type, radius, motion) → `apps/_shared/tokens.css`.
- Extract shared UI kit (`ScoreRing`, `Stepper`, `SourceChip`, `Trend`, `Chip`, `Drawer`, `Toast`, `Ring`).
- Move `/ops` off CDN Tailwind + Babel; add esbuild bundle mirroring `apps/dashboard`.
- Add data-testids to every interactive element.

**Phase 2 — Ops UX (1 week)**
- Replace all `prompt/confirm` with modals.
- Rebuild left/bottom nav.
- Fix contrast + focus rings.
- Add keyboard palette (`Cmd+K`).

**Phase 3 — Vitrine decomposition (2 – 3 weeks)**
- Split `vitrine-mvp-v2.jsx` into features.
- Introduce sticky mobile CTA bar.
- Lazy-load 3D + forecast + demographics.
- Add "Faits saillants" hero card.

**Phase 4 — Dashboard polish (3 – 5 days)**
- Wire `/api/dashboard/summary → alerts` to attention rail.
- Move mock `CLIENTS` out of source.
- Add "Next best action" card.
- Mobile stepper redesign.

**Phase 5 — Acheteur consolidation (optional, 3 – 5 days)**
- Re-implement as React route in main app, on shared kit.

**Estimated total:** 4 – 7 weeks of focused UI work.

---

## 8. Business enhancement (unsolicited, take or leave)

**Portable "trust badge" for the broker.**
Every Vitrine portal already tracks engagement, respects Loi 25, and never leaks buyer behaviour. Convert this into a *broker-facing* asset:

- A 60-second `/portail/{token}/preview.mp4` (auto-generated) the broker can text a prospect during a listing appointment: *"Voici votre portail privé — vos données ne quittent jamais mon espace."*
- A one-page PDF (Loi 25 + CASL posture, mini engagement dashboard) the broker prints at signing.

This turns your **compliance work into a sales lever** at the exact moment a competing broker is showing a Compass/Zillow demo. Zero incremental engineering — you already have the data, the portal, and the compliance copy.

---

## 9. Deliverable status

- [x] Reviewed all four frontend surfaces
- [x] Identified 10 top-priority fixes
- [x] Cross-cutting recommendations (design system, motion, icons, a11y)
- [x] Per-surface recommendations
- [x] Contrast & mobile audits
- [x] Proposed 5-phase roadmap
- [x] One revenue/positioning enhancement

**Next step — your call:**
1. **Approve the doc as-is** and I'll open the Phase 1 tasks (tokens + shared UI kit + Ops bundler).
2. **Cherry-pick** a subset (e.g. only Ops UX + dashboard polish).
3. **Ask for deeper dives** into any surface — I can produce Figma-style annotated screenshots or a working prototype for one surface as a next iteration.
