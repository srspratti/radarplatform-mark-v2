"""ÉDITION INTERNE SEULEMENT — voir README.md de ce dossier avant tout.

Rejoue les clics manuels « résultats → tout sélectionner → PDF » sur le
compte du courtier, PUIS pousse le PDF vers le hub (ingest-pdf). Garde-fous :

  • connexion JAMAIS automatisée — profil navigateur persistant, VOUS vous
    connectez à la main au premier lancement (aucun mot de passe stocké)
  • dry-run par défaut — rien n'est envoyé sans --apply
  • cadence humaine — pauses aléatoires entre chaque action
  • sélecteurs PLACEHOLDER_… à remplir contre le DOM réel de votre tableau

Usage:
  python matrix_results_harvester.py --hub http://localhost:8000 \
      --key $RADAR_API_KEY --contact-id 3 \
      --results-url "https://matrix.centris.ca/Matrix/…"          # dry-run
  … puis relancer avec --apply une fois la sortie vérifiée.
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
PRINT_FORMAT_LABEL = "my:Partial"                         # detailed grid format


def human_pause(lo: float = 1.2, hi: float = 3.5) -> None:
    time.sleep(random.uniform(lo, hi))


def harvest(results_url: str) -> Path:
    from playwright.sync_api import sync_playwright
    DOWNLOADS.mkdir(exist_ok=True)
    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            str(PROFILE_DIR), headless=False, accept_downloads=True)
        page = ctx.pages[0] if ctx.pages else ctx.new_page()
        page.goto(results_url)
        if "login" in page.url.lower() or "signin" in page.url.lower():
            print("→ Connectez-vous à Matrix dans la fenêtre ouverte, puis "
                  "appuyez sur Entrée ici…")
            input()
            page.goto(results_url)
        human_pause()
        page.click(SEL_SELECT_ALL)
        human_pause()
        page.click(SEL_PRINT_TAB)
        human_pause()
        page.select_option(SEL_FORMAT_LIST, label=PRINT_FORMAT_LABEL)
        human_pause()
        with page.expect_download() as dl:
            page.click(SEL_PRINT_TO_PDF)
        path = DOWNLOADS / f"matrix-results-{int(time.time())}.pdf"
        dl.value.save_as(str(path))
        ctx.close()
    return path


def push(hub: str, key: str, contact_id: int, pdf: Path, apply: bool) -> None:
    payload = {"contact_id": contact_id,
               "content_b64": base64.b64encode(pdf.read_bytes()).decode(),
               "filename": pdf.name}
    if not apply:
        print(f"[dry-run] {pdf} ({pdf.stat().st_size} o) → "
              f"POST {hub}/api/connectors/matrix/ingest-pdf "
              f"(contact_id={contact_id}). Relancer avec --apply pour envoyer.")
        return
    import httpx
    r = httpx.post(f"{hub}/api/connectors/matrix/ingest-pdf", json=payload,
                   headers={"X-Radar-Key": key}, timeout=60)
    print(r.status_code, r.text[:400])


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--hub", required=True)
    ap.add_argument("--key", default="")
    ap.add_argument("--contact-id", type=int, required=True)
    ap.add_argument("--results-url", required=True,
                    help="URL des résultats de l'auto-courriel (votre session)")
    ap.add_argument("--pdf", help="sauter le navigateur: pousser ce PDF-ci")
    ap.add_argument("--apply", action="store_true",
                    help="envoyer réellement (défaut: dry-run)")
    args = ap.parse_args()
    if "PLACEHOLDER" in SEL_SELECT_ALL and not args.pdf:
        sys.exit("Sélecteurs PLACEHOLDER_… non remplis — voir README. "
                 "(Ou fournir --pdf pour pousser un PDF déjà exporté.)")
    pdf = Path(args.pdf) if args.pdf else harvest(args.results_url)
    push(args.hub, args.key, args.contact_id, pdf, args.apply)


if __name__ == "__main__":
    main()
