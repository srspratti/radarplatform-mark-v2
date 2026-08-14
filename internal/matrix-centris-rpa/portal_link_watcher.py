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
# "Bungalow built in 1989" — the subtitle carries style + year
RX_BUILT = re.compile(r"^([A-Za-z][\w\s\-'’]*?)\s+built in\s+"
                      r"((?:18|19|20)\d{2})", re.I)
# room rows: "28.2 X 14.1 ft" (the metric twin says "m" and is skipped)
RX_DIMS = re.compile(r"^([\d.]+)\s*[Xx]\s*([\d.]+)\s*ft\b")
RX_PLUS = re.compile(r"^(\d+)\s*\+\s*(\d+)$")           # "1+2" bed counts

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
    "Heating System": ("heating", "str"),
    "Water (access)": ("water_access", "str"),
    "Fireplace-Stove": ("fireplace", "str"),
    "Parking (total)": ("parking", "str"),
    "Pool": ("pool", "str"),
    "Body of Water": ("water_body", "str"),
    "Property/Unit Amenity": ("amenities", "str"),
}
# Labels that end a value — a label followed by another label has NO value
# (the portal collapses empty cells).
STOP_LABELS = set(SUM_FIELDS) | {
    "Condominium Type", "Deed of Sale Signature", "Lot Eval.",
    "Building Eval.", "Cert. of Location", "Type of Business", "Features",
    "Notes", "Communities", "Occupancy", "Sewage System", "Water Supply",
    "Foundation", "Annual sales", "Add Note", "Expected Delivery Date",
    "Additional Rev.", "Intergenerational", "Seasonal",
    "Restrictions/Permissions", "Pets", "Renovations", "Rooms", "Level",
    "Room", "Imperial", "Metric", "Floor Covering", "Dimens.", "Inclusions",
    "Exclusions", "Remarks", "Addendum", "Financial Functions",
}
# Section headings that terminate a free-text block
SECTION_STOPS = {"Inclusions", "Exclusions", "Remarks", "Addendum", "Source",
                 "Financial Functions", "Notes", "Add Note", "Rooms",
                 "Disclaimer"}
RX_DATE_SENT = re.compile(r"Date Sent\s*:?\s*(\d{4}-\d{2}-\d{2})")
RX_COUNTER = re.compile(r"(\d+)\s*/\s*(\d+)")        # photo viewer « 1/44 »
RX_MEDIA_ID = re.compile(r"[?&]id=([A-Fa-f0-9]+)")


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
    rooms: list[dict] = []
    for i, ln in enumerate(lines[:-1]):
        if ln in SUM_FIELDS and lines[i + 1] not in STOP_LABELS:
            key, kind = SUM_FIELDS[ln]
            v = _conv(kind, lines[i + 1])
            if v not in (None, ""):
                fields.setdefault(key, v)
        # subtitle: "Bungalow built in 1989" → style + year
        if m := RX_BUILT.match(ln):
            fields.setdefault("style",
                              m.group(1).split(" in the ")[0].strip())
            fields.setdefault("year", int(m.group(2)))
        # "No. of Bedrooms (above ground + basement)" → "1+2";
        # "No. of Bathrooms and Powder Rooms" → "2+1"
        if ln.startswith("No. of Bedrooms"):
            if m := RX_PLUS.match(lines[i + 1]):
                fields["beds"] = int(m.group(1)) + int(m.group(2))
            elif lines[i + 1].isdigit():
                fields["beds"] = int(lines[i + 1])
        if ln.startswith("No. of Bathrooms"):
            if m := RX_PLUS.match(lines[i + 1]):
                fields["baths"], fields["powder"] = (int(m.group(1)),
                                                     int(m.group(2)))
            elif lines[i + 1].isdigit():
                fields["baths"] = int(lines[i + 1])
        # rooms table: name line, then "28.2 X 14.1 ft" (metric twin skipped)
        if (m := RX_DIMS.match(ln)) and i and lines[i - 1] not in STOP_LABELS \
                and not RX_DIMS.match(lines[i - 1]) and len(rooms) < 20:
            rooms.append({"name": lines[i - 1][:60],
                          "w_ft": float(m.group(1)),
                          "d_ft": float(m.group(2))})
    if rooms:
        fields["rooms"] = rooms
    # Free-text sections (each runs until the next section heading)
    for head, key, cap in (("Remarks", "remarks", 1400),
                           ("Inclusions", "inclusions", 700),
                           ("Exclusions", "exclusions", 700),
                           ("Addendum", "addendum", 2000)):
        if head in lines:
            j = lines.index(head) + 1
            buf: list[str] = []
            while j < len(lines) and lines[j] not in SECTION_STOPS:
                buf.append(lines[j])
                j += 1
            if buf:
                fields[key] = " ".join(buf)[:cap]
    # Sheet footer: listing agency + Date Sent
    if "Source" in lines:
        k = lines.index("Source")
        if k + 1 < len(lines) and lines[k + 1] not in SECTION_STOPS:
            fields["agency"] = lines[k + 1][:160]
    if m := RX_DATE_SENT.search(text):
        fields["date_sent"] = m.group(1)
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


def _viewer_photos(gallery, cap: int) -> list[str]:
    """Inside the Centris photoViewer tab: read the « 1/44 » counter, then
    capture the MAIN image and click the next arrow, repeating. Thumbnails
    lazy-load with empty src, so paging the viewer is the reliable path.
    Dedupe by media id (?id=…), stop when the counter wraps or cap is hit."""
    import base64
    out: list[str] = []
    seen: set[str] = set()
    total = cap
    m = RX_COUNTER.search(gallery.inner_text("body"))
    if m:
        total = min(int(m.group(2)), cap)
    for _ in range(total * 2):          # safety bound
        try:
            src = gallery.evaluate(
                """() => { let best = null, area = 0;
                     for (const i of document.images) {
                       const a = (i.naturalWidth||0) * (i.naturalHeight||0);
                       if (i.src && a > area) { area = a; best = i.src; } }
                     return best; }""")
        except Exception:  # noqa: BLE001
            src = None
        if src:
            mid = RX_MEDIA_ID.search(src)
            key = mid.group(1) if mid else src
            if key not in seen:
                seen.add(key)
                try:
                    r = gallery.request.get(src)
                    body = r.body()
                    if (r.status == 200 and len(body) > 9000
                            and body[:2] == b"\xff\xd8"):
                        out.append(base64.b64encode(body).decode())
                except Exception:  # noqa: BLE001
                    pass
        if len(out) >= total:
            break
        try:                             # advance: arrow div, else keyboard
            gallery.locator(".activateNextArrow").first.click(timeout=1200)
        except Exception:  # noqa: BLE001
            try:
                gallery.keyboard.press("ArrowRight")
            except Exception:  # noqa: BLE001
                break
        time.sleep(random.uniform(0.35, 0.6))
    return out


def grab_photos(pg, cap: int = 12) -> list[str]:
    """Open « See all pictures (N) » — a NEW TAB on this board — page through
    the viewer collecting every photo, close it. Falls back to the images on
    the summary page itself. Photos are a bonus: any trouble returns an empty
    list, never a failed task."""
    import base64
    gallery = None
    try:
        link = pg.get_by_text(re.compile(r"See all pictures", re.I)).first
        if link.count():
            try:
                with pg.expect_popup(timeout=3500) as pop:
                    link.click(timeout=2500)
                gallery = pop.value
                gallery.wait_for_load_state("domcontentloaded", timeout=15_000)
                time.sleep(random.uniform(1.0, 1.6))
            except Exception:  # noqa: BLE001 — same-page modal instead
                gallery = None
                time.sleep(random.uniform(0.8, 1.2))
    except Exception:  # noqa: BLE001
        pass
    if gallery is not None:
        try:
            out = _viewer_photos(gallery, cap)
        finally:
            try:
                gallery.close()
            except Exception:  # noqa: BLE001
                pass
        return out
    # fallback: whatever the summary page itself shows
    try:
        srcs = pg.evaluate("Array.from(document.images).map(i => i.src)")
    except Exception:  # noqa: BLE001
        srcs = []
    urls = list(dict.fromkeys(
        s for s in srcs
        if s.startswith("http") and re.search(r"centris|media|photo", s, re.I)))
    out: list[str] = []
    for u in urls[:cap * 3]:
        try:
            r = pg.request.get(u)
            body = r.body()
            if r.status == 200 and len(body) > 9000 and body[:2] == b"\xff\xd8":
                out.append(base64.b64encode(body).decode())
        except Exception:  # noqa: BLE001
            continue
        if len(out) >= cap:
            break
    try:
        pg.keyboard.press("Escape")
        time.sleep(0.6)
    except Exception:  # noqa: BLE001
        pass
    return out


def click_next(pg) -> bool:
    """The Summary pager's next arrow, by accessibility first."""
    for build in (
        lambda: pg.locator(
            "ul.pager a.glyphicon-chevron-right"),          # mtx-pager (live)
        lambda: pg.locator(".mtx-pager .glyphicon-chevron-right"),
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


def _wait_pager(pg, timeout_s: float = 15) -> bool:
    """Poll for the « 1 of N » pager. __doPostBack navigations reload the
    whole page, and wait_for_load_state can return before the navigation
    even starts — so wait for the CONTENT, tolerating the transient
    execution-context errors a reload throws."""
    deadline = time.time() + timeout_s
    while time.time() < deadline:
        try:
            if RX_PAGER.search(pg.inner_text("body")):
                return True
        except Exception:  # noqa: BLE001 — context destroyed mid-reload
            pass
        time.sleep(0.5)
    return False


def ensure_summary_view(pg, menu_sel: str = "") -> bool:
    """The link opens in the gallery; the details live in the Summary view
    behind the ⋯ « More Views » menu. Open it, click Summary (a __doPostBack
    full reload), then wait for the « 1 of N » pager to actually appear."""
    if _wait_pager(pg, 2):
        return True
    triggers = ([menu_sel] if menu_sel else []) + [
        "#_ctl0_m_lbViewList",              # « More Views » (DOM relevé live)
        'a[title="More Views"]',
        '[aria-label*="more" i]', '[title*="more" i]',
        '[aria-label*="view" i]', "text=•••", "text=..."]
    for trigger in triggers:
        try:
            pg.locator(trigger).first.click(timeout=1500)
            time.sleep(0.8)
        except Exception:  # noqa: BLE001
            continue
        try:
            try:
                pg.get_by_text(re.compile(r"^\s*Summary\s*$", re.I)).first \
                  .click(timeout=2500)
            except Exception:  # noqa: BLE001 — anchor fallback
                pg.locator('a:has-text("Summary")').first.click(timeout=2500)
        except Exception:  # noqa: BLE001 — menu did not open; next trigger
            continue
        if _wait_pager(pg):
            return True
    # last resort: a directly clickable Summary link outside the menu
    try:
        pg.locator('a:has-text("Summary")').first.click(timeout=2000)
        if _wait_pager(pg):
            return True
    except Exception:  # noqa: BLE001
        pass
    return False


def harvest_details(pg, max_items: int = 40, photos: bool = False,
                    menu_sel: str = "",
                    photo_cap: int = 12) -> tuple[list[dict], str]:
    """Switch to the Summary view, iterate « 1 of N », parse each property.
    Returns (items, note). Empty items + note = the view wasn't reachable."""
    if not ensure_summary_view(pg, menu_sel):
        return [], ("vue Sommaire inatteignable (menu ⋯ → « Summary ») — "
                    "ouvrir le lien une fois à la main et choisir Summary, "
                    "ou me donner le sélecteur du menu ⋯")
    time.sleep(1.2)                    # let the first sheet finish rendering
    m = RX_PAGER.search(pg.inner_text("body"))
    total = min(int(m.group(2)), max_items)
    items: list[dict] = []
    for i in range(total):
        for _ in range(3):             # bottom sections (Remarks, Addendum,
            pg.keyboard.press("End")   # Source) render below the fold
            time.sleep(0.35)
        item = parse_summary_text(pg.inner_text("body"))
        if not item:                   # sheet still rendering? one retry
            time.sleep(1.2)
            item = parse_summary_text(pg.inner_text("body"))
        if item:
            if photos:
                pics = grab_photos(pg, cap=photo_cap)
                if pics:
                    item["photos_b64"] = pics
            items.append(item)
        if i < total - 1:
            pg.keyboard.press("Home")  # the pager lives at the top
            time.sleep(0.4)
            if not click_next(pg):
                return items, f"flèche « suivant » introuvable après {i + 1}"
            # chaque flèche = postback ASP.NET (rechargement complet) :
            # attendre que le compteur du pager avance réellement
            deadline = time.time() + 15
            while time.time() < deadline:
                try:
                    m2 = RX_PAGER.search(pg.inner_text("body"))
                    if m2 and int(m2.group(1)) >= i + 2:
                        break
                except Exception:  # noqa: BLE001 — contexte détruit en vol
                    pass
                time.sleep(0.5)
            time.sleep(random.uniform(0.6, 1.2))
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


def scan_page(url: str, headless: bool, details: bool,
              photos: bool = False, menu_sel: str = "",
              photo_cap: int = 12) -> tuple[str, list[dict], str]:
    """Open the emailed portal link in Chromium, let it settle, scroll to
    force lazy rows to render, and return (visible text, detail items,
    detail note). No login is ever attempted: a login/signin redirect raises
    RuntimeError instead."""
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = _launch(p, headless)
        # Desktop viewport, deliberately: the portal is responsive and hides
        # the view menu (⋯) AND the « 1 of N » pager at narrow widths —
        # Playwright's 1280×720 default put both out of reach.
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(url, wait_until="domcontentloaded", timeout=45_000)
        if any(k in page.url.lower() for k in ("login", "signin", "logon")):
            browser.close()
            raise RuntimeError("page demande une connexion — jamais automatisée")
        page.wait_for_load_state("networkidle", timeout=45_000)
        human_pause(1.0, 2.5)
        prev_len = 0                             # lazy-loaded result rows:
        for _ in range(25):                      # scroll until text stabilizes
            page.mouse.wheel(0, 2400)
            try:
                page.keyboard.press("End")       # some containers only react
                page.keyboard.press("PageDown")  # to key scrolling
                page.evaluate(
                    "window.scrollTo(0, document.body.scrollHeight)")
            except Exception:  # noqa: BLE001
                pass
            time.sleep(random.uniform(0.4, 0.9))
            cur = len(page.inner_text("body"))
            if cur == prev_len:
                break
            prev_len = cur
        text = page.inner_text("body")
        items, note = (harvest_details(page, photos=photos,
                               menu_sel=menu_sel, photo_cap=photo_cap)
                       if details else ([], ""))
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
    ap.add_argument("--photos", action="store_true",
                    help="avec --details : ouvrir « See all pictures » et "
                         "rapatrier jusqu'à 12 photos par inscription")
    ap.add_argument("--menu-sel", default="",
                    help="sélecteur exact du déclencheur du menu ⋯ "
                         "(DevTools → Copy selector) si l'heuristique "
                         "ne le trouve pas")
    ap.add_argument("--photo-cap", type=int, default=12,
                    help="photos max par inscription (défaut 12; le hub "
                         "accepte jusqu'à 40)")
    ap.add_argument("--url",
                    help="tester UN lien de portail directement, sans passer "
                         "par la file (exige --contact-id pour --apply)")
    ap.add_argument("--contact-id", type=int, default=0,
                    help="client visé en mode --url")
    ap.add_argument("--headed", action="store_true",
                    help="fenêtre visible (défaut: headless)")
    args = ap.parse_args()
    api = httpx.Client(base_url=args.hub.rstrip("/") + "/api",
                       headers={"X-Radar-Key": args.key}, timeout=30)

    if args.url:
        if args.apply and not args.contact_id:
            print("--contact-id requis avec --url --apply "
                  "(ingest-numbers doit savoir à quel client attribuer).")
            return 2
        todo = [{"id": None, "contact_id": args.contact_id,
                 "client": f"contact {args.contact_id or '?'} (mode --url)",
                 "url": args.url}]
        print(f"Mode --url ({'APPLY' if args.apply else 'DRY-RUN'})\n")
    else:
        queue = api.get("/connectors/matrix/link-queue").json()
        if not queue:
            print("File vide — aucun lien de portail en attente. "
                  "(Marquer le courriel non-lu → poll, ou tester avec --url.)")
            return 0
        todo = queue[:args.limit]
        print(f"{len(queue)} lien(s) en file, traitement de {len(todo)} "
              f"({'APPLY' if args.apply else 'DRY-RUN'})\n")

    for task in todo:
        print(f"→ [{task['id']}] {task['client']}: {task['url'][:90]}…")
        try:
            text, items, dnote = scan_page(task["url"],
                                           headless=not args.headed,
                                           details=args.details,
                                           photos=args.photos,
                                           menu_sel=args.menu_sel,
                                           photo_cap=args.photo_cap)
            numbers = extract_numbers(text)
            for it in items:       # sheets carry their own numbers — union
                no = it.get("centris_no")
                if no and no not in numbers:
                    numbers.append(no)
        except Exception as exc:  # noqa: BLE001 — one bad page ≠ dead run
            print(f"  ✗ {exc}")
            if args.apply and task["id"] is not None:
                api.post(f"/connectors/matrix/link-queue/{task['id']}",
                         json={"status": "failed", "note": str(exc)[:280]})
            human_pause()
            continue
        if not numbers:
            print("  ∅ aucun numéro Centris sur la page (session expirée?)")
            if args.apply and task["id"] is not None:
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
            if task["id"] is not None:
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
