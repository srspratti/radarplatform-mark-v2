/* Ops console — shared i18n vocabulary maps.
 * Server sends French labels (stage names, sublabels, hints); in EN mode
 * we translate the known vocabulary and pass unknown values through.
 */
import { LANG, T } from "../../_shared/i18n.js";
export { LANG, T };

export const STAGE_EN = {
  nouveau: "New lead",
  contacte: "Contacted",
  client_actif: "Client (Centris)",
  en_reperage: "Scouting",
  en_visites: "Touring",
  offre: "Offer submitted",
  transaction: "In transaction",
  cloture: "Closed",
};

export const STAGE_FR2EN = {
  "Nouveau lead": "New lead",
  "Contacté": "Contacted",
  "Client (Centris)": "Client (Centris)",
  "En repérage": "Scouting",
  "En visites": "Touring",
  "Offre soumise": "Offer submitted",
  "En transaction": "In transaction",
  "Clôturé": "Closed",
};

export const SUB_EN = {
  "Alerte Centris": "Centris alert",
  "Demande de visite": "Visit request",
  "Formulaire site": "Website form",
  "Landing Vitrine": "Vitrine landing",
  "Référence gym": "Gym referral",
  "Référence hockey": "Hockey referral",
};

const PHRASE_EN = [
  ["Appeler maintenant", "Call now"],
  ["Contacter aujourd'hui", "Contact today"],
  ["Suivi cette semaine", "Follow up this week"],
  ["Séquence de nurture", "Nurture sequence"],
  ["préqualifié", "pre-qualified"],
  ["veut visiter", "wants to visit"],
  ["intention claire", "clear intent"],
  ["budget mentionné", "budget mentioned"],
  ["urgence", "urgent"],
  ["— priorité ", "— priority "],
  ["— client inactif, à relancer", "— inactive client, re-engage"],
  ["writeback(s) en attente vers FUB", "writeback(s) pending to FUB"],
];

export const FAM_LABEL = {
  intake: ["admission", "intake"],
  browsing: ["navigation", "browsing"],
  communication: ["communication", "communication"],
  visits: ["visites", "visits"],
  offers: ["offres", "offers"],
  transaction: ["transaction", "transaction"],
  ops: ["ops", "ops"],
};

const REPORT_EN = [
  ["Rapport mensuel", "Monthly report"],
  ["Transactions clôturées", "Closed transactions"],
  ["Commissions brutes", "Gross commissions"],
  ["TPS (5 %)", "GST (5%)"],
  ["TVQ (9,975 %)", "QST (9.975%)"],
  ["Dépenses", "Expenses"],
  ["Net (avant remises de taxes)", "Net (before tax remittances)"],
  ["Synthèse", "Summary"],
];

export const trStage = (code, fallback) =>
  LANG === "fr" ? fallback : (STAGE_EN[code] || fallback);
export const trStageLabel = (lbl) =>
  LANG === "fr" ? lbl : (STAGE_FR2EN[lbl] || lbl);
export const trSub = (s) => (LANG === "fr" || !s) ? s : (SUB_EN[s] || s);
export const trFam = (k) => {
  const p = FAM_LABEL[k];
  return p ? (LANG === "fr" ? p[0] : p[1]) : k;
};
export const trTxt = (s) => {
  if (LANG === "fr" || !s) return s;
  let out = s;
  PHRASE_EN.forEach(([f, e]) => { out = out.split(f).join(e); });
  return out;
};
export const trReport = (s) => {
  if (LANG === "fr" || !s) return s;
  let out = s;
  REPORT_EN.concat(Object.entries(STAGE_FR2EN))
    .forEach(([f, e]) => { out = out.split(f).join(e); });
  return out;
};

export const FUNNEL_LABEL = {
  fub_import: "CRM FUB",
  matrix_visit: "Alertes Matrix",
  danny_channel: "Références",
  own_generated: "Site web",
  prospecting_agent: "Prospection",
  open_house: "Porte ouverte",
  seller_intel: "Vendeurs (IA)",
};

export const FUNNEL_LABEL_EN = {
  fub_import: "FUB CRM",
  matrix_visit: "Matrix alerts",
  danny_channel: "Referrals",
  own_generated: "Website",
  prospecting_agent: "Prospecting",
  open_house: "Open house",
  seller_intel: "Sellers (AI)",
};

export const FEATURE_EN = {
  open_house_qr:      ["Open house QR", "QR sign-in sheet — every visitor becomes a lead."],
  call_capture:       ["AI call notes", "After each call, a structured note lands in the timeline and CRM."],
  speed_to_lead:      ["Instant response", "Automatic acknowledgment to every new lead (CASL)."],
  notifications:      ["Hot lead alerts", "Get pinged the moment a priority lead hits the radar."],
  sequences:          ["Automatic follow-ups", "D+1 / D+3 / D+7 / D+30 cadence — no lead ever forgotten."],
  showing_scheduler:  ["Showing proposals", "3 time slots proposed by text in one click."],
  analytics_ai:       ["AI reports", "Ask anything about your portfolio."],
  client_for_life:    ["Client for life", "Purchase anniversaries, tax reminders, annual value report."],
  review_engine:      ["Review engine", "Google review request at the right moment after closing."],
  transaction_tracker:["Client file tracker", "A live tracking page for clients — fewer “where are we?” calls."],
  farming_reports:    ["Neighbourhood newsletter", "“Sold in your area” drafted monthly."],
  alert_mailer:       ["Tracked alert emails", "The hub re-sends the Centris alert with measured links to the portal."],
  cma_generator:      ["Comparative market analysis", "Paste your comps — suggested-price report in seconds."],
  messaging_sync:     ["Two-way SMS/WhatsApp", "Business messaging synced to the timeline (connector)."],
  consent_vault:      ["Consent registry", "Exportable Law 25 / CASL audit trail per contact."],
  ai_texts:           ["Threshold AI texts", "Automatic text when engagement or priority crosses a threshold."],
};

export const fLabel = (k, f) => T(f.label, (FEATURE_EN[k] || [])[0] || f.label);
export const fPitch = (k, f) => T(f.pitch, (FEATURE_EN[k] || [])[1] || f.pitch);

/* --- utility: "N min / h / j" relative time (matches legacy). ---- */
export const since = (iso) => {
  if (!iso) return T("jamais", "never");
  const ts = iso.endsWith("Z") ? iso : iso + "Z";
  const m = Math.max(1, Math.round((Date.now() - new Date(ts)) / 60000));
  if (m < 60) return T(`il y a ${m} min`, `${m} min ago`);
  if (m < 1440) return T(`il y a ${Math.round(m / 60)} h`, `${Math.round(m / 60)} h ago`);
  return T(`il y a ${Math.round(m / 1440)} j`, `${Math.round(m / 1440)} d ago`);
};
