"""ÉDITION INTERNE SEULEMENT — voir README.md de ce dossier avant tout.
INTERNAL EDITION ONLY — read this folder's README.md first.

Relève les panneaux « Recent Portal Visitors » (et le fil News) du tableau
de bord Matrix DU COURTIER et renvoie les visites au hub
(`POST /api/connectors/matrix/portal-visits`) : chaque nom apparié à un
contact devient un événement d'engagement (portal.session_started, une fois
par jour) + une ligne de nouvelles « <date> — <contact> a visité le
portail ».

Reads the broker's own Matrix dashboard panels ("Recent Portal Visitors")
and posts the visits to the hub: each name matched to a contact becomes an
engagement event (once per day) plus a news row.

Garde-fous / guardrails:
  • connexion JAMAIS automatisée — profil navigateur persistant (partagé avec
    le harvester), VOUS vous connectez à la main quand la session expire
  • dry-run par défaut — rien n'est envoyé sans --apply
  • cadence humaine; à lancer 1-3×/jour, pas plus

Usage:
  python matrix_dashboard_watcher.py --hub http://localhost:8000 \
      --key $RADAR_API_KEY \
      --url "https://matrix.centris.ca/Matrix/Default.aspx"     # dry-run
  … vérifier la sortie (elle imprime la section brute), puis --apply.
"""
from __future__ import annotations

import argparse
import os
import re
import sys
import time
from datetime import date
from pathlib import Path

import httpx

PROFILE_DIR = Path.home() / ".radar-matrix-profile"
CHROMIUM_PATH = os.getenv("RADAR_CHROMIUM_PATH", "")

# Panel headings that bound the visitors section on the Matrix home page
PANELS = {"News", "My Listings", "My Carts", "Recent Portal Visitors",
          "Recent Use Contacts", "My Stats", "My Favorite Searches",
          "Help", "Search", "My Matrix", "Statistics"}

RX_ISO = re.compile(r"\b(\d{4})-(\d{2})-(\d{2})\b")
RX_US = re.compile(r"\b(\d{1,2})/(\d{1,2})/(\d{4})\b")
RX_MON = re.compile(r"\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
                    r"[a-z]*\.?\s+(\d{1,2})\b", re.I)
MONTHS = {m: i + 1 for i, m in enumerate(
    ["jan", "feb", "mar", "apr", "may", "jun",
     "jul", "aug", "sep", "oct", "nov", "dec"])}
# a plausible person name: 2+ capitalized words, no digits
RX_NAME = re.compile(r"^[A-ZÀ-Ž][\w'’\-À-ž]+(?:\s+[A-ZÀ-Ž][\w'’\-À-ž]+)+$")


def _date_in(line: str) -> str | None:
    if m := RX_ISO.search(line):
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    if m := RX_US.search(line):
        return f"{m.group(3)}-{int(m.group(1)):02d}-{int(m.group(2)):02d}"
    if m := RX_MON.search(line):
        mon = MONTHS[m.group(1).lower()[:3]]
        return f"{date.today().year}-{mon:02d}-{int(m.group(2)):02d}"
    return None


def section_lines(text: str, head: str = "Recent Portal Visitors") -> list[str]:
    """The panel's lines, from its heading to the next known panel heading."""
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    if head not in lines:
        return []
    j = lines.index(head) + 1
    out: list[str] = []
    while j < len(lines) and lines[j] not in (PANELS - {head}):
        out.append(lines[j])
        j += 1
    return out[:60]


def parse_visits(lines: list[str]) -> list[dict]:
    """Tolerant name/date pairing: a date on the same line as a name, or on
    the line after it. Names without any date default to today (the panel is
    'recent'). Counts, labels and buttons are dropped by the name shape."""
    visits: list[dict] = []
    pending: str | None = None
    for ln in lines:
        d = _date_in(ln)
        bare = ln
        if d:
            bare = RX_ISO.sub("", RX_US.sub("", RX_MON.sub("", ln))).strip(" -·|,")
        if RX_NAME.match(bare):
            if pending:
                visits.append({"name": pending,
                               "date": date.today().isoformat()})
            if d:
                visits.append({"name": bare, "date": d})
                pending = None
            else:
                pending = bare
        elif d and pending:
            visits.append({"name": pending, "date": d})
            pending = None
    if pending:
        visits.append({"name": pending, "date": date.today().isoformat()})
    # dedupe (name, date)
    seen: set[tuple] = set()
    out = []
    for v in visits:
        k = (v["name"].lower(), v["date"])
        if k not in seen:
            seen.add(k)
            out.append(v)
    return out[:50]


def read_dashboard(url: str, headed: bool) -> str:
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        kw = {"headless": not headed}
        if CHROMIUM_PATH:
            kw["executable_path"] = CHROMIUM_PATH
        if hasattr(os, "geteuid") and os.geteuid() == 0:
            kw["args"] = ["--no-sandbox"]
        ctx = p.chromium.launch_persistent_context(
            str(PROFILE_DIR), viewport={"width": 1920, "height": 1080}, **kw)
        try:
            page = ctx.pages[0] if ctx.pages else ctx.new_page()
            page.goto(url, wait_until="domcontentloaded", timeout=45_000)
            if any(k in page.url.lower() for k in ("login", "signin", "logon")):
                if not headed:
                    raise RuntimeError(
                        "session Matrix expirée — relancer avec --headed et "
                        "connectez-vous vous-même (jamais automatisé)")
                print("→ Connectez-vous à Matrix dans la fenêtre, puis "
                      "appuyez sur Entrée ici…")
                input()
                page.goto(url, wait_until="domcontentloaded", timeout=45_000)
            page.wait_for_load_state("networkidle", timeout=45_000)
            time.sleep(1.5)
            return page.inner_text("body")
        finally:
            ctx.close()


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--hub", required=True)
    ap.add_argument("--key", required=True)
    ap.add_argument("--url", required=True,
                    help="page d'accueil Matrix du courtier (votre session)")
    ap.add_argument("--headed", action="store_true",
                    help="fenêtre visible — requis à la première connexion")
    ap.add_argument("--apply", action="store_true",
                    help="envoyer au hub (défaut: dry-run)")
    args = ap.parse_args()
    text = read_dashboard(args.url, headed=args.headed)
    lines = section_lines(text)
    if not lines:
        print("Panneau « Recent Portal Visitors » introuvable sur la page — "
              "est-ce bien la page d'accueil Matrix ?")
        return 1
    print("— Section brute —")
    for ln in lines[:25]:
        print("  ·", ln)
    visits = parse_visits(lines)
    print(f"\n{len(visits)} visite(s) reconnue(s):")
    for v in visits:
        print(f"  ✓ {v['date']}  {v['name']}")
    if not args.apply:
        print("\nDry-run — relancer avec --apply pour envoyer au hub.")
        return 0
    r = httpx.post(f"{args.hub.rstrip('/')}/api/connectors/matrix/portal-visits",
                   headers={"X-Radar-Key": args.key},
                   json={"visits": visits}, timeout=30)
    out = r.json()
    print(f"\nhub: {len(out.get('matched', []))} apparié(s), "
          f"{out.get('events_new', 0)} nouvel(s) événement(s), "
          f"non appariés: {out.get('unmatched', [])}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
