import React, { useState, useEffect } from "react";
import { T, trStageLabel, trFam, trReport } from "../i18n.js";
import { api } from "../api.js";

/* ------------------------------------------------------- OFFICE ------ */
function OfficePanel({ toast }) {
  const now = new Date();
  const [y, setY] = useState(now.getFullYear());
  const [m, setM] = useState(now.getMonth() + 1);
  const [rep, setRep] = useState(null);
  const run = async () => {
    try { setRep(await api(`/agents/office/report/${y}/${m}`)); }
    catch (e) { toast(e.message, true); }
  };
  useEffect(() => { run(); }, []);   // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="panel p-4" data-testid="office-panel">
      <div className="flex items-end gap-2 mb-3">
        <div><div className="mono text-[10px] text-[var(--mute)]">{T("ANNÉE", "YEAR")}</div>
          <input type="number" value={y} onChange={(e) => setY(+e.target.value)}
            data-testid="office-year-input"
            className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm w-24" /></div>
        <div><div className="mono text-[10px] text-[var(--mute)]">{T("MOIS", "MONTH")}</div>
          <input type="number" min="1" max="12" value={m} onChange={(e) => setM(+e.target.value)}
            data-testid="office-month-input"
            className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm w-16" /></div>
        <button onClick={run} data-testid="office-generate-btn"
          className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">
          {T("Générer le rapport", "Generate report")}
        </button>
      </div>
      {rep && (
        <div className="grid md:grid-cols-2 gap-3">
          <div className="panel2 p-3 mono text-[12px] space-y-1">
            <div className="amber text-[10px]">▮ FINANCES — {rep.period}</div>
            <div>{T("Transactions clôturées", "Closed transactions")}: <b>{rep.deals_closed}</b></div>
            <div>{T("Commissions brutes", "Gross commissions")}: <b>{rep.commission_gross.toLocaleString("fr-CA")} $</b></div>
            <div>{T("TPS 5 %", "GST 5%")}: {rep.taxes.tps_5.toLocaleString("fr-CA")} $ · {T("TVQ 9,975 %", "QST 9.975%")}: {rep.taxes.tvq_9975.toLocaleString("fr-CA")} $</div>
            <div>{T("Dépenses", "Expenses")}: {rep.expenses_total.toLocaleString("fr-CA")} $</div>
            <div className="pt-1 border-t border-[var(--line)]/50">
              {T("Net (avant remises)", "Net (before remittances)")}: <b className="amber">{rep.net_before_tax_remittance.toLocaleString("fr-CA")} $</b>
            </div>
          </div>
          <div className="panel2 p-3 mono text-[12px]">
            <div className="amber text-[10px] mb-1">▮ PIPELINE</div>
            {Object.entries(rep.pipeline_snapshot).map(([k, v]) => (
              <div key={k} className="flex justify-between py-0.5"><span className="text-[var(--mute)]">{trStageLabel(k)}</span><span>{v}</span></div>
            ))}
            <div className="amber text-[10px] mt-2 mb-1">{T("▮ ACTIVITÉ (événements/mois)", "▮ ACTIVITY (events/month)")}</div>
            {Object.entries(rep.activity_by_family).map(([k, v]) => (
              <div key={k} className="flex justify-between py-0.5"><span className="text-[var(--mute)]">{trFam(k)}</span><span>{v}</span></div>
            ))}
          </div>
          <pre className="md:col-span-2 panel2 p-3 mono text-[11px] whitespace-pre-wrap max-h-64 overflow-auto">{trReport(rep.markdown)}</pre>
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------- PROSPECT ------ */
function ProspectPanel({ toast }) {
  const [niche, setNiche] = useState("Propriétaires de plex");
  const [market, setMarket] = useState("Rosemont, Montréal");
  const [rows, setRows] = useState([]);
  const [draft, setDraft] = useState(null);
  const load = async () => setRows(await api("/agents/prospecting/candidates"));
  useEffect(() => { load().catch(() => {}); }, []);
  const run = async () => {
    try {
      await api("/agents/prospecting/run", { method: "POST",
        body: JSON.stringify({ niche, market, count: 5, provider: "stub" }) });
      toast(T("5 candidats générés (démo)", "5 candidates generated (demo)"));
      await load();
    } catch (e) { toast(e.message, true); }
  };
  const consent = async (id, basis) => {
    try {
      await api(`/agents/prospecting/candidates/${id}/consent`,
        { method: "POST", body: JSON.stringify({ consent_basis: basis }) });
      await load();
    } catch (e) { toast(e.message, true); }
  };
  const outreach = async (id, channel) => {
    try {
      const d = await api(`/agents/prospecting/candidates/${id}/outreach`,
        { method: "POST", body: JSON.stringify({ channel, language: "fr" }) });
      setDraft(d.draft);
      toast(T("Brouillon prêt — signal de ciblage exclu", "Draft ready — targeting signal excluded"));
      await load();
    } catch (e) { setDraft(null); toast(e.message, true); }
  };
  const promote = async (id) => {
    try {
      await api(`/agents/prospecting/candidates/${id}/promote`, { method: "POST" });
      toast(T("Promu en lead — visible dans le Radar", "Promoted to lead — visible in the Radar"));
      await load();
    } catch (e) { toast(e.message, true); }
  };

  const OPTS = [
    ["", T("— base LCAP/CASL —", "— CASL basis —")],
    ["express", T("Consentement exprès", "Express consent")],
    ["implied_existing_business", T("Relation d'affaires", "Business relationship")],
    ["implied_inquiry", T("Demande reçue", "Inquiry received")],
    ["conspicuous_publication_b2b", T("Publication B2B", "B2B publication")],
    ["mail_only", T("Courrier seulement", "Mail only")],
  ];

  return (
    <div className="panel p-4" data-testid="prospect-panel">
      <div className="flex flex-wrap items-end gap-2 mb-3">
        <div className="flex-1 min-w-[180px]">
          <div className="mono text-[10px] text-[var(--mute)]">NICHE</div>
          <input value={niche} onChange={(e) => setNiche(e.target.value)}
            data-testid="prospect-niche-input"
            className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm" />
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="mono text-[10px] text-[var(--mute)]">{T("MARCHÉ", "MARKET")}</div>
          <input value={market} onChange={(e) => setMarket(e.target.value)}
            data-testid="prospect-market-input"
            className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm" />
        </div>
        <button onClick={run} data-testid="prospect-run-btn"
          className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">
          {T("Lancer la prospection", "Run prospecting")}
        </button>
      </div>
      <div className="text-[10px] text-[var(--mute)] mb-3 mono">
        {T("Fournisseur: stub (données démo) · Slot Explorium prêt · Pare-feu LCAP: le signal choisit QUI, jamais QUOI. Courriel bloqué sans base de consentement.",
           "Provider: stub (demo data) · Explorium slot ready · CASL firewall: the signal picks WHO, never WHAT. Email blocked without a consent basis.")}
      </div>
      <div className="space-y-2">
        {rows.map((c) => (
          <div key={c.id} className="panel2 p-3" data-testid={`prospect-row-${c.id}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">{c.name}</span>
              {c.is_demo && <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-slate-500/20 text-slate-300 border border-slate-500/60">{T("DÉMO", "DEMO")}</span>}
              <span className="mono text-[10px] text-[var(--mute)]">{c.email} · {c.phone}</span>
              <span className="ml-auto mono text-[10px] text-[var(--mute)]">{c.outreach_status}</span>
            </div>
            <div className="mono text-[10px] amber mt-1">signal: {c.signal}</div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <select value={c.consent_basis || ""} onChange={(e) => consent(c.id, e.target.value)}
                data-testid={`prospect-consent-${c.id}`}
                className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-[10px]">
                {OPTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <button onClick={() => outreach(c.id, "email")}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("✉ Courriel", "✉ Email")}</button>
              <button onClick={() => outreach(c.id, "letter")}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("📮 Lettre", "📮 Letter")}</button>
              <button onClick={() => outreach(c.id, "call")}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">☎ Script</button>
              <button onClick={() => promote(c.id)}
                className="mono text-[10px] px-2 py-1 rounded bg-[var(--amber)]/90 text-black font-semibold">→ Lead</button>
            </div>
          </div>
        ))}
      </div>
      {draft && <pre className="panel2 p-3 mt-3 mono text-[11px] whitespace-pre-wrap max-h-60 overflow-auto">{draft}</pre>}
    </div>
  );
}

/* --------------------------------------------------------- SELLER ---- */
function SellerPanel({ toast }) {
  const [sector, setSector] = useState("Rosemont, Montréal");
  const [rows, setRows] = useState([]);
  const [market, setMarket] = useState(null);
  const [draft, setDraft] = useState(null);
  const [busy, setBusy] = useState(false);
  const load = async () => setRows(await api("/agents/seller/prospects"));
  useEffect(() => { load().catch(() => {}); }, []);
  const run = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await api("/agents/seller/run", { method: "POST",
        body: JSON.stringify({ sector, count: 5, provider: "stub" }) });
      setMarket(await api("/agents/seller/market/" + encodeURIComponent(sector)));
      toast(T("5 propriétaires découverts et scorés (démo)", "5 homeowners discovered and scored (demo)"));
      await load();
    } catch (e) { toast(e.message, true); }
    finally { setBusy(false); }
  };
  const consent = async (id, basis) => {
    if (!basis) return;
    try {
      await api(`/agents/seller/prospects/${id}/consent`,
        { method: "POST", body: JSON.stringify({ consent_basis: basis }) });
      await load();
    } catch (e) { toast(e.message, true); }
  };
  const outreach = async (id, channel, send) => {
    try {
      const d = await api(`/agents/seller/prospects/${id}/outreach`,
        { method: "POST", body: JSON.stringify({ channel, language: "fr", send: !!send }) });
      setDraft(d.draft);
      toast(send
        ? T(`Approche ${d.status} (${channel})`, `Outreach ${d.status} (${channel})`)
        : T("Brouillon prêt — signal de ciblage exclu", "Draft ready — targeting signal excluded"));
      await load();
    } catch (e) { setDraft(null); toast(e.message, true); }
  };
  const promote = async (id) => {
    try {
      await api(`/agents/seller/prospects/${id}/promote`, { method: "POST" });
      toast(T("Promu en lead vendeur — visible dans le Radar", "Promoted to seller lead — visible in the Radar"));
      await load();
    } catch (e) { toast(e.message, true); }
  };

  const OPTS = [
    ["", T("— base LCAP/CASL —", "— CASL basis —")],
    ["express", T("Consentement exprès", "Express consent")],
    ["implied_existing_business", T("Relation d'affaires", "Business relationship")],
    ["implied_inquiry", T("Demande reçue", "Inquiry received")],
    ["conspicuous_publication_b2b", T("Publication B2B", "B2B publication")],
    ["mail_only", T("Courrier seulement", "Mail only")],
  ];

  return (
    <div className="panel p-4" data-testid="seller-panel">
      <div className="mono text-[11px] amber mb-2">
        {T("▮ INTELLIGENCE VENDEUR — qui va vendre bientôt · approche selon le marché", "▮ SELLER INTELLIGENCE — who lists next · market-driven outreach")}
      </div>
      <div className="flex flex-wrap items-end gap-2 mb-2">
        <div className="flex-1 min-w-[200px]">
          <div className="mono text-[10px] text-[var(--mute)]">{T("SECTEUR", "SECTOR")}</div>
          <input value={sector} onChange={(e) => setSector(e.target.value)}
            data-testid="seller-sector-input"
            className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm" />
        </div>
        <button onClick={run} disabled={busy} data-testid="seller-run-btn"
          className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">
          {T("Découvrir & scorer", "Discover & score")}
        </button>
      </div>
      {market && (
        <div className="panel2 p-3 mb-3 mono text-[11px]">
          <span className="amber">▮ {T("MARCHÉ", "MARKET")} · {market.verdict.toUpperCase()}</span>
          <span className="text-[var(--mute)]"> — {market.inventory_months} {T("mois d'inventaire", "months of inventory")} · {market.avg_dom} {T("jours au marché", "days on market")} · {market.yoy_price_pct >= 0 ? "+" : ""}{market.yoy_price_pct}% {T("sur 1 an", "YoY")} <span className="opacity-60">[{market.source}]</span></span>
        </div>
      )}
      <div className="text-[10px] text-[var(--mute)] mb-3 mono">
        {T("Fournisseur: stub (démo) · slot Registre foncier/JLR prêt · Pare-feu: le signal choisit QUI, jamais QUOI. Lettre/script: toujours permis · courriel/SMS: base LCAP requise · voix automatisée: consentement EXPRÈS (CRTC/ADAD).",
           "Provider: stub (demo) · Land-registry/JLR slot ready · Firewall: the signal picks WHO, never WHAT. Letter/script: always allowed · email/SMS: CASL basis required · automated voice: EXPRESS consent (CRTC/ADAD).")}
      </div>
      <div className="space-y-2">
        {rows.map((p) => (
          <div key={p.id} className="panel2 p-3" data-testid={`seller-row-${p.id}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-lg font-semibold amber w-10 text-center">{p.sell_score}</span>
              <span className="font-medium">{p.name}</span>
              {p.is_demo && <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-slate-500/20 text-slate-300 border border-slate-500/60">{T("DÉMO", "DEMO")}</span>}
              <span className="mono text-[10px] text-[var(--mute)]">{p.address}</span>
              <span className="ml-auto mono text-[10px] text-[var(--mute)]">{p.outreach_status}</span>
            </div>
            <div className="mono text-[10px] amber mt-1">{p.score_reasons || T("peu de signaux", "few signals")}</div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <select value={p.consent_basis || ""} onChange={(e) => consent(p.id, e.target.value)}
                data-testid={`seller-consent-${p.id}`}
                className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-[10px]">
                {OPTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <button onClick={() => outreach(p.id, "letter")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("📮 Lettre", "📮 Letter")}</button>
              <button onClick={() => outreach(p.id, "call")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">☎ Script</button>
              <button onClick={() => outreach(p.id, "email", true)} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">{T("✉ Courriel", "✉ Email")}</button>
              <button onClick={() => outreach(p.id, "sms", true)} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">💬 SMS</button>
              <button onClick={() => outreach(p.id, "voice", true)}
                title={T("Voix clonée — consentement exprès requis", "Cloned voice — express consent required")}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">
                📞 {T("Voix", "Voice")}
              </button>
              <button onClick={() => promote(p.id)} className="mono text-[10px] px-2 py-1 rounded bg-[var(--amber)]/90 text-black font-semibold">→ Lead</button>
            </div>
          </div>
        ))}
      </div>
      {draft && <pre className="panel2 p-3 mt-3 mono text-[11px] whitespace-pre-wrap max-h-60 overflow-auto">{draft}</pre>}
    </div>
  );
}

/* -------------------------------------------------------- CONTENT ---- */
function ContentPanel({ toast }) {
  const [topic, setTopic] = useState("Le marché de Villeray ce mois-ci");
  const [queue, setQueue] = useState([]);
  const load = async () => setQueue(await api("/agents/content/queue"));
  useEffect(() => { load().catch(() => {}); }, []);
  const gen = async () => {
    try {
      await api("/agents/content/generate", { method: "POST",
        body: JSON.stringify({ topic, platforms: ["instagram", "facebook", "linkedin"], language: "fr" }) });
      toast(T("3 brouillons générés", "3 drafts generated"));
      await load();
    } catch (e) { toast(e.message, true); }
  };
  const sched = async (id) => {
    const when = new Date(Date.now() + 86400000).toISOString();
    try {
      await api(`/agents/content/${id}/schedule`, { method: "POST", body: JSON.stringify({ when }) });
      toast(T("Planifié demain", "Scheduled for tomorrow"));
      await load();
    } catch (e) { toast(e.message, true); }
  };
  return (
    <div className="panel p-4" data-testid="content-panel">
      <div className="flex flex-wrap items-end gap-2 mb-3">
        <div className="flex-1 min-w-[220px]">
          <div className="mono text-[10px] text-[var(--mute)]">{T("SUJET", "TOPIC")}</div>
          <input value={topic} onChange={(e) => setTopic(e.target.value)}
            data-testid="content-topic-input"
            className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm" />
        </div>
        <button onClick={gen} data-testid="content-generate-btn"
          className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">
          {T("Générer IG + FB + LinkedIn", "Generate IG + FB + LinkedIn")}
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {queue.map((i) => (
          <div key={i.id} className="panel2 p-3 flex flex-col" data-testid={`content-item-${i.id}`}>
            <div className="flex items-center justify-between">
              <span className="mono text-[10px] amber">{i.platform.toUpperCase()} · {i.language}</span>
              <span className="mono text-[9px] text-[var(--mute)]">{i.status}{i.scheduled_at ? " · " + i.scheduled_at.slice(0, 16).replace("T", " ") : ""}</span>
            </div>
            <pre className="mono text-[10px] whitespace-pre-wrap mt-2 flex-1 max-h-44 overflow-auto">{i.body}</pre>
            <div className="flex gap-2 mt-2">
              <button onClick={() => { navigator.clipboard.writeText(i.body); toast(T("Copié", "Copied")); }}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] flex-1">
                {T("Copier", "Copy")}
              </button>
              {i.status === "draft" && (
                <button onClick={() => sched(i.id)}
                  className="mono text-[10px] px-2 py-1 rounded bg-[var(--amber)]/90 text-black font-semibold flex-1">
                  {T("Planifier", "Schedule")}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- VOICE ---- */
function VoicePanel({ toast }) {
  const [cfg, setCfg] = useState(null);
  const [queue, setQueue] = useState([]);
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const load = async () => {
    setCfg(await api("/agents/voice/receptionist"));
    setQueue(await api("/agents/voice/queue"));
  };
  useEffect(() => { load().catch((e) => toast(e.message, true)); }, []);
  const sweep = async (path, label) => {
    if (busy) return;
    setBusy(true);
    try {
      const r = await api(path, { method: "POST" });
      toast(`${label}: ${r.sent} ${T("contacté(s)", "contacted")} · ${r.skipped} ${T("passé(s)", "skipped")}`);
      await load();
    } catch (e) { toast(e.message, true); }
    finally { setBusy(false); }
  };
  const simulate = async () => {
    if (!phone.trim()) return;
    try {
      const r = await api("/webhooks/voice-inbound", { method: "POST", body: JSON.stringify({ from: phone.trim() }) });
      toast(r.handled
        ? T("Appel manqué traité — texto + rappel créés", "Missed call handled — text + callback created")
        : (r.reason || T("Non traité", "Not handled")), !r.handled);
      setPhone("");
      await load();
    } catch (e) { toast(e.message, true); }
  };
  const PURPOSE = {
    voice_priority: T("Lead prioritaire", "Priority lead"),
    voice_checkin: T("Relance client", "Client check-in"),
    missed_call_ack: T("Appel manqué", "Missed call"),
    qualification_form: T("Formulaire", "Form"),
  };
  return (
    <div className="space-y-4" data-testid="voice-panel">
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-2">
          {T("▮ RÉCEPTIONNISTE VOCALE IA — appels manqués, FR québécois + EN", "▮ AI VOICE RECEPTIONIST — missed calls, Québécois FR + EN")}
        </div>
        {cfg && (
          <>
            <div className="mono text-[10px] text-[var(--mute)] mb-2">
              {T("Fournisseur : ", "Provider: ")}{cfg.provider.note} · webhook <span className="amber">{cfg.webhook}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="panel2 p-3">
                <div className="mono text-[10px] amber mb-1">🇫🇷 {T("Accueil français", "French greeting")}</div>
                <div className="text-[12px] leading-relaxed">{cfg.greetings.fr}</div>
              </div>
              <div className="panel2 p-3">
                <div className="mono text-[10px] amber mb-1">🇬🇧 {T("Accueil anglais", "English greeting")}</div>
                <div className="text-[12px] leading-relaxed">{cfg.greetings.en}</div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3 flex-wrap">
              <input value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder={T("Simuler un appel manqué — nº (ex: 514 555 0148)", "Simulate a missed call — # (e.g. 514 555 0148)")}
                data-testid="voice-simulate-input"
                className="bg-black/30 border border-[var(--line)] rounded px-3 py-1.5 text-sm outline-none focus:border-[var(--amber)] min-w-[260px]" />
              <button onClick={simulate} data-testid="voice-simulate-btn"
                className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
                ☎️ {T("Simuler", "Simulate")}
              </button>
              <span className="mono text-[10px] text-[var(--mute)]">
                {T("→ lead créé si inconnu · texto d'excuse · rappel planifié", "→ lead created if unknown · apology text · callback scheduled")}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-2">
          {T("▮ AGENT D'APPELS IA — leads prioritaires & relances clients", "▮ AI CALLING AGENT — priority leads & client check-ins")}
        </div>
        <div className="mono text-[10px] text-[var(--mute)] mb-3">
          {T("Lead : priorité ≥ seuil → appel (voix clonée) ou texto + formulaire de qualification + tâche de rappel. Client Centris : engagement ≥ seuil (chaud) ou inactif → relance. Seuils dans features.toml [settings]. Garde-fous : consentement LCAP requis, une seule touche par lead, période de repos par client.",
             "Lead: priority ≥ threshold → call (cloned voice) or text + qualification form + callback task. Centris client: engagement ≥ threshold (hot) or dormant → check-in. Thresholds in features.toml [settings]. Guardrails: CASL consent required, one touch per lead, per-client cooldown.")}
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => sweep("/agents/voice/outreach/run", T("Leads prioritaires", "Priority leads"))} disabled={busy}
            data-testid="voice-outreach-btn"
            className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
            {T("📞 Contacter les leads prioritaires", "📞 Contact priority leads")}
          </button>
          <button onClick={() => sweep("/agents/voice/checkins/run", T("Relances clients", "Client check-ins"))} disabled={busy}
            data-testid="voice-checkins-btn"
            className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
            {T("🔁 Relancer les clients (engagement)", "🔁 Check in on clients (engagement)")}
          </button>
        </div>
        {queue.length > 0 && (
          <div className="mt-3 space-y-1.5">
            <div className="mono text-[10px] text-[var(--mute)]">{T("File des touches IA (50 dernières) :", "AI touch queue (last 50):")}</div>
            {queue.map((m) => (
              <div key={m.id} className="panel2 p-2.5 flex items-start gap-2">
                <span className="mono text-[10px] shrink-0" aria-hidden="true">{m.channel === "voice" ? "📞" : "💬"}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[12px] font-medium">{m.contact}</span>
                    <span className="mono text-[9px] px-1.5 py-0.5 rounded border border-[var(--line)] text-[var(--mute)]">{PURPOSE[m.purpose] || m.purpose}</span>
                    <span className={"mono text-[9px] px-1.5 py-0.5 rounded " +
                      (m.status === "sent" ? "bg-emerald-400/15 text-emerald-300" :
                        m.status === "failed" ? "bg-red-400/15 text-red-300" :
                          "bg-slate-400/15 text-slate-300")}>
                      {m.status}
                    </span>
                    <span className="mono text-[9px] text-[var(--mute)] ml-auto">{m.created_at.slice(0, 16).replace("T", " ")}</span>
                  </div>
                  <div className="mono text-[10px] text-[var(--mute)] mt-0.5 whitespace-pre-wrap">
                    {m.body.length > 180 ? m.body.slice(0, 180) + "…" : m.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------ TAB CONTAINER ------ */
export function AgentsView({ toast }) {
  const [tab, setTab] = useState("office");
  const TABS = [
    ["office", T("🗂 Gestion de bureau", "🗂 Office management")],
    ["prospect", T("🎯 Prospection", "🎯 Prospecting")],
    ["seller", T("🏠 Vendeurs", "🏠 Sellers")],
    ["content", T("📣 Contenu & social", "📣 Content & social")],
    ["voice", T("📞 Voix & relances", "📞 Voice & follow-ups")],
  ];
  return (
    <div className="fadein" data-testid="agents-view">
      <div className="flex gap-2 mb-4 flex-wrap">
        {TABS.map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)}
            data-testid={`agents-tab-${k}`}
            className={"mono text-[11px] px-3 py-1.5 rounded border " +
              (tab === k ? "border-[var(--amber)] amber" : "border-[var(--line)] text-[var(--mute)]")}>
            {l}
          </button>
        ))}
      </div>
      {tab === "office" && <OfficePanel toast={toast} />}
      {tab === "prospect" && <ProspectPanel toast={toast} />}
      {tab === "seller" && <SellerPanel toast={toast} />}
      {tab === "content" && <ContentPanel toast={toast} />}
      {tab === "voice" && <VoicePanel toast={toast} />}
    </div>
  );
}
