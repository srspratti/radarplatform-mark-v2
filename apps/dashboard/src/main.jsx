/* Realtor dashboard → Radar Hub live-data adapter.
 * The prototype ships as-is except one documented line: its module-level
 * `const CLIENTS = [...]` now reads `window.__RADAR_CLIENTS__ || [...]`.
 * This entry fetches hub data, transforms it to the prototype's contract,
 * sets the override, THEN dynamic-imports the component (module-eval order
 * matters — a static import would lock the mock in first).
 * If the hub is unreachable, the mock renders so the page never blanks.
 */
import React from "react";
import { createRoot } from "react-dom/client";

const KEY = new URLSearchParams(window.location.search).get("key") || "";
const H = KEY ? { "X-Radar-Key": KEY } : {};

const STAGE_IDX = { nouveau: 0, contacte: 0, client_actif: 0, en_reperage: 1,
                    en_visites: 2, offre: 3, transaction: 5, cloture: 7 };
const SOURCE_LABEL = { danny_channel: "Referral", own_generated: "Website",
                       matrix_visit: "Matrix", fub_import: "FUB",
                       prospecting_agent: "Prospection" };
const T_MAP = (t) => t.startsWith("offer") ? "offer"
  : t.startsWith("visit") ? "visit"
  : (t === "message.sent" || t === "email.opened" || t === "call.logged") ? "msg"
  : t === "listing.favorited" ? "save" : "view";

const EVENT_TXT = {
  "listing.viewed": "Viewed a listing", "tour3d.viewed": "Explored the 3D tour",
  "listing.favorited": "Saved a listing", "listing.shared": "Shared a listing",
  "portal.session_started": "Opened the Vitrine portal",
  "message.sent": "Sent a message", "email.opened": "Opened a Matrix alert",
  "call.logged": "Call logged", "visit.requested": "Requested a visit",
  "visit.scheduled": "Visit scheduled", "visit.completed": "Visit completed",
  "offer.submitted": "Offer submitted", "offer.accepted": "Offer accepted",
  "inspection.completed": "Inspection completed",
  "financing.confirmed": "Financing confirmed",
  "notary.scheduled": "Notary scheduled", "transaction.closed": "Closed",
  "client.converted": "Added to Centris", "crm.synced": "Synced to FUB",
  "lead.captured": "Lead captured", "lead.contacted": "First contact",
};

const ago = (iso) => {
  const m = Math.max(1, Math.round((Date.now() - new Date(iso + "Z")) / 60000));
  if (m < 60) return `${m} min`;
  if (m < 1440) return `${Math.round(m / 60)} h`;
  return `${Math.round(m / 1440)} d`;
};

function toClient(c) {
  const tl = c.timeline || [];
  const types = tl.map((e) => e.type);
  let stage = STAGE_IDX[c.stage] ?? 0;
  if (c.stage === "transaction") {
    stage = types.includes("notary.scheduled") ? 6
          : types.includes("offer.accepted") ? 4 : 5;
  }
  const count = (pred) => tl.filter((e) => pred(e.type)).length;
  const lastOffer = tl.find((e) => e.type === "offer.submitted" ||
                                   e.type === "offer.accepted");
  const bd = c.score_breakdown || {};
  const interestEv = tl.find((e) => e.payload &&
                             (e.payload.address || e.payload.listing_id));
  const chip = c.dormant
    ? { tone: "amber", txt: "Inactive 14 d+ — time to re-engage" }
    : types.includes("visit.requested")
      ? { tone: "ink", txt: "Visit requested via Vitrine — confirm a slot" }
      : lastOffer
        ? { tone: "amber", txt: EVENT_TXT[lastOffer.type] }
        : { tone: "ink", txt: `Stage: ${c.stage_label}` };
  return {
    id: c.id,
    name: c.name,
    phone: c.phone || "",
    initials: c.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase(),
    interest: c.sublabel || (interestEv &&
      (interestEv.payload.address || interestEv.payload.listing_id)) ||
      (c.notes || "").slice(0, 42) || "—",
    price: lastOffer && lastOffer.payload && lastOffer.payload.amount
      ? "$" + Number(lastOffer.payload.amount).toLocaleString("en-CA") : "—",
    stage,
    score: c.engagement_score,
    trend: 0, // period-over-period trend lands with the analytics phase
    last: tl.length ? ago(tl[0].ts) : "—",
    source: c.source === "fub_import" && c.sublabel
      ? c.sublabel : (SOURCE_LABEL[c.source] || c.source),
    signals: {
      views: count((t) => t === "listing.viewed" || t === "tour3d.viewed"),
      saves: count((t) => t === "listing.favorited"),
      visits: count((t) => t.startsWith("visit")),
      offers: count((t) => t.startsWith("offer")),
    },
    breakdown: {
      browsing: Math.round(bd.browsing || 0),
      comm: Math.round(bd.communication || 0),
      visits: Math.round(bd.visits || 0),
      offers: Math.round(bd.offers || 0),
    },
    chip,
    reply: "",
    dormant: c.dormant,
    timeline: tl.slice(0, 8).map((e) => ({
      t: T_MAP(e.type),
      txt: EVENT_TXT[e.type] || e.type,
      when: ago(e.ts) + " ago",
    })),
  };
}

function TopBar({ clients, hot, edition }) {
  const open = (e) => {
    const tok = e.target.value;
    if (tok) window.open(`/portail/${tok}`, "_blank");
    e.target.value = "";
  };
  const S = { bar: { display: "flex", alignItems: "center", gap: 12,
      padding: "8px 16px", background: "#0F1B2D", color: "#fff",
      fontFamily: "'Public Sans', system-ui, sans-serif", fontSize: 13,
      position: "sticky", top: 0, zIndex: 60 },
    a: { color: "#cbd5e1", textDecoration: "none", fontWeight: 600 },
    sel: { marginLeft: "auto", background: "#1e293b", color: "#fff",
      border: "1px solid #334155", borderRadius: 8, padding: "6px 8px",
      fontSize: 12.5, maxWidth: 260 } };
  return (
    <div style={S.bar}>
      <span style={{ fontWeight: 800 }}>RADAR<span style={{ color: "#f5a623" }}>HUB</span></span>
      <a href="/ops" style={S.a} title="Boîte de leads — entonnoirs FUB, tiers, références">📡 Radar · leads inbox{hot ? ` · ${hot} 🔥` : ""}</a>
      <a href="/ops" style={S.a}>🤖 Agents</a>
      <select style={S.sel} defaultValue="" onChange={open}
              title="Voir le portail comme le client le voit">
        <option value="" disabled>👁 Ouvrir le portail d'un client…</option>
        {clients.map((c) => (
          <option key={c.id} value={c.portal_token}>
            {c.name} — {c.engagement_score}/100
          </option>))}
      </select>
      <span style={{ color: "#64748b", fontSize: 11 }}>{edition}</span>
    </div>
  );
}

(async () => {
  let rich = [], hot = 0, edition = "";
  try {
    const [r, s, h] = await Promise.all([
      fetch("/api/dashboard/clients-rich", { headers: H }),
      fetch("/api/dashboard/summary", { headers: H }),
      fetch("/api/health"),
    ]);
    if (r.ok) rich = await r.json();
    if (s.ok) hot = (await s.json()).counts.hot_leads;
    if (h.ok) edition = `édition ${(await h.json()).edition}`;
    if (Array.isArray(rich) && rich.length) {
      window.__RADAR_CLIENTS__ = rich.map(toClient);
    }
  } catch (err) {
    console.warn("radar adapter: falling back to mock data", err);
  }
  const { default: RealtorDashboard } =
    await import("./realtor-engagement-dashboard.jsx");
  createRoot(document.getElementById("root")).render(
    <>
      <TopBar clients={rich.filter((c) => c.portal_token)}
              hot={hot} edition={edition} />
      <RealtorDashboard />
    </>
  );
})();
