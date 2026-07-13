/* Vitrine → Radar Hub bridge (v2).
 * The portal ships verbatim except five documented patches:
 *   (a) demo data renamed DEMO_LISTINGS + a __VITRINE_MERGE__ hook
 *   (b) a "Voir sur Centris ↗" deep link when a listing has centrisUrl
 *   (c) ListingsView fills the page — max-w-6xl + responsive card grid
 *   (d) app shell header widened to match (c)
 *   (e) __VITRINE_OPEN__ deep-link hook (opens ?listing=<no> on mount)
 * Everything else lives here:
 *   token       — /portail/<token> or ?t=
 *   listings    — GET /api/vitrine/listings/{token}; each parsed listing is
 *                 blended over a rotating demo template (3D plan, sector
 *                 analytics stay template-generic until fiche enrichment —
 *                 the built-in « générer le plan depuis la fiche » flow
 *                 produces the real 3D per listing)
 *   storage     — window.storage → hub KV (state follows the client)
 *   events      — vitrine2_events writes diffed → POST /api/webhooks/vitrine
 *                 (+ dwell/scroll tracker — enriched engagement signals)
 *   IA          — api.anthropic.com rerouted to the token-gated server proxy
 * No token ⇒ pure demo: no shim, no network chatter.
 */
import React from "react";
import { createRoot } from "react-dom/client";

const origFetch = window.fetch.bind(window);
const HUB = "";
const TOKEN = (() => {
  const m = window.location.pathname.match(/\/portail\/([\w-]+)/);
  const t = (m && m[1]) || new URLSearchParams(window.location.search).get("t") || "";
  return t === "demo" ? "" : t;
})();

const LOADED_AT = Date.now();
const EVENTS_KEY = "vitrine2_events";
const sent = new Set();

const MAP = {
  visit: "listing.viewed",
  tour_view: "tour3d.viewed",
  tour_room: "tour3d.viewed",
  reaction_interested: "listing.favorited",
  booking_request: "visit.requested",
  broker_message: "message.sent",
  chat_escalation: "message.sent",
  chat_message: "message.sent",
  // enriched engagement signals (small weights server-side)
  calc_use: "calculator.used",
  calc_adjust: "calculator.used",
  commute_calc: "calculator.used",
  section_view: "section.viewed",
  forecast_view: "section.viewed",
  risk_view: "section.viewed",
  amenity_view: "section.viewed",
  criteria_update: "criteria.updated",
};
// reaction_pass / theme_change / shop_item / chat_topic / designer_request
// deliberately stay local — noise or negative signals, not engagement.

let ADDR = {};           // centris_no -> address (from live listings fetch)
const seenSections = new Set();   // throttle section.viewed per session

function toHubEvent(e) {
  return { type: MAP[e.type], event_id: e.id, listing_id: e.lid || "",
           vitrine_type: e.type, ...(ADDR[e.lid] ? { address: ADDR[e.lid] } : {}),
           ...(e.meta || {}) };
}

async function forwardEvents(all) {
  if (!TOKEN || !Array.isArray(all)) return;
  const fresh = all.filter(
    (e) => e && e.ts > LOADED_AT && !sent.has(e.id) && MAP[e.type])
    .filter((e) => {
      if (MAP[e.type] !== "section.viewed") return true;
      const key = `${e.lid}-${(e.meta && e.meta.s) || e.type}`;
      if (seenSections.has(key)) return false;
      seenSections.add(key);
      return true;
    });
  if (!fresh.length) return;
  fresh.forEach((e) => sent.add(e.id));
  fresh.filter((e) => e.type === "visit").forEach((e) => dwell.switchTo(e.lid));
  try {
    await origFetch(`${HUB}/api/webhooks/vitrine`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_token: TOKEN,
        events: fresh.map(toHubEvent),
      }),
    });
  } catch (err) { console.warn("radar-bridge: webhook", err); }
}

/* Dwell/scroll tracker — attentive-reading signal without touching the
 * component. Accumulates VISIBLE time on the current listing (visibilitychange
 * pauses the clock) + max scroll depth; a listing switch or pagehide flushes
 * one listing.dwell event when the total reaches 30 s. */
const dwell = (() => {
  let lid = null, startedAt = 0, acc = 0, depth = 0;
  const now = () => Date.now();
  const running = () => document.visibilityState === "visible" && lid;
  const pause = () => { if (startedAt) { acc += now() - startedAt; startedAt = 0; } };
  const resume = () => { if (running() && !startedAt) startedAt = now(); };
  function flush(useBeacon) {
    pause();
    const secs = Math.round(acc / 1000);
    if (lid && secs >= 30) {
      const body = JSON.stringify({ client_token: TOKEN, events: [{
        type: "listing.dwell", event_id: `dwell-${lid}-${LOADED_AT}`,
        listing_id: lid, seconds: secs,
        scroll_depth: Math.round(depth * 100) / 100,
        ...(ADDR[lid] ? { address: ADDR[lid] } : {}) }] });
      if (useBeacon && navigator.sendBeacon) {
        navigator.sendBeacon(`${HUB}/api/webhooks/vitrine`,
          new Blob([body], { type: "application/json" }));
      } else {
        origFetch(`${HUB}/api/webhooks/vitrine`, { method: "POST",
          headers: { "Content-Type": "application/json" }, body }).catch(() => {});
      }
    }
    acc = 0; depth = 0;
  }
  return {
    switchTo(next) {
      if (!TOKEN || next === lid) return;
      flush(false);
      lid = next; startedAt = now(); resume();
    },
    init() {
      if (!TOKEN) return;
      document.addEventListener("visibilitychange",
        () => (document.visibilityState === "visible" ? resume() : pause()));
      window.addEventListener("scroll", () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        if (max > 0) depth = Math.max(depth, (h.scrollTop || window.scrollY) / max);
      }, { passive: true });
      window.addEventListener("pagehide", () => flush(true));
    },
  };
})();

if (TOKEN) {
  window.storage = {
    async get(key) {
      const r = await origFetch(
        `${HUB}/api/vitrine/storage/${TOKEN}/${encodeURIComponent(key)}`);
      if (!r.ok) throw new Error("kv miss");
      return r.json();
    },
    async set(key, value) {
      if (key === EVENTS_KEY) {
        try { forwardEvents(JSON.parse(value)); } catch { /* noop */ }
      }
      const r = await origFetch(
        `${HUB}/api/vitrine/storage/${TOKEN}/${encodeURIComponent(key)}`,
        { method: "PUT", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }) });
      if (!r.ok) throw new Error("kv set failed");
      return r.json();
    },
    async delete(key) {
      const r = await origFetch(
        `${HUB}/api/vitrine/storage/${TOKEN}/${encodeURIComponent(key)}`,
        { method: "DELETE" });
      if (!r.ok) throw new Error("kv del failed");
      return r.json();
    },
  };
}

window.fetch = (url, opts = {}) => {
  const u = typeof url === "string" ? url : url.url;
  if (u && u.startsWith("https://api.anthropic.com/v1/messages")) {
    let payload = {};
    try { payload = JSON.parse(opts.body || "{}"); } catch { /* noop */ }
    return origFetch(`${HUB}/api/vitrine/ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: TOKEN, payload }),
    });
  }
  return origFetch(url, opts);
};

// --- live listings merge -----------------------------------------------------
function buildMerge(live) {
  return (demos) => {
    if (!live.length) return demos;
    return live.map((r, i) => {
      const tpl = demos[i % demos.length];
      const priceRatio = r.price && tpl.price ? r.price / tpl.price : 1;
      return {
        ...tpl,
        id: r.centris_no,
        addr: r.address || `Inscription Centris ${r.centris_no}`,
        area: r.area || tpl.area,
        price: r.price || tpl.price,
        evalMun: r.price ? Math.round(r.price * 0.86) : tpl.evalMun,
        beds: r.beds || tpl.beds,
        baths: r.baths || tpl.baths,
        typeFr: r.prop_type || tpl.typeFr,
        typeEn: r.prop_type || tpl.typeEn,
        taxesMun: Math.round((tpl.taxesMun || 3000) * priceRatio),
        centrisUrl: r.url || "",
        isLive: true,
      };
    });
  };
}

(async () => {
  if (TOKEN) {
    try {
      const r = await origFetch(`${HUB}/api/vitrine/listings/${TOKEN}`);
      if (r.ok) {
        const live = await r.json();
        if (Array.isArray(live)) {
          live.forEach((l) => { if (l.address) ADDR[l.centris_no] = l.address; });
        }
        window.__VITRINE_MERGE__ = buildMerge(Array.isArray(live) ? live : []);
      }
    } catch (err) { console.warn("radar-bridge: listings", err); }
    dwell.init();
    // ?listing=<no> deep link (tracked alert-email click) → patch (e) opens it
    const wanted = new URLSearchParams(window.location.search).get("listing");
    if (wanted) window.__VITRINE_OPEN__ = wanted;
    const day = new Date().toISOString().slice(0, 10);
    origFetch(`${HUB}/api/webhooks/vitrine`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_token: TOKEN, events: [
        { type: "portal.session_started", event_id: `sess-${TOKEN}-${day}` }] }),
    }).catch(() => {});
  }
  const { default: App } = await import("./vitrine-mvp-v2.jsx");
  createRoot(document.getElementById("root")).render(<App />);
})();
