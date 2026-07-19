/* Ops-specific UI helpers. Re-exports shared kit + provides local
 * variants tuned to the dark-petrol operator surface. */
import React from "react";
import { SourceChip as SharedSourceChip, ScoreRing, Chip, Toast, Stepper as SharedStepper } from "../../_shared/ui.jsx";
export { Chip, Toast };

/* ---- SourceChip: local variant preserving the legacy amber/sky/… map
   (the shared one is fine but ops uses six specific tones on dark). --- */
const SOURCE_META = {
  matrix_visit:      { label: "MATRIX",       cls: "bg-amber-400/15 text-amber-300 border-amber-400/60" },
  fub_import:        { label: "CRM FUB",      cls: "bg-sky-400/15 text-sky-300 border-sky-400/60" },
  danny_channel:     { label: "RÉFÉRENCE",    cls: "bg-emerald-400/15 text-emerald-300 border-emerald-400/60" },
  own_generated:     { label: "SITE WEB",     cls: "bg-violet-400/15 text-violet-300 border-violet-400/60" },
  prospecting_agent: { label: "PROSPECTION",  cls: "bg-slate-400/15 text-slate-300 border-slate-400/60" },
  seller_intel:      { label: "VENDEUR",      cls: "bg-rose-400/15 text-rose-300 border-rose-400/60" },
};
export function SourceChip({ source, sublabel }) {
  const m = SOURCE_META[source] || { label: source, cls: "bg-slate-500/15 text-slate-300 border-slate-500/60" };
  return (
    <span
      data-testid={`source-chip-${source || "unknown"}`}
      className={"mono text-[10px] px-2 py-0.5 rounded border " + m.cls}
    >
      {m.label}
      {sublabel ? <span className="opacity-70"> · {sublabel}</span> : null}
    </span>
  );
}

/* ---- Ring: circular score readout with amber/green/muted tone ---- */
export function Ring({ score = 0, size = 54 }) {
  const r = (size / 2) - 5;
  const c = 2 * Math.PI * r;
  const off = c * (1 - score / 100);
  const col = score >= 70 ? "var(--ok)" : score >= 40 ? "var(--warn)" : "#5b7d87";
  return (
    <svg width={size} height={size} className="shrink-0" data-testid="ring">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#123542" strokeWidth="5" fill="none" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={col} strokeWidth="5" fill="none"
        strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset .5s" }}
      />
      <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
        className="mono" fill="var(--ink)" fontSize={size * 0.28} fontWeight="600">
        {score}
      </text>
    </svg>
  );
}

/* ---- PriorityBar: 0-100 bar with 3-tier colour ------------------- */
export function PriorityBar({ score = 0 }) {
  const col = score >= 75 ? "var(--warn)" : score >= 50 ? "var(--amber)" : "#3f6b78";
  return (
    <div className="w-full h-1.5 rounded bg-[#123542] overflow-hidden" data-testid="priority-bar">
      <div style={{ width: score + "%", background: col, height: "100%", transition: "width .4s" }} />
    </div>
  );
}

/* ---- Stepper: legacy amber-dot variant ---------------------------- */
export function Stepper({ order, labels, current }) {
  const idx = order.indexOf(current);
  return (
    <div className="flex items-center gap-0 overflow-x-auto py-2" data-testid="stepper">
      {order.map((s, i) => (
        <div key={s} className="flex items-center shrink-0">
          <div className="flex flex-col items-center w-[86px]">
            <div className={"w-3.5 h-3.5 rounded-full border-2 " +
              (i < idx ? "bg-[var(--amber)] border-[var(--amber)]"
                : i === idx ? "bg-[var(--amber)] border-[var(--amber)] shadow-[0_0_10px_rgba(245,166,35,.7)]"
                  : "bg-transparent border-[#2a5a6a]")}
            />
            <div className={"mono text-[9px] mt-1.5 text-center leading-tight " +
              (i <= idx ? "text-[var(--ink)]" : "text-[var(--mute)]")}>
              {labels[s] || s}
            </div>
          </div>
          {i < order.length - 1 && (
            <div className={"h-[2px] w-6 -mx-6 mb-4 " +
              (i < idx ? "bg-[var(--amber)]" : "bg-[#2a5a6a]")} />
          )}
        </div>
      ))}
    </div>
  );
}

/* Re-export shared components for consumers that want the new theme. */
export { SharedSourceChip, ScoreRing, SharedStepper };

export const ORIGIN_ICON = { vitrine: "🛰", matrix: "📡", fub: "🔁", hub: "⚙", agent: "🤖" };
