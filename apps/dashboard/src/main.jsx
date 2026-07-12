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
import { LANG, T, flipLang } from "./i18n.js";

const KEY = new URLSearchParams(window.location.search).get("key") || "";
const H = KEY ? { "X-Radar-Key": KEY } : {};

const STAGE_IDX = { nouveau: 0, contacte: 0, client_actif: 0, en_reperage: 1,
                    en_visites: 2, offre: 3, transaction: 5, cloture: 7 };
const SOURCE_LABEL = { danny_channel: T("Referral", "Référence"),
                       own_generated: T("Website", "Site web"),
                       matrix_visit: "Matrix", fub_import: "FUB",
                       prospecting_agent: T("Prospecting", "Prospection") };
const T_MAP = (t) => t.startsWith("offer") ? "offer"
  : t.startsWith("visit") ? "visit"
  : (t === "message.sent" || t === "email.opened" || t === "call.logged") ? "msg"
  : t === "listing.favorited" ? "save" : "view";

const EVENT_TXT = {
  "listing.viewed": T("Viewed a listing", "Fiche consultée"),
  "tour3d.viewed": T("Explored the 3D tour", "Visite 3D explorée"),
  "listing.favorited": T("Saved a listing", "Fiche sauvegardée"),
  "listing.shared": T("Shared a listing", "Fiche partagée"),
  "portal.session_started": T("Opened the Vitrine portal", "Portail Vitrine ouvert"),
  "message.sent": T("Sent a message", "Message envoyé"),
  "email.opened": T("Opened a Matrix alert", "Alerte Matrix ouverte"),
  "call.logged": T("Call logged", "Appel consigné"),
  "visit.requested": T("Requested a visit", "Visite demandée"),
  "visit.scheduled": T("Visit scheduled", "Visite planifiée"),
  "visit.completed": T("Visit completed", "Visite complétée"),
  "offer.submitted": T("Offer submitted", "Offre déposée"),
  "offer.accepted": T("Offer accepted", "Offre acceptée"),
  "inspection.completed": T("Inspection completed", "Inspection complétée"),
  "financing.confirmed": T("Financing confirmed", "Financement confirmé"),
  "notary.scheduled": T("Notary scheduled", "Notaire planifié"),
  "transaction.closed": T("Closed", "Clôturé"),
  "client.converted": T("Added to Centris", "Ajouté à Centris"),
  "crm.synced": T("Synced to FUB", "Synchronisé vers FUB"),
  "lead.captured": T("Lead captured", "Lead capté"),
  "lead.contacted": T("First contact", "Premier contact"),
};

const ago = (iso) => {
  const m = Math.max(1, Math.round((Date.now() - new Date(iso + "Z")) / 60000));
  if (m < 60) return `${m} min`;
  if (m < 1440) return `${Math.round(m / 60)} h`;
  return `${Math.round(m / 1440)} ${T("d", "j")}`;
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
    ? { tone: "amber", txt: T("Inactive 14 d+ — time to re-engage",
                              "Inactif 14 j+ — à relancer") }
    : types.includes("visit.requested")
      ? { tone: "ink", txt: T("Visit requested via Vitrine — confirm a slot",
                              "Visite demandée via la Vitrine — confirmer un créneau") }
      : lastOffer
        ? { tone: "amber", txt: EVENT_TXT[lastOffer.type] }
        : { tone: "ink", txt: `${T("Stage", "Étape")}: ${c.stage_label}` };
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
      when: T(ago(e.ts) + " ago", "il y a " + ago(e.ts)),
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
      fontSize: 12.5, maxWidth: 260 },
    lang: { background: "#1e293b", color: "#fff", border: "1px solid #334155",
      borderRadius: 99, padding: "5px 10px", fontSize: 12, fontWeight: 700,
      cursor: "pointer" } };
  return (
    <div style={S.bar}>
      <span style={{ fontWeight: 800 }}>RADAR<span style={{ color: "#f5a623" }}>HUB</span></span>
      <a href="/ops" style={S.a} title={T("Leads inbox — FUB funnels, tiers, referrals", "Boîte de leads — entonnoirs FUB, tiers, références")}>📡 Radar · {T("leads inbox", "boîte de leads")}{hot ? ` · ${hot} 🔥` : ""}</a>
      <a href="/ops" style={S.a}>🤖 Agents</a>
      <select style={S.sel} defaultValue="" onChange={open}
              title={T("See the portal as the client sees it", "Voir le portail comme le client le voit")}>
        <option value="" disabled>{T("👁 Open a client's portal…", "👁 Ouvrir le portail d'un client…")}</option>
        {clients.map((c) => (
          <option key={c.id} value={c.portal_token}>
            {c.name} — {c.engagement_score}/100
          </option>))}
      </select>
      <button style={S.lang} onClick={flipLang}
              title={T("Passer en français", "Switch to English")}>
        🌐 {LANG.toUpperCase()}
      </button>
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
    if (h.ok) edition = `${T("edition", "édition")} ${(await h.json()).edition}`;
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
