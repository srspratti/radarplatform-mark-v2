"""Matrix results-PDF ingestion — the ToS-safe answer to link-only boards.

Some Matrix boards send auto-emails that contain only a "View All Listings"
portal link — no listing data in the body, so email parsing yields nothing.
Matrix, however, lets the REALTOR open those results and export them:
select All → Print (my:Partial / Client Detailed / …) → **Print to PDF** or
**Email PDF**. A human performs every Matrix action; this module only parses
the document that human exported — same compliance posture as reading the
notification emails.

Entry points feeding the same pipeline as email cards:
  • POST /api/connectors/matrix/ingest-pdf  — upload from /ops (client drawer)
  • a PDF attached to an email sent to the client's intake address
  • opt-in (matrix_pdf_link_fetch): the PDF link inside a Matrix "Email PDF"
    message addressed to the intake inbox.

Parser reality check (validated on a real my:Partial export): pypdf's text
run glues fields together — `17004507ACMont Blanc143-145 Allée du 15e$28,000…`,
`CTDET13 3+1 3+0` — and the next row's date can stick to this row's tail.
Everything below is written for that glued form and stays tolerant of the
spaced form some boards produce.
"""
from __future__ import annotations

import io
import re

from pypdf import PdfReader

# 2026-08-09 + Centris no. starts every grid row. The number is usually GLUED
# to what follows ("17004507ACMont…") — digit→letter is NOT a \b word
# boundary, so a non-digit lookahead is required instead.
_RX_ROW = re.compile(r"(\d{4}-\d{2}-\d{2})\s*(\d{7,8})(?=\D|$)")
_RX_PRICE = re.compile(r"\$\s?(\d{1,3}(?:,\d{3})+|\d{4,7})")
_RX_FR_PRICE = re.compile(r"(\d{1,3}(?:[  ]\d{3})+|\d{4,7})\s?\$")
# "3+1" pairs from the Bdrm and Bath/PR columns
_RX_PLUS_PAIR = re.compile(r"(\d{1,2})\+(\d{1,2})")
# street starts at the FIRST digit — the civic number is glued to the
# municipality name ("Mont Blanc143-145 Allée…"), and municipality names
# don't contain digits.
_RX_STREET = re.compile(r"\d.*")
# "(CPP 2026-08" style note wedged between the number and the status code
_RX_NOTE = re.compile(r"^\s*\(\w{2,6}[\s\d-]*\)?")
# status code glued to the municipality ("ACMont Blanc", "ACS Anne du Lac")
_RX_STATUS = re.compile(r"^\s*(?:AC|PC|EXP|VEN|SLD|CU|INC)(?=[A-ZÉÀÈÎÔ' ])")
# property type glued to building type ("CTDET13", "BUNDET8")
_RX_PT = re.compile(r"[\s\d](BUN|CT|MOB|PP)(?=[A-Z])")
_PT_LABELS = {"BUN": "Bungalow", "CT": "À étages / Cottage",
              "MOB": "Maison mobile", "PP": "Plain-pied"}


def extract_pdf_text(data: bytes) -> str:
    """All pages, newline-joined. Raises ValueError on non-PDF input."""
    try:
        reader = PdfReader(io.BytesIO(data))
        return "\n".join((page.extract_text() or "") for page in reader.pages)
    except Exception as exc:  # noqa: BLE001 — surface as one clean error
        raise ValueError(f"PDF illisible: {exc}") from exc


def parse_matrix_pdf_text(text: str) -> list[dict]:
    """Grid rows → listing cards (same shape store_listings expects).
    centris_no is the only required field; the rest is best-effort."""
    anchors = list(_RX_ROW.finditer(text))
    cards, seen = [], set()
    for i, m in enumerate(anchors):
        no = m.group(2)
        if no in seen:
            continue
        seen.add(no)
        hi = anchors[i + 1].start() if i + 1 < len(anchors) else min(
            len(text), m.end() + 400)
        win = text[m.end():hi]
        price_m = _RX_PRICE.search(win) or _RX_FR_PRICE.search(win)
        price = int(re.sub(r"[  ,]", "", price_m.group(1))) if price_m else 0
        # municipality + street live between the row anchor and the price
        head = win[:price_m.start()] if price_m else win[:80]
        head = _RX_STATUS.sub("", _RX_NOTE.sub("", head)).strip()
        street_m = _RX_STREET.search(head)
        if street_m:
            address = street_m.group(0).strip()
            area = head[:street_m.start()].strip(" ,·")
        else:
            address, area = head.strip(), ""
        pairs = _RX_PLUS_PAIR.findall(win)
        beds = int(pairs[0][0]) if pairs else 0
        baths = int(pairs[1][0]) if len(pairs) > 1 else 0
        pt = _RX_PT.search(win)
        cards.append({
            "centris_no": no,
            "url": "",   # the grid has no per-listing links — the Vitrine
                         # simply hides its "Voir sur Centris" button
            "price": price,
            "address": address[:290],
            "area": area[:190],
            "beds": beds,
            "baths": baths,
            "prop_type": _PT_LABELS.get(pt.group(1), "") if pt else "",
        })
    return cards


def parse_matrix_pdf(data: bytes) -> list[dict]:
    return parse_matrix_pdf_text(extract_pdf_text(data))


def fetch_pdf_link(url: str, max_bytes: int = 20_000_000) -> bytes | None:
    """One GET of a PDF link found in an email addressed to the intake inbox
    (Matrix « Email PDF » sends a link, not an attachment). The hub acts as
    the email's intended recipient — no login, no crawling, one document.
    Returns None unless the response really is a PDF."""
    try:
        import httpx
        r = httpx.get(url, follow_redirects=True, timeout=15)
        if r.status_code != 200 or len(r.content) > max_bytes:
            return None
        return r.content if r.content[:5] == b"%PDF-" else None
    except Exception:  # noqa: BLE001 — best-effort, the email path continues
        return None
