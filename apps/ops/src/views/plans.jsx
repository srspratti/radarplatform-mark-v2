import React from "react";
import { T, fLabel, fPitch } from "../i18n.js";

export function LockedCard({ k, feats }) {
  const f = feats && feats.features && feats.features[k];
  if (!f) return null;
  return (
    <div className="panel p-4 opacity-60" style={{ borderStyle: "dashed" }} data-testid={`locked-${k}`}>
      <div className="mono text-[11px] text-[var(--mute)] mb-1 flex items-center gap-2">
        <span>🔒 {fLabel(k, f)}</span>
        <span className="px-1.5 py-0.5 rounded border border-[var(--line)] uppercase text-[9px]">
          {T("forfait", "plan")} {f.tier}
        </span>
      </div>
      <div className="text-sm text-[var(--mute)]">{fPitch(k, f)}</div>
      <div className="mono text-[10px] mt-2 amber">
        {T("Débloquée au forfait ", "Unlocked in the ")}{f.tier}{T(" — détails dans ⭐ Forfaits", " plan — details in ⭐ Plans")}
      </div>
    </div>
  );
}

export function PlansView({ feats }) {
  if (!feats) return <div className="mono text-sm text-[var(--mute)] p-8" data-testid="plans-loading">…</div>;
  const TIERS_L = ["basic", "premium", "gold", "platinum"];
  const curIdx = TIERS_L.indexOf(feats.tier);
  return (
    <div className="fadein" data-testid="plans-view">
      <div className="mono text-[10px] text-[var(--mute)] mb-4">
        {T("▮ FORFAITS — forfait actif : ", "▮ PLANS — active plan: ")}
        <span className="amber uppercase">{feats.tier}</span>
        {T(" · se change dans features.toml (tier = \"…\") ou via RADAR_TIER au déploiement",
           " · switch in features.toml (tier = \"…\") or via RADAR_TIER at deploy time")}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {TIERS_L.map((tier, i) => {
          const fs = Object.entries(feats.features).filter(([k, f]) => f.tier === tier);
          const included = i <= curIdx;
          return (
            <div key={tier}
              data-testid={`plan-${tier}`}
              className={"panel p-4 " + (tier === feats.tier ? "border-[var(--amber)] scanline" : included ? "" : "opacity-70")}>
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold text-lg capitalize">{tier === "basic" ? T("Essentiel", "Basic") : tier}</div>
                {tier === feats.tier && (
                  <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--amber)]/90 text-black font-bold uppercase">
                    {T("actif", "active")}
                  </span>
                )}
              </div>
              <div className="mono text-[9px] text-[var(--mute)] mb-3">
                {i > 0 ? T("tout le forfait précédent, plus :", "everything below, plus:") : T("les essentiels du quotidien", "the daily essentials")}
              </div>
              <div className="space-y-2.5">
                {fs.map(([k, f]) => (
                  <div key={k}>
                    <div className={"text-[13px] font-medium " + (f.enabled ? "" : "text-[var(--mute)]")}>
                      {f.enabled ? "✓ " : "🔒 "}{fLabel(k, f)}
                    </div>
                    <div className="text-[11px] text-[var(--mute)] leading-snug">{fPitch(k, f)}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mono text-[10px] text-[var(--mute)] mt-4">
        {T("Essai d'une fonctionnalité hors forfait : l'activer individuellement sous [overrides] dans features.toml.",
           "Trialing a feature outside the plan: enable it individually under [overrides] in features.toml.")}
      </div>
    </div>
  );
}
