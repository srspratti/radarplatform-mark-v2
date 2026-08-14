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
RX_PAGER = re.compile(r"(\d+)\s+of\s+(\d+)")
RX_MONEY = re.compile(r"\$\s*([\d,][\d,.]*)")
RX_AREA = re.compile(r"([\d,]+(?:\.\d+)?)\s*sq\s?ft", re.I)
RX_ADDR = re.compile(r"^\d[\w\-]*\s+\S.*,\s*\S")

# Summary-view labels (OneHome/portal, English templates; add French labels
# here if your board serves the portal in French).
SUM_FIELDS = {
    "Year Built": ("year", "int"),
    "Living Area": ("living_sqft", "area"),
    "Lot Area": ("lot_sqft", "area"),
    "Lot Size": ("lot_sqft", "area"),
    "Building Size": ("building_sqft", "area"),
    "Mun. Taxes": ("taxes_mun", "money"),
    "Municipal Taxes": ("taxes_mun", "money"),
    "School Taxes": ("taxes_school", "money"),
    "Style": ("style", "str"),
    "Building Type": ("building_type", "str"),
    "Property Use": ("property_use", "str"),
    "Occupancy": ("occupancy", "str"),
    "Zoning": ("zoning", "str"),
    "Bedrooms": ("beds", "int"),
    "Bathrooms": ("baths", "int"),
}
# Labels that end a value — a label followed by another label has NO value
# (the portal collapses empty cells).
STOP_LABELS = set(SUM_FIELDS) | {
    "Condominium Type", "Deed of Sale Signature", "Lot Eval.",
    "Building Eval.", "Cert. of Location", "Type of Business", "Features",
    "Notes", "Communities", "Occupancy", "Sewage System", "Water Supply",
    "Foundation", "Annual sales", "Add Note",
}


def _conv(kind: str, raw: str):
    if kind == "str":
        return raw.strip()[:120]
    if kind == "money":
        m = RX_MONEY.search(raw)
        return int(m.group(1).replace(",", "").split(".")[0]) if m else None
    if kind == "area":
        m = RX_AREA.search(raw)
        return round(float(m.group(1).replace(",", ""))) if m else None
    m = re.search(r"\d[\d,]*", raw)
    return int(m.group(0).replace(",", "")) if m else None


def parse_summary_text(text: str) -> dict | None:
    """One property's Summary view → structured facts. Label/value pairs
    arrive as consecutive lines; a label followed by another label carries
    no value. Absent facts stay absent — never guessed."""
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    fields: dict = {}
    for i, ln in enumerate(lines[:-1]):
        if ln in SUM_FIELDS and lines[i + 1] not in STOP_LABELS:
            key, kind = SUM_FIELDS[ln]
            v = _conv(kind, lines[i + 1])
            if v not in (None, ""):
                fields.setdefault(key, v)
    item: dict = {"fields": fields}
    m = RX_LABELED.search(text)
    if m:
        item["centris_no"] = m.group(1)
    for ln in lines[:40]:
        if "address" not in item and RX_ADDR.match(ln):
            item["address"] = ln[:290]
        # a bare sale price line — /sqft rents and eval lines don't qualify
        if "price" not in item and re.fullmatch(r"\$[\d,]+", ln):
            item["price"] = int(ln.replace("$", "").replace(",", ""))
    for src, dst in (("beds", "beds"), ("baths", "baths")):
        if src in fields:
            item[dst] = fields.pop(src)
    return item if (fields or "centris_no" in item) else None


def click_next(pg) -> bool:
    """The Summary pager's next arrow, by accessibility first."""
    for build in (
        lambda: pg.locator("[aria-label*='ext']"),          # Next / next
        lambda: pg.get_by_role("button", name=re.compile(r"^(next|›|>)$", re.I)),
        lambda: pg.locator("button:right-of(:text('of'))"),
    ):
        try:
            loc = build()
            if loc.count():
                loc.first.click(timeout=2500)
                return True
        except Exception:  # noqa: BLE001 — heuristic chain
            continue
    return False


def harvest_details(pg, max_items: int = 40) -> tuple[list[dict], str]:
    """Iterate the Summary view (« 1 of N ») and parse each property.
    Returns (items, note). Empty items + note = the view wasn't there."""
    first = pg.inner_text("body")
    m = RX_PAGER.search(first)
    if not m:
        return [], ("pager « N of M » introuvable — ouvrir le lien une fois "
                    "et choisir ⋯ → « Portal list and Summary »")
    total = min(int(m.group(2)), max_items)
    items: list[dict] = []
    for i in range(total):
        item = parse_summary_text(pg.inner_text("body"))
        if item:
            items.append(item)
        if i < total - 1:
            if not click_next(pg):
                return items, f"flèche « suivant » introuvable après {i + 1}"
            time.sleep(random.uniform(0.8, 1.6))
    return items, ""


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


def scan_page(url: str, headless: bool,
              details: bool) -> tuple[str, list[dict], str]:
    """Open the emailed portal link in Chromium, let it settle, scroll to
    force lazy rows to render, and return (visible text, detail items,
    detail note). No login is ever attempted: a login/signin redirect raises
    RuntimeError instead."""
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
        items, note = harvest_details(page) if details else ([], "")
        browser.close()
        return text, items, note


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--hub", required=True, help="ex. http://localhost:8000")
    ap.add_argument("--key", required=True, help="RADAR_API_KEY")
    ap.add_argument("--limit", type=int, default=5,
                    help="pages max par exécution (défaut 5)")
    ap.add_argument("--apply", action="store_true",
                    help="envoyer au hub + marquer la file (défaut: dry-run)")
    ap.add_argument("--details", action="store_true",
                    help="parcourir aussi la vue Sommaire (« 1 of N ») et "
                         "enrichir chaque fiche — année, taxes, superficies, "
                         "style — sans PDF ni session Matrix")
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
            text, items, dnote = scan_page(task["url"],
                                           headless=not args.headed,
                                           details=args.details)
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
        if args.details:
            # summary pages sometimes omit the number — pair by position when
            # the counts line up, and say so
            if items and len(items) == len(numbers):
                for i, it in enumerate(items):
                    if not it.get("centris_no"):
                        it["centris_no"] = numbers[i]
                        it["fields"]["no_by_order"] = "1"
            print(f"  ▤ {len(items)} fiche(s) sommaires"
                  + (f" — {dnote}" if dnote else ""))
            for it in items[:4]:
                facts = ", ".join(f"{k}={v}" for k, v in
                                  list(it.get("fields", {}).items())[:5])
                print(f"    · {it.get('centris_no', '????????')} "
                      f"{(it.get('address') or '')[:34]} "
                      f"{('$' + format(it['price'], ',')) if it.get('price') else ''} "
                      f"| {facts}")
            if len(items) > 4:
                print(f"    … et {len(items) - 4} autres")
        if args.apply:
            r = api.post("/connectors/matrix/ingest-numbers",
                         json={"contact_id": task["contact_id"],
                               "numbers": numbers,
                               "source": "portal_link_watcher"}).json()
            note = (f"{r.get('listings_new', 0)} nouvelles, "
                    f"{r.get('listings_dup', 0)} dédup.")
            if args.details and items:
                rd = api.post("/connectors/matrix/ingest-details",
                              json={"contact_id": task["contact_id"],
                                    "items": items,
                                    "source": "portal_watch"}).json()
                note += f" · {len(rd.get('enriched', []))} enrichies"
                print(f"    hub: {len(rd.get('enriched', []))} enrichie(s), "
                      f"{len(rd.get('unmatched', []))} sans correspondance")
            api.post(f"/connectors/matrix/link-queue/{task['id']}",
                     json={"status": "done", "note": note[:280]})
            print(f"    hub: +{r.get('listings_new', 0)} inscriptions "
                  f"({r.get('listings_dup', 0)} déjà connues)")
        human_pause()
    if not args.apply:
        print("\nDry-run terminé — relancer avec --apply pour envoyer au hub.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
