import React, { useState, useEffect } from "react";
import { T, LANG, trStageLabel, FUNNEL_LABEL_EN } from "../i18n.js";
import { api } from "../api.js";

/* ---- horizontal bar chart -------------------------------------- */
function HBars({ data, valueKey, labelKey, color, fmt }) {
  const f = fmt || ((v) => v);
  const max = Math.max(...data.map((d) => d[valueKey]), 1);
  return (
    <div className="space-y-1.5" data-testid="hbars">
      {data.map((d, i) => (
        <div key={i} className="flex items-center gap-2 mono text-[11px]">
          <span className="w-[110px] shrink-0 text-[var(--mute)] truncate" title={d[labelKey]}>{d[labelKey]}</span>
          <div className="flex-1 h-3 bg-[#123542] rounded overflow-hidden">
            <div style={{
              width: (100 * d[valueKey] / max) + "%",
              background: color || "var(--amber)",
              height: "100%",
              transition: "width .5s",
            }} />
          </div>
          <span className="w-[56px] text-right shrink-0">{f(d[valueKey])}</span>
        </div>
      ))}
    </div>
  );
}

const PRESET_QUESTIONS = () => [
  T("Quel entonnoir a le meilleur taux de conversion vers client Centris ?", "Which funnel converts best into Centris clients?"),
  T("Où devrais-je investir mon temps de prospection cette semaine ?", "Where should I invest my prospecting time this week?"),
  T("Résume la santé de mon portefeuille en 5 lignes.", "Summarize my portfolio's health in 5 lines."),
  T("Quels clients Centris risquent de décrocher ?", "Which Centris clients are at risk of drifting?"),
  T("La tendance des nouveaux contacts monte ou descend ?", "Is the new-contact trend up or down?"),
];

function CMAPanel({ toast }) {
  const [subject, setSubject] = useState("");
  const [comps, setComps] = useState("");
  const [out, setOut] = useState(null);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (busy) return;
    setBusy(true);
    try {
      setOut(await api("/cma", { method: "POST",
        body: JSON.stringify({ subject, comps_text: comps }) }));
    } catch (e) { toast(e.message, true); }
    finally { setBusy(false); }
  };
  return (
    <div className="panel p-4" data-testid="cma-panel">
      <div className="mono text-[11px] amber mb-2">{T("▮ ANALYSE COMPARATIVE (ACM) — collez vos comparables", "▮ COMPARATIVE MARKET ANALYSIS (CMA) — paste your comps")}</div>
      <input value={subject} onChange={(e) => setSubject(e.target.value)}
        placeholder={T("Propriété sujette (ex: 4530 rue Rachel E — plex 2 chambres)", "Subject property (e.g. 4530 Rachel St E — 2-bedroom plex)")}
        data-testid="cma-subject-input"
        className="w-full bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)] mb-2" />
      <textarea value={comps} onChange={(e) => setComps(e.target.value)} rows="4"
        placeholder={T("Un comparable par ligne — adresse, prix vendu, pi² (optionnel)", "One comp per line — address, sold price, sqft (optional)") + "\n4512 rue Rachel E — 615 000 — 1 240\n4488 rue Marquette — 589 000"}
        data-testid="cma-comps-input"
        className="w-full bg-black/30 border border-[var(--line)] rounded px-3 py-2 mono text-[11px] outline-none focus:border-[var(--amber)]" />
      <button onClick={run} disabled={busy} data-testid="cma-run-btn"
        className="mono text-[10px] mt-2 px-4 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
        {busy ? T("analyse…", "analyzing…") : T("Générer l'ACM", "Generate CMA")}
      </button>
      {out && (
        <div className="mt-3 p-3 bg-black/30 rounded border border-[var(--line)]/50 fadein">
          <div className="mono text-[11px] mb-2 amber">
            {out.stats.n} {T("comparables · médiane", "comps · median")} {out.stats.median.toLocaleString("fr-CA")} $ ·
            {" "}{T("suggéré", "suggested")} {out.stats.suggested_low.toLocaleString("fr-CA")} $ – {out.stats.suggested_high.toLocaleString("fr-CA")} $
            {out.stats.avg_price_per_sqft ? " · " + out.stats.avg_price_per_sqft + " $/pi²" : ""}
          </div>
          <div className="text-sm whitespace-pre-wrap">{out.narrative}</div>
        </div>
      )}
    </div>
  );
}

function FarmingPanel({ toast }) {
  const [area, setArea] = useState("");
  const [hl, setHl] = useState("");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!area.trim() || busy) return;
    setBusy(true);
    try {
      const r = await api("/agents/content/farming-report", { method: "POST",
        body: JSON.stringify({ area, highlights: hl }) });
      setDraft(r.draft);
      toast(T("Infolettre ajoutée à la file de contenu", "Newsletter added to the content queue"));
    } catch (e) { toast(e.message, true); }
    finally { setBusy(false); }
  };
  return (
    <div className="panel p-4" data-testid="farming-panel">
      <div className="mono text-[11px] amber mb-2">
        {T("▮ INFOLETTRE DE QUARTIER — « le marché dans votre coin »", "▮ NEIGHBOURHOOD NEWSLETTER — “the market in your area”")}
      </div>
      <div className="flex gap-2 flex-wrap">
        <input value={area} onChange={(e) => setArea(e.target.value)}
          placeholder={T("Quartier (ex: Rosemont)", "Neighbourhood (e.g. Rosemont)")}
          data-testid="farming-area-input"
          className="flex-1 min-w-[150px] bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)]" />
        <input value={hl} onChange={(e) => setHl(e.target.value)}
          placeholder={T("Faits saillants (ventes récentes, projets…)", "Highlights (recent sales, projects…)")}
          data-testid="farming-highlights-input"
          className="flex-[2] min-w-[200px] bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)]" />
        <button onClick={run} disabled={busy} data-testid="farming-run-btn"
          className="mono text-[10px] px-4 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
          {busy ? "…" : T("Rédiger", "Draft it")}
        </button>
      </div>
      {draft && <pre className="mono text-[11px] mt-3 p-3 bg-black/30 rounded whitespace-pre-wrap fadein">{draft}</pre>}
    </div>
  );
}

export function AnalyticsView({ toast, on, feats, LockedCard }) {
  const [stats, setStats] = useState(null);
  const [q, setQ] = useState("");
  const [ans, setAns] = useState(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    api("/analytics/summary").then(setStats).catch((e) => toast(e.message, true));
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  const ask = async (question) => {
    if (!question.trim() || busy) return;
    setBusy(true);
    setAns(null);
    try {
      setAns(await api("/analytics/ask", { method: "POST", body: JSON.stringify({ question }) }));
    } catch (e) { toast(e.message, true); }
    finally { setBusy(false); }
  };

  if (!stats) return <div className="mono text-sm text-[var(--mute)] p-8" data-testid="analytics-loading">{T("chargement analytique…", "loading analytics…")}</div>;

  const wmax = Math.max(...stats.weekly_new.map((w) => w.count), 1);
  const funnelsT = stats.funnels.map((f) => ({
    ...f,
    label: LANG === "fr" ? f.label : (FUNNEL_LABEL_EN[f.funnel] || f.label),
  }));

  return (
    <div className="space-y-4 fadein" data-testid="analytics-view">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          ["CONTACTS", stats.totals.contacts],
          ["LEADS", stats.totals.leads],
          [T("CLIENTS CENTRIS", "CENTRIS CLIENTS"), stats.totals.clients],
          [T("ENGAGEMENT MOYEN", "AVG ENGAGEMENT"), stats.totals.avg_engagement + "/100"],
          [T("😴 À RELANCER", "😴 RE-ENGAGE"), stats.totals.dormant_clients],
        ].map(([k, v]) => (
          <div key={k} className="panel p-3 scanline" data-testid={`stat-${String(k).replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
            <div className="text-2xl font-semibold mt-1">{v}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="panel p-4">
          <div className="mono text-[11px] amber mb-3">{T("▮ CONTACTS PAR ENTONNOIR", "▮ CONTACTS BY FUNNEL")}</div>
          <HBars data={funnelsT} valueKey="total" labelKey="label" />
        </div>
        <div className="panel p-4">
          <div className="mono text-[11px] amber mb-3">{T("▮ CONVERSION VERS CLIENT CENTRIS", "▮ CONVERSION TO CENTRIS CLIENT")}</div>
          <HBars data={funnelsT} valueKey="conversion_pct" labelKey="label" color="var(--ok)" fmt={(v) => v + " %"} />
        </div>
        <div className="panel p-4">
          <div className="mono text-[11px] amber mb-3">{T("▮ NOUVEAUX CONTACTS / SEMAINE (8 sem.)", "▮ NEW CONTACTS / WEEK (8 wks)")}</div>
          <div className="flex items-end gap-1.5" style={{ height: "110px" }}>
            {stats.weekly_new.map((w, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
                <div className="mono text-[9px] text-[var(--mute)]">{w.count || ""}</div>
                <div className="w-full rounded-t" style={{ height: Math.max(2, Math.round(70 * w.count / wmax)) + "px", background: "var(--amber)", opacity: 0.85 }} />
                <div className="mono text-[8px] text-[var(--mute)]">{w.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel p-4">
          <div className="mono text-[11px] amber mb-3">{T("▮ CLIENTS PAR ÉTAPE DU PIPELINE", "▮ CLIENTS BY PIPELINE STAGE")}</div>
          {Object.keys(stats.stages).length === 0
            ? <div className="text-xs text-[var(--mute)]">{T("Aucun client Centris pour l'instant.", "No Centris clients yet.")}</div>
            : <HBars data={Object.entries(stats.stages).map(([k, v]) => ({ label: trStageLabel(k), n: v }))}
                valueKey="n" labelKey="label" color="#7dd3fc" />}
        </div>
      </div>

      {on && on("cma_generator") && <CMAPanel toast={toast} />}
      {on && feats && !on("cma_generator") && LockedCard && <LockedCard k="cma_generator" feats={feats} />}
      {on && on("farming_reports") && <FarmingPanel toast={toast} />}
      {on && feats && !on("farming_reports") && LockedCard && <LockedCard k="farming_reports" feats={feats} />}
      {on && feats && !on("analytics_ai") && LockedCard && <LockedCard k="analytics_ai" feats={feats} />}

      {(!on || on("analytics_ai")) && (
        <div className="panel p-4" data-testid="analytics-ai-panel">
          <div className="mono text-[11px] amber mb-2">
            {T("▮ DEMANDER UN RAPPORT — IA, à partir de vos données uniquement", "▮ ASK FOR A REPORT — AI, from your data only")}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {PRESET_QUESTIONS().map((p, i) => (
              <button key={i} onClick={() => { setQ(p); ask(p); }}
                data-testid={`analytics-preset-${i}`}
                className="mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--line)] text-[var(--mute)] hover:border-[var(--amber)] hover:text-[var(--ink)] text-left">
                {p}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input value={q} onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") ask(q); }}
              placeholder={T("Posez n'importe quelle question sur vos leads, entonnoirs, conversions…", "Ask anything about your leads, funnels, conversions…")}
              data-testid="analytics-ask-input"
              className="flex-1 bg-black/30 border border-[var(--line)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--amber)]" />
            <button onClick={() => ask(q)} disabled={busy} data-testid="analytics-ask-btn"
              className="mono text-[10px] px-4 rounded-lg bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
              {busy ? T("analyse…", "analyzing…") : T("Analyser", "Analyze")}
            </button>
          </div>
          {ans && (
            <div className="mt-3 p-3 bg-black/30 rounded-lg border border-[var(--line)]/50 fadein">
              <div className="text-sm whitespace-pre-wrap leading-relaxed">{ans.answer}</div>
              <div className="mono text-[9px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/40">
                {ans.llm
                  ? T("✦ généré par IA (Haiku) à partir des données du portefeuille", "✦ AI-generated (Haiku) from your portfolio data")
                  : T("rapport déterministe — définir ANTHROPIC_API_KEY pour l'analyse IA en langage naturel", "deterministic report — set ANTHROPIC_API_KEY for natural-language AI analysis")}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
