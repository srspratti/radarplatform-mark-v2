"""ÉDITION INTERNE SEULEMENT — voir README.md de ce dossier avant tout.

Rejoue les clics manuels « résultats → tout sélectionner → PDF » sur le
compte du courtier, PUIS pousse le PDF vers le hub (ingest-pdf). Garde-fous :

  • connexion JAMAIS automatisée — profil navigateur persistant, VOUS vous
    connectez à la main quand la session expire (aucun mot de passe stocké)
  • dry-run par défaut — rien n'est envoyé sans --apply
  • cadence humaine — pauses aléatoires entre chaque action
  • sélecteurs PLACEHOLDER_… à remplir contre le DOM réel de votre tableau

Deux façons de désigner la page à exporter :

  --results-url URL   une page précise (le mode d'origine)
  --from-queue        enchaîne la file des liens de portail que le hub a
                      retenus des auto-courriels — même file que
                      portal_link_watcher.py, avec le client déjà associé
                      (donc --contact-id inutile). Marque chaque tâche.

Usage:
  # grille → crée les inscriptions du client
  python matrix_results_harvester.py --hub http://localhost:8000 \
      --key $RADAR_API_KEY --contact-id 3 --format grid \
      --results-url "https://matrix.centris.ca/Matrix/…"          # dry-run
  # détaillé, en enchaînant la file — le mode « sans intervention »
  python matrix_results_harvester.py --hub http://localhost:8000 \
      --key $RADAR_API_KEY --format detailed --from-queue --apply
  … toujours vérifier une sortie en dry-run avant d'ajouter --apply.

Tourne en headless par défaut : tant que le profil garde une session Matrix
valide, aucune fenêtre ne s'ouvre (cron possible). Dès que Matrix vous
déconnecte, le script rouvre une fenêtre et attend VOTRE connexion — c'est
le seul moment humain, et il reste volontairement humain.

Runs headless by default: while the stored profile holds a valid Matrix
session no window opens (cron-friendly). The moment Matrix logs you out it
reopens a window and waits for YOU to sign in — the only human moment left,
and deliberately kept that way.

L'export détaillé est le chemin d'enrichissement en attendant le DDF®/
Source.immo : mêmes données que la fiche que vous imprimez à la main, depuis
VOTRE session, sans tiers. / The detailed export is the enrichment path while
waiting for DDF®/Source.immo: the same sheet you print by hand, from YOUR
session, no third party involved.
"""
from __future__ import annotations

import argparse
import base64
import random
import sys
import time
from pathlib import Path

PROFILE_DIR = Path.home() / ".radar-matrix-profile"
DOWNLOADS = Path.home() / ".radar-matrix-downloads"

# ---- selectors to fill against the live DOM (DevTools → Copy selector) ----
SEL_SELECT_ALL = "PLACEHOLDER_checkbox_select_all"        # grid header checkbox
SEL_PRINT_TAB = "PLACEHOLDER_actions_print_button"        # Actions → Print
SEL_FORMAT_LIST = "PLACEHOLDER_print_format_listbox"      # e.g. my:Partial
SEL_PRINT_TO_PDF = "PLACEHOLDER_print_to_pdf_button"      # « Print to PDF »

# Deux formats d'export, deux usages / two export formats, two jobs:
#   grid     → crée les inscriptions (nº, adresse, prix) — la grille de résultats
#   detailed → ENRICHIT (année, taxes, pièces, remarques, photos) et se route
#              elle-même par nº Centris côté hub (contact_id facultatif)
# Les libellés doivent correspondre EXACTEMENT à ceux du menu d'impression de
# votre chambre / labels must match your board's print menu exactly.
FORMAT_LABELS = {
    "grid": "my:Partial",
    "detailed": "Client Detailed with Photo Album",
}


class SessionExpired(RuntimeError):
    """Matrix asked for a login while we were running unattended."""


def human_pause(lo: float = 1.2, hi: float = 3.5) -> None:
    time.sleep(random.uniform(lo, hi))


def _export(results_url: str, format_label: str, headless: bool) -> Path:
    """One export pass. Headless runs never attempt (nor prompt for) a login:
    they raise SessionExpired so the caller can reopen a real window."""
    from playwright.sync_api import sync_playwright
    DOWNLOADS.mkdir(exist_ok=True)
    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            str(PROFILE_DIR), headless=headless, accept_downloads=True)
        try:
            page = ctx.pages[0] if ctx.pages else ctx.new_page()
            page.goto(results_url)
            if any(k in page.url.lower() for k in ("login", "signin", "logon")):
                if headless:
                    raise SessionExpired(
                        "Matrix demande une connexion — session expirée")
                print("→ Connectez-vous à Matrix dans la fenêtre ouverte, puis "
                      "appuyez sur Entrée ici…")
                input()
                page.goto(results_url)
            human_pause()
            page.click(SEL_SELECT_ALL)
            human_pause()
            page.click(SEL_PRINT_TAB)
            human_pause()
            page.select_option(SEL_FORMAT_LIST, label=format_label)
            human_pause()
            with page.expect_download() as dl:
                page.click(SEL_PRINT_TO_PDF)
            path = DOWNLOADS / f"matrix-results-{int(time.time())}.pdf"
            dl.value.save_as(str(path))
            return path
        finally:
            ctx.close()


def harvest(results_url: str, format_label: str, headed: bool = False) -> Path:
    """Headless first; on an expired session reopen a visible window once and
    let the human sign in. The login itself is never automated."""
    if headed:
        return _export(results_url, format_label, headless=False)
    try:
        return _export(results_url, format_label, headless=True)
    except SessionExpired:
        print("⚠ Session Matrix expirée — ouverture d'une fenêtre pour votre "
              "connexion (une seule fois; le profil la retiendra ensuite).")
        return _export(results_url, format_label, headless=False)


def push(hub: str, key: str, contact_id: int, pdf: Path, apply: bool) -> dict:
    payload = {"contact_id": contact_id,
               "content_b64": base64.b64encode(pdf.read_bytes()).decode(),
               "filename": pdf.name}
    if not apply:
        who = (f"contact_id={contact_id}" if contact_id
               else "routage par nº Centris (tous les clients concernés)")
        print(f"[dry-run] {pdf} ({pdf.stat().st_size} o) → "
              f"POST {hub}/api/connectors/matrix/ingest-pdf "
              f"({who}). Relancer avec --apply pour envoyer.")
        return {}
    import httpx
    r = httpx.post(f"{hub}/api/connectors/matrix/ingest-pdf", json=payload,
                   headers={"X-Radar-Key": key}, timeout=60)
    print(r.status_code, r.text[:400])
    try:
        return r.json() if r.status_code == 200 else {}
    except ValueError:
        return {}


def run_queue(args) -> None:
    """Work the hub's portal-link queue: each task carries the URL AND the
    client it belongs to, so nothing has to be supplied by hand."""
    import httpx
    api = httpx.Client(base_url=args.hub.rstrip("/") + "/api",
                       headers={"X-Radar-Key": args.key}, timeout=30)
    queue = api.get("/connectors/matrix/link-queue").json()
    if not queue:
        print("File vide — aucun lien de portail en attente.")
        return
    todo = queue[:args.limit]
    print(f"{len(queue)} lien(s) en file, traitement de {len(todo)} "
          f"en --format {args.format} "
          f"({'APPLY' if args.apply else 'DRY-RUN'})\n")
    for task in todo:
        print(f"→ [{task['id']}] {task['client']}: {task['url'][:80]}…")
        try:
            pdf = harvest(task["url"], FORMAT_LABELS[args.format], args.headed)
        except Exception as exc:  # noqa: BLE001 — one bad page ≠ dead run
            print(f"  ✗ {exc}")
            if args.apply:
                api.post(f"/connectors/matrix/link-queue/{task['id']}",
                         json={"status": "failed", "note": str(exc)[:280]})
            human_pause()
            continue
        # grid needs the owning client; detailed routes itself by Centris no.
        cid = task["contact_id"] if args.format == "grid" else 0
        out = push(args.hub, args.key, cid, pdf, args.apply)
        if args.apply:
            note = (f"{out.get('listings_new', 0)} nouvelles"
                    if args.format == "grid"
                    else f"{len(out.get('enriched', []))} enrichies")
            api.post(f"/connectors/matrix/link-queue/{task['id']}",
                     json={"status": "done", "note": note[:280]})
        human_pause()
    if not args.apply:
        print("\nDry-run terminé — relancer avec --apply pour envoyer au hub.")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--hub", required=True)
    ap.add_argument("--key", default="")
    ap.add_argument("--contact-id", type=int, default=0,
                    help="client visé; requis en --format grid avec "
                         "--results-url (en --from-queue il vient de la file)")
    ap.add_argument("--format", choices=sorted(FORMAT_LABELS), default="grid",
                    help="grid = crée les inscriptions · detailed = enrichit "
                         "(année, taxes, pièces, remarques, photos)")
    ap.add_argument("--results-url",
                    help="URL des résultats (votre session). Omettre avec "
                         "--from-queue.")
    ap.add_argument("--from-queue", action="store_true",
                    help="enchaîner la file des liens de portail du hub")
    ap.add_argument("--limit", type=int, default=3,
                    help="tâches max par exécution en --from-queue (défaut 3)")
    ap.add_argument("--pdf", help="sauter le navigateur: pousser ce PDF-ci")
    ap.add_argument("--headed", action="store_true",
                    help="forcer une fenêtre visible (défaut: headless, "
                         "fenêtre seulement si la session a expiré)")
    ap.add_argument("--apply", action="store_true",
                    help="envoyer réellement (défaut: dry-run)")
    args = ap.parse_args()

    if args.pdf:
        push(args.hub, args.key, args.contact_id, Path(args.pdf), args.apply)
        return
    if not args.from_queue and not args.results_url:
        sys.exit("Indiquer --results-url, --from-queue, ou --pdf.")
    if args.from_queue and not args.key:
        sys.exit("--key requis avec --from-queue (lecture de la file du hub).")
    if "PLACEHOLDER" in SEL_SELECT_ALL:
        sys.exit("Sélecteurs PLACEHOLDER_… non remplis — voir README. "
                 "(Ou fournir --pdf pour pousser un PDF déjà exporté.)")
    if args.from_queue:
        run_queue(args)
        return
    if args.format == "grid" and not args.contact_id:
        sys.exit("--contact-id requis avec --format grid : une grille de "
                 "résultats ne dit pas à quel client elle appartient. "
                 "(--format detailed se route seul par nº Centris.)")
    pdf = harvest(args.results_url, FORMAT_LABELS[args.format], args.headed)
    push(args.hub, args.key, args.contact_id, pdf, args.apply)


if __name__ == "__main__":
    main()
