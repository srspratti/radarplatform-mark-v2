"""ÉDITION INTERNE SEULEMENT — voir README.md de ce dossier avant tout.
INTERNAL EDITION ONLY — read this folder's README.md first.

Complète l'ingestion des courriels « lien seulement » : le hub met en file le
lien du portail (« View All Listings ») de chaque auto-courriel sans
inscriptions; ce script ouvre ce lien (session anonyme — le lien courriel
s'ouvre sans connexion), relève les numéros Centris de la page rendue, et les
renvoie au hub (`ingest-numbers`), où le flux DDF® licencié ou un PDF
détaillé fournit la substance.

Completes link-only email ingestion: the hub queues each empty auto-email's
portal link; this script opens it (anonymous session — the emailed link
renders without login), lifts the Centris numbers from the rendered page and
posts them back to the hub, where the licensed DDF® feed or a detailed PDF
supplies the substance.

Garde-fous / guardrails:
  • dry-run par défaut — rien n'est envoyé ni marqué sans --apply
  • cadence humaine — pauses aléatoires entre chaque page
  • aucun identifiant : le script n'automatise JAMAIS une connexion; si la
    page demande une session, la tâche est marquée « failed », pas forcée
  • --limit borne chaque exécution (défaut 5 pages)

Usage:
  pip install playwright httpx && playwright install chromium
  python portal_link_watcher.py --hub http://localhost:8000 \
      --key $RADAR_API_KEY                    # dry-run: liste ce qu'il ferait
  … puis relancer avec --apply une fois la sortie vérifiée.
"""
from __future__ import annotations

import argparse
import os
import random
import re
import sys
import time

import httpx

# Some Playwright installs ship only the full Chromium (no headless shell),
# and Chromium refuses its sandbox when running as root (containers). Both
# are environment quirks rather than script problems, so allow an explicit
# binary and drop the sandbox only where it cannot work anyway.
CHROMIUM_PATH = os.getenv("RADAR_CHROMIUM_PATH", "")


def _launch(pw, headless: bool):
    kw = {"headless": headless}
    if CHROMIUM_PATH:
        kw["executable_path"] = CHROMIUM_PATH
    if hasattr(os, "geteuid") and os.geteuid() == 0:
        kw["args"] = ["--no-sandbox"]
    return pw.chromium.launch(**kw)

RX_LABELED = re.compile(r"(?:Centris|MLS)[^\d\n]{0,12}(\d{7,8})", re.I)
RX_BARE = re.compile(r"(?<!\d)(\d{8})(?!\d)")


def human_pause(lo: float = 2.0, hi: float = 6.0) -> None:
    time.sleep(random.uniform(lo, hi))


def extract_numbers(text: str) -> list[str]:
    """Labeled « Centris No. : NNNNNNNN » occurrences first; bare 8-digit
    tokens only as a fallback when nothing is labeled (same policy as the
    hub's PDF parser)."""
    seen: dict[str, None] = {}
    for m in RX_LABELED.finditer(text):
        seen.setdefault(m.group(1))
    if not seen:
        for m in RX_BARE.finditer(text):
            seen.setdefault(m.group(1))
    return list(seen)


def render_page_text(url: str, headless: bool) -> str:
    """Open the emailed portal link in Chromium, let it settle, scroll to
    force lazy rows to render, return the visible text. No login is ever
    attempted: a login/signin redirect raises RuntimeError instead."""
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = _launch(p, headless)
        page = browser.new_page()
        page.goto(url, wait_until="domcontentloaded", timeout=45_000)
        if any(k in page.url.lower() for k in ("login", "signin", "logon")):
            browser.close()
            raise RuntimeError("page demande une connexion — jamais automatisée")
        page.wait_for_load_state("networkidle", timeout=45_000)
        human_pause(1.0, 2.5)
        for _ in range(8):                       # lazy-loaded result rows
            page.mouse.wheel(0, 2400)
            time.sleep(random.uniform(0.4, 0.9))
        text = page.inner_text("body")
        browser.close()
        return text


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--hub", required=True, help="ex. http://localhost:8000")
    ap.add_argument("--key", required=True, help="RADAR_API_KEY")
    ap.add_argument("--limit", type=int, default=5,
                    help="pages max par exécution (défaut 5)")
    ap.add_argument("--apply", action="store_true",
                    help="envoyer au hub + marquer la file (défaut: dry-run)")
    ap.add_argument("--headed", action="store_true",
                    help="fenêtre visible (défaut: headless)")
    args = ap.parse_args()
    api = httpx.Client(base_url=args.hub.rstrip("/") + "/api",
                       headers={"X-Radar-Key": args.key}, timeout=30)

    queue = api.get("/connectors/matrix/link-queue").json()
    if not queue:
        print("File vide — aucun lien de portail en attente.")
        return 0
    todo = queue[:args.limit]
    print(f"{len(queue)} lien(s) en file, traitement de {len(todo)} "
          f"({'APPLY' if args.apply else 'DRY-RUN'})\n")

    for task in todo:
        print(f"→ [{task['id']}] {task['client']}: {task['url'][:90]}…")
        try:
            text = render_page_text(task["url"], headless=not args.headed)
            numbers = extract_numbers(text)
        except Exception as exc:  # noqa: BLE001 — one bad page ≠ dead run
            print(f"  ✗ {exc}")
            if args.apply:
                api.post(f"/connectors/matrix/link-queue/{task['id']}",
                         json={"status": "failed", "note": str(exc)[:280]})
            human_pause()
            continue
        if not numbers:
            print("  ∅ aucun numéro Centris sur la page (session expirée?)")
            if args.apply:
                api.post(f"/connectors/matrix/link-queue/{task['id']}",
                         json={"status": "failed",
                               "note": "aucun numéro sur la page rendue"})
            human_pause()
            continue
        print(f"  ✓ {len(numbers)} numéro(s): {', '.join(numbers[:10])}"
              f"{'…' if len(numbers) > 10 else ''}")
        if args.apply:
            r = api.post("/connectors/matrix/ingest-numbers",
                         json={"contact_id": task["contact_id"],
                               "numbers": numbers,
                               "source": "portal_link_watcher"}).json()
            api.post(f"/connectors/matrix/link-queue/{task['id']}",
                     json={"status": "done",
                           "note": f"{r.get('listings_new', 0)} nouvelles, "
                                   f"{r.get('listings_dup', 0)} dédup."})
            print(f"    hub: +{r.get('listings_new', 0)} inscriptions "
                  f"({r.get('listings_dup', 0)} déjà connues)")
        human_pause()
    if not args.apply:
        print("\nDry-run terminé — relancer avec --apply pour envoyer au hub.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
