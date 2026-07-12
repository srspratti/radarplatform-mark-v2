import React, { useState, useRef, useEffect } from "react";
import {
  Phone, MessageSquare, X, Send, TrendingUp, TrendingDown, Minus, Eye,
  Bookmark, CalendarCheck, FileText, Bell, ChevronLeft, PhoneCall,
  Clock, Zap, XCircle,
} from "lucide-react";
import { T } from "./i18n.js";

// ---------------------------------------------------------------- tokens
const PAPER = "#F4F6F8";        // cool console field
const INK = "#0F1B2D";          // deep navy ink — primary actions & display
const LINE = "#E2E8F0";
const HOT = "#047857";          // score >= 65
const WARM = "#D97706";         // 40–64
const COOL = "#94A3B8";         // < 40
const DISPLAY = "'Archivo', ui-sans-serif, sans-serif";
const BODY = "'Public Sans', ui-sans-serif, system-ui, sans-serif";

const STAGES = [
  T("Onboarding", "Intégration"), T("Search", "Recherche"), T("Visits", "Visites"),
  T("Offer", "Offre"), T("Accepted", "Acceptée"), T("Conditions", "Conditions"),
  T("Notary", "Notaire"), T("Closed", "Clôturé"),
];
const AVATARS = ["#14532D", "#7C2D12", "#1E3A8A", "#701A75", "#0C4A6E", "#78350F", "#312E81", "#134E4A", "#7F1D1D", "#3F3F46"];

// ---------------------------------------------------------------- mock data
// breakdown maxima: browsing /25 · responsiveness /20 · visits /30 · offers /25
const CLIENTS = (typeof window !== "undefined" && window.__RADAR_CLIENTS__) || [
  {
    id: 1, name: "Marc-André Gagnon", initials: "MG", interest: "Duplex · Rosemont", price: "$749,000",
    stage: 3, score: 91, trend: 7, last: "26 min", source: "Referral",
    signals: { views: 44, saves: 9, visits: 4, offers: 1 },
    breakdown: { browsing: 20, comm: 19, visits: 28, offers: 24 },
    chip: { tone: "amber", txt: "Counter-offer received · respond by Friday" },
    reply: "Great — did the sellers move at all on the price?",
    timeline: [
      { t: "offer", txt: "Counter-offer received — $762,000", when: "Today · 9:40 AM" },
      { t: "offer", txt: "Offer submitted at $749,000", when: "2 d ago" },
      { t: "visit", txt: "3rd visit completed — brought his inspector", when: "5 d ago" },
      { t: "msg", txt: "Asked for comparables on the street", when: "6 d ago" },
    ],
  },
  {
    id: 2, name: "Isabelle Fortin", initials: "IF", interest: "Townhouse · Griffintown", price: "$915,000",
    stage: 4, score: 88, trend: 12, last: "1 h", source: "Website",
    signals: { views: 38, saves: 7, visits: 3, offers: 1 },
    breakdown: { browsing: 17, comm: 19, visits: 27, offers: 25 },
    chip: { tone: "ink", txt: "Promise accepted · inspection to book" },
    reply: "Amazing news!! When can we book the inspection?",
    timeline: [
      { t: "offer", txt: "Promise to purchase accepted — $905,000", when: "Yesterday" },
      { t: "offer", txt: "3rd round of negotiation", when: "3 d ago" },
      { t: "visit", txt: "2nd visit with her parents", when: "8 d ago" },
      { t: "save", txt: "Saved 2 comparable townhouses", when: "11 d ago" },
    ],
  },
  {
    id: 3, name: "Sophie Tremblay", initials: "ST", interest: "Condo · Le Plateau", price: "$529,000",
    stage: 2, score: 68, trend: 9, last: "2 h", source: "Matrix",
    signals: { views: 31, saves: 6, visits: 2, offers: 0 },
    breakdown: { browsing: 22, comm: 16, visits: 30, offers: 0 },
    chip: { tone: "ink", txt: "2nd visit booked · Saturday 10 AM" },
    reply: "Saturday 10 works! Can we check the garage too?",
    timeline: [
      { t: "visit", txt: "2nd visit booked — rue Rachel condo", when: "Today · 2:31 PM" },
      { t: "save", txt: "Saved 2 similar Plateau condos", when: "Today" },
      { t: "msg", txt: "Asked about parking + condo fees", when: "Yesterday" },
      { t: "visit", txt: "1st visit completed — rue Rachel", when: "4 d ago" },
    ],
  },
  {
    id: 4, name: "Émilie Roy", initials: "ER", interest: "Semi-detached · NDG", price: "$685,000",
    stage: 5, score: 74, trend: -3, last: "1 d", source: "Referral",
    signals: { views: 19, saves: 3, visits: 3, offers: 1 },
    breakdown: { browsing: 15, comm: 17, visits: 22, offers: 20 },
    chip: { tone: "amber", txt: "Financing condition · due Monday Jul 13" },
    reply: "The bank asked for one more document — sending it tonight.",
    timeline: [
      { t: "msg", txt: "Financing file sent to mortgage broker", when: "Yesterday" },
      { t: "ok", txt: "Inspection passed — minor items only", when: "4 d ago" },
      { t: "offer", txt: "Promise to purchase accepted", when: "9 d ago" },
      { t: "visit", txt: "Final visit before offer", when: "13 d ago" },
    ],
  },
  {
    id: 5, name: "Fatima Benali", initials: "FB", interest: "Condo · Vieux-Longueuil", price: "$438,000",
    stage: 6, score: 66, trend: 0, last: "1 d", source: "Website",
    signals: { views: 9, saves: 1, visits: 2, offers: 1 },
    breakdown: { browsing: 12, comm: 18, visits: 20, offers: 16 },
    chip: { tone: "ink", txt: "Notary · Jul 21 · Me Bélanger" },
    reply: "Perfect — see you at the notary on the 21st!",
    timeline: [
      { t: "ok", txt: "Notary appointment confirmed — Jul 21", when: "Yesterday" },
      { t: "ok", txt: "Financing approved by Desjardins", when: "6 d ago" },
      { t: "offer", txt: "All conditions lifted", when: "6 d ago" },
      { t: "msg", txt: "Sent list of documents for the notary", when: "8 d ago" },
    ],
  },
  {
    id: 6, name: "Julie Lavoie", initials: "JL", interest: "Bungalow · Laval", price: "$565,000",
    stage: 2, score: 47, trend: -18, last: "6 d", source: "Facebook",
    signals: { views: 22, saves: 4, visits: 2, offers: 0 },
    breakdown: { browsing: 14, comm: 9, visits: 24, offers: 0 },
    chip: { tone: "amber", txt: "Gone quiet 6 days after 2nd visit" },
    reply: "Sorry, crazy week! Still interested — anything new in Laval?",
    timeline: [
      { t: "sys", txt: "No activity for 6 days — score decaying", when: "Now" },
      { t: "visit", txt: "2nd visit completed — Vimont bungalow", when: "8 d ago" },
      { t: "msg", txt: "Asked about the backyard easement", when: "9 d ago" },
      { t: "view", txt: "Viewed 6 Laval listings", when: "10 d ago" },
    ],
  },
  {
    id: 7, name: "David Chen", initials: "DC", interest: "Condo · Griffintown", price: "$450–550k",
    stage: 1, score: 38, trend: 14, last: "3 h", source: "Matrix",
    signals: { views: 27, saves: 8, visits: 0, offers: 0 },
    breakdown: { browsing: 23, comm: 15, visits: 0, offers: 0 },
    chip: { tone: "ink", txt: "Browsing surge · 14 listings this week" },
    reply: "These look great — could I visit the Peel St one?",
    timeline: [
      { t: "view", txt: "Viewed 14 listings this week (2× last week)", when: "Today" },
      { t: "save", txt: "Saved 3 Griffintown condos", when: "Yesterday" },
      { t: "msg", txt: "Replied to your listing suggestions", when: "2 d ago" },
      { t: "sys", txt: "Search alert created — Griffintown ≤ $550k", when: "5 d ago" },
    ],
  },
  {
    id: 8, name: "Antoine Bergeron", initials: "AB", interest: "Duplex · Villeray", price: "$698,000",
    stage: 1, declined: true, score: 33, trend: -9, last: "4 d", source: "Referral",
    signals: { views: 12, saves: 2, visits: 3, offers: 1 },
    breakdown: { browsing: 8, comm: 7, visits: 10, offers: 8 },
    chip: { tone: "red", txt: "Offer declined 14 d ago · re-engage" },
    reply: "Still bummed about Villeray… but open to Rosemont.",
    timeline: [
      { t: "view", txt: "Viewed 4 new duplex listings", when: "4 d ago" },
      { t: "no", txt: "Offer declined — seller took a higher bid", when: "14 d ago" },
      { t: "offer", txt: "Offer submitted at $698,000", when: "17 d ago" },
      { t: "visit", txt: "3rd visit — Villeray duplex", when: "20 d ago" },
    ],
  },
  {
    id: 9, name: "Sarah Goldstein", initials: "SG", interest: "Condo · Mile End", price: "$400–475k",
    stage: 0, score: 22, trend: 22, last: "5 h", source: "Matrix",
    signals: { views: 5, saves: 1, visits: 0, offers: 0 },
    breakdown: { browsing: 10, comm: 12, visits: 0, offers: 0 },
    chip: { tone: "ink", txt: "New client · added to Centris" },
    reply: "Thanks Danny! I just filled in my search criteria.",
    timeline: [
      { t: "sys", txt: "Onboarding started — criteria form 80% done", when: "Today" },
      { t: "view", txt: "Viewed 5 Mile End listings", when: "Today" },
      { t: "msg", txt: "Replied to your welcome message", when: "5 h ago" },
      { t: "sys", txt: "Lead captured by Matrix harvester", when: "Yesterday" },
    ],
  },
  {
    id: 10, name: "Mathieu Côté", initials: "MC", interest: "Loft · Old Port", price: "$600,000",
    stage: 1, score: 16, trend: -6, last: "21 d", source: "Website",
    signals: { views: 6, saves: 0, visits: 0, offers: 0 },
    breakdown: { browsing: 12, comm: 4, visits: 0, offers: 0 },
    chip: null,
    reply: "Hey — been busy, but yes, let's restart the search.",
    timeline: [
      { t: "sys", txt: "Dormant 3 weeks — moved to nurture list", when: "Now" },
      { t: "view", txt: "Viewed 2 Old Port lofts", when: "21 d ago" },
      { t: "msg", txt: "Said he'd wait for spring inventory", when: "24 d ago" },
    ],
  },
];

const ALERTS = [
  { id: 6, kind: "quiet", txt: ["Julie Lavoie", T(" went quiet 6 days after her 2nd visit — score down 18. Send a nudge.", " est silencieuse depuis 6 jours après sa 2e visite — score en baisse de 18. Envoyer une relance.")] },
  { id: 4, kind: "deadline", txt: ["Émilie Roy", T(" — financing condition due Monday, Jul 13.", " — condition de financement due lundi 13 juil.")] },
  { id: 7, kind: "surge", txt: ["David Chen", T(" viewed 14 listings this week (2×). Ready for a first visit.", " a consulté 14 fiches cette semaine (2×). Prêt pour une première visite.")] },
];

const SEED_MSGS = {
  3: [
    { from: "client", txt: "Hi Danny! Is the rue Rachel condo free for a 2nd visit this weekend?", when: "2:14 PM" },
    { from: "me", txt: "Yes! I can do Saturday 10 AM or Sunday 1 PM — your pick.", when: "2:20 PM" },
    { from: "client", txt: "Saturday 10 works. Can we also see the garage?", when: "2:31 PM" },
  ],
};

// ---------------------------------------------------------------- helpers
const heat = (s) => (s >= 65 ? HOT : s >= 40 ? WARM : COOL);
const band = (s) => (s >= 65 ? T("Hot", "Chaud") : s >= 40 ? T("Warm", "Tiède") : T("Cooling", "Refroidit"));
const seg = (c) =>
  c.declined ? "reengage"
  : c.stage === 3 ? "offers"
  : c.stage >= 4 && c.stage <= 6 ? "transaction"
  : c.signals.visits > 0 ? "visiting"
  : "browsing";

const CHIP_TONES = {
  ink: { background: "#EEF2F7", color: "#1E3A5F", border: "1px solid #D6E0EB" },
  amber: { background: "#FEF6E7", color: "#92400E", border: "1px solid #FBE3B5" },
  red: { background: "#FDEEEE", color: "#991B1B", border: "1px solid #F6CFCF" },
};

const TL_ICONS = { offer: FileText, visit: CalendarCheck, msg: MessageSquare, view: Eye, save: Bookmark, sys: Clock, ok: CalendarCheck, no: XCircle };

function Eyebrow({ children }) {
  return (
    <div className="uppercase text-slate-500 font-semibold" style={{ fontSize: 11, letterSpacing: "0.14em" }}>
      {children}
    </div>
  );
}

function Trend({ v, size = 12 }) {
  if (v > 0) return (<span className="inline-flex items-center gap-1 text-emerald-700" style={{ fontSize: 11 }}><TrendingUp size={size} />+{v} {T("wk", "sem")}</span>);
  if (v < 0) return (<span className="inline-flex items-center gap-1 text-red-600" style={{ fontSize: 11 }}><TrendingDown size={size} />{v} {T("wk", "sem")}</span>);
  return (<span className="inline-flex items-center gap-1 text-slate-400" style={{ fontSize: 11 }}><Minus size={size} />{T("flat", "stable")}</span>);
}

function ScoreRing({ score, size = 84 }) {
  const stroke = 7;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E8EDF2" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={heat(score)} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={`${(c * score) / 100} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle"
        style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: size * 0.3, fill: INK }}>
        {score}
      </text>
    </svg>
  );
}

function Stepper({ stage, declined }) {
  const pct = (stage / (STAGES.length - 1)) * 100;
  return (
    <div className="overflow-x-auto pb-1">
      <div className="relative" style={{ minWidth: 540, paddingTop: 4 }}>
        <div className="absolute h-px bg-slate-200" style={{ top: 9, left: 8, right: 8 }} />
        <div className="absolute h-px" style={{ top: 9, left: 8, width: `${pct}%`, background: INK }} />
        <div className="relative flex justify-between">
          {STAGES.map((s, i) => (
            <div key={s} className="flex flex-col items-center" style={{ width: 62 }}>
              <div
                className="rounded-full"
                style={{
                  width: 11, height: 11,
                  background: i < stage ? INK : "#fff",
                  border: `2px solid ${i <= stage ? INK : "#CBD5E1"}`,
                  boxShadow: i === stage ? "0 0 0 4px #DCE4EE" : "none",
                }}
              />
              <span className="mt-1.5 text-center leading-tight" style={{ fontSize: 10, color: i === stage ? INK : "#94A3B8", fontWeight: i === stage ? 600 : 400 }}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
      {declined && (
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ ...CHIP_TONES.red, fontSize: 11 }}>
          <XCircle size={12} /> {T("Offer declined · back in active search", "Offre refusée · retour en recherche active")}
        </div>
      )}
    </div>
  );
}

function Detail({ c, onBack, onChat, onCall, calling, onEndCall }) {
  const parts = [
    [T("Browsing activity", "Navigation"), c.breakdown.browsing, 25],
    [T("Responsiveness", "Réactivité"), c.breakdown.comm, 20],
    [T("Visits", "Visites"), c.breakdown.visits, 30],
    [T("Offer activity", "Offres"), c.breakdown.offers, 25],
  ];
  const ai = (c.id - 1) % AVATARS.length;
  return (
    <div className="bg-white rounded-2xl p-5 space-y-5" style={{ border: `1px solid ${LINE}` }}>
      {onBack && (
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800">
          <ChevronLeft size={16} /> {T("All clients", "Tous les clients")}
        </button>
      )}

      {/* identity */}
      <div className="flex items-start gap-3">
        <div className="rounded-full flex items-center justify-center text-white font-semibold shrink-0"
          style={{ width: 46, height: 46, background: AVATARS[ai], fontSize: 15 }}>
          {c.initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-base" style={{ color: INK }}>{c.name}</div>
          <div className="text-sm text-slate-500">{c.interest} · {c.price}</div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="rounded-full px-2 py-0.5" style={{ ...CHIP_TONES.ink, fontSize: 11 }}>via {c.source}</span>
            {c.chip && <span className="rounded-full px-2 py-0.5" style={{ ...CHIP_TONES[c.chip.tone], fontSize: 11 }}>{c.chip.txt}</span>}
          </div>
        </div>
      </div>

      {/* score instrument */}
      <div className="flex items-center gap-4 rounded-2xl p-4" style={{ background: "#F8FAFC", border: `1px solid ${LINE}` }}>
        <ScoreRing score={c.score} />
        <div>
          <Eyebrow>Engagement</Eyebrow>
          <div className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 font-semibold"
            style={{ fontSize: 11, color: "#fff", background: heat(c.score) }}>
            {band(c.score)}
          </div>
          <div className="mt-1.5"><Trend v={c.trend} /></div>
          <div className="text-slate-400 mt-1" style={{ fontSize: 11 }}>{T(`Last activity ${c.last} ago`, `Dernière activité il y a ${c.last}`)}</div>
        </div>
      </div>

      {/* actions — tel:/sms: open the realtor's own phone dialer, so calls and
          texts go out from their real number; VoIP sim is the no-phone fallback */}
      <div className="flex gap-2">
        <button onClick={() => { if (c.phone) window.location.href = "tel:" + c.phone.replace(/[^+\d]/g, ""); else onCall(); }}
          title={c.phone ? T(`Call ${c.phone} — from your phone number`, `Appeler ${c.phone} — depuis votre numéro`) : T("Demo call", "Appel démo")}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white"
          style={{ background: INK }}>
          <Phone size={15} /> {T("Call", "Appeler")}
        </button>
        {c.phone && (
          <button onClick={() => { window.location.href = "sms:" + c.phone.replace(/[^+\d]/g, ""); }}
            title={T(`Text ${c.phone} — from your phone number`, `Texter ${c.phone} — depuis votre numéro`)}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold bg-white text-slate-800 hover:bg-slate-50"
            style={{ border: `1px solid #CBD5E1` }}>
            <Phone size={15} /> {T("Text", "Texto")}
          </button>
        )}
        <button onClick={onChat}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold bg-white text-slate-800 hover:bg-slate-50"
          style={{ border: `1px solid #CBD5E1` }}>
          <MessageSquare size={15} /> Message
        </button>
      </div>

      {calling && (
        <div className="rounded-xl p-3 flex items-center justify-between" style={{ background: "#EEF2F7", border: "1px solid #D6E0EB" }}>
          <div className="flex items-center gap-2.5">
            <PhoneCall size={17} className="animate-pulse" style={{ color: INK }} />
            <div>
              <div className="text-sm font-semibold" style={{ color: INK }}>{T(`Calling ${c.name.split(" ")[0]}…`, `Appel à ${c.name.split(" ")[0]}…`)}</div>
              <div className="text-slate-500" style={{ fontSize: 11 }}>{T("Browser VoIP · logs to timeline & CRM", "VoIP navigateur · consigné au fil d'activité et au CRM")}</div>
            </div>
          </div>
          <button onClick={onEndCall} className="rounded-lg bg-white px-2.5 py-1 font-medium text-red-600"
            style={{ fontSize: 12, border: "1px solid #F6CFCF" }}>
            {T("End", "Raccrocher")}
          </button>
        </div>
      )}

      {/* pipeline */}
      <div>
        <Eyebrow>Pipeline</Eyebrow>
        <div className="mt-2.5"><Stepper stage={c.stage} declined={c.declined} /></div>
      </div>

      {/* score breakdown */}
      <div>
        <Eyebrow>{T("Score breakdown", "Détail du score")}</Eyebrow>
        <div className="mt-2.5 space-y-2">
          {parts.map(([label, v, max]) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-slate-500 shrink-0" style={{ fontSize: 12, width: 118 }}>{label}</span>
              <div className="flex-1 rounded-full overflow-hidden" style={{ height: 6, background: "#EDF1F5" }}>
                <div className="h-full rounded-full" style={{ width: `${(v / max) * 100}%`, background: INK }} />
              </div>
              <span className="tabular-nums text-slate-600 text-right shrink-0" style={{ fontSize: 12, width: 40 }}>{v}/{max}</span>
            </div>
          ))}
        </div>
        <div className="text-slate-400 mt-2" style={{ fontSize: 11 }}>{T("Decays with inactivity · half-life 10 days", "Décroît avec l'inactivité · demi-vie 10 jours")}</div>
      </div>

      {/* raw signals */}
      <div className="grid grid-cols-4 gap-2">
        {[[T("Views", "Vues"), c.signals.views, Eye], [T("Saves", "Favoris"), c.signals.saves, Bookmark], [T("Visits", "Visites"), c.signals.visits, CalendarCheck], [T("Offers", "Offres"), c.signals.offers, FileText]].map(([label, v, Icon]) => (
          <div key={label} className="rounded-xl p-2 text-center" style={{ background: "#F8FAFC", border: `1px solid ${LINE}` }}>
            <Icon size={14} className="mx-auto text-slate-400" />
            <div className="font-semibold tabular-nums text-sm mt-0.5" style={{ color: INK }}>{v}</div>
            <div className="text-slate-400" style={{ fontSize: 10 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* timeline */}
      <div>
        <Eyebrow>{T("Recent activity", "Activité récente")}</Eyebrow>
        <div className="mt-2.5 space-y-3">
          {c.timeline.map((e, i) => {
            const Icon = TL_ICONS[e.t] || Clock;
            return (
              <div key={i} className="flex gap-3">
                <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: 28, height: 28, background: "#F1F5F9" }}>
                  <Icon size={13} className="text-slate-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-700 leading-snug">{e.txt}</div>
                  <div className="text-slate-400" style={{ fontSize: 11 }}>{e.when}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- app
export default function RealtorDashboard() {
  const [selectedId, setSelectedId] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [calling, setCalling] = useState(false);
  const [msgs, setMsgs] = useState(SEED_MSGS);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const repliedRef = useRef({});
  const chatBodyRef = useRef(null);

  const selected = CLIENTS.find((c) => c.id === selectedId) || CLIENTS[0];
  const cMsgs = msgs[selected.id] || [];

  useEffect(() => {
    if (chatBodyRef.current) chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [cMsgs.length, typing, chatOpen]);

  const hot = CLIENTS.filter((c) => c.score >= 65).length;
  const offersInPlay = CLIENTS.filter((c) => !c.declined && c.stage >= 3 && c.stage <= 5).length;
  const closings = CLIENTS.filter((c) => c.stage === 6).length;

  const FILTERS = [
    ["all", T("All", "Tous"), CLIENTS.length],
    ["browsing", T("Browsing", "En navigation"), CLIENTS.filter((c) => seg(c) === "browsing").length],
    ["visiting", T("Visiting", "En visites"), CLIENTS.filter((c) => seg(c) === "visiting").length],
    ["offers", T("Offer submitted", "Offre déposée"), CLIENTS.filter((c) => seg(c) === "offers").length],
    ["transaction", T("In transaction", "En transaction"), CLIENTS.filter((c) => seg(c) === "transaction").length],
    ["reengage", T("Re-engage", "À relancer"), CLIENTS.filter((c) => seg(c) === "reengage").length],
  ];

  const list = CLIENTS.filter((c) => filter === "all" || seg(c) === filter).sort((a, b) => b.score - a.score);

  const openClient = (id) => { setSelectedId(id); setCalling(false); setMobileOpen(true); };

  const send = () => {
    const t = draft.trim();
    if (!t) return;
    const now = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const id = selected.id;
    setMsgs((m) => ({ ...m, [id]: [...(m[id] || []), { from: "me", txt: t, when: now }] }));
    setDraft("");
    setTyping(true);
    const replyTxt = repliedRef.current[id] ? "👍 Noted, thanks Danny!" : selected.reply;
    repliedRef.current[id] = true;
    setTimeout(() => {
      setMsgs((m) => ({ ...m, [id]: [...(m[id] || []), { from: "client", txt: replyTxt, when: "Now" }] }));
      setTyping(false);
    }, 1200);
  };

  const stageChipStyle = (c) =>
    c.declined ? CHIP_TONES.red : c.stage === 3 ? CHIP_TONES.amber : c.stage >= 4 ? CHIP_TONES.ink : { background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" };

  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: BODY, color: INK }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=Public+Sans:wght@400;500;600;700&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
        {/* header */}
        <header className="flex items-start justify-between gap-4 mb-6">
          <div>
            <Eyebrow>{T("Realtor console", "Console courtier")} · {T("Thursday, July 9", "jeudi 9 juillet")}</Eyebrow>
            <h1 className="mt-1 tracking-tight" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 26 }}>
              Bonjour, Danny
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">{T(`${hot} clients hot · 3 alerts · 1 closing at the notary this month`, `${hot} clients chauds · 3 alertes · 1 clôture chez le notaire ce mois-ci`)}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-slate-500" style={{ border: `1px solid ${LINE}`, fontSize: 11 }}>
              <span className="rounded-full bg-emerald-500" style={{ width: 6, height: 6 }} />
              {T("Synced · Centris clients · added via Radar", "Synchronisé · clients Centris · ajoutés via Radar")}
            </div>
            <button className="relative rounded-full bg-white p-2.5" style={{ border: `1px solid ${LINE}` }} aria-label={T("Alerts", "Alertes")}>
              <Bell size={16} className="text-slate-600" />
              <span className="absolute rounded-full text-white flex items-center justify-center"
                style={{ top: -3, right: -3, width: 15, height: 15, fontSize: 9, background: "#DC2626", fontWeight: 700 }}>3</span>
            </button>
          </div>
        </header>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            [T("Centris clients", "Clients Centris"), CLIENTS.length, T("added via Radar", "ajoutés via Radar")],
            [T("Hot right now", "Chauds en ce moment"), hot, T("score ≥ 65", "score ≥ 65")],
            [T("Offers in play", "Offres en cours"), offersInPlay, T("1 counter pending", "1 contre-offre en attente")],
            [T("Closing this month", "Clôtures ce mois-ci"), closings, T("Jul 21 · notary", "21 juil · notaire")],
          ].map(([label, v, sub]) => (
            <div key={label} className="rounded-2xl bg-white p-4" style={{ border: `1px solid ${LINE}` }}>
              <div className="text-slate-500" style={{ fontSize: 12 }}>{label}</div>
              <div className="tabular-nums mt-1" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 24 }}>{v}</div>
              <div className="text-slate-400 mt-0.5" style={{ fontSize: 11 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* attention rail */}
        <div className="grid gap-2 md:grid-cols-3 mb-5">
          {ALERTS.map((a) => {
            const Icon = a.kind === "quiet" ? Clock : a.kind === "deadline" ? Bell : Zap;
            const color = a.kind === "deadline" ? "#DC2626" : a.kind === "quiet" ? WARM : HOT;
            return (
              <button key={a.id} onClick={() => openClient(a.id)}
                className="text-left rounded-xl bg-white p-3 flex gap-2.5 items-start hover:bg-slate-50"
                style={{ border: `1px solid ${LINE}` }}>
                <Icon size={15} className="shrink-0 mt-0.5" style={{ color }} />
                <span className="text-slate-600 leading-snug" style={{ fontSize: 12 }}>
                  <b style={{ color: INK }}>{a.txt[0]}</b>{a.txt[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* filters */}
        <div className="flex flex-wrap gap-2 mb-3">
          {FILTERS.map(([key, label, n]) => (
            <button key={key} onClick={() => setFilter(key)}
              className="rounded-full px-3 py-1.5 font-medium"
              style={filter === key
                ? { background: INK, color: "#fff", fontSize: 12, border: `1px solid ${INK}` }
                : { background: "#fff", color: "#475569", fontSize: 12, border: `1px solid ${LINE}` }}>
              {label} <span className="tabular-nums" style={{ opacity: 0.6 }}>{n}</span>
            </button>
          ))}
        </div>

        {/* main */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
          {/* ledger */}
          <div className="lg:col-span-2 rounded-2xl bg-white overflow-hidden" style={{ border: `1px solid ${LINE}` }}>
            <div className="divide-y divide-slate-100">
              {list.map((c) => {
                const ai = (c.id - 1) % AVATARS.length;
                const sel = c.id === selectedId;
                return (
                  <button key={c.id} onClick={() => openClient(c.id)}
                    className={`w-full text-left p-4 flex items-center gap-3.5 hover:bg-slate-50 transition-colors ${sel ? "bg-slate-50" : ""}`}
                    style={sel ? { boxShadow: `inset 3px 0 0 ${INK}` } : {}}>
                    <div className="rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                      style={{ width: 38, height: 38, background: AVATARS[ai], fontSize: 13 }}>
                      {c.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate" style={{ color: INK }}>{c.name}</div>
                      <div className="text-slate-500 truncate" style={{ fontSize: 12 }}>{c.interest}<span className="text-slate-400"> · via {c.source}</span></div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-slate-400 shrink-0" style={{ fontSize: 11 }}>
                      <span className="inline-flex items-center gap-1"><Eye size={12} />{c.signals.views}</span>
                      <span className="inline-flex items-center gap-1"><CalendarCheck size={12} />{c.signals.visits}</span>
                      <span className="inline-flex items-center gap-1"><FileText size={12} />{c.signals.offers}</span>
                    </div>
                    <span className="rounded-full px-2 py-0.5 whitespace-nowrap shrink-0" style={{ ...stageChipStyle(c), fontSize: 11 }}>
                      {c.declined ? T("Declined", "Refusée") : STAGES[c.stage]}
                    </span>
                    <span className="hidden sm:block text-slate-400 text-right shrink-0" style={{ fontSize: 11, width: 42 }}>{c.last}</span>
                    <div className="text-right shrink-0" style={{ width: 52 }}>
                      <div className="tabular-nums" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 18, color: heat(c.score) }}>{c.score}</div>
                      <Trend v={c.trend} size={10} />
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="p-3 text-center text-slate-400" style={{ fontSize: 11, borderTop: `1px solid ${LINE}` }}>
              {T("Engagement = browsing + responsiveness + visits + offers, with 10-day decay · events from website, CRM, Matrix & chat",
                 "Engagement = navigation + réactivité + visites + offres, avec décroissance sur 10 jours · événements du site, du CRM, de Matrix et du chat")}
            </div>
          </div>

          {/* dossier — desktop */}
          <aside className="hidden lg:block lg:sticky lg:top-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 48px)" }}>
            <Detail c={selected}
              onChat={() => setChatOpen(true)}
              onCall={() => setCalling(true)}
              calling={calling}
              onEndCall={() => setCalling(false)} />
          </aside>
        </div>
      </div>

      {/* dossier — mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 overflow-y-auto" style={{ background: PAPER }}>
          <div className="p-4 pb-10 max-w-lg mx-auto">
            <Detail c={selected}
              onBack={() => setMobileOpen(false)}
              onChat={() => setChatOpen(true)}
              onCall={() => setCalling(true)}
              calling={calling}
              onEndCall={() => setCalling(false)} />
          </div>
        </div>
      )}

      {/* chat drawer */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0" style={{ background: "rgba(15,27,45,0.3)" }} onClick={() => setChatOpen(false)} />
          <div className="relative w-full max-w-sm bg-white h-full flex flex-col shadow-2xl">
            <div className="p-4 flex items-center gap-3" style={{ borderBottom: `1px solid ${LINE}` }}>
              <div className="rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                style={{ width: 34, height: 34, background: AVATARS[(selected.id - 1) % AVATARS.length], fontSize: 12 }}>
                {selected.initials}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate" style={{ color: INK }}>{selected.name}</div>
                <div className="flex items-center gap-1.5 text-slate-400" style={{ fontSize: 11 }}>
                  <span className="rounded-full bg-emerald-500" style={{ width: 6, height: 6 }} />
                  {T("Two-way client chat · syncs to timeline & CRM", "Chat client bidirectionnel · synchronisé au fil d'activité et au CRM")}
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="ml-auto rounded-lg p-1.5 hover:bg-slate-100" aria-label={T("Close chat", "Fermer le chat")}>
                <X size={16} className="text-slate-500" />
              </button>
            </div>

            <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#F8FAFC" }}>
              {cMsgs.length === 0 && !typing && (
                <div className="text-center text-slate-400 mt-8" style={{ fontSize: 12 }}>
                  {T(`Start the conversation — ${selected.name.split(" ")[0]} sees this in their client portal.`,
                     `Amorcez la conversation — ${selected.name.split(" ")[0]} le voit dans son portail client.`)}
                </div>
              )}
              {cMsgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-xs">
                    <div className="rounded-2xl px-3 py-2 text-sm leading-snug"
                      style={m.from === "me"
                        ? { background: INK, color: "#fff", borderBottomRightRadius: 6 }
                        : { background: "#fff", border: `1px solid ${LINE}`, color: "#334155", borderBottomLeftRadius: 6 }}>
                      {m.txt}
                    </div>
                    <div className={`text-slate-400 mt-0.5 ${m.from === "me" ? "text-right" : ""}`} style={{ fontSize: 10 }}>{m.when}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-3 py-2 text-sm text-slate-400 animate-pulse bg-white" style={{ border: `1px solid ${LINE}` }}>
                    {T(`${selected.name.split(" ")[0]} is typing…`, `${selected.name.split(" ")[0]} écrit…`)}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 flex gap-2" style={{ borderTop: `1px solid ${LINE}` }}>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={T(`Message ${selected.name.split(" ")[0]}…`, `Écrire à ${selected.name.split(" ")[0]}…`)}
                className="flex-1 rounded-xl px-3 py-2 text-sm focus:outline-none"
                style={{ border: "1px solid #CBD5E1" }}
              />
              <button onClick={send} className="rounded-xl p-2.5 text-white" style={{ background: INK }} aria-label={T("Send", "Envoyer")}>
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
