"""Matrix results-PDF ingestion — the ToS-safe answer to link-only boards.

Some Matrix boards send auto-emails that contain only a "View All Listings"
portal link — no listing data in the body, so email parsing yields nothing.
Matrix, however, lets the REALTOR open those results and export them:
select All → Print (my:Partial / Client Detailed / …) → **Print to PDF** or
**Email PDF**. A human performs every Matrix action; this module only parses
the document that human exported — same compliance posture as reading the
notification emails.

Two entry points feed the same pipeline as email cards:
  • POST /api/connectors/matrix/ingest-pdf  — upload from /ops (client drawer)
  • a PDF attached to an email sent to the client's intake address — the
    IMAP poll extracts and parses it when the body itself has no cards.

Parser: anchored on the "date + Centris number" pair that starts every row of
the results grid (works for my:Partial and the stock Partial/Summary layouts);
tolerant of column drift because everything else is best-effort per row.
"""
from __future__ import annotations

import io
import re

from pypdf import PdfReader

# 2026-08-09  17004507   — every grid row starts with Emailed date + Centris no
_RX_ROW = re.compile(r"(\d{4}-\d{2}-\d{2})\s+(\d{7,8})\b")
_RX_PRICE = re.compile(r"\$\s?(\d{1,3}(?:,\d{3})+|\d{4,7})")
_RX_FR_PRICE = re.compile(r"(\d{1,3}(?:[  ]\d{3})+|\d{4,7})\s?\$")
# "3+1" pairs from the Bdrm and Bath/PR columns
_RX_PLUS_PAIR = re.compile(r"\b(\d{1,2})\+(\d{1,2})\b")
# street part starts at the civic number ("143-145 Allée du 15e", "9-9A Rue …")
_RX_STREET = re.compile(r"\b(\d{1,5}[A-Za-z]?(?:-\d{1,5}[A-Za-z]?)?\s+\S.*)")
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
        price = int(re.sub(r"[  ,]", "", price_m.group(1))) if price_m else 0
        # municipality + street live between the row anchor and the price
        head = win[:price_m.start()] if price_m else win[:80]
        head = re.sub(r"^\s*(?:AC|PC|EXP|VEN|SLD|CU)\b", "", head).strip()
        street_m = _RX_STREET.search(head)
        if street_m:
            address = street_m.group(1).strip()
            area = head[:street_m.start()].strip(" ,·")
        else:
            address, area = head.strip(), ""
        pairs = _RX_PLUS_PAIR.findall(win)
        beds = int(pairs[0][0]) if pairs else 0
        baths = int(pairs[1][0]) if len(pairs) > 1 else 0
        pt = re.search(r"\b(BUN|CT|MOB|PP)\b", win)
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
