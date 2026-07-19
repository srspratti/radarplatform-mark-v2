import React, { useState, useEffect, useCallback } from "react";
import { T, trTxt, trSub, since } from "../i18n.js";
import { api, apiRaw, getTenant } from "../api.js";
import { SourceChip, PriorityBar } from "../kit.jsx";

const FU_ICON = {
  sequence: "⏰", anniversary: "🎂", tax_season: "🧾",
  equity_report: "📈", review_ask: "⭐", callback: "📞", deadline: "⏳",
};

export function FollowupsPanel({ toast }) {
  const [due, setDue] = useState([]);
  const load = useCallback(async () => {
    try { setDue(await api("/followups/due")); } catch (e) { /* ignore */ }
  }, []);
  useEffect(() => { load(); }, [load]);
  const act = async (id, a) => {
    try {
      await api(`/followups/${id}/${a}`, { method: "POST" });
      toast(a === "done"
        ? T("Relance faite — consignée au journal", "Follow-up done — logged")
        : T("Relance passée", "Follow-up skipped"));
      load();
    } catch (e) { toast(e.message, true); }
  };
  if (due.length === 0) return null;
  return (
    <div className="panel p-4" data-testid="followups-panel">
      <div className="mono text-[11px] amber mb-2">
        {T("▮ RELANCES DUES — séquences, client à vie, avis", "▮ FOLLOW-UPS DUE — sequences, client-for-life, reviews")}
      </div>
      <div className="space-y-1.5">
        {due.map((f) => (
          <div key={f.id} className="flex items-center gap-2 text-sm py-1 border-b border-[var(--line)]/30 last:border-0" data-testid={`followup-${f.id}`}>
            <span aria-hidden="true">{FU_ICON[f.kind] || "📌"}</span>
            <span className="font-medium shrink-0">{f.contact.name}</span>
            <span className="mono text-[10px] text-[var(--mute)] truncate flex-1">{f.note}</span>
            {f.contact.phone && (
              <a href={"tel:" + f.contact.phone.replace(/[^+\d]/g, "")}
                title={T("Appeler depuis votre téléphone", "Call from your phone")}
                data-testid={`followup-call-${f.id}`}
                className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">
                📞
              </a>
            )}
            <button onClick={() => act(f.id, "done")}
              data-testid={`followup-done-${f.id}`}
              className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">
              {T("✓ Fait", "✓ Done")}
            </button>
            <button onClick={() => act(f.id, "skip")}
              data-testid={`followup-skip-${f.id}`}
              className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--warn)]">
              {T("Passer", "Skip")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OpenHousePanel({ toast }) {
  const [ref, setRef] = useState("");
  const [qr, setQr] = useState(null);
  const [url, setUrl] = useState("");
  const gen = async () => {
    const r = (ref.trim() || "visite").replace(/[^\w-]/g, "");
    try {
      const resp = await apiRaw("/openhouse/" + encodeURIComponent(r) + "/qr.svg");
      setQr(URL.createObjectURL(await resp.blob()));
      setUrl(location.origin + "/oh/" + r);
    } catch (e) { toast(T("QR indisponible", "QR unavailable"), true); }
  };
  return (
    <div className="panel p-4" data-testid="open-house-panel">
      <div className="mono text-[11px] amber mb-2">
        {T("▮ PORTE OUVERTE — feuille d'inscription QR", "▮ OPEN HOUSE — QR sign-in sheet")}
      </div>
      <div className="flex gap-2 items-center flex-wrap">
        <input value={ref} onChange={(e) => setRef(e.target.value)}
          placeholder={T("Réf. inscription (ex: 28374619)", "Listing ref. (e.g. 28374619)")}
          data-testid="open-house-ref-input"
          className="bg-black/30 border border-[var(--line)] rounded px-3 py-1.5 text-sm outline-none focus:border-[var(--amber)]" />
        <button onClick={gen}
          data-testid="open-house-generate-btn"
          className="mono text-[10px] px-3 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
          {T("Générer le QR", "Generate QR")}
        </button>
        {url && <a href={url} target="_blank" rel="noreferrer" className="mono text-[10px] text-[var(--mute)] underline">{url}</a>}
      </div>
      {qr && (
        <div className="mt-3 bg-white rounded-lg p-3 inline-block">
          <img src={qr} width="180" height="180" alt="QR porte ouverte" />
        </div>
      )}
      <div className="mono text-[10px] text-[var(--mute)] mt-2">
        {T("Imprimez le QR pour la table d'entrée — chaque visiteur inscrit devient un lead (entonnoir « porte ouverte ») avec consentement consigné au registre.",
           "Print the QR for the entry table — every signed-in visitor becomes a lead (open-house funnel) with consent recorded in the registry.")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- RADAR ------ */
export function RadarView({ toast, on, feats, LockedCard }) {
  const [sum, setSum] = useState(null);
  const [leads, setLeads] = useState([]);
  const load = useCallback(async () => {
    setSum(await api("/dashboard/summary"));
    setLeads(await api("/leads"));
  }, []);
  useEffect(() => { load().catch((e) => toast(e.message, true)); }, [load]);
  const act = async (fn, ok) => {
    try { await fn(); toast(ok); await load(); }
    catch (e) { toast(e.message, true); }
  };
  if (!sum) return <div className="mono text-sm text-[var(--mute)] p-8" data-testid="radar-loading">{T("chargement du radar…", "loading radar…")}</div>;

  return (
    <div className="space-y-5 fadein" data-testid="radar-view">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          ["LEADS", sum.counts.leads],
          ["CLIENTS", sum.counts.clients],
          [T("🔥 CHAUDS", "🔥 HOT"), sum.counts.hot_leads],
          [T("😴 À RELANCER", "😴 RE-ENGAGE"), sum.counts.dormant_clients],
          ["📤 WRITEBACKS", sum.counts.pending_writebacks],
        ].map(([k, v]) => (
          <div key={k} className="panel p-3 scanline" data-testid={`kpi-${String(k).replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
            <div className="text-2xl font-semibold mt-1">{v}</div>
          </div>
        ))}
      </div>

      {sum.alerts.length > 0 && (
        <div className="panel p-4" data-testid="radar-alerts">
          <div className="mono text-[11px] amber mb-2">
            {T("▮ RADAR — INTELLIGENCE D'ACHAT · signaux prioritaires", "▮ RADAR — BUYING INTELLIGENCE · priority signals")}
          </div>
          {sum.alerts.map((a, i) => (
            <div key={i} className="text-sm py-1 border-b border-[var(--line)]/40 last:border-0">{trTxt(a)}</div>
          ))}
        </div>
      )}

      <div className="panel p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="mono text-[11px] amber">
            {T("▮ BOÎTE DE LEADS — entonnoirs existants, score de priorité IA", "▮ LEADS INBOX — existing funnels, AI priority score")}
          </div>
          <div className="flex gap-2">
            <button onClick={() => act(() => api("/connectors/fub/import", { method: "POST" }), T("Import FUB terminé", "FUB import done"))}
              data-testid="fub-import-btn"
              className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
              {T("↧ Importer FUB", "↧ Import FUB")}
            </button>
            <button onClick={() => act(() => api("/connectors/fub/flush-writebacks", { method: "POST" }), T("Writebacks poussés", "Writebacks pushed"))}
              data-testid="fub-flush-btn"
              className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
              {T("↥ Pousser writebacks", "↥ Push writebacks")}
            </button>
          </div>
        </div>
        <div className="mono text-[10px] text-[var(--mute)] mb-3">
          {T("Sources : CRM FUB (portails tiers inclus) · alertes Matrix · références · site web — d'autres entonnoirs pourront s'ajouter. Un lead devient client au moment de son ajout à Centris (bouton →), et apparaît alors dans le tableau d'engagement.",
             "Sources: FUB CRM (third-party portals included) · Matrix alerts · referrals · website — more funnels can be added. A lead becomes a client the moment it is added to Centris (→ button), and then appears on the engagement dashboard.")}
        </div>
        <div className="space-y-2">
          {leads.length === 0 && (
            <div className="text-sm text-[var(--mute)]" data-testid="radar-empty">
              {T("Aucun lead en attente — le radar est propre.", "No leads waiting — the radar is clean.")}
              <div className="mono text-[10px] mt-1.5 text-[var(--mute)]">
                ⏱ {T("Dernier événement FUB", "Last FUB event")} : {since(sum.sync && sum.sync.last_fub)} ·
                {" "}{T("dernière alerte Matrix", "last Matrix alert")} : {since(sum.sync && sum.sync.last_matrix)} —
                {" "}{T("les entonnoirs restent branchés.", "the funnels are still connected.")}
              </div>
            </div>
          )}
          {leads.map((l) => (
            <div key={l.id} className="panel2 p-3 flex flex-col md:flex-row md:items-center gap-3" data-testid={`lead-row-${l.id}`}>
              <div className="mono text-lg font-semibold w-10 text-center amber">{l.priority_score}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium">{l.name}</span>
                  <SourceChip source={l.source} sublabel={trSub(l.sublabel)} />
                </div>
                <div className="mono text-[11px] text-[var(--mute)] mt-0.5 truncate">
                  {trTxt(l.priority_hint)}{l.notes ? " — " + l.notes.slice(0, 70) : ""}
                </div>
                <div className="mt-1.5"><PriorityBar score={l.priority_score} /></div>
              </div>
              <div className="flex gap-2 shrink-0 items-center flex-wrap">
                {l.phone && (
                  <a href={"tel:" + l.phone.replace(/[^+\d]/g, "")}
                    title={T("Appeler ", "Call ") + l.phone + T(" — l'appel part de VOTRE téléphone", " — the call goes out from YOUR phone")}
                    data-testid={`lead-call-${l.id}`}
                    className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">
                    {T("📞 Appeler", "📞 Call")}
                  </a>
                )}
                {l.phone && (
                  <a href={"sms:" + l.phone.replace(/[^+\d]/g, "")}
                    title={T("Texto — envoyé depuis VOTRE téléphone", "Text — sent from YOUR phone")}
                    data-testid={`lead-sms-${l.id}`}
                    className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">
                    💬
                  </a>
                )}
                <button onClick={() => act(() => api(`/leads/${l.id}/contacted`, { method: "POST" }), T("Marqué contacté", "Marked contacted"))}
                  data-testid={`lead-contacted-${l.id}`}
                  className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-sky-400">
                  {T("✓ Contacté", "✓ Contacted")}
                </button>
                <button onClick={() => act(() => api(`/leads/${l.id}/convert`, { method: "POST" }), T("Ajouté comme client Centris — jeton portail Vitrine émis", "Added as Centris client — Vitrine portal token issued"))}
                  title={T("L'ajout à Centris convertit ce lead en client — il passe au tableau d'engagement", "Adding to Centris converts this lead into a client — it moves to the engagement dashboard")}
                  data-testid={`lead-convert-${l.id}`}
                  className="mono text-[10px] px-2.5 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">
                  {T("→ Ajouter à Centris", "→ Add to Centris")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sum.top_clients && sum.top_clients.length > 0 && (
        <div className="panel p-4 flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex-1">
            <div className="mono text-[11px] amber mb-1">
              {T("▮ CLIENTS CENTRIS — score d'engagement → tableau de bord principal", "▮ CENTRIS CLIENTS — engagement score → main dashboard")}
            </div>
            <div className="mono text-[10px] text-[var(--mute)]">
              {T("Un seul cerveau, deux scores : la priorité IA (quel lead appeler maintenant) reste ici dans le Radar; l'engagement des clients Centris (activité Vitrine · Matrix · CRM) vit sur le tableau de bord principal.",
                 "One brain, two scores: AI priority (which lead to call now) stays here in the Radar; Centris-client engagement (Vitrine · Matrix · CRM activity) lives on the main dashboard.")}
            </div>
          </div>
          <a href="/" data-testid="engagement-dashboard-link"
            className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)] shrink-0">
            {T("📊 Ouvrir le tableau d'engagement ↗", "📊 Open the engagement dashboard ↗")}
          </a>
        </div>
      )}

      {on && (on("sequences") || on("client_for_life") || on("review_engine")) && <FollowupsPanel toast={toast} />}

      {on && (on("deadline_sentinel") || on("visit_feedback")) && (
        <div className="flex gap-2 flex-wrap items-center">
          <span className="mono text-[10px] text-[var(--mute)]">{T("▮ BALAYAGES", "▮ SWEEPS")}</span>
          {on("deadline_sentinel") && (
            <button onClick={async () => {
              try {
                const r = await api("/agents/deadlines/run", { method: "POST" });
                toast(T(`Échéances : ${r.checked} vérifiée(s), ${r.warned} alerte(s)`, `Deadlines: ${r.checked} checked, ${r.warned} warned`));
              } catch (e) { toast(e.message, true); }
            }}
              data-testid="deadlines-sweep-btn"
              className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
              {T("⏳ Vérifier les échéances", "⏳ Check deadlines")}
            </button>
          )}
          {on("visit_feedback") && (
            <button onClick={async () => {
              try {
                const r = await api("/agents/feedback/run", { method: "POST" });
                toast(T(`Sondages : ${r.surveys_sent} envoyé(s) / ${r.visits_checked} visite(s)`, `Surveys: ${r.surveys_sent} sent / ${r.visits_checked} visits`));
              } catch (e) { toast(e.message, true); }
            }}
              data-testid="feedback-sweep-btn"
              className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
              {T("📝 Sondages post-visite", "📝 Post-visit surveys")}
            </button>
          )}
        </div>
      )}

      {on && feats && !on("sequences") && LockedCard && <LockedCard k="sequences" feats={feats} />}
      {on && on("open_house_qr") && <OpenHousePanel toast={toast} />}
      {on && feats && !on("open_house_qr") && LockedCard && <LockedCard k="open_house_qr" feats={feats} />}

      {on && on("ai_texts") && feats && feats.settings && (
        <div className="mono text-[10px] text-[var(--mute)]">
          {T("🤖 Textos IA — seuils : engagement ≥ ", "🤖 AI texts — thresholds: engagement ≥ ")}
          {feats.settings.engagement_text_threshold ?? 70}
          {" · "}{T("priorité ≥ ", "priority ≥ ")}{feats.settings.priority_text_threshold ?? 75}
          {" · "}{T("modifier dans features.toml [settings]", "edit in features.toml [settings]")}
        </div>
      )}
    </div>
  );
}
