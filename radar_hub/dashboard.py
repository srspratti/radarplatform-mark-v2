"""Single-file dashboard served at GET /. No build step: React UMD + Babel +
Tailwind CDN. Design system: dark petrol / amber instrument readout,
Space Grotesk display + IBM Plex Mono data."""

DASHBOARD_HTML = r"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Radar Hub · Plateforme courtier</title>
<link rel="manifest" href="/manifest.webmanifest"/>
<meta name="theme-color" content="#06171c"/>
<link rel="apple-touch-icon" href="/static/pwa/icon-180.png"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="RadarHub"/>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<!-- Pin Babel to 7.x: Babel 8's preset-react defaults to the automatic JSX
     runtime, which emits a bare `import` and breaks the in-browser transform. -->
<script src="https://unpkg.com/@babel/standalone@7.26.4/babel.min.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>
  :root { --petrol:#06171c; --panel:#0c2530; --panel2:#0f2d3a; --line:#1b4552;
          --ink:#d9e8ec; --mute:#6f939d; --amber:#f5a623; --ok:#39d98a; --warn:#f87171; }
  body { background:var(--petrol); color:var(--ink); font-family:'Space Grotesk',sans-serif; }
  .mono { font-family:'IBM Plex Mono',monospace; }
  .panel { background:var(--panel); border:1px solid var(--line); border-radius:14px; }
  .panel2 { background:var(--panel2); border:1px solid var(--line); border-radius:10px; }
  .amber { color:var(--amber); }
  .scanline { background:linear-gradient(180deg, rgba(245,166,35,.06), transparent 60%); }
  ::-webkit-scrollbar{width:8px;height:8px} ::-webkit-scrollbar-thumb{background:#1b4552;border-radius:4px}
  @media (prefers-reduced-motion: reduce){ *{transition:none!important;animation:none!important} }
  .fadein{animation:fi .25s ease-out} @keyframes fi{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel" data-presets="react">
const { useState, useEffect, useCallback } = React;

// Funnel chips — each lead names the funnel it came from (Danny's existing
// pipes today; new sources plug in here as they are added).
const SOURCE_META = {
  matrix_visit:      { label:"MATRIX",       cls:"bg-amber-400/15 text-amber-300 border-amber-400/40" },
  fub_import:        { label:"CRM FUB",      cls:"bg-sky-400/15 text-sky-300 border-sky-400/40" },
  danny_channel:     { label:"RÉFÉRENCE",    cls:"bg-emerald-400/15 text-emerald-300 border-emerald-400/40" },
  own_generated:     { label:"SITE WEB",     cls:"bg-violet-400/15 text-violet-300 border-violet-400/40" },
  prospecting_agent: { label:"PROSPECTION",  cls:"bg-slate-400/15 text-slate-300 border-slate-400/40" },
};
const ORIGIN_ICON = { vitrine:"🛰", matrix:"📡", fub:"🔁", hub:"⚙", agent:"🤖" };

// Key gate: when RADAR_API_KEY is set server-side, every /api call 401s until
// the realtor supplies the key. It lives in sessionStorage (never in the URL)
// and is sent as X-Radar-Key. Dev mode (no key set) keeps working untouched.
let TENANT = "danny", APIKEY = sessionStorage.getItem("radar_key") || "";
const api = async (path, opts={}) => {
  const r = await fetch("/api"+path, { ...opts,
    headers: { "Content-Type":"application/json", "X-Tenant-Id":TENANT,
               ...(APIKEY?{"X-Radar-Key":APIKEY}:{}), ...(opts.headers||{}) }});
  if (r.status === 401 && !opts.__retried) {
    const k = window.prompt("Console protégée — entrer la clé API Radar (X-Radar-Key) :");
    if (k) { APIKEY = k.trim(); sessionStorage.setItem("radar_key", APIKEY);
             return api(path, { ...opts, __retried: true }); }
  }
  if (!r.ok) { const d = await r.json().catch(()=>({detail:r.statusText}));
               throw new Error(d.detail || r.statusText); }
  return r.json();
};
const since = (iso) => {
  if (!iso) return "jamais";
  const m = Math.max(1, Math.round((Date.now() - new Date(iso.endsWith("Z")?iso:iso+"Z")) / 60000));
  return m < 60 ? `il y a ${m} min` : m < 1440 ? `il y a ${Math.round(m/60)} h`
       : `il y a ${Math.round(m/1440)} j`;
};

function SourceChip({source, sublabel}) {
  const m = SOURCE_META[source] || {label:source, cls:"bg-slate-500/15 text-slate-300 border-slate-500/40"};
  return <span className={"mono text-[10px] px-2 py-0.5 rounded border "+m.cls}>
    {m.label}{sublabel ? <span className="opacity-70"> · {sublabel}</span> : null}</span>;
}

function Ring({score, size=54}) {
  const r=(size/2)-5, c=2*Math.PI*r, off=c*(1-score/100);
  const col = score>=70?"var(--ok)":score>=40?"var(--amber)":"#5b7d87";
  return <svg width={size} height={size} className="shrink-0">
    <circle cx={size/2} cy={size/2} r={r} stroke="#123542" strokeWidth="5" fill="none"/>
    <circle cx={size/2} cy={size/2} r={r} stroke={col} strokeWidth="5" fill="none"
      strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
      transform={`rotate(-90 ${size/2} ${size/2})`} style={{transition:"stroke-dashoffset .5s"}}/>
    <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
      className="mono" fill="var(--ink)" fontSize={size*0.28} fontWeight="600">{score}</text>
  </svg>;
}

function PriorityBar({score}) {
  const col = score>=75?"var(--warn)":score>=50?"var(--amber)":"#3f6b78";
  return <div className="w-full h-1.5 rounded bg-[#123542] overflow-hidden">
    <div style={{width:score+"%", background:col, height:"100%", transition:"width .4s"}}/></div>;
}

function Toast({msg, err}) {
  if (!msg) return null;
  return <div className={"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 mono text-xs px-4 py-2 rounded-lg border fadein "
    +(err?"bg-red-950/90 border-red-500/50 text-red-200":"bg-[#0c2530] border-[var(--line)] text-emerald-300")}>{msg}</div>;
}

function Stepper({order, labels, current}) {
  const idx = order.indexOf(current);
  return <div className="flex items-center gap-0 overflow-x-auto py-2">
    {order.map((s,i)=>(
      <div key={s} className="flex items-center shrink-0">
        <div className="flex flex-col items-center w-[86px]">
          <div className={"w-3.5 h-3.5 rounded-full border-2 "+(i<idx?"bg-[var(--amber)] border-[var(--amber)]":i===idx?"bg-[var(--amber)] border-[var(--amber)] shadow-[0_0_10px_rgba(245,166,35,.7)]":"bg-transparent border-[#2a5a6a]")}/>
          <div className={"mono text-[9px] mt-1.5 text-center leading-tight "+(i<=idx?"text-[var(--ink)]":"text-[var(--mute)]")}>{labels[s]||s}</div>
        </div>
        {i<order.length-1 && <div className={"h-[2px] w-6 -mx-6 mb-4 "+(i<idx?"bg-[var(--amber)]":"bg-[#2a5a6a]")}/>}
      </div>))}
  </div>;
}

// ------------------------------------------------------------- RADAR view --
function RadarView({toast}) {
  const [sum,setSum]=useState(null); const [leads,setLeads]=useState([]);
  const load = useCallback(async()=>{ 
    setSum(await api("/dashboard/summary")); setLeads(await api("/leads")); },[]);
  useEffect(()=>{ load().catch(e=>toast(e.message,true)); },[load]);
  const act = async (fn, ok)=>{ try{ await fn(); toast(ok); await load(); }
                               catch(e){ toast(e.message,true); } };
  if (!sum) return <div className="mono text-sm text-[var(--mute)] p-8">chargement du radar…</div>;
  return <div className="space-y-5 fadein">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {[["LEADS",sum.counts.leads],["CLIENTS",sum.counts.clients],
        ["🔥 CHAUDS",sum.counts.hot_leads],["😴 À RELANCER",sum.counts.dormant_clients],
        ["📤 WRITEBACKS",sum.counts.pending_writebacks]].map(([k,v])=>(
        <div key={k} className="panel p-3 scanline">
          <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
          <div className="text-2xl font-semibold mt-1">{v}</div></div>))}
    </div>
    {sum.alerts.length>0 && <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">▮ RADAR — INTELLIGENCE D'ACHAT · signaux prioritaires</div>
      {sum.alerts.map((a,i)=><div key={i} className="text-sm py-1 border-b border-[var(--line)]/40 last:border-0">{a}</div>)}
    </div>}
    <div className="panel p-4">
      <div className="flex items-center justify-between mb-1">
        <div className="mono text-[11px] amber">▮ BOÎTE DE LEADS — entonnoirs existants, score de priorité IA</div>
        <div className="flex gap-2">
          <button onClick={()=>act(()=>api("/connectors/fub/import",{method:"POST"}),"Import FUB terminé")}
            className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">↧ Importer FUB</button>
          <button onClick={()=>act(()=>api("/connectors/fub/flush-writebacks",{method:"POST"}),"Writebacks poussés")}
            className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">↥ Pousser writebacks</button>
        </div>
      </div>
      <div className="mono text-[10px] text-[var(--mute)] mb-3">
        Sources : CRM FUB (portails tiers inclus) · alertes Matrix · références · site web — d'autres entonnoirs pourront s'ajouter.
        Un lead devient client au moment de son ajout à Centris (bouton →), et apparaît alors dans le tableau d'engagement.
      </div>
      <div className="space-y-2">
        {leads.length===0 && <div className="text-sm text-[var(--mute)]">
          Aucun lead en attente — le radar est propre.
          <div className="mono text-[10px] mt-1.5 text-[var(--mute)]">
            ⏱ Dernier événement FUB : {since(sum.sync && sum.sync.last_fub)} · dernière alerte Matrix : {since(sum.sync && sum.sync.last_matrix)} — les entonnoirs restent branchés.
          </div>
        </div>}
        {leads.map(l=>(
          <div key={l.id} className="panel2 p-3 flex flex-col md:flex-row md:items-center gap-3">
            <div className="mono text-lg font-semibold w-10 text-center amber">{l.priority_score}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium">{l.name}</span>
                <SourceChip source={l.source} sublabel={l.sublabel}/>
              </div>
              <div className="mono text-[11px] text-[var(--mute)] mt-0.5 truncate">{l.priority_hint}{l.notes?" — "+l.notes.slice(0,70):""}</div>
              <div className="mt-1.5"><PriorityBar score={l.priority_score}/></div>
            </div>
            <div className="flex gap-2 shrink-0 items-center flex-wrap">
              {l.phone && <a href={"tel:"+l.phone.replace(/[^+\d]/g,"")}
                title={"Appeler "+l.phone+" — l'appel part de VOTRE téléphone"}
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">📞 Appeler</a>}
              {l.phone && <a href={"sms:"+l.phone.replace(/[^+\d]/g,"")}
                title="Texto — envoyé depuis VOTRE téléphone"
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">💬</a>}
              <button onClick={()=>act(()=>api(`/leads/${l.id}/contacted`,{method:"POST"}),"Marqué contacté")}
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-sky-400">✓ Contacté</button>
              <button onClick={()=>act(()=>api(`/leads/${l.id}/convert`,{method:"POST"}),"Ajouté comme client Centris — jeton portail Vitrine émis")}
                title="L'ajout à Centris convertit ce lead en client — il passe au tableau d'engagement"
                className="mono text-[10px] px-2.5 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">→ Ajouter à Centris</button>
            </div>
          </div>))}
      </div>
    </div>
    {sum.top_clients && sum.top_clients.length>0 && <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">▮ CLIENTS CENTRIS — score d'engagement (activité Vitrine · Matrix · CRM)</div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {sum.top_clients.map(c=>(
          <div key={c.id} className="panel2 p-3 flex flex-col items-center text-center gap-1">
            <Ring score={c.engagement_score}/>
            <div className="text-xs font-medium truncate w-full">{c.name}{c.dormant?" 😴":""}</div>
            <div className="mono text-[9px] text-[var(--mute)]">{c.stage_label}</div>
          </div>))}
      </div>
      <div className="mono text-[10px] text-[var(--mute)] mt-3">
        Un seul cerveau, deux scores : priorité (quel lead appeler maintenant) et engagement (quel client Centris est chaud ou décroche).
        Fiches complètes dans 👥 Contacts · suivi et conversations dans 📊 Engagement ↗.
      </div>
    </div>}
  </div>;
}

// ---------------------------------------------------------- CONTACTS view --
const FUNNEL_LABEL = { fub_import:"CRM FUB", matrix_visit:"Alertes Matrix",
  danny_channel:"Références", own_generated:"Site web", prospecting_agent:"Prospection" };
const chipCls = (on)=>"mono text-[10px] px-2.5 py-1 rounded-full border transition-colors "
  +(on?"border-[var(--amber)] amber bg-[var(--amber)]/10"
      :"border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)]");

function ContactsView({toast}) {
  const [contacts,setContacts]=useState([]); const [sel,setSel]=useState(null);
  const [digest,setDigest]=useState("");
  const [funnel,setFunnel]=useState("all"); const [life,setLife]=useState("all");
  const load=useCallback(async()=>setContacts(await api("/contacts")),[]);
  useEffect(()=>{ load().catch(e=>toast(e.message,true)); },[load]);
  const open=async(c)=>{
    if (c.lifecycle!=="client"){ toast("Lead — actions (✓ contacté / → Centris) dans l'onglet 📡 Radar"); return; }
    try{ setSel(await api("/clients/"+c.id)); setDigest(""); } catch(e){ toast(e.message,true);} };
  const getDigest=async()=>{ const d=await api(`/clients/${sel.id}/matrix-digest`);
    setDigest(d.digest); };
  const copy=()=>{ navigator.clipboard.writeText(digest); toast("Digest copié — coller dans l'historique Matrix"); };
  const fn=(c)=>c.funnel||c.source;
  const tel=(p)=>"tel:"+p.replace(/[^+\d]/g,""); const sms=(p)=>"sms:"+p.replace(/[^+\d]/g,"");
  const funnels={}; contacts.forEach(c=>{ funnels[fn(c)]=(funnels[fn(c)]||0)+1; });
  const nLeads=contacts.filter(c=>c.lifecycle==="lead").length;
  const shown=contacts.filter(c=>(funnel==="all"||fn(c)===funnel)
                              && (life==="all"||c.lifecycle===life));
  return <div className="fadein">
    <div className="mono text-[10px] text-[var(--mute)] mb-3">
      ▮ RÉPERTOIRE — tous les contacts, tous les entonnoirs : leads (FUB, tiers, références, site) ET clients Centris.
      Ici : appeler, texter, outils ops. Actions lead dans 📡 Radar · suivi d'engagement dans 📊 Engagement ↗.
    </div>
    <div className="flex flex-wrap gap-1.5 mb-2 items-center">
      <span className="mono text-[9px] text-[var(--mute)] mr-1">ENTONNOIR</span>
      <button onClick={()=>setFunnel("all")} className={chipCls(funnel==="all")}>Tous ({contacts.length})</button>
      {Object.entries(funnels).map(([f,n])=>(
        <button key={f} onClick={()=>setFunnel(f)} className={chipCls(funnel===f)}>{FUNNEL_LABEL[f]||f} ({n})</button>))}
    </div>
    <div className="flex flex-wrap gap-1.5 mb-4 items-center">
      <span className="mono text-[9px] text-[var(--mute)] mr-1">STATUT</span>
      {[["all","Tous"],["lead",`Leads (${nLeads})`],["client",`Clients Centris (${contacts.length-nLeads})`]].map(([k,l])=>(
        <button key={k} onClick={()=>setLife(k)} className={chipCls(life===k)}>{l}</button>))}
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {shown.map(c=>(
        <div key={c.id} className="panel p-4 hover:border-[var(--amber)]/60 transition-colors">
          <button onClick={()=>open(c)} className="text-left w-full">
            <div className="flex items-center gap-3">
              <Ring score={c.lifecycle==="client"?c.engagement_score:c.priority_score}/>
              <div className="min-w-0">
                <div className="font-medium truncate">{c.name} {c.dormant && <span title="À relancer">😴</span>}</div>
                <div className="mt-1 flex flex-wrap gap-1.5 items-center">
                  <span className={"mono text-[9px] px-1.5 py-0.5 rounded border "+(c.lifecycle==="client"
                    ?"bg-emerald-400/10 text-emerald-300 border-emerald-400/40"
                    :"bg-amber-400/10 text-amber-300 border-amber-400/40")}>
                    {c.lifecycle==="client"?"CLIENT CENTRIS":"LEAD"}</span>
                  <SourceChip source={c.source} sublabel={c.sublabel}/>
                  {c.lifecycle==="client" && <span className="mono text-[10px] px-2 py-0.5 rounded bg-[#123542] text-[var(--ink)]">{c.stage_label}</span>}
                </div>
              </div>
            </div>
          </button>
          {(c.phone||c.email) && <div className="flex gap-2 mt-3">
            {c.phone && <a href={tel(c.phone)} title={"Appeler "+c.phone+" — depuis votre téléphone"}
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">📞 Appeler</a>}
            {c.phone && <a href={sms(c.phone)} title="Texto depuis votre téléphone"
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">💬 Texto</a>}
            {c.email && <a href={"mailto:"+c.email} title={c.email}
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-sky-400">✉ Courriel</a>}
          </div>}
        </div>))}
    </div>
    {shown.length===0 && <div className="text-sm text-[var(--mute)] mt-4">Aucun contact dans ce filtre.</div>}
    {sel && <div className="fixed inset-0 z-40 bg-black/60 flex justify-end" onClick={()=>setSel(null)}>
      <div className="w-full max-w-2xl h-full bg-[var(--petrol)] border-l border-[var(--line)] overflow-y-auto p-5 fadein"
           onClick={e=>e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xl font-semibold">{sel.name}</div>
            <div className="mono text-[11px] text-[var(--mute)] flex items-center gap-2 flex-wrap">
              <span>{sel.email} · {sel.phone}</span>
              {sel.phone && <a href={"tel:"+sel.phone.replace(/[^+\d]/g,"")} title="Appeler — depuis votre téléphone"
                className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-emerald-400 text-[var(--ink)]">📞</a>}
              {sel.phone && <a href={"sms:"+sel.phone.replace(/[^+\d]/g,"")} title="Texto — depuis votre téléphone"
                className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-emerald-400 text-[var(--ink)]">💬</a>}
              {sel.email && <a href={"mailto:"+sel.email} title="Courriel"
                className="px-2 py-0.5 rounded border border-[var(--line)] hover:border-sky-400 text-[var(--ink)]">✉</a>}
            </div>
            <div className="mt-2 flex gap-2 items-center flex-wrap">
              <SourceChip source={sel.source} sublabel={sel.sublabel}/>
              {sel.dormant && <span className="mono text-[10px] px-2 py-0.5 rounded border border-red-400/40 text-red-300 bg-red-400/10">À RELANCER</span>}
              {sel.fub_person_id && <span className="mono text-[10px] text-[var(--mute)]">FUB #{sel.fub_person_id}</span>}
              {sel.portal_token && <button onClick={()=>window.open('/portail/'+sel.portal_token,'_blank')}
                className="mono text-[10px] px-2 py-0.5 rounded bg-[var(--amber)]/90 text-black font-semibold">👁 Portail client</button>}
              {sel.intake_email && <button onClick={()=>{navigator.clipboard.writeText(sel.intake_email); toast('Adresse d\'alerte copiée — 2e destinataire dans Matrix');}}
                className="mono text-[10px] px-2 py-0.5 rounded border border-[var(--line)] hover:border-[var(--amber)]" title={sel.intake_email}>✉ {sel.intake_email}</button>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ring score={sel.engagement_score} size={64}/>
            <button onClick={()=>setSel(null)} className="mono text-[var(--mute)] hover:text-white text-lg">✕</button>
          </div>
        </div>
        <div className="panel p-3 mt-4">
          <div className="mono text-[10px] amber mb-1">▮ PIPELINE QUÉBEC (dérivé du journal d'événements)</div>
          <Stepper order={sel.stage_order} labels={sel.stage_labels} current={sel.stage}/>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="panel p-3">
            <div className="mono text-[10px] amber mb-2">▮ DÉCOMPOSITION DU SCORE</div>
            {Object.keys(sel.score_breakdown).length===0 &&
              <div className="text-xs text-[var(--mute)]">Aucune activité client pondérée.</div>}
            {Object.entries(sel.score_breakdown).map(([f,v])=>(
              <div key={f} className="flex justify-between mono text-[11px] py-0.5">
                <span className="text-[var(--mute)]">{f}</span><span>{v} pts</span></div>))}
            <div className="mono text-[10px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/50">
              acteur=client uniquement · demi-vie 7 j</div>
          </div>
          <div className="panel p-3">
            <div className="mono text-[10px] amber mb-2">▮ RETOUR VERS MATRIX</div>
            <button onClick={getDigest} className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)] w-full">Générer le digest 7 jours</button>
            {digest && <>
              <pre className="mono text-[10px] mt-2 p-2 bg-black/30 rounded max-h-40 overflow-auto whitespace-pre-wrap">{digest}</pre>
              <button onClick={copy} className="mono text-[10px] mt-2 px-3 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold w-full">Copier pour Matrix</button></>}
            <div className="text-[10px] text-[var(--mute)] mt-2">FUB: notes poussées via API. Matrix: collage manuel (ToS Centris — aucune connexion automatisée).</div>
          </div>
        </div>
        <div className="panel p-3 mt-3">
          <div className="mono text-[10px] amber mb-2">▮ CHRONOLOGIE UNIFIÉE — Vitrine + Matrix + FUB + Hub</div>
          <div className="space-y-1 max-h-80 overflow-auto">
            {sel.timeline.map(e=>(
              <div key={e.id} className="flex items-center gap-2 mono text-[11px] py-1 border-b border-[var(--line)]/30 last:border-0">
                <span>{ORIGIN_ICON[e.origin]||"·"}</span>
                <span className="text-[var(--mute)] w-[118px] shrink-0">{e.ts.replace("T"," ").slice(0,16)}</span>
                <span className={e.actor==="client"?"text-emerald-300":"text-[var(--ink)]"}>{e.type}</span>
                <span className="text-[var(--mute)] truncate">{e.payload.listing_id||e.payload.address||""}</span>
                <span className="ml-auto text-[9px] text-[var(--mute)]">{e.actor}</span>
              </div>))}
          </div>
        </div>
      </div>
    </div>}
  </div>;
}

// ------------------------------------------------------------ AGENTS view --
function AgentsView({toast}) {
  const [tab,setTab]=useState("office");
  return <div className="fadein">
    <div className="flex gap-2 mb-4">
      {[["office","🗂 Gestion de bureau"],["prospect","🎯 Prospection"],["content","📣 Contenu & social"]].map(([k,l])=>(
        <button key={k} onClick={()=>setTab(k)}
          className={"mono text-[11px] px-3 py-1.5 rounded border "+(tab===k?"border-[var(--amber)] amber":"border-[var(--line)] text-[var(--mute)]")}>{l}</button>))}
    </div>
    {tab==="office" && <OfficePanel toast={toast}/>}
    {tab==="prospect" && <ProspectPanel toast={toast}/>}
    {tab==="content" && <ContentPanel toast={toast}/>}
  </div>;
}

function OfficePanel({toast}) {
  const now=new Date(); const [y,setY]=useState(now.getFullYear());
  const [m,setM]=useState(now.getMonth()+1); const [rep,setRep]=useState(null);
  const run=async()=>{ try{ setRep(await api(`/agents/office/report/${y}/${m}`)); }
                       catch(e){ toast(e.message,true);} };
  useEffect(()=>{ run(); },[]);
  return <div className="panel p-4">
    <div className="flex items-end gap-2 mb-3">
      <div><div className="mono text-[10px] text-[var(--mute)]">ANNÉE</div>
        <input type="number" value={y} onChange={e=>setY(+e.target.value)}
          className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm w-24"/></div>
      <div><div className="mono text-[10px] text-[var(--mute)]">MOIS</div>
        <input type="number" min="1" max="12" value={m} onChange={e=>setM(+e.target.value)}
          className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm w-16"/></div>
      <button onClick={run} className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">Générer le rapport</button>
    </div>
    {rep && <div className="grid md:grid-cols-2 gap-3">
      <div className="panel2 p-3 mono text-[12px] space-y-1">
        <div className="amber text-[10px]">▮ FINANCES — {rep.period}</div>
        <div>Transactions clôturées: <b>{rep.deals_closed}</b></div>
        <div>Commissions brutes: <b>{rep.commission_gross.toLocaleString("fr-CA")} $</b></div>
        <div>TPS 5 %: {rep.taxes.tps_5.toLocaleString("fr-CA")} $ · TVQ 9,975 %: {rep.taxes.tvq_9975.toLocaleString("fr-CA")} $</div>
        <div>Dépenses: {rep.expenses_total.toLocaleString("fr-CA")} $</div>
        <div className="pt-1 border-t border-[var(--line)]/50">Net (avant remises): <b className="amber">{rep.net_before_tax_remittance.toLocaleString("fr-CA")} $</b></div>
      </div>
      <div className="panel2 p-3 mono text-[12px]">
        <div className="amber text-[10px] mb-1">▮ PIPELINE</div>
        {Object.entries(rep.pipeline_snapshot).map(([k,v])=>
          <div key={k} className="flex justify-between py-0.5"><span className="text-[var(--mute)]">{k}</span><span>{v}</span></div>)}
        <div className="amber text-[10px] mt-2 mb-1">▮ ACTIVITÉ (événements/mois)</div>
        {Object.entries(rep.activity_by_family).map(([k,v])=>
          <div key={k} className="flex justify-between py-0.5"><span className="text-[var(--mute)]">{k}</span><span>{v}</span></div>)}
      </div>
      <pre className="md:col-span-2 panel2 p-3 mono text-[11px] whitespace-pre-wrap max-h-64 overflow-auto">{rep.markdown}</pre>
    </div>}
  </div>;
}

function ProspectPanel({toast}) {
  const [niche,setNiche]=useState("Propriétaires de plex");
  const [market,setMarket]=useState("Rosemont, Montréal");
  const [rows,setRows]=useState([]); const [draft,setDraft]=useState(null);
  const load=async()=>setRows(await api("/agents/prospecting/candidates"));
  useEffect(()=>{ load().catch(()=>{}); },[]);
  const run=async()=>{ try{ await api("/agents/prospecting/run",{method:"POST",
      body:JSON.stringify({niche,market,count:5,provider:"stub"})});
      toast("5 candidats générés (démo)"); await load(); }catch(e){toast(e.message,true);} };
  const consent=async(id,basis)=>{ try{ await api(`/agents/prospecting/candidates/${id}/consent`,
      {method:"POST",body:JSON.stringify({consent_basis:basis})}); await load(); }
      catch(e){toast(e.message,true);} };
  const outreach=async(id,channel)=>{ try{
      const d=await api(`/agents/prospecting/candidates/${id}/outreach`,
        {method:"POST",body:JSON.stringify({channel,language:"fr"})});
      setDraft(d.draft); toast("Brouillon prêt — signal de ciblage exclu"); await load(); }
      catch(e){ setDraft(null); toast(e.message,true);} };
  const promote=async(id)=>{ try{ await api(`/agents/prospecting/candidates/${id}/promote`,{method:"POST"});
      toast("Promu en lead — visible dans le Radar"); await load(); }catch(e){toast(e.message,true);} };
  return <div className="panel p-4">
    <div className="flex flex-wrap items-end gap-2 mb-3">
      <div className="flex-1 min-w-[180px]"><div className="mono text-[10px] text-[var(--mute)]">NICHE</div>
        <input value={niche} onChange={e=>setNiche(e.target.value)}
          className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm"/></div>
      <div className="flex-1 min-w-[180px]"><div className="mono text-[10px] text-[var(--mute)]">MARCHÉ</div>
        <input value={market} onChange={e=>setMarket(e.target.value)}
          className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm"/></div>
      <button onClick={run} className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">Lancer la prospection</button>
    </div>
    <div className="text-[10px] text-[var(--mute)] mb-3 mono">Fournisseur: stub (données démo) · Slot Explorium prêt · Pare-feu LCAP: le signal choisit QUI, jamais QUOI. Courriel bloqué sans base de consentement.</div>
    <div className="space-y-2">
      {rows.map(c=>(
        <div key={c.id} className="panel2 p-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium">{c.name}</span>
            {c.is_demo && <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-slate-500/20 text-slate-300 border border-slate-500/40">DÉMO</span>}
            <span className="mono text-[10px] text-[var(--mute)]">{c.email} · {c.phone}</span>
            <span className="ml-auto mono text-[10px] text-[var(--mute)]">{c.outreach_status}</span>
          </div>
          <div className="mono text-[10px] amber mt-1">signal: {c.signal}</div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <select value={c.consent_basis||""} onChange={e=>consent(c.id,e.target.value)}
              className="bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-[10px]">
              <option value="">— base LCAP/CASL —</option>
              <option value="express">Consentement exprès</option>
              <option value="implied_existing_business">Relation d'affaires</option>
              <option value="implied_inquiry">Demande reçue</option>
              <option value="conspicuous_publication_b2b">Publication B2B</option>
              <option value="mail_only">Courrier seulement</option>
            </select>
            <button onClick={()=>outreach(c.id,"email")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">✉ Courriel</button>
            <button onClick={()=>outreach(c.id,"letter")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">📮 Lettre</button>
            <button onClick={()=>outreach(c.id,"call")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">☎ Script</button>
            <button onClick={()=>promote(c.id)} className="mono text-[10px] px-2 py-1 rounded bg-[var(--amber)]/90 text-black font-semibold">→ Lead</button>
          </div>
        </div>))}
    </div>
    {draft && <pre className="panel2 p-3 mt-3 mono text-[11px] whitespace-pre-wrap max-h-60 overflow-auto">{draft}</pre>}
  </div>;
}

function ContentPanel({toast}) {
  const [topic,setTopic]=useState("Le marché de Villeray ce mois-ci");
  const [queue,setQueue]=useState([]);
  const load=async()=>setQueue(await api("/agents/content/queue"));
  useEffect(()=>{ load().catch(()=>{}); },[]);
  const gen=async()=>{ try{ await api("/agents/content/generate",{method:"POST",
      body:JSON.stringify({topic,platforms:["instagram","facebook","linkedin"],language:"fr"})});
      toast("3 brouillons générés"); await load(); }catch(e){toast(e.message,true);} };
  const sched=async(id)=>{ const when=new Date(Date.now()+86400000).toISOString();
    try{ await api(`/agents/content/${id}/schedule`,{method:"POST",body:JSON.stringify({when})});
      toast("Planifié demain"); await load(); }catch(e){toast(e.message,true);} };
  return <div className="panel p-4">
    <div className="flex flex-wrap items-end gap-2 mb-3">
      <div className="flex-1 min-w-[220px]"><div className="mono text-[10px] text-[var(--mute)]">SUJET</div>
        <input value={topic} onChange={e=>setTopic(e.target.value)}
          className="w-full bg-[#0a1f28] border border-[var(--line)] rounded px-2 py-1 mono text-sm"/></div>
      <button onClick={gen} className="mono text-[10px] px-3 py-2 rounded bg-[var(--amber)]/90 text-black font-semibold">Générer IG + FB + LinkedIn</button>
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      {queue.map(i=>(
        <div key={i.id} className="panel2 p-3 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="mono text-[10px] amber">{i.platform.toUpperCase()} · {i.language}</span>
            <span className="mono text-[9px] text-[var(--mute)]">{i.status}{i.scheduled_at?" · "+i.scheduled_at.slice(0,16).replace("T"," "):""}</span>
          </div>
          <pre className="mono text-[10px] whitespace-pre-wrap mt-2 flex-1 max-h-44 overflow-auto">{i.body}</pre>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>{navigator.clipboard.writeText(i.body); toast("Copié");}}
              className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] flex-1">Copier</button>
            {i.status==="draft" && <button onClick={()=>sched(i.id)}
              className="mono text-[10px] px-2 py-1 rounded bg-[var(--amber)]/90 text-black font-semibold flex-1">Planifier</button>}
          </div>
        </div>))}
    </div>
  </div>;
}

// --------------------------------------------------------- ANALYTICS view --
function HBars({data, valueKey, labelKey, color, fmt}) {
  const f = fmt || ((v)=>v);
  const max = Math.max(...data.map(d=>d[valueKey]), 1);
  return <div className="space-y-1.5">
    {data.map((d,i)=>(
      <div key={i} className="flex items-center gap-2 mono text-[11px]">
        <span className="w-[110px] shrink-0 text-[var(--mute)] truncate" title={d[labelKey]}>{d[labelKey]}</span>
        <div className="flex-1 h-3 bg-[#123542] rounded overflow-hidden">
          <div style={{width:(100*d[valueKey]/max)+"%", background:color||"var(--amber)", height:"100%", transition:"width .5s"}}/>
        </div>
        <span className="w-[56px] text-right shrink-0">{f(d[valueKey])}</span>
      </div>))}
  </div>;
}

const PRESET_QUESTIONS = [
  "Quel entonnoir a le meilleur taux de conversion vers client Centris ?",
  "Où devrais-je investir mon temps de prospection cette semaine ?",
  "Résume la santé de mon portefeuille en 5 lignes.",
  "Quels clients Centris risquent de décrocher ?",
  "La tendance des nouveaux contacts monte ou descend ?",
];

function AnalyticsView({toast}) {
  const [stats,setStats]=useState(null);
  const [q,setQ]=useState(""); const [ans,setAns]=useState(null); const [busy,setBusy]=useState(false);
  useEffect(()=>{ api("/analytics/summary").then(setStats).catch(e=>toast(e.message,true)); },[]);
  const ask=async(question)=>{
    if (!question.trim() || busy) return;
    setBusy(true); setAns(null);
    try{ setAns(await api("/analytics/ask",{method:"POST",body:JSON.stringify({question})})); }
    catch(e){ toast(e.message,true); } finally{ setBusy(false); } };
  if (!stats) return <div className="mono text-sm text-[var(--mute)] p-8">chargement analytique…</div>;
  const wmax = Math.max(...stats.weekly_new.map(w=>w.count), 1);
  return <div className="space-y-4 fadein">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {[["CONTACTS",stats.totals.contacts],["LEADS",stats.totals.leads],
        ["CLIENTS CENTRIS",stats.totals.clients],
        ["ENGAGEMENT MOYEN",stats.totals.avg_engagement+"/100"],
        ["😴 À RELANCER",stats.totals.dormant_clients]].map(([k,v])=>(
        <div key={k} className="panel p-3 scanline">
          <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
          <div className="text-2xl font-semibold mt-1">{v}</div></div>))}
    </div>
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">▮ CONTACTS PAR ENTONNOIR</div>
        <HBars data={stats.funnels} valueKey="total" labelKey="label"/>
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">▮ CONVERSION VERS CLIENT CENTRIS</div>
        <HBars data={stats.funnels} valueKey="conversion_pct" labelKey="label" color="var(--ok)" fmt={(v)=>v+" %"}/>
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">▮ NOUVEAUX CONTACTS / SEMAINE (8 sem.)</div>
        <div className="flex items-end gap-1.5" style={{height:"110px"}}>
          {stats.weekly_new.map((w,i)=>(
            <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
              <div className="mono text-[9px] text-[var(--mute)]">{w.count||""}</div>
              <div className="w-full rounded-t" style={{height:Math.max(2,Math.round(70*w.count/wmax))+"px", background:"var(--amber)", opacity:.85}}/>
              <div className="mono text-[8px] text-[var(--mute)]">{w.label}</div>
            </div>))}
        </div>
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">▮ CLIENTS PAR ÉTAPE DU PIPELINE</div>
        {Object.keys(stats.stages).length===0
          ? <div className="text-xs text-[var(--mute)]">Aucun client Centris pour l'instant.</div>
          : <HBars data={Object.entries(stats.stages).map(([k,v])=>({label:k,n:v}))} valueKey="n" labelKey="label" color="#7dd3fc"/>}
      </div>
    </div>
    <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">▮ DEMANDER UN RAPPORT — IA, à partir de vos données uniquement</div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {PRESET_QUESTIONS.map((p,i)=>(
          <button key={i} onClick={()=>{setQ(p); ask(p);}}
            className="mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--line)] text-[var(--mute)] hover:border-[var(--amber)] hover:text-[var(--ink)] text-left">{p}</button>))}
      </div>
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{ if(e.key==="Enter") ask(q); }}
          placeholder="Posez n'importe quelle question sur vos leads, entonnoirs, conversions…"
          className="flex-1 bg-black/30 border border-[var(--line)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--amber)]"/>
        <button onClick={()=>ask(q)} disabled={busy}
          className="mono text-[10px] px-4 rounded-lg bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{busy?"analyse…":"Analyser"}</button>
      </div>
      {ans && <div className="mt-3 p-3 bg-black/30 rounded-lg border border-[var(--line)]/50 fadein">
        <div className="text-sm whitespace-pre-wrap leading-relaxed">{ans.answer}</div>
        <div className="mono text-[9px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/40">
          {ans.llm ? "✦ généré par IA (Haiku) à partir des données du portefeuille"
                   : "rapport déterministe — définir ANTHROPIC_API_KEY pour l'analyse IA en langage naturel"}</div>
      </div>}
    </div>
  </div>;
}

// -------------------------------------------------------------------- App --
function App() {
  const [view,setView]=useState("radar");
  const [toastMsg,setToastMsg]=useState(null); const [toastErr,setToastErr]=useState(false);
  const toast=(m,err=false)=>{ setToastMsg(m); setToastErr(err);
    setTimeout(()=>setToastMsg(null), 3500); };
  return <div className="min-h-screen">
    <header className="border-b border-[var(--line)] px-4 md:px-6 py-3 flex items-center gap-4 sticky top-0 bg-[var(--petrol)]/95 backdrop-blur z-30">
      <div>
        <div className="font-bold tracking-tight text-lg">RADAR<span className="amber">HUB</span></div>
        <div className="mono text-[9px] text-[var(--mute)] -mt-0.5">PLATEFORME COURTIER · QUÉBEC · tenant: danny</div>
      </div>
      <nav className="flex gap-1 ml-auto items-center">
        {[["radar","📡 Radar"],["contacts","👥 Contacts"],["agents","🤖 Agents"],["analytics","📈 Analytique"]].map(([k,l])=>(
          <button key={k} onClick={()=>setView(k)}
            className={"mono text-[11px] px-3 py-1.5 rounded-lg border transition-colors "
              +(view===k?"border-[var(--amber)] amber bg-[var(--amber)]/10":"border-transparent text-[var(--mute)] hover:text-[var(--ink)]")}>{l}</button>))}
        <a href="/" title="Tableau d'engagement — clients Centris seulement"
          className="mono text-[11px] px-3 py-1.5 rounded-lg border border-transparent text-[var(--mute)] hover:text-[var(--ink)]">📊 Engagement ↗</a>
      </nav>
    </header>
    <main className="p-4 md:p-6 max-w-6xl mx-auto">
      {view==="radar" && <RadarView toast={toast}/>}
      {view==="contacts" && <ContactsView toast={toast}/>}
      {view==="agents" && <AgentsView toast={toast}/>}
      {view==="analytics" && <AnalyticsView toast={toast}/>}
    </main>
    <Toast msg={toastMsg} err={toastErr}/>
  </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
</script>
<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");</script>
</body>
</html>"""
