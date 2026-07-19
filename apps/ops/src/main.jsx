/* Radar Hub — Ops Console (main entry).
 * Port of radar_hub/dashboard.py — same visual + behavioural surface,
 * now bundled by esbuild instead of transformed by @babel/standalone.
 * Tailwind CSS is compiled ahead-of-time into /static/ops/tw.css.
 */
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { T, LANG } from "./i18n.js";
import { api } from "./api.js";
import { Toast } from "./kit.jsx";
import { RadarView } from "./views/radar.jsx";
import { ContactsView } from "./views/contacts.jsx";
import { AgentsView } from "./views/agents.jsx";
import { AnalyticsView } from "./views/analytics.jsx";
import { PlansView, LockedCard } from "./views/plans.jsx";
import { NotifBell } from "./panels/notif-bell.jsx";

function App() {
  const [view, setView] = useState("radar");
  const [feats, setFeats] = useState(null);
  const [lang, setLang] = useState(LANG);
  const [toastMsg, setToastMsg] = useState(null);
  const [toastErr, setToastErr] = useState(false);

  const toast = (m, err = false) => {
    setToastMsg(m);
    setToastErr(err);
    setTimeout(() => setToastMsg(null), 3500);
  };

  useEffect(() => {
    api("/features").then(setFeats).catch(() => {});
  }, []);

  const on = (k) => !!(feats && feats.features && feats.features[k] && feats.features[k].enabled);

  const flipLang = () => {
    const next = lang === "fr" ? "en" : "fr";
    localStorage.setItem("radar_lang", next);
    setLang(next);
    window.location.reload();
  };

  const NAV = [
    ["radar", "📡 Radar"],
    ["contacts", T("👥 Contacts", "👥 Contacts")],
    ["agents", "🤖 Agents"],
    ["analytics", T("📈 Analytique", "📈 Analytics")],
    ["plans", T("⭐ Forfaits", "⭐ Plans")],
  ];

  return (
    <div className="min-h-screen" data-testid="ops-app">
      <header
        data-testid="ops-header"
        className="border-b border-[var(--line)] px-4 md:px-6 py-3 flex items-center gap-4 sticky top-0 bg-[var(--petrol)]/95 backdrop-blur z-30 flex-wrap">
        <div>
          <div className="font-bold tracking-tight text-lg" data-testid="ops-brand">
            RADAR<span className="amber">HUB</span>
          </div>
          <div className="mono text-[9px] text-[var(--mute)] -mt-0.5 flex items-center gap-2 flex-wrap">
            <span>{T("PLATEFORME COURTIER · QUÉBEC", "REALTOR PLATFORM · QUÉBEC")} · tenant: danny</span>
            {feats && (
              <button onClick={() => setView("plans")}
                data-testid="active-plan-btn"
                className="px-1.5 py-0.5 rounded border border-[var(--amber)]/60 amber uppercase tracking-wider hover:bg-[var(--amber)]/10"
                title={T("Forfait actif — cliquer pour voir tous les forfaits", "Active plan — click to see all plans")}>
                {T("forfait", "plan")} {feats.tier}
              </button>
            )}
          </div>
        </div>
        <nav className="flex gap-1 ml-auto items-center flex-wrap" aria-label="Ops navigation">
          {NAV.map(([k, l]) => (
            <button key={k} onClick={() => setView(k)}
              data-testid={`nav-${k}`}
              aria-current={view === k ? "page" : undefined}
              className={"mono text-[11px] px-3 py-1.5 rounded-lg border transition-colors " +
                (view === k
                  ? "border-[var(--amber)] amber bg-[var(--amber)]/10"
                  : "border-transparent text-[var(--mute)] hover:text-[var(--ink)]")}>
              {l}
            </button>
          ))}
          <a href="/" data-testid="engagement-link"
            title={T("Tableau d'engagement — clients Centris seulement", "Engagement dashboard — Centris clients only")}
            className="mono text-[11px] px-3 py-1.5 rounded-lg border border-transparent text-[var(--mute)] hover:text-[var(--ink)]">
            {T("📊 Engagement ↗", "📊 Engagement ↗")}
          </a>
          <button onClick={flipLang}
            title={T("Passer en anglais", "Switch to French")}
            data-testid="lang-toggle-btn"
            className="mono text-[11px] px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--amber)]">
            🌐 {lang === "fr" ? "FR" : "EN"}
          </button>
          {on("notifications") && <NotifBell />}
        </nav>
      </header>

      <main className="p-4 md:p-6 max-w-6xl mx-auto" data-testid="ops-main">
        {view === "radar" && <RadarView toast={toast} on={on} feats={feats} LockedCard={LockedCard} />}
        {view === "contacts" && <ContactsView toast={toast} on={on} feats={feats} />}
        {view === "agents" && <AgentsView toast={toast} />}
        {view === "analytics" && <AnalyticsView toast={toast} on={on} feats={feats} LockedCard={LockedCard} />}
        {view === "plans" && <PlansView feats={feats} />}
      </main>

      <Toast msg={toastMsg} err={toastErr} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
