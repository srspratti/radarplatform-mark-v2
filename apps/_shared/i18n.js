/* Shared FR⇄EN toggle. All four Radar frontends read the same
 * `radar_lang` localStorage key — the language follows the realtor.
 *
 * Usage:
 *   import { T, LANG, flipLang } from "@shared/i18n";
 *   T("Bonjour", "Hello")
 *
 * NOTE: LANG is captured once at module eval time (matching the
 * legacy dashboard behaviour). flipLang() reloads the page — the
 * data adapters bake translated strings at fetch time.
 */
export const LANG =
  (typeof localStorage !== "undefined" && localStorage.getItem("radar_lang")) || "fr";

export const T = (fr, en) => (LANG === "fr" ? fr : (en !== undefined ? en : fr));

export const flipLang = () => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem("radar_lang", LANG === "fr" ? "en" : "fr");
  window.location.reload();
};
