/* Ops API client. Adds tenant + optional X-Radar-Key header.
 * When RADAR_API_KEY is set server-side, every /api call 401s until the
 * realtor supplies the key. It lives in sessionStorage (never in the URL).
 * Legacy behaviour used window.prompt — kept for parity but exposed through
 * a callback so Phase 2 can swap in a proper modal.
 */
import { T } from "./i18n.js";

let TENANT = "danny";
let APIKEY = typeof sessionStorage !== "undefined"
  ? (sessionStorage.getItem("radar_key") || "") : "";

/* Consumer sets this before calling the API — the default matches the
 * legacy behaviour until Phase 2 hooks it into a modal. */
let promptForKey = () =>
  window.prompt(T(
    "Console protégée — entrer la clé API Radar (X-Radar-Key) :",
    "Protected console — enter the Radar API key (X-Radar-Key):",
  ));

export function setKeyPrompter(fn) { promptForKey = fn; }
export function getTenant() { return TENANT; }
export function setTenant(t) { TENANT = t; }

export async function api(path, opts = {}) {
  const r = await fetch("/api" + path, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-Id": TENANT,
      ...(APIKEY ? { "X-Radar-Key": APIKEY } : {}),
      ...(opts.headers || {}),
    },
  });
  if (r.status === 401 && !opts.__retried) {
    const k = await promptForKey();
    if (k) {
      APIKEY = String(k).trim();
      sessionStorage.setItem("radar_key", APIKEY);
      return api(path, { ...opts, __retried: true });
    }
  }
  if (!r.ok) {
    const d = await r.json().catch(() => ({ detail: r.statusText }));
    throw new Error(d.detail || r.statusText);
  }
  return r.json();
}

/* Raw fetch (no JSON parse) for endpoints that return blobs / SVG. */
export async function apiRaw(path, opts = {}) {
  const r = await fetch("/api" + path, {
    ...opts,
    headers: {
      "X-Tenant-Id": TENANT,
      ...(APIKEY ? { "X-Radar-Key": APIKEY } : {}),
      ...(opts.headers || {}),
    },
  });
  if (!r.ok) throw new Error(r.statusText);
  return r;
}
