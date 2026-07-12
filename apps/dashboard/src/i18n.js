/* FR⇄EN toggle shared by the dashboard entry and the prototype component.
 * Same localStorage key ("radar_lang") as the ops console, open-house and
 * tracker pages, so the language follows the realtor across every page.
 * The flip reloads the page: the adapter in main.jsx bakes timeline strings
 * (EVENT_TXT, "ago", chips) at fetch time, so a reload is what guarantees
 * every string — not just the ones read during render — switches language.
 */
export const LANG =
  (typeof localStorage !== "undefined" && localStorage.getItem("radar_lang")) || "fr";

export const T = (en, fr) => (LANG === "fr" ? fr : en);

export const flipLang = () => {
  localStorage.setItem("radar_lang", LANG === "fr" ? "en" : "fr");
  window.location.reload();
};
