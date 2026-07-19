/* ============================================================
   Radar Platform — shared UI kit (Phase 1)
   Pure React 18, no framework dependencies beyond `react`.
   Consumed by /apps/dashboard, /apps/ops and /apps/vitrine.

   Every component reads colours from CSS variables in tokens.css
   so the same component looks native in light + dark themes.
   ============================================================ */
import React, { useEffect, useRef } from "react";

/* ---------- ScoreRing ------------------------------------------- */
/* A circular progress meter with the numeric score in the middle. */
export function ScoreRing({
  score = 0,
  size = 72,
  stroke = 6,
  band,                    // "hot" | "warm" | "cool" — overrides auto
  showLabel = true,
  labelSuffix = "",
  "data-testid": testId,
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const auto = score >= 65 ? "hot" : score >= 40 ? "warm" : "cool";
  const which = band || auto;
  const color = `var(--score-${which})`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      data-testid={testId || "score-ring"}
      role="img"
      aria-label={`Score ${score}`}
    >
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="var(--line)" strokeWidth={stroke}
      />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${(c * score) / 100} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dasharray var(--dur-3) var(--ease-out)" }}
      />
      {showLabel && (
        <text
          x="50%" y="52%"
          dominantBaseline="middle" textAnchor="middle"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: size * 0.3,
            fill: "var(--ink)",
          }}
          className="rp-tabular"
        >
          {score}{labelSuffix}
        </text>
      )}
    </svg>
  );
}

/* ---------- Trend ------------------------------------------------ */
/* Tri-state week-over-week delta — up (ok), down (danger), flat.
   Uses inline SVG carets so no lucide-react dependency here. */
export function Trend({ value = 0, unit = "wk", size = 12, "data-testid": testId }) {
  const s = size;
  if (value > 0) {
    return (
      <span
        data-testid={testId || "trend-up"}
        className="rp-tabular"
        style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          color: "var(--ok)", fontSize: "var(--fs-eyebrow)",
        }}
      >
        <svg width={s} height={s} viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 8 L6 4 L10 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        +{value} {unit}
      </span>
    );
  }
  if (value < 0) {
    return (
      <span
        data-testid={testId || "trend-down"}
        className="rp-tabular"
        style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          color: "var(--danger)", fontSize: "var(--fs-eyebrow)",
        }}
      >
        <svg width={s} height={s} viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 4 L6 8 L10 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {value} {unit}
      </span>
    );
  }
  return (
    <span
      data-testid={testId || "trend-flat"}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        color: "var(--faint)", fontSize: "var(--fs-eyebrow)",
      }}
    >
      <svg width={s} height={s} viewBox="0 0 12 12" aria-hidden="true">
        <path d="M2 6 L10 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      flat
    </span>
  );
}

/* ---------- Chip ------------------------------------------------- */
/* Rounded status pill with tone variants. */
const CHIP_TONES = {
  neutral: { bg: "var(--paper-2)", fg: "var(--sub)", bd: "var(--line)" },
  ink:     { bg: "var(--brand-soft)", fg: "var(--brand)", bd: "var(--brand)" },
  accent:  { bg: "var(--accent-soft)", fg: "var(--accent)", bd: "var(--accent)" },
  ok:      { bg: "var(--spruce-soft)", fg: "var(--ok)", bd: "var(--ok)" },
  warn:    { bg: "var(--accent-soft)", fg: "var(--warn)", bd: "var(--warn)" },
  danger:  { bg: "var(--danger-soft)", fg: "var(--danger)", bd: "var(--danger)" },
};

export function Chip({
  tone = "neutral",
  size = "sm",
  children,
  className = "",
  "data-testid": testId,
  ...rest
}) {
  const t = CHIP_TONES[tone] || CHIP_TONES.neutral;
  const pad = size === "xs" ? "1px 6px" : size === "md" ? "4px 10px" : "2px 8px";
  const fs = size === "xs" ? "var(--fs-eyebrow)" : "var(--fs-caption)";
  return (
    <span
      data-testid={testId}
      className={"rp-tabular " + className}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        borderRadius: "var(--radius-pill)",
        padding: pad,
        fontSize: fs,
        fontWeight: 500,
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

/* ---------- SourceChip ------------------------------------------- */
/* Every lead/contact has a first-touch funnel. This chip renders it
   with a consistent tone across all four dashboards. */
const SOURCE_META = {
  matrix_visit:      { label: "MATRIX",      tone: "warn"   },
  fub_import:        { label: "CRM FUB",     tone: "ink"    },
  danny_channel:     { label: "REFERRAL",    tone: "ok"     },
  own_generated:     { label: "WEBSITE",     tone: "accent" },
  prospecting_agent: { label: "PROSPECT",    tone: "neutral"},
  seller_intel:      { label: "SELLER",      tone: "danger" },
  open_house:        { label: "OPEN HOUSE",  tone: "accent" },
};

export function SourceChip({ source, sublabel, "data-testid": testId }) {
  const m = SOURCE_META[source] || { label: (source || "").toUpperCase(), tone: "neutral" };
  return (
    <Chip
      tone={m.tone}
      size="xs"
      data-testid={testId || `source-chip-${source || "unknown"}`}
      style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
    >
      {m.label}
      {sublabel && <span style={{ opacity: 0.7 }}> · {sublabel}</span>}
    </Chip>
  );
}

/* ---------- Toast ------------------------------------------------ */
/* Bottom-center toast, respects prefers-reduced-motion via tokens. */
export function Toast({ msg, err = false, "data-testid": testId }) {
  if (!msg) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      data-testid={testId || "toast"}
      className="rp-fadein"
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        padding: "10px 16px",
        borderRadius: "var(--radius-md)",
        border: "1px solid",
        borderColor: err ? "var(--danger)" : "var(--line)",
        background: err ? "var(--danger-soft)" : "var(--paper-2)",
        color: err ? "var(--danger)" : "var(--ink)",
        boxShadow: "var(--shadow-2)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        maxWidth: "90vw",
      }}
    >
      {msg}
    </div>
  );
}

/* ---------- Stepper ---------------------------------------------- */
/* Horizontal pipeline stepper. Supply an ordered list of stages
   and the current stage index. */
export function Stepper({
  stages,
  currentIndex = 0,
  compact = false,
  "data-testid": testId,
}) {
  const total = stages.length;
  const pct = total > 1 ? (currentIndex / (total - 1)) * 100 : 0;
  const dot = compact ? 9 : 11;
  return (
    <div
      data-testid={testId || "stepper"}
      style={{ overflowX: "auto", paddingBottom: 2 }}
    >
      <div style={{ position: "relative", minWidth: 380, paddingTop: 4 }}>
        <div
          style={{
            position: "absolute", top: dot / 2 + 2, left: 8, right: 8,
            height: 1, background: "var(--line)",
          }}
        />
        <div
          style={{
            position: "absolute", top: dot / 2 + 2, left: 8,
            width: `calc(${pct}% - 8px)`,
            maxWidth: "calc(100% - 16px)",
            height: 1, background: "var(--ink)",
            transition: "width var(--dur-3) var(--ease-out)",
          }}
        />
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
          {stages.map((label, i) => {
            const isCurrent = i === currentIndex;
            const isPast = i < currentIndex;
            return (
              <div
                key={i}
                data-testid={`stepper-stage-${i}`}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  width: compact ? 54 : 62,
                }}
              >
                <div
                  style={{
                    width: dot, height: dot, borderRadius: "50%",
                    background: isPast || isCurrent ? "var(--ink)" : "var(--paper-2)",
                    border: `2px solid ${isPast || isCurrent ? "var(--ink)" : "var(--line-2)"}`,
                    boxShadow: isCurrent ? "0 0 0 4px rgba(15,27,45,0.10)" : "none",
                  }}
                />
                <span
                  style={{
                    marginTop: 6,
                    fontSize: 10, lineHeight: 1.15,
                    color: isCurrent ? "var(--ink)" : "var(--faint)",
                    fontWeight: isCurrent ? 600 : 400,
                    textAlign: "center",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Drawer ----------------------------------------------- */
/* Right-anchored slide-over. Locks scroll, closes on Esc + backdrop. */
export function Drawer({
  open,
  onClose,
  children,
  width = 480,
  ariaLabel = "Drawer",
  "data-testid": testId,
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      data-testid={testId || "drawer"}
      style={{
        position: "fixed", inset: 0, zIndex: 60,
        display: "flex", justifyContent: "flex-end",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        data-testid="drawer-backdrop"
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(15, 27, 45, 0.32)",
          animation: "rp-fadein var(--dur-2) var(--ease-out) both",
        }}
      />
      <div
        className="rp-fadein"
        style={{
          position: "relative",
          width: "100%", maxWidth: width,
          height: "100%",
          background: "var(--paper-2)",
          borderLeft: "1px solid var(--line)",
          boxShadow: "var(--shadow-3)",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Ring (compact status pip) ---------------------------- */
/* Colored dot + optional label. For "synced", "live", "offline", etc. */
export function StatusPip({
  tone = "ok",
  label,
  pulse = false,
  "data-testid": testId,
}) {
  const map = { ok: "var(--ok)", warn: "var(--warn)", danger: "var(--danger)", mute: "var(--mute)" };
  return (
    <span
      data-testid={testId || "status-pip"}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "var(--fs-eyebrow)", color: "var(--mute)" }}
    >
      <span
        style={{
          width: 7, height: 7, borderRadius: "50%",
          background: map[tone] || map.ok,
          boxShadow: pulse ? `0 0 0 0 ${map[tone] || map.ok}` : "none",
          animation: pulse ? "rp-pulse 2s infinite" : "none",
        }}
      />
      {label}
      <style>{`@keyframes rp-pulse{
        0%{box-shadow:0 0 0 0 rgba(4,120,87,.5)}
        70%{box-shadow:0 0 0 6px rgba(4,120,87,0)}
        100%{box-shadow:0 0 0 0 rgba(4,120,87,0)}
      }`}</style>
    </span>
  );
}

/* ---------- Button ----------------------------------------------- */
/* Primary/secondary/ghost variants. Kept intentionally minimal —
   consumers can still style-override via className. */
export function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  children,
  className = "",
  "data-testid": testId,
  ...rest
}) {
  const pad = size === "sm" ? "6px 12px" : size === "lg" ? "12px 20px" : "9px 14px";
  const fs = size === "sm" ? "var(--fs-caption)" : "var(--fs-body-s)";
  const styles = {
    primary: {
      background: "var(--ink)", color: "var(--paper-2)",
      border: "1px solid var(--ink)",
    },
    accent: {
      background: "var(--brand)", color: "var(--paper)",
      border: "1px solid var(--brand)",
    },
    secondary: {
      background: "var(--paper-2)", color: "var(--ink)",
      border: "1px solid var(--line-2)",
    },
    ghost: {
      background: "transparent", color: "var(--sub)",
      border: "1px solid transparent",
    },
    danger: {
      background: "var(--danger-soft)", color: "var(--danger)",
      border: "1px solid var(--danger)",
    },
  }[variant] || {};
  return (
    <Tag
      data-testid={testId}
      className={className}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
        padding: pad,
        fontSize: fs,
        fontWeight: 600,
        fontFamily: "inherit",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        transition: "background var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out)",
        ...styles,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Modal (replacement for window.prompt/confirm) -------- */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 460,
  "data-testid": testId,
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      data-testid={testId || "modal"}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
      style={{
        position: "fixed", inset: 0, zIndex: 70,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(15, 27, 45, 0.42)",
          animation: "rp-fadein var(--dur-2) var(--ease-out) both",
        }}
      />
      <div
        className="rp-fadein"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: width,
          background: "var(--paper-2)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-3)",
          overflow: "hidden",
        }}
      >
        {title && (
          <div style={{
            padding: "14px 18px",
            borderBottom: "1px solid var(--line)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--fs-h4)",
            color: "var(--ink)",
          }}>
            {title}
          </div>
        )}
        <div style={{ padding: 18 }}>{children}</div>
        {footer && (
          <div style={{
            padding: "12px 18px",
            borderTop: "1px solid var(--line)",
            display: "flex", justifyContent: "flex-end", gap: 8,
            background: "var(--paper)",
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
