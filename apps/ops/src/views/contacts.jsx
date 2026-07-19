import React, { useState, useEffect, useCallback } from "react";
import {
  T, LANG, trStage, trStageLabel, trSub, trTxt, trFam,
  STAGE_EN, FUNNEL_LABEL, FUNNEL_LABEL_EN, fLabel, fPitch,
} from "../i18n.js";
import { api } from "../api.js";
import { SourceChip, Ring, Stepper, ORIGIN_ICON } from "../kit.jsx";

const chipCls = (on) => "mono text-[10px] px-2.5 py-1 rounded-full border transition-colors " +
  (on
    ? "border-[var(--amber)] amber bg-[var(--amber)]/10"
    : "border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)]");

function ConsentPanel({ cid, toast }) {
  const [rows, setRows] = useState([]);
  const load = useCallback(async () => {
    try { setRows(await api(`/contacts/${cid}/consents`)); } catch (e) { /* ignore */ }
  }, [cid]);
  useEffect(() => { load(); }, [load]);
  const add = async () => {
    const basis = window.prompt(T("Base légale (express / implied / business_relationship) :", "Legal basis (express / implied / business_relationship):"), "express");
    if (!basis) return;
    const note = window.prompt(T("Contexte (où/comment le consentement a été donné) :", "Context (where/how consent was given):")) || "";
    try {
      await api(`/contacts/${cid}/consents`, { method: "POST",
        body: JSON.stringify({ basis: basis.trim(), note, source: "manuel" }) });
      toast(T("Consentement consigné", "Consent recorded"));
      load();
    } catch (e) { toast(e.message, true); }
  };
  return (
    <div className="panel p-3 mt-3" data-testid="consent-panel">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[10px] amber">{T("▮ REGISTRE DE CONSENTEMENTS — Loi 25 / LCAP", "▮ CONSENT REGISTRY — Law 25 / CASL")}</div>
        <button onClick={add} data-testid="consent-add-btn"
          className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">
          {T("➕ Consigner", "➕ Record")}
        </button>
      </div>
      {rows.length === 0 && <div className="text-[11px] text-[var(--mute)]">{T("Aucun consentement consigné pour ce contact.", "No consent recorded for this contact.")}</div>}
      {rows.map((r) => (
        <div key={r.id} className="mono text-[10px] py-1 border-b border-[var(--line)]/30 last:border-0 flex gap-2 items-center">
          <span className={r.granted ? "text-emerald-300" : "text-red-300"}>{r.granted ? "✔" : "✖"}</span>
          <span>{r.basis}</span>
          <span className="text-[var(--mute)] truncate flex-1">{r.source}{r.note ? " — " + r.note : ""}</span>
          <span className="text-[var(--mute)] shrink-0">{r.recorded_at.slice(0, 10)}</span>
        </div>
      ))}
    </div>
  );
}

export function ContactsView({ toast, on, feats }) {
  const [contacts, setContacts] = useState([]);
  const [sel, setSel] = useState(null);
  const [digest, setDigest] = useState("");
  const [toolOut, setToolOut] = useState("");
  const [funnel, setFunnel] = useState("all");
  const [life, setLife] = useState("all");

  const callNote = async (c) => {
    const notes = window.prompt(T("Note d'appel — ", "Call note — ") + c.name + T(" (points clés) :", " (key points):"));
    if (!notes) return;
    const outcome = window.prompt(T("Résultat (joint / boîte vocale / pas de réponse) :", "Outcome (reached / voicemail / no answer):"),
      T("joint", "reached")) || "";
    try {
      const r = await api(`/contacts/${c.id}/call-note`, { method: "POST",
        body: JSON.stringify({ notes, outcome }) });
      toast(T("Appel consigné", "Call logged") + (r.fub_queued ? T(" — note FUB en file", " — FUB note queued") : ""));
    } catch (e) { toast(e.message, true); }
  };

  const proposeSlots = async () => {
    const s = window.prompt(T("3 créneaux, séparés par des virgules :", "3 time slots, comma-separated:"),
      T("samedi 10h, samedi 14h, dimanche 11h", "Saturday 10am, Saturday 2pm, Sunday 11am"));
    if (!s) return;
    try {
      const r = await api(`/contacts/${sel.id}/propose-slots`, { method: "POST",
        body: JSON.stringify({ slots: s.split(",").map((x) => x.trim()).filter(Boolean) }) });
      setToolOut(r.message);
      if (r.sms_url) window.open(r.sms_url + "?&body=" + encodeURIComponent(r.message));
      toast(T("Créneaux proposés — texto prêt", "Slots proposed — text ready"));
    } catch (e) { toast(e.message, true); }
  };

  const askReview = async () => {
    try {
      const r = await api(`/clients/${sel.id}/review-ask`, { method: "POST" });
      setToolOut(r.message);
      if (r.sms_url) window.open(r.sms_url + "?&body=" + encodeURIComponent(r.message));
      toast(T("Demande d'avis prête", "Review request ready"));
    } catch (e) { toast(e.message, true); }
  };

  const scheduleC4L = async () => {
    try {
      const r = await api(`/lifecycle/${sel.id}/schedule`, { method: "POST" });
      setToolOut(r.scheduled.length
        ? T("Planifié : ", "Scheduled: ") + r.scheduled.join(", ")
        : T("Déjà tout planifié pour ce client.", "Everything already scheduled for this client."));
      toast(T("Client à vie planifié", "Client-for-life scheduled"));
    } catch (e) { toast(e.message, true); }
  };

  const equityReport = async () => {
    try {
      let r;
      try { r = await api(`/lifecycle/${sel.id}/equity-report`); }
      catch (e) {
        if (String(e.message).includes("prix")) {
          const p = window.prompt(T("Prix d'achat ($) :", "Purchase price ($):"));
          if (!p) return;
          r = await api(`/lifecycle/${sel.id}/equity-report?price=` + encodeURIComponent(p));
        } else throw e;
      }
      setToolOut(r.message + "\n\n[" + r.estimate_low.toLocaleString("fr-CA") + " $ – "
        + r.estimate_high.toLocaleString("fr-CA") + " $ · " + r.years + " ans]");
      toast(T("Rapport de valeur généré", "Value report generated"));
    } catch (e) { toast(e.message, true); }
  };

  const load = useCallback(async () => setContacts(await api("/contacts")), []);
  useEffect(() => { load().catch((e) => toast(e.message, true)); }, [load]);

  const open = async (c) => {
    if (c.lifecycle !== "client") {
      toast(T("Lead — actions (✓ contacté / → Centris) dans l'onglet 📡 Radar", "Lead — actions (✓ contacted / → Centris) live in the 📡 Radar tab"));
      return;
    }
    try { setSel(await api("/clients/" + c.id)); setDigest(""); }
    catch (e) { toast(e.message, true); }
  };

  const getDigest = async () => {
    const d = await api(`/clients/${sel.id}/matrix-digest`);
    setDigest(d.digest);
  };
  const copy = () => {
    navigator.clipboard.writeText(digest);
    toast(T("Digest copié — coller dans l'historique Matrix", "Digest copied — paste into Matrix history"));
  };

  const fn = (c) => c.funnel || c.source;
  const tel = (p) => "tel:" + p.replace(/[^+\d]/g, "");
  const sms = (p) => "sms:" + p.replace(/[^+\d]/g, "");
  const funnels = {};
  contacts.forEach((c) => { funnels[fn(c)] = (funnels[fn(c)] || 0) + 1; });
  const nLeads = contacts.filter((c) => c.lifecycle === "lead").length;
  const shown = contacts.filter((c) => (funnel === "all" || fn(c) === funnel) && (life === "all" || c.lifecycle === life));

  return (
    <div className="fadein" data-testid="contacts-view">
      <div className="mono text-[10px] text-[var(--mute)] mb-3">
        {T("▮ RÉPERTOIRE — tous les contacts, tous les entonnoirs : leads (FUB, tiers, références, site) ET clients Centris. Ici : appeler, texter, outils ops. Actions lead dans 📡 Radar · suivi d'engagement dans 📊 Engagement ↗.",
           "▮ DIRECTORY — every contact, every funnel: leads (FUB, third-party, referrals, website) AND Centris clients. Here: call, text, ops tools. Lead actions in 📡 Radar · engagement tracking in 📊 Engagement ↗.")}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2 items-center">
        <span className="mono text-[9px] text-[var(--mute)] mr-1">{T("ENTONNOIR", "FUNNEL")}</span>
        <button onClick={() => setFunnel("all")} data-testid="funnel-all" className={chipCls(funnel === "all")}>{T("Tous", "All")} ({contacts.length})</button>
        {Object.entries(funnels).map(([f, n]) => (
          <button key={f} onClick={() => setFunnel(f)} data-testid={`funnel-${f}`} className={chipCls(funnel === f)}>
            {T(FUNNEL_LABEL[f] || f, FUNNEL_LABEL_EN[f] || FUNNEL_LABEL[f] || f)} ({n})
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4 items-center">
        <span className="mono text-[9px] text-[var(--mute)] mr-1">{T("STATUT", "STATUS")}</span>
        {[
          ["all", T("Tous", "All")],
          ["lead", `Leads (${nLeads})`],
          ["client", T("Clients Centris", "Centris clients") + ` (${contacts.length - nLeads})`],
        ].map(([k, l]) => (
          <button key={k} onClick={() => setLife(k)} data-testid={`life-${k}`} className={chipCls(life === k)}>{l}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {shown.map((c) => (
          <div key={c.id} className="panel p-4 hover:border-[var(--amber)]/60 transition-colors" data-testid={`contact-card-${c.id}`}>
            <button onClick={() => open(c)} className="text-left w-full" data-testid={`contact-open-${c.id}`}>
              <div className="flex items-center gap-3">
                <Ring score={c.lifecycle === "client" ? c.engagement_score : c.priority_score} />
                <div className="min-w-0">
                  <div className="font-medium truncate">
                    {c.name}
                    {c.dormant && <span title={T("À relancer", "Re-engage")}> 😴</span>}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5 items-center">
                    <span className={"mono text-[9px] px-1.5 py-0.5 rounded border " +
                      (c.lifecycle === "client"
                        ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/60"
                        : "bg-amber-400/10 text-amber-300 border-amber-400/60")}>
                      {c.lifecycle === "client" ? T("CLIENT CENTRIS", "CENTRIS CLIENT") : "LEAD"}
                    </span>
                    <SourceChip source={c.source} sublabel={trSub(c.sublabel)} />
                    {c.lifecycle === "client" && (
                      <span className="mono text-[10px] px-2 py-0.5 rounded bg-[#123542] text-[var(--ink)]">
                        {trStage(c.stage, c.stage_label)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
            {(c.phone || c.email) && (
              <div className="flex gap-2 mt-3">
                {c.phone && (
                  <a href={tel(c.phone)} data-testid={`contact-call-${c.id}`}
                    title={T("Appeler ", "Call ") + c.phone + T(" — depuis votre téléphone", " — from your phone")}
                    className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">
                    {T("📞 Appeler", "📞 Call")}
                  </a>
                )}
                {c.phone && (
                  <a href={sms(c.phone)} data-testid={`contact-sms-${c.id}`}
                    title={T("Texto depuis votre téléphone", "Text from your phone")}
                    className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">
                    {T("💬 Texto", "💬 Text")}
                  </a>
                )}
                {c.email && (
                  <a href={"mailto:" + c.email} data-testid={`contact-email-${c.id}`}
                    title={c.email}
                    className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-sky-400">
                    {T("✉ Courriel", "✉ Email")}
                  </a>
                )}
                {on && on("call_capture") && (
                  <button onClick={() => callNote(c)}
                    data-testid={`contact-note-${c.id}`}
                    title={T("Consigner une note d'appel (résumé IA → chronologie + FUB)", "Log a call note (AI summary → timeline + FUB)")}
                    className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">
                    📝 Note
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {shown.length === 0 && <div className="text-sm text-[var(--mute)] mt-4">{T("Aucun contact dans ce filtre.", "No contacts in this filter.")}</div>}

      {sel && (
        <div className="fixed inset-0 z-40 bg-black/60 flex justify-end" data-testid="contact-drawer"
          onClick={() => setSel(null)}>
          <div className="w-full max-w-2xl h-full bg-[var(--petrol)] border-l border-[var(--line)] overflow-y-auto p-5 fadein"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xl font-semibold">{sel.name}</div>
                <div className="mono text-[11px] text-[var(--mute)] flex items-center gap-2 flex-wrap">
                  <span>{sel.email} · {sel.phone}</span>
                  {sel.phone && (
                    <a href={"tel:" + sel.phone.replace(/[^+\d]/g, "")}
                      title={T("Appeler — depuis votre téléphone", "Call — from your phone")}
                      className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-emerald-400 text-[var(--ink)]">📞</a>
                  )}
                  {sel.phone && (
                    <a href={"sms:" + sel.phone.replace(/[^+\d]/g, "")}
                      title={T("Texto — depuis votre téléphone", "Text — from your phone")}
                      className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-emerald-400 text-[var(--ink)]">💬</a>
                  )}
                  {sel.email && (
                    <a href={"mailto:" + sel.email} title={T("Courriel", "Email")}
                      className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-sky-400 text-[var(--ink)]">✉</a>
                  )}
                </div>
                <div className="mt-2 flex gap-2 items-center flex-wrap">
                  <SourceChip source={sel.source} sublabel={trSub(sel.sublabel)} />
                  {sel.dormant && (
                    <span className="mono text-[10px] px-2 py-0.5 rounded border border-red-400/60 text-red-300 bg-red-400/10">
                      {T("À RELANCER", "RE-ENGAGE")}
                    </span>
                  )}
                  {sel.fub_person_id && <span className="mono text-[10px] text-[var(--mute)]">FUB #{sel.fub_person_id}</span>}
                  {sel.portal_token && (
                    <button onClick={() => window.open("/portail/" + sel.portal_token, "_blank")}
                      data-testid="open-client-portal-btn"
                      className="mono text-[10px] px-2 py-0.5 rounded bg-[var(--amber)]/90 text-black font-semibold">
                      {T("👁 Portail client", "👁 Client portal")}
                    </button>
                  )}
                  {on && on("transaction_tracker") && sel.portal_token && (
                    <button onClick={() => window.open("/suivi/" + sel.portal_token, "_blank")}
                      title={T("Page de suivi du dossier — à partager avec le client", "File tracking page — share it with the client")}
                      className="mono text-[10px] px-2 py-0.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">
                      {T("🧭 Suivi dossier", "🧭 File tracker")}
                    </button>
                  )}
                  {sel.intake_email && (
                    <button onClick={() => { navigator.clipboard.writeText(sel.intake_email);
                      toast(T("Adresse d'alerte copiée — 2e destinataire dans Matrix", "Alert address copied — 2nd recipient in Matrix")); }}
                      className="mono text-[10px] px-2 py-0.5 rounded border border-[var(--line)] hover:border-[var(--amber)]"
                      title={sel.intake_email}>
                      ✉ {sel.intake_email}
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ring score={sel.engagement_score} size={64} />
                <button onClick={() => setSel(null)}
                  aria-label={T("Fermer", "Close")}
                  data-testid="drawer-close-btn"
                  className="mono text-[var(--mute)] hover:text-white text-lg">✕</button>
              </div>
            </div>

            <div className="panel p-3 mt-4">
              <div className="mono text-[10px] amber mb-1">{T("▮ PIPELINE QUÉBEC (dérivé du journal d'événements)", "▮ QUÉBEC PIPELINE (derived from the event log)")}</div>
              <Stepper order={sel.stage_order} labels={LANG === "fr" ? sel.stage_labels : STAGE_EN} current={sel.stage} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="panel p-3">
                <div className="mono text-[10px] amber mb-2">{T("▮ DÉCOMPOSITION DU SCORE", "▮ SCORE BREAKDOWN")}</div>
                {Object.keys(sel.score_breakdown).length === 0 && (
                  <div className="text-xs text-[var(--mute)]">{T("Aucune activité client pondérée.", "No weighted client activity.")}</div>
                )}
                {Object.entries(sel.score_breakdown).map(([f, v]) => (
                  <div key={f} className="flex justify-between mono text-[11px] py-0.5">
                    <span className="text-[var(--mute)]">{trFam(f)}</span>
                    <span>{v} pts</span>
                  </div>
                ))}
                <div className="mono text-[10px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/50">
                  {T("acteur=client uniquement · demi-vie 7 j", "actor=client only · 7-day half-life")}
                </div>
              </div>
              <div className="panel p-3">
                <div className="mono text-[10px] amber mb-2">{T("▮ RETOUR VERS MATRIX", "▮ BACK TO MATRIX")}</div>
                <button onClick={getDigest} data-testid="matrix-digest-btn"
                  className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)] w-full">
                  {T("Générer le digest 7 jours", "Generate the 7-day digest")}
                </button>
                {digest && (
                  <>
                    <pre className="mono text-[10px] mt-2 p-2 bg-black/30 rounded max-h-40 overflow-auto whitespace-pre-wrap">{digest}</pre>
                    <button onClick={copy} data-testid="matrix-digest-copy-btn"
                      className="mono text-[10px] mt-2 px-3 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold w-full">
                      {T("Copier pour Matrix", "Copy for Matrix")}
                    </button>
                  </>
                )}
                <div className="text-[10px] text-[var(--mute)] mt-2">
                  {T("FUB: notes poussées via API. Matrix: collage manuel (ToS Centris — aucune connexion automatisée).",
                     "FUB: notes pushed via API. Matrix: manual paste (Centris ToS — no automated connection).")}
                </div>
              </div>
            </div>

            {on && feats && (
              <div className="panel p-3 mt-3">
                <div className="mono text-[10px] amber mb-2">{T("▮ ACTIONS FORFAIT", "▮ PLAN ACTIONS")}</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    ["showing_scheduler", T("📅 Proposer 3 créneaux", "📅 Propose 3 slots"), proposeSlots],
                    ["review_engine", T("⭐ Demander un avis", "⭐ Ask for a review"), askReview],
                    ["client_for_life", T("🎂 Planifier client à vie", "🎂 Schedule client-for-life"), scheduleC4L],
                    ["client_for_life2", T("📈 Rapport de valeur", "📈 Value report"), equityReport],
                  ].map(([key, label, action]) => {
                    const k = key.replace(/2$/, "");
                    const ok = on(k);
                    const f = feats.features[k];
                    return (
                      <button key={key}
                        onClick={ok ? action : () => toast("🔒 " + fLabel(k, f) + " — " + T("forfait ", "plan ") + f.tier + T(" requis · voir ⭐ Forfaits", " required · see ⭐ Plans"), true)}
                        title={ok ? "" : fPitch(k, f)}
                        data-testid={`plan-action-${key}`}
                        className={"mono text-[10px] px-2.5 py-1.5 rounded border " +
                          (ok ? "border-[var(--line)] hover:border-[var(--amber)]" : "border-[var(--line)]/50 text-[var(--mute)] opacity-60")}
                        style={ok ? {} : { borderStyle: "dashed" }}>
                        {ok ? label : "🔒 " + label}
                      </button>
                    );
                  })}
                </div>
                {toolOut && <pre className="mono text-[10px] mt-2 p-2 bg-black/30 rounded whitespace-pre-wrap max-h-40 overflow-auto">{toolOut}</pre>}
              </div>
            )}

            {on && on("consent_vault") && <ConsentPanel cid={sel.id} toast={toast} />}

            <div className="panel p-3 mt-3">
              <div className="mono text-[10px] amber mb-2">{T("▮ CHRONOLOGIE UNIFIÉE — Vitrine + Matrix + FUB + Hub", "▮ UNIFIED TIMELINE — Vitrine + Matrix + FUB + Hub")}</div>
              <div className="space-y-1 max-h-80 overflow-auto">
                {sel.timeline.map((e) => (
                  <div key={e.id} className="flex items-center gap-2 mono text-[11px] py-1 border-b border-[var(--line)]/30 last:border-0">
                    <span aria-hidden="true">{ORIGIN_ICON[e.origin] || "·"}</span>
                    <span className="text-[var(--mute)] w-[118px] shrink-0">{e.ts.replace("T", " ").slice(0, 16)}</span>
                    <span className={e.actor === "client" ? "text-emerald-300" : "text-[var(--ink)]"}>{e.type}</span>
                    <span className="text-[var(--mute)] truncate">{e.payload.listing_id || e.payload.address || ""}</span>
                    <span className="ml-auto text-[9px] text-[var(--mute)]">{e.actor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
