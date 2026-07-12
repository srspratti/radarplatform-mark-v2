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
const { useState, useEffect, useCallback, useRef } = React;

// i18n — LANG is module-level; App owns the state and every child re-renders
// through it, so T() always reads the current language during render.
let LANG = localStorage.getItem("radar_lang") || "fr";
const T = (fr, en) => (LANG === "fr" ? fr : (en !== undefined ? en : fr));

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
    const k = window.prompt(T("Console protégée — entrer la clé API Radar (X-Radar-Key) :","Protected console — enter the Radar API key (X-Radar-Key):"));
    if (k) { APIKEY = k.trim(); sessionStorage.setItem("radar_key", APIKEY);
             return api(path, { ...opts, __retried: true }); }
  }
  if (!r.ok) { const d = await r.json().catch(()=>({detail:r.statusText}));
               throw new Error(d.detail || r.statusText); }
  return r.json();
};
const since = (iso) => {
  if (!iso) return T("jamais","never");
  const m = Math.max(1, Math.round((Date.now() - new Date(iso.endsWith("Z")?iso:iso+"Z")) / 60000));
  return m < 60 ? T(`il y a ${m} min`,`${m} min ago`)
       : m < 1440 ? T(`il y a ${Math.round(m/60)} h`,`${Math.round(m/60)} h ago`)
       : T(`il y a ${Math.round(m/1440)} j`,`${Math.round(m/1440)} d ago`);
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

// -------------------------------------------- follow-ups + open house ------
const FU_ICON = {sequence:"⏰", anniversary:"🎂", tax_season:"🧾",
                 equity_report:"📈", review_ask:"⭐"};

function FollowupsPanel({toast}) {
  const [due,setDue]=useState([]);
  const load=useCallback(async()=>{ try{ setDue(await api("/followups/due")); }catch(e){} },[]);
  useEffect(()=>{ load(); },[load]);
  const act=async(id,a)=>{ try{ await api(`/followups/${id}/${a}`,{method:"POST"});
    toast(a==="done"?T("Relance faite — consignée au journal","Follow-up done — logged"):T("Relance passée","Follow-up skipped")); load(); }
    catch(e){ toast(e.message,true);} };
  if (due.length===0) return null;
  return <div className="panel p-4">
    <div className="mono text-[11px] amber mb-2">{T("▮ RELANCES DUES — séquences, client à vie, avis","▮ FOLLOW-UPS DUE — sequences, client-for-life, reviews")}</div>
    <div className="space-y-1.5">
      {due.map(f=>(
        <div key={f.id} className="flex items-center gap-2 text-sm py-1 border-b border-[var(--line)]/30 last:border-0">
          <span>{FU_ICON[f.kind]||"📌"}</span>
          <span className="font-medium shrink-0">{f.contact.name}</span>
          <span className="mono text-[10px] text-[var(--mute)] truncate flex-1">{f.note}</span>
          {f.contact.phone && <a href={"tel:"+f.contact.phone.replace(/[^+\d]/g,"")}
            title={T("Appeler depuis votre téléphone","Call from your phone")}
            className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">📞</a>}
          <button onClick={()=>act(f.id,"done")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-emerald-400">{T("✓ Fait","✓ Done")}</button>
          <button onClick={()=>act(f.id,"skip")} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--warn)]">{T("Passer","Skip")}</button>
        </div>))}
    </div>
  </div>;
}

function OpenHousePanel({toast}) {
  const [ref,setRef]=useState(""); const [qr,setQr]=useState(null); const [url,setUrl]=useState("");
  const gen=async()=>{
    const r=(ref.trim()||"visite").replace(/[^\w-]/g,"");
    try{
      const resp=await fetch("/api/openhouse/"+encodeURIComponent(r)+"/qr.svg",
        {headers:{"X-Tenant-Id":TENANT, ...(APIKEY?{"X-Radar-Key":APIKEY}:{})}});
      if (!resp.ok) throw new Error(T("QR indisponible (","QR unavailable (")+resp.status+")");
      setQr(URL.createObjectURL(await resp.blob()));
      setUrl(location.origin+"/oh/"+r);
    }catch(e){ toast(e.message,true); }
  };
  return <div className="panel p-4">
    <div className="mono text-[11px] amber mb-2">{T("▮ PORTE OUVERTE — feuille d'inscription QR","▮ OPEN HOUSE — QR sign-in sheet")}</div>
    <div className="flex gap-2 items-center flex-wrap">
      <input value={ref} onChange={e=>setRef(e.target.value)} placeholder={T("Réf. inscription (ex: 28374619)","Listing ref. (e.g. 28374619)")}
        className="bg-black/30 border border-[var(--line)] rounded px-3 py-1.5 text-sm outline-none focus:border-[var(--amber)]"/>
      <button onClick={gen} className="mono text-[10px] px-3 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{T("Générer le QR","Generate QR")}</button>
      {url && <a href={url} target="_blank" className="mono text-[10px] text-[var(--mute)] underline">{url}</a>}
    </div>
    {qr && <div className="mt-3 bg-white rounded-lg p-3 inline-block"><img src={qr} width="180" height="180" alt="QR porte ouverte"/></div>}
    <div className="mono text-[10px] text-[var(--mute)] mt-2">
      {T("Imprimez le QR pour la table d'entrée — chaque visiteur inscrit devient un lead (entonnoir « porte ouverte ») avec consentement consigné au registre.",
         "Print the QR for the entry table — every signed-in visitor becomes a lead (open-house funnel) with consent recorded in the registry.")}
    </div>
  </div>;
}

// ------------------------------------------------------------- RADAR view --
function RadarView({toast, on, feats}) {
  const [sum,setSum]=useState(null); const [leads,setLeads]=useState([]);
  const load = useCallback(async()=>{ 
    setSum(await api("/dashboard/summary")); setLeads(await api("/leads")); },[]);
  useEffect(()=>{ load().catch(e=>toast(e.message,true)); },[load]);
  const act = async (fn, ok)=>{ try{ await fn(); toast(ok); await load(); }
                               catch(e){ toast(e.message,true); } };
  if (!sum) return <div className="mono text-sm text-[var(--mute)] p-8">{T("chargement du radar…","loading radar…")}</div>;
  return <div className="space-y-5 fadein">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {[["LEADS",sum.counts.leads],["CLIENTS",sum.counts.clients],
        [T("🔥 CHAUDS","🔥 HOT"),sum.counts.hot_leads],[T("😴 À RELANCER","😴 RE-ENGAGE"),sum.counts.dormant_clients],
        ["📤 WRITEBACKS",sum.counts.pending_writebacks]].map(([k,v])=>(
        <div key={k} className="panel p-3 scanline">
          <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
          <div className="text-2xl font-semibold mt-1">{v}</div></div>))}
    </div>
    {sum.alerts.length>0 && <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">{T("▮ RADAR — INTELLIGENCE D'ACHAT · signaux prioritaires","▮ RADAR — BUYING INTELLIGENCE · priority signals")}</div>
      {sum.alerts.map((a,i)=><div key={i} className="text-sm py-1 border-b border-[var(--line)]/40 last:border-0">{a}</div>)}
    </div>}
    <div className="panel p-4">
      <div className="flex items-center justify-between mb-1">
        <div className="mono text-[11px] amber">{T("▮ BOÎTE DE LEADS — entonnoirs existants, score de priorité IA","▮ LEADS INBOX — existing funnels, AI priority score")}</div>
        <div className="flex gap-2">
          <button onClick={()=>act(()=>api("/connectors/fub/import",{method:"POST"}),T("Import FUB terminé","FUB import done"))}
            className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("↧ Importer FUB","↧ Import FUB")}</button>
          <button onClick={()=>act(()=>api("/connectors/fub/flush-writebacks",{method:"POST"}),T("Writebacks poussés","Writebacks pushed"))}
            className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("↥ Pousser writebacks","↥ Push writebacks")}</button>
        </div>
      </div>
      <div className="mono text-[10px] text-[var(--mute)] mb-3">
        {T("Sources : CRM FUB (portails tiers inclus) · alertes Matrix · références · site web — d'autres entonnoirs pourront s'ajouter. Un lead devient client au moment de son ajout à Centris (bouton →), et apparaît alors dans le tableau d'engagement.",
           "Sources: FUB CRM (third-party portals included) · Matrix alerts · referrals · website — more funnels can be added. A lead becomes a client the moment it is added to Centris (→ button), and then appears on the engagement dashboard.")}
      </div>
      <div className="space-y-2">
        {leads.length===0 && <div className="text-sm text-[var(--mute)]">
          {T("Aucun lead en attente — le radar est propre.","No leads waiting — the radar is clean.")}
          <div className="mono text-[10px] mt-1.5 text-[var(--mute)]">
            ⏱ {T("Dernier événement FUB","Last FUB event")} : {since(sum.sync && sum.sync.last_fub)} · {T("dernière alerte Matrix","last Matrix alert")} : {since(sum.sync && sum.sync.last_matrix)} — {T("les entonnoirs restent branchés.","the funnels are still connected.")}
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
                title={T("Appeler ","Call ")+l.phone+T(" — l'appel part de VOTRE téléphone"," — the call goes out from YOUR phone")}
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">{T("📞 Appeler","📞 Call")}</a>}
              {l.phone && <a href={"sms:"+l.phone.replace(/[^+\d]/g,"")}
                title={T("Texto — envoyé depuis VOTRE téléphone","Text — sent from YOUR phone")}
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-emerald-400">💬</a>}
              <button onClick={()=>act(()=>api(`/leads/${l.id}/contacted`,{method:"POST"}),T("Marqué contacté","Marked contacted"))}
                className="mono text-[10px] px-2.5 py-1.5 rounded border border-[var(--line)] hover:border-sky-400">{T("✓ Contacté","✓ Contacted")}</button>
              <button onClick={()=>act(()=>api(`/leads/${l.id}/convert`,{method:"POST"}),T("Ajouté comme client Centris — jeton portail Vitrine émis","Added as Centris client — Vitrine portal token issued"))}
                title={T("L'ajout à Centris convertit ce lead en client — il passe au tableau d'engagement","Adding to Centris converts this lead into a client — it moves to the engagement dashboard")}
                className="mono text-[10px] px-2.5 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{T("→ Ajouter à Centris","→ Add to Centris")}</button>
            </div>
          </div>))}
      </div>
    </div>
    {sum.top_clients && sum.top_clients.length>0 && <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">{T("▮ CLIENTS CENTRIS — score d'engagement (activité Vitrine · Matrix · CRM)","▮ CENTRIS CLIENTS — engagement score (Vitrine · Matrix · CRM activity)")}</div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {sum.top_clients.map(c=>(
          <div key={c.id} className="panel2 p-3 flex flex-col items-center text-center gap-1">
            <Ring score={c.engagement_score}/>
            <div className="text-xs font-medium truncate w-full">{c.name}{c.dormant?" 😴":""}</div>
            <div className="mono text-[9px] text-[var(--mute)]">{c.stage_label}</div>
          </div>))}
      </div>
      <div className="mono text-[10px] text-[var(--mute)] mt-3">
        {T("Un seul cerveau, deux scores : priorité (quel lead appeler maintenant) et engagement (quel client Centris est chaud ou décroche). Fiches complètes dans 👥 Contacts · suivi et conversations dans 📊 Engagement ↗.",
           "One brain, two scores: priority (which lead to call now) and engagement (which Centris client is hot or drifting). Full profiles in 👥 Contacts · follow-up and conversations in 📊 Engagement ↗.")}
      </div>
    </div>}
    {on && (on("sequences")||on("client_for_life")||on("review_engine")) && <FollowupsPanel toast={toast}/>}
    {on && feats && !on("sequences") && <LockedCard k="sequences" feats={feats}/>}
    {on && on("open_house_qr") && <OpenHousePanel toast={toast}/>}
    {on && feats && !on("open_house_qr") && <LockedCard k="open_house_qr" feats={feats}/>}
  </div>;
}

// ---------------------------------------------------------- CONTACTS view --
const FUNNEL_LABEL = { fub_import:"CRM FUB", matrix_visit:"Alertes Matrix",
  danny_channel:"Références", own_generated:"Site web", prospecting_agent:"Prospection",
  open_house:"Porte ouverte" };
const FUNNEL_LABEL_EN = { fub_import:"FUB CRM", matrix_visit:"Matrix alerts",
  danny_channel:"Referrals", own_generated:"Website", prospecting_agent:"Prospecting",
  open_house:"Open house" };
const chipCls = (on)=>"mono text-[10px] px-2.5 py-1 rounded-full border transition-colors "
  +(on?"border-[var(--amber)] amber bg-[var(--amber)]/10"
      :"border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)]");

function ConsentPanel({cid, toast}) {
  const [rows,setRows]=useState([]);
  const load=useCallback(async()=>{ try{ setRows(await api(`/contacts/${cid}/consents`)); }catch(e){} },[cid]);
  useEffect(()=>{ load(); },[load]);
  const add=async()=>{
    const basis=window.prompt(T("Base légale (express / implied / business_relationship) :","Legal basis (express / implied / business_relationship):"),"express");
    if (!basis) return;
    const note=window.prompt(T("Contexte (où/comment le consentement a été donné) :","Context (where/how consent was given):"))||"";
    try{ await api(`/contacts/${cid}/consents`,{method:"POST",
      body:JSON.stringify({basis:basis.trim(), note, source:"manuel"})});
      toast(T("Consentement consigné","Consent recorded")); load(); }catch(e){ toast(e.message,true);} };
  return <div className="panel p-3 mt-3">
    <div className="flex items-center justify-between mb-2">
      <div className="mono text-[10px] amber">{T("▮ REGISTRE DE CONSENTEMENTS — Loi 25 / LCAP","▮ CONSENT REGISTRY — Law 25 / CASL")}</div>
      <button onClick={add} className="mono text-[10px] px-2 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("➕ Consigner","➕ Record")}</button>
    </div>
    {rows.length===0 && <div className="text-[11px] text-[var(--mute)]">{T("Aucun consentement consigné pour ce contact.","No consent recorded for this contact.")}</div>}
    {rows.map(r=>(
      <div key={r.id} className="mono text-[10px] py-1 border-b border-[var(--line)]/30 last:border-0 flex gap-2 items-center">
        <span className={r.granted?"text-emerald-300":"text-red-300"}>{r.granted?"✔":"✖"}</span>
        <span>{r.basis}</span>
        <span className="text-[var(--mute)] truncate flex-1">{r.source}{r.note?" — "+r.note:""}</span>
        <span className="text-[var(--mute)] shrink-0">{r.recorded_at.slice(0,10)}</span>
      </div>))}
  </div>;
}

function ContactsView({toast, on, feats}) {
  const [contacts,setContacts]=useState([]); const [sel,setSel]=useState(null);
  const [digest,setDigest]=useState(""); const [toolOut,setToolOut]=useState("");
  const [funnel,setFunnel]=useState("all"); const [life,setLife]=useState("all");
  const callNote=async(c)=>{
    const notes=window.prompt(T("Note d'appel — ","Call note — ")+c.name+T(" (points clés) :"," (key points):"));
    if (!notes) return;
    const outcome=window.prompt(T("Résultat (joint / boîte vocale / pas de réponse) :","Outcome (reached / voicemail / no answer):"),T("joint","reached"))||"";
    try{ const r=await api(`/contacts/${c.id}/call-note`,{method:"POST",
      body:JSON.stringify({notes, outcome})});
      toast(T("Appel consigné","Call logged")+(r.fub_queued?T(" — note FUB en file"," — FUB note queued"):"")); }
    catch(e){ toast(e.message,true);} };
  const proposeSlots=async()=>{
    const s=window.prompt(T("3 créneaux, séparés par des virgules :","3 time slots, comma-separated:"),T("samedi 10h, samedi 14h, dimanche 11h","Saturday 10am, Saturday 2pm, Sunday 11am"));
    if (!s) return;
    try{ const r=await api(`/contacts/${sel.id}/propose-slots`,{method:"POST",
      body:JSON.stringify({slots:s.split(",").map(x=>x.trim()).filter(Boolean)})});
      setToolOut(r.message);
      if (r.sms_url) window.open(r.sms_url+"?&body="+encodeURIComponent(r.message));
      toast(T("Créneaux proposés — texto prêt","Slots proposed — text ready")); }catch(e){ toast(e.message,true);} };
  const askReview=async()=>{
    try{ const r=await api(`/clients/${sel.id}/review-ask`,{method:"POST"});
      setToolOut(r.message);
      if (r.sms_url) window.open(r.sms_url+"?&body="+encodeURIComponent(r.message));
      toast(T("Demande d'avis prête","Review request ready")); }catch(e){ toast(e.message,true);} };
  const scheduleC4L=async()=>{
    try{ const r=await api(`/lifecycle/${sel.id}/schedule`,{method:"POST"});
      setToolOut(r.scheduled.length ? T("Planifié : ","Scheduled: ")+r.scheduled.join(", ")
                                    : T("Déjà tout planifié pour ce client.","Everything already scheduled for this client."));
      toast(T("Client à vie planifié","Client-for-life scheduled")); }catch(e){ toast(e.message,true);} };
  const equityReport=async()=>{
    try{
      let r;
      try{ r=await api(`/lifecycle/${sel.id}/equity-report`); }
      catch(e){
        if (String(e.message).includes("prix")) {
          const p=window.prompt(T("Prix d'achat ($) :","Purchase price ($):")); if (!p) return;
          r=await api(`/lifecycle/${sel.id}/equity-report?price=`+encodeURIComponent(p));
        } else throw e;
      }
      setToolOut(r.message+"\n\n["+r.estimate_low.toLocaleString("fr-CA")+" $ – "
                 +r.estimate_high.toLocaleString("fr-CA")+" $ · "+r.years+" ans]");
      toast(T("Rapport de valeur généré","Value report generated")); }catch(e){ toast(e.message,true);} };
  const load=useCallback(async()=>setContacts(await api("/contacts")),[]);
  useEffect(()=>{ load().catch(e=>toast(e.message,true)); },[load]);
  const open=async(c)=>{
    if (c.lifecycle!=="client"){ toast(T("Lead — actions (✓ contacté / → Centris) dans l'onglet 📡 Radar","Lead — actions (✓ contacted / → Centris) live in the 📡 Radar tab")); return; }
    try{ setSel(await api("/clients/"+c.id)); setDigest(""); } catch(e){ toast(e.message,true);} };
  const getDigest=async()=>{ const d=await api(`/clients/${sel.id}/matrix-digest`);
    setDigest(d.digest); };
  const copy=()=>{ navigator.clipboard.writeText(digest); toast(T("Digest copié — coller dans l'historique Matrix","Digest copied — paste into Matrix history")); };
  const fn=(c)=>c.funnel||c.source;
  const tel=(p)=>"tel:"+p.replace(/[^+\d]/g,""); const sms=(p)=>"sms:"+p.replace(/[^+\d]/g,"");
  const funnels={}; contacts.forEach(c=>{ funnels[fn(c)]=(funnels[fn(c)]||0)+1; });
  const nLeads=contacts.filter(c=>c.lifecycle==="lead").length;
  const shown=contacts.filter(c=>(funnel==="all"||fn(c)===funnel)
                              && (life==="all"||c.lifecycle===life));
  return <div className="fadein">
    <div className="mono text-[10px] text-[var(--mute)] mb-3">
      {T("▮ RÉPERTOIRE — tous les contacts, tous les entonnoirs : leads (FUB, tiers, références, site) ET clients Centris. Ici : appeler, texter, outils ops. Actions lead dans 📡 Radar · suivi d'engagement dans 📊 Engagement ↗.",
         "▮ DIRECTORY — every contact, every funnel: leads (FUB, third-party, referrals, website) AND Centris clients. Here: call, text, ops tools. Lead actions in 📡 Radar · engagement tracking in 📊 Engagement ↗.")}
    </div>
    <div className="flex flex-wrap gap-1.5 mb-2 items-center">
      <span className="mono text-[9px] text-[var(--mute)] mr-1">{T("ENTONNOIR","FUNNEL")}</span>
      <button onClick={()=>setFunnel("all")} className={chipCls(funnel==="all")}>{T("Tous","All")} ({contacts.length})</button>
      {Object.entries(funnels).map(([f,n])=>(
        <button key={f} onClick={()=>setFunnel(f)} className={chipCls(funnel===f)}>{T(FUNNEL_LABEL[f]||f, FUNNEL_LABEL_EN[f]||FUNNEL_LABEL[f]||f)} ({n})</button>))}
    </div>
    <div className="flex flex-wrap gap-1.5 mb-4 items-center">
      <span className="mono text-[9px] text-[var(--mute)] mr-1">{T("STATUT","STATUS")}</span>
      {[["all",T("Tous","All")],["lead",`Leads (${nLeads})`],["client",T("Clients Centris","Centris clients")+` (${contacts.length-nLeads})`]].map(([k,l])=>(
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
                    {c.lifecycle==="client"?T("CLIENT CENTRIS","CENTRIS CLIENT"):"LEAD"}</span>
                  <SourceChip source={c.source} sublabel={c.sublabel}/>
                  {c.lifecycle==="client" && <span className="mono text-[10px] px-2 py-0.5 rounded bg-[#123542] text-[var(--ink)]">{c.stage_label}</span>}
                </div>
              </div>
            </div>
          </button>
          {(c.phone||c.email) && <div className="flex gap-2 mt-3">
            {c.phone && <a href={tel(c.phone)} title={T("Appeler ","Call ")+c.phone+T(" — depuis votre téléphone"," — from your phone")}
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">{T("📞 Appeler","📞 Call")}</a>}
            {c.phone && <a href={sms(c.phone)} title={T("Texto depuis votre téléphone","Text from your phone")}
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-emerald-400">{T("💬 Texto","💬 Text")}</a>}
            {c.email && <a href={"mailto:"+c.email} title={c.email}
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-sky-400">{T("✉ Courriel","✉ Email")}</a>}
            {on && on("call_capture") && <button onClick={()=>callNote(c)}
              title="Consigner une note d'appel (résumé IA → chronologie + FUB)"
              className="mono text-[10px] px-2.5 py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">📝 Note</button>}
          </div>}
        </div>))}
    </div>
    {shown.length===0 && <div className="text-sm text-[var(--mute)] mt-4">{T("Aucun contact dans ce filtre.","No contacts in this filter.")}</div>}
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
              {sel.dormant && <span className="mono text-[10px] px-2 py-0.5 rounded border border-red-400/40 text-red-300 bg-red-400/10">{T("À RELANCER","RE-ENGAGE")}</span>}
              {sel.fub_person_id && <span className="mono text-[10px] text-[var(--mute)]">FUB #{sel.fub_person_id}</span>}
              {sel.portal_token && <button onClick={()=>window.open('/portail/'+sel.portal_token,'_blank')}
                className="mono text-[10px] px-2 py-0.5 rounded bg-[var(--amber)]/90 text-black font-semibold">{T("👁 Portail client","👁 Client portal")}</button>}
              {on && on("transaction_tracker") && sel.portal_token && <button
                onClick={()=>window.open('/suivi/'+sel.portal_token,'_blank')}
                title={T("Page de suivi du dossier — à partager avec le client","File tracking page — share it with the client")}
                className="mono text-[10px] px-2 py-0.5 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("🧭 Suivi dossier","🧭 File tracker")}</button>}
              {sel.intake_email && <button onClick={()=>{navigator.clipboard.writeText(sel.intake_email); toast(T('Adresse d\'alerte copiée — 2e destinataire dans Matrix','Alert address copied — 2nd recipient in Matrix'));}}
                className="mono text-[10px] px-2 py-0.5 rounded border border-[var(--line)] hover:border-[var(--amber)]" title={sel.intake_email}>✉ {sel.intake_email}</button>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ring score={sel.engagement_score} size={64}/>
            <button onClick={()=>setSel(null)} className="mono text-[var(--mute)] hover:text-white text-lg">✕</button>
          </div>
        </div>
        <div className="panel p-3 mt-4">
          <div className="mono text-[10px] amber mb-1">{T("▮ PIPELINE QUÉBEC (dérivé du journal d'événements)","▮ QUÉBEC PIPELINE (derived from the event log)")}</div>
          <Stepper order={sel.stage_order} labels={sel.stage_labels} current={sel.stage}/>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="panel p-3">
            <div className="mono text-[10px] amber mb-2">{T("▮ DÉCOMPOSITION DU SCORE","▮ SCORE BREAKDOWN")}</div>
            {Object.keys(sel.score_breakdown).length===0 &&
              <div className="text-xs text-[var(--mute)]">{T("Aucune activité client pondérée.","No weighted client activity.")}</div>}
            {Object.entries(sel.score_breakdown).map(([f,v])=>(
              <div key={f} className="flex justify-between mono text-[11px] py-0.5">
                <span className="text-[var(--mute)]">{f}</span><span>{v} pts</span></div>))}
            <div className="mono text-[10px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/50">
              {T("acteur=client uniquement · demi-vie 7 j","actor=client only · 7-day half-life")}</div>
          </div>
          <div className="panel p-3">
            <div className="mono text-[10px] amber mb-2">{T("▮ RETOUR VERS MATRIX","▮ BACK TO MATRIX")}</div>
            <button onClick={getDigest} className="mono text-[10px] px-3 py-1.5 rounded border border-[var(--line)] hover:border-[var(--amber)] w-full">{T("Générer le digest 7 jours","Generate the 7-day digest")}</button>
            {digest && <>
              <pre className="mono text-[10px] mt-2 p-2 bg-black/30 rounded max-h-40 overflow-auto whitespace-pre-wrap">{digest}</pre>
              <button onClick={copy} className="mono text-[10px] mt-2 px-3 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold w-full">{T("Copier pour Matrix","Copy for Matrix")}</button></>}
            <div className="text-[10px] text-[var(--mute)] mt-2">{T("FUB: notes poussées via API. Matrix: collage manuel (ToS Centris — aucune connexion automatisée).","FUB: notes pushed via API. Matrix: manual paste (Centris ToS — no automated connection).")}</div>
          </div>
        </div>
        {on && feats && <div className="panel p-3 mt-3">
          <div className="mono text-[10px] amber mb-2">{T("▮ ACTIONS FORFAIT","▮ PLAN ACTIONS")}</div>
          <div className="flex flex-wrap gap-2">
            {[["showing_scheduler", T("📅 Proposer 3 créneaux","📅 Propose 3 slots"), proposeSlots],
              ["review_engine", T("⭐ Demander un avis","⭐ Ask for a review"), askReview],
              ["client_for_life", T("🎂 Planifier client à vie","🎂 Schedule client-for-life"), scheduleC4L],
              ["client_for_life2", T("📈 Rapport de valeur","📈 Value report"), equityReport]].map(([key,label,fn])=>{
              const k = key.replace(/2$/,"");
              const ok = on(k);
              const f = feats.features[k];
              return <button key={key}
                onClick={ok ? fn : ()=>toast("🔒 "+fLabel(k,f)+" — "+T("forfait ","plan ")+f.tier+T(" requis · voir ⭐ Forfaits"," required · see ⭐ Plans"), true)}
                title={ok ? "" : fPitch(k,f)}
                className={"mono text-[10px] px-2.5 py-1.5 rounded border "+(ok
                  ?"border-[var(--line)] hover:border-[var(--amber)]"
                  :"border-[var(--line)]/50 text-[var(--mute)] opacity-60")}
                style={ok?{}:{borderStyle:"dashed"}}>{ok?label:"🔒 "+label}</button>;})}
          </div>
          {toolOut && <pre className="mono text-[10px] mt-2 p-2 bg-black/30 rounded whitespace-pre-wrap max-h-40 overflow-auto">{toolOut}</pre>}
        </div>}
        {on && on("consent_vault") && <ConsentPanel cid={sel.id} toast={toast}/>}
        <div className="panel p-3 mt-3">
          <div className="mono text-[10px] amber mb-2">{T("▮ CHRONOLOGIE UNIFIÉE — Vitrine + Matrix + FUB + Hub","▮ UNIFIED TIMELINE — Vitrine + Matrix + FUB + Hub")}</div>
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
      {[["office",T("🗂 Gestion de bureau","🗂 Office management")],["prospect",T("🎯 Prospection","🎯 Prospecting")],["content",T("📣 Contenu & social","📣 Content & social")]].map(([k,l])=>(
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

const PRESET_QUESTIONS = () => [
  T("Quel entonnoir a le meilleur taux de conversion vers client Centris ?","Which funnel converts best into Centris clients?"),
  T("Où devrais-je investir mon temps de prospection cette semaine ?","Where should I invest my prospecting time this week?"),
  T("Résume la santé de mon portefeuille en 5 lignes.","Summarize my portfolio's health in 5 lines."),
  T("Quels clients Centris risquent de décrocher ?","Which Centris clients are at risk of drifting?"),
  T("La tendance des nouveaux contacts monte ou descend ?","Is the new-contact trend up or down?"),
];

function CMAPanel({toast}) {
  const [subject,setSubject]=useState(""); const [comps,setComps]=useState("");
  const [out,setOut]=useState(null); const [busy,setBusy]=useState(false);
  const run=async()=>{ if(busy) return; setBusy(true);
    try{ setOut(await api("/cma",{method:"POST",
      body:JSON.stringify({subject, comps_text:comps})})); }
    catch(e){ toast(e.message,true); } finally{ setBusy(false); } };
  return <div className="panel p-4">
    <div className="mono text-[11px] amber mb-2">{T("▮ ANALYSE COMPARATIVE (ACM) — collez vos comparables","▮ COMPARATIVE MARKET ANALYSIS (CMA) — paste your comps")}</div>
    <input value={subject} onChange={e=>setSubject(e.target.value)}
      placeholder={T("Propriété sujette (ex: 4530 rue Rachel E — plex 2 chambres)","Subject property (e.g. 4530 Rachel St E — 2-bedroom plex)")}
      className="w-full bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)] mb-2"/>
    <textarea value={comps} onChange={e=>setComps(e.target.value)} rows="4"
      placeholder={T("Un comparable par ligne — adresse, prix vendu, pi² (optionnel)","One comp per line — address, sold price, sqft (optional)")+"\n4512 rue Rachel E — 615 000 — 1 240\n4488 rue Marquette — 589 000"}
      className="w-full bg-black/30 border border-[var(--line)] rounded px-3 py-2 mono text-[11px] outline-none focus:border-[var(--amber)]"/>
    <button onClick={run} disabled={busy}
      className="mono text-[10px] mt-2 px-4 py-1.5 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{busy?T("analyse…","analyzing…"):T("Générer l'ACM","Generate CMA")}</button>
    {out && <div className="mt-3 p-3 bg-black/30 rounded border border-[var(--line)]/50 fadein">
      <div className="mono text-[11px] mb-2 amber">
        {out.stats.n} {T("comparables · médiane","comps · median")} {out.stats.median.toLocaleString("fr-CA")} $ ·
        {T("suggéré","suggested")} {out.stats.suggested_low.toLocaleString("fr-CA")} $ – {out.stats.suggested_high.toLocaleString("fr-CA")} $
        {out.stats.avg_price_per_sqft ? " · "+out.stats.avg_price_per_sqft+" $/pi²" : ""}
      </div>
      <div className="text-sm whitespace-pre-wrap">{out.narrative}</div>
    </div>}
  </div>;
}

function FarmingPanel({toast}) {
  const [area,setArea]=useState(""); const [hl,setHl]=useState("");
  const [draft,setDraft]=useState(""); const [busy,setBusy]=useState(false);
  const run=async()=>{ if(!area.trim()||busy) return; setBusy(true);
    try{ const r=await api("/agents/content/farming-report",{method:"POST",
      body:JSON.stringify({area, highlights:hl})});
      setDraft(r.draft); toast(T("Infolettre ajoutée à la file de contenu","Newsletter added to the content queue")); }
    catch(e){ toast(e.message,true); } finally{ setBusy(false); } };
  return <div className="panel p-4">
    <div className="mono text-[11px] amber mb-2">{T("▮ INFOLETTRE DE QUARTIER — « le marché dans votre coin »","▮ NEIGHBOURHOOD NEWSLETTER — “the market in your area”")}</div>
    <div className="flex gap-2 flex-wrap">
      <input value={area} onChange={e=>setArea(e.target.value)} placeholder={T("Quartier (ex: Rosemont)","Neighbourhood (e.g. Rosemont)")}
        className="flex-1 min-w-[150px] bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)]"/>
      <input value={hl} onChange={e=>setHl(e.target.value)} placeholder={T("Faits saillants (ventes récentes, projets…)","Highlights (recent sales, projects…)")}
        className="flex-[2] min-w-[200px] bg-black/30 border border-[var(--line)] rounded px-3 py-2 text-sm outline-none focus:border-[var(--amber)]"/>
      <button onClick={run} disabled={busy}
        className="mono text-[10px] px-4 rounded bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{busy?"…":T("Rédiger","Draft it")}</button>
    </div>
    {draft && <pre className="mono text-[11px] mt-3 p-3 bg-black/30 rounded whitespace-pre-wrap fadein">{draft}</pre>}
  </div>;
}

function AnalyticsView({toast, on, feats}) {
  const [stats,setStats]=useState(null);
  const [q,setQ]=useState(""); const [ans,setAns]=useState(null); const [busy,setBusy]=useState(false);
  useEffect(()=>{ api("/analytics/summary").then(setStats).catch(e=>toast(e.message,true)); },[]);
  const ask=async(question)=>{
    if (!question.trim() || busy) return;
    setBusy(true); setAns(null);
    try{ setAns(await api("/analytics/ask",{method:"POST",body:JSON.stringify({question})})); }
    catch(e){ toast(e.message,true); } finally{ setBusy(false); } };
  if (!stats) return <div className="mono text-sm text-[var(--mute)] p-8">{T("chargement analytique…","loading analytics…")}</div>;
  const wmax = Math.max(...stats.weekly_new.map(w=>w.count), 1);
  return <div className="space-y-4 fadein">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {[["CONTACTS",stats.totals.contacts],["LEADS",stats.totals.leads],
        [T("CLIENTS CENTRIS","CENTRIS CLIENTS"),stats.totals.clients],
        [T("ENGAGEMENT MOYEN","AVG ENGAGEMENT"),stats.totals.avg_engagement+"/100"],
        [T("😴 À RELANCER","😴 RE-ENGAGE"),stats.totals.dormant_clients]].map(([k,v])=>(
        <div key={k} className="panel p-3 scanline">
          <div className="mono text-[10px] text-[var(--mute)]">{k}</div>
          <div className="text-2xl font-semibold mt-1">{v}</div></div>))}
    </div>
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">{T("▮ CONTACTS PAR ENTONNOIR","▮ CONTACTS BY FUNNEL")}</div>
        <HBars data={stats.funnels} valueKey="total" labelKey="label"/>
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">{T("▮ CONVERSION VERS CLIENT CENTRIS","▮ CONVERSION TO CENTRIS CLIENT")}</div>
        <HBars data={stats.funnels} valueKey="conversion_pct" labelKey="label" color="var(--ok)" fmt={(v)=>v+" %"}/>
      </div>
      <div className="panel p-4">
        <div className="mono text-[11px] amber mb-3">{T("▮ NOUVEAUX CONTACTS / SEMAINE (8 sem.)","▮ NEW CONTACTS / WEEK (8 wks)")}</div>
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
        <div className="mono text-[11px] amber mb-3">{T("▮ CLIENTS PAR ÉTAPE DU PIPELINE","▮ CLIENTS BY PIPELINE STAGE")}</div>
        {Object.keys(stats.stages).length===0
          ? <div className="text-xs text-[var(--mute)]">{T("Aucun client Centris pour l'instant.","No Centris clients yet.")}</div>
          : <HBars data={Object.entries(stats.stages).map(([k,v])=>({label:k,n:v}))} valueKey="n" labelKey="label" color="#7dd3fc"/>}
      </div>
    </div>
    {on && on("cma_generator") && <CMAPanel toast={toast}/>}
    {on && feats && !on("cma_generator") && <LockedCard k="cma_generator" feats={feats}/>}
    {on && on("farming_reports") && <FarmingPanel toast={toast}/>}
    {on && feats && !on("farming_reports") && <LockedCard k="farming_reports" feats={feats}/>}
    {on && feats && !on("analytics_ai") && <LockedCard k="analytics_ai" feats={feats}/>}
    {(!on || on("analytics_ai")) && <div className="panel p-4">
      <div className="mono text-[11px] amber mb-2">{T("▮ DEMANDER UN RAPPORT — IA, à partir de vos données uniquement","▮ ASK FOR A REPORT — AI, from your data only")}</div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {PRESET_QUESTIONS().map((p,i)=>(
          <button key={i} onClick={()=>{setQ(p); ask(p);}}
            className="mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--line)] text-[var(--mute)] hover:border-[var(--amber)] hover:text-[var(--ink)] text-left">{p}</button>))}
      </div>
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{ if(e.key==="Enter") ask(q); }}
          placeholder={T("Posez n'importe quelle question sur vos leads, entonnoirs, conversions…","Ask anything about your leads, funnels, conversions…")}
          className="flex-1 bg-black/30 border border-[var(--line)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--amber)]"/>
        <button onClick={()=>ask(q)} disabled={busy}
          className="mono text-[10px] px-4 rounded-lg bg-[var(--amber)]/90 text-black font-semibold hover:bg-[var(--amber)]">{busy?T("analyse…","analyzing…"):T("Analyser","Analyze")}</button>
      </div>
      {ans && <div className="mt-3 p-3 bg-black/30 rounded-lg border border-[var(--line)]/50 fadein">
        <div className="text-sm whitespace-pre-wrap leading-relaxed">{ans.answer}</div>
        <div className="mono text-[9px] text-[var(--mute)] mt-2 pt-2 border-t border-[var(--line)]/40">
          {ans.llm ? T("✦ généré par IA (Haiku) à partir des données du portefeuille","✦ AI-generated (Haiku) from your portfolio data")
                   : T("rapport déterministe — définir ANTHROPIC_API_KEY pour l'analyse IA en langage naturel","deterministic report — set ANTHROPIC_API_KEY for natural-language AI analysis")}</div>
      </div>}
    </div>}
  </div>;
}

// ------------------------------------------- plans & locked-feature upsell --
const FEATURE_EN = {
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
  cma_generator:      ["Comparative market analysis", "Paste your comps — suggested-price report in seconds."],
  messaging_sync:     ["Two-way SMS/WhatsApp", "Business messaging synced to the timeline (connector)."],
  consent_vault:      ["Consent registry", "Exportable Law 25 / CASL audit trail per contact."],
};
const fLabel = (k,f) => T(f.label, (FEATURE_EN[k]||[])[0] || f.label);
const fPitch = (k,f) => T(f.pitch, (FEATURE_EN[k]||[])[1] || f.pitch);

function LockedCard({k, feats}) {
  const f = feats && feats.features && feats.features[k];
  if (!f) return null;
  return <div className="panel p-4 opacity-60" style={{borderStyle:"dashed"}}>
    <div className="mono text-[11px] text-[var(--mute)] mb-1 flex items-center gap-2">
      <span>🔒 {fLabel(k,f)}</span>
      <span className="px-1.5 py-0.5 rounded border border-[var(--line)] uppercase text-[9px]">{T("forfait","plan")} {f.tier}</span>
    </div>
    <div className="text-sm text-[var(--mute)]">{fPitch(k,f)}</div>
    <div className="mono text-[10px] mt-2 amber">
      {T("Débloquée au forfait ","Unlocked in the ")}{f.tier}{T(" — détails dans ⭐ Forfaits"," plan — details in ⭐ Plans")}
    </div>
  </div>;
}

function PlansView({feats}) {
  if (!feats) return <div className="mono text-sm text-[var(--mute)] p-8">…</div>;
  const TIERS_L = ["basic","premium","gold","platinum"];
  const curIdx = TIERS_L.indexOf(feats.tier);
  return <div className="fadein">
    <div className="mono text-[10px] text-[var(--mute)] mb-4">
      {T("▮ FORFAITS — forfait actif : ","▮ PLANS — active plan: ")}
      <span className="amber uppercase">{feats.tier}</span>
      {T(" · se change dans features.toml (tier = \"…\") ou via RADAR_TIER au déploiement",
         " · switch in features.toml (tier = \"…\") or via RADAR_TIER at deploy time")}
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      {TIERS_L.map((tier,i)=>{
        const fs = Object.entries(feats.features).filter(([k,f])=>f.tier===tier);
        const included = i <= curIdx;
        return <div key={tier}
          className={"panel p-4 "+(tier===feats.tier?"border-[var(--amber)] scanline":included?"":"opacity-70")}>
          <div className="flex items-center justify-between mb-1">
            <div className="font-semibold text-lg capitalize">{tier==="basic"?T("Essentiel","Basic"):tier}</div>
            {tier===feats.tier && <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--amber)]/90 text-black font-bold uppercase">{T("actif","active")}</span>}
          </div>
          <div className="mono text-[9px] text-[var(--mute)] mb-3">
            {i>0 ? T("tout le forfait précédent, plus :","everything below, plus:")
                 : T("les essentiels du quotidien","the daily essentials")}</div>
          <div className="space-y-2.5">
            {fs.map(([k,f])=>(
              <div key={k}>
                <div className={"text-[13px] font-medium "+(f.enabled?"":"text-[var(--mute)]")}>
                  {f.enabled?"✓ ":"🔒 "}{fLabel(k,f)}</div>
                <div className="text-[11px] text-[var(--mute)] leading-snug">{fPitch(k,f)}</div>
              </div>))}
          </div>
        </div>;})}
    </div>
    <div className="mono text-[10px] text-[var(--mute)] mt-4">
      {T("Essai d'une fonctionnalité hors forfait : l'activer individuellement sous [overrides] dans features.toml.",
         "Trialing a feature outside the plan: enable it individually under [overrides] in features.toml.")}
    </div>
  </div>;
}

// ---------------------------------------------------- notification bell ----
function NotifBell() {
  const [items,setItems]=useState([]); const [openB,setOpenB]=useState(false);
  const seen=useRef(-1);
  const poll=useCallback(async()=>{ try{
    const n=await api("/notifications?unread=1");
    if (seen.current>=0 && n.length>seen.current && n.length &&
        "Notification" in window && Notification.permission==="granted")
      new Notification(n[0].title, {body:n[0].body, icon:"/static/pwa/icon-192.png"});
    seen.current=n.length; setItems(n);
  }catch(e){} },[]);
  useEffect(()=>{ poll(); const id=setInterval(poll, 30000);
    if ("Notification" in window && Notification.permission==="default")
      Notification.requestPermission();
    return ()=>clearInterval(id); },[poll]);
  const markRead=async()=>{ try{ await api("/notifications/read",{method:"POST"}); poll(); }catch(e){} };
  return <div className="relative">
    <button onClick={()=>setOpenB(o=>!o)} title={T("Alertes","Alerts")}
      className="mono text-[14px] px-2 py-1 rounded-lg border border-transparent hover:border-[var(--line)] relative">🔔
      {items.length>0 && <span className="absolute -top-1 -right-1 bg-[var(--warn)] text-black mono text-[9px] rounded-full px-1 font-bold">{items.length}</span>}
    </button>
    {openB && <div className="absolute right-0 mt-1 w-72 panel p-2 z-50 fadein">
      {items.length===0 && <div className="text-[11px] text-[var(--mute)] p-2">{T("Aucune alerte non lue.","No unread alerts.")}</div>}
      {items.map(n=>(
        <div key={n.id} className="text-[11px] py-1.5 px-1 border-b border-[var(--line)]/40 last:border-0">
          <div className="font-semibold">{n.title}</div>
          <div className="text-[var(--mute)]">{n.body}</div>
        </div>))}
      {items.length>0 && <button onClick={markRead}
        className="mono text-[10px] mt-1 w-full py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">{T("Tout marquer lu","Mark all read")}</button>}
    </div>}
  </div>;
}

// -------------------------------------------------------------------- App --
function App() {
  const [view,setView]=useState("radar");
  const [feats,setFeats]=useState(null);
  const [lang,setLang]=useState(LANG);
  const [toastMsg,setToastMsg]=useState(null); const [toastErr,setToastErr]=useState(false);
  const toast=(m,err=false)=>{ setToastMsg(m); setToastErr(err);
    setTimeout(()=>setToastMsg(null), 3500); };
  useEffect(()=>{ api("/features").then(setFeats).catch(()=>{}); },[]);
  const on=(k)=>!!(feats && feats.features && feats.features[k] && feats.features[k].enabled);
  const flipLang=()=>{ LANG = lang==="fr" ? "en" : "fr";
    localStorage.setItem("radar_lang", LANG); setLang(LANG); };
  return <div className="min-h-screen">
    <header className="border-b border-[var(--line)] px-4 md:px-6 py-3 flex items-center gap-4 sticky top-0 bg-[var(--petrol)]/95 backdrop-blur z-30">
      <div>
        <div className="font-bold tracking-tight text-lg">RADAR<span className="amber">HUB</span></div>
        <div className="mono text-[9px] text-[var(--mute)] -mt-0.5 flex items-center gap-2">
          <span>{T("PLATEFORME COURTIER · QUÉBEC","REALTOR PLATFORM · QUÉBEC")} · tenant: danny</span>
          {feats && <button onClick={()=>setView("plans")}
            className="px-1.5 py-0.5 rounded border border-[var(--amber)]/50 amber uppercase tracking-wider hover:bg-[var(--amber)]/10"
            title={T("Forfait actif — cliquer pour voir tous les forfaits","Active plan — click to see all plans")}>
            {T("forfait","plan")} {feats.tier}</button>}
        </div>
      </div>
      <nav className="flex gap-1 ml-auto items-center">
        {[["radar","📡 Radar"],["contacts",T("👥 Contacts","👥 Contacts")],["agents","🤖 Agents"],
          ["analytics",T("📈 Analytique","📈 Analytics")],["plans",T("⭐ Forfaits","⭐ Plans")]].map(([k,l])=>(
          <button key={k} onClick={()=>setView(k)}
            className={"mono text-[11px] px-3 py-1.5 rounded-lg border transition-colors "
              +(view===k?"border-[var(--amber)] amber bg-[var(--amber)]/10":"border-transparent text-[var(--mute)] hover:text-[var(--ink)]")}>{l}</button>))}
        <a href="/" title={T("Tableau d'engagement — clients Centris seulement","Engagement dashboard — Centris clients only")}
          className="mono text-[11px] px-3 py-1.5 rounded-lg border border-transparent text-[var(--mute)] hover:text-[var(--ink)]">{T("📊 Engagement ↗","📊 Engagement ↗")}</a>
        <button onClick={flipLang} title={T("Passer en anglais","Switch to French")}
          className="mono text-[11px] px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--amber)]">
          🌐 {lang==="fr"?"FR":"EN"}</button>
        {on("notifications") && <NotifBell/>}
      </nav>
    </header>
    <main className="p-4 md:p-6 max-w-6xl mx-auto">
      {view==="radar" && <RadarView toast={toast} on={on} feats={feats}/>}
      {view==="contacts" && <ContactsView toast={toast} on={on} feats={feats}/>}
      {view==="agents" && <AgentsView toast={toast}/>}
      {view==="analytics" && <AnalyticsView toast={toast} on={on} feats={feats}/>}
      {view==="plans" && <PlansView feats={feats}/>}
    </main>
    <Toast msg={toastMsg} err={toastErr}/>
  </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
</script>
<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");</script>
</body>
</html>"""
