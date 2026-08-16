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


# --------------------------------------------------------------------------
# Numbers-only extraction — for a BROWSER-printed PDF of the client-portal
# results page ("Centris No. : 17004507" per card). The human opened their
# own email link and hit Ctrl+P; we only lift the identifiers, and the
# listing data itself comes from the licensed DDF® feed (or a detailed PDF).
# --------------------------------------------------------------------------
_RX_MLS_LABELED = re.compile(
    r"(?:Centris|MLS)[®\s]*(?:No|N[oº°])?\.?\s*:?\s*(\d{7,8})", re.I)
_RX_MLS_BARE = re.compile(r"(?<![\d-])(\d{8})(?![\d-])")


def parse_mls_numbers(text: str) -> list[str]:
    """Ordered, deduped MLS/Centris numbers. Labeled occurrences first;
    bare 8-digit tokens only as a fallback when nothing is labeled."""
    seen: dict[str, None] = {}
    for m in _RX_MLS_LABELED.finditer(text):
        seen.setdefault(m.group(1))
    if not seen:
        for m in _RX_MLS_BARE.finditer(text):
            seen.setdefault(m.group(1))
    return list(seen)


# ---------------------------------------------------------------------------
# Client Detailed (with Photo Album) — the ENRICHMENT format. Each listing
# spans consecutive pages carrying a "Centris No. X - Page N of M" footer:
# header facts (year, areas, taxes), a room-dimension table, remarks, and
# album pages of photos. Validated against a real Imperial export.
# ---------------------------------------------------------------------------
_RX_DET_FOOTER = re.compile(r"Centris No\.?\s*(\d{7,8})\s*-\s*Page\s*\d+")
_RX_DET_YEAR = re.compile(r"Year Built[\s\S]{0,160}?\b((?:18|19|20)\d{2})\b")
_RX_DET_LOT = re.compile(r"([\d,]+(?:\.\d+)?)\s*sq(?:ft|m)\s*Lot Area")
_RX_DET_SQFT = re.compile(r"([\d,]+(?:\.\d+)?)\s*sqft")
# taxes live in the "Taxes (annual)" block — the $ figures near "Municipal
# Assessment" are evaluations, not taxes, so the search is windowed
_RX_DET_TAXM = re.compile(r"\$\s?([\d,]+)(?:\s*\(\d{4}\))?\s*Municipal")
_RX_DET_TAXS = re.compile(r"\$\s?([\d,]+)(?:\s*\(\d{4}\))?\s*School")
_RX_DET_ADDR = re.compile(r"\((?:Active|Sold|Vendu)\)\s*Centris No\.\s*\n\s*(.+)")
# room rows come out glued: "GF Living room Fireplace-Stove. Stone
# fireplaceWood23.1 X 18 ft irr" — level, name, optional extras+floor, dims
_RX_DET_ROOM = re.compile(
    r"(?m)^(GF|GL|RC|RJ|SS|GR|B|\d)\s+([A-ZÉ][a-zé][A-Za-zéè'’ -]*?)"
    r"\s*(?:[A-ZÉ][a-zé][\w .,'’/-]*?)?(\d{1,2}(?:\.\d+)?)\s*X\s*"
    r"(\d{1,2}(?:\.\d+)?)\s*ft")
_RX_DET_REMARKS = re.compile(
    r"Remarks\s*([\s\S]{60,4000}?)(?:Addendum|Sale with|Seller.s declaration|"
    r"Source:|Centris No\.|$)")
# Price on a detail sheet is taken ONLY from a labeled field. Detail sheets
# also carry municipal/school assessments and tax figures in dollars, and
# guessing "the first $ amount" turns an evaluation into an asking price —
# a wrong number shown to a client is worse than « Prix à confirmer ».
_RX_DET_PRICE = re.compile(
    r"(?:Asking Price|Listing Price|Sale Price|Price asked|Prix demandé|"
    r"Prix de vente|\bPrice\b|\bPrix\b)\D{0,40}?"
    r"\$\s?(\d{1,3}(?:,\d{3})+|\d{5,8})", re.I)
_RX_DET_PRICE_FR = re.compile(
    r"(?:Prix demandé|Prix de vente|\bPrix\b)\D{0,40}?"
    r"(\d{1,3}(?:[  ]\d{3})+|\d{5,8})\s?\$", re.I)
_RX_DET_BEDS = re.compile(r"(\d{1,2})\s*(?:\+\s*(\d{1,2})\s*)?"
                          r"(?:Bedrooms?|Chambres?)\b", re.I)
_RX_DET_BEDS2 = re.compile(r"(?:Bedrooms?|Chambres?)\D{0,20}?(\d{1,2})", re.I)
_RX_DET_BATHS = re.compile(r"(\d{1,2})\s*(?:Bathrooms?|Salles? de bain)\b", re.I)
_RX_DET_BATHS2 = re.compile(r"(?:Bathrooms?|Salles? de bain)\D{0,20}?(\d{1,2})",
                            re.I)
_RX_DET_PTYPE = re.compile(r"Property Type\s*([A-Za-zéèêàôû' -]{3,40}?)\s*"
                           r"(?:Year Built|Building Type|Ann[ée]e)", re.I)


def is_detailed_pdf(text: str) -> bool:
    return bool(_RX_DET_FOOTER.search(text))


def _parse_detail_text(text: str) -> dict:
    out: dict = {}
    if m := _RX_DET_YEAR.search(text):
        out["year"] = int(m.group(1))
    lot = None
    if m := _RX_DET_LOT.search(text):
        lot = float(m.group(1).replace(",", ""))
        out["lot_sqft"] = round(lot)
    # living area: the labels/values interleave unpredictably in extraction —
    # take the smallest plausible sqft figure that isn't the lot
    vals = [float(v.replace(",", "")) for v in _RX_DET_SQFT.findall(text)]
    vals = [v for v in vals if 250 <= v <= 25_000 and v != lot]
    if vals:
        out["living_sqft"] = round(min(vals))
    tax_i = text.find("Taxes (annual)")
    if tax_i >= 0:
        tax_win = text[tax_i:tax_i + 260]
        if m := _RX_DET_TAXM.search(tax_win):
            out["taxes_mun"] = int(m.group(1).replace(",", ""))
        if m := _RX_DET_TAXS.search(tax_win):
            out["taxes_school"] = int(m.group(1).replace(",", ""))
    if m := _RX_DET_ADDR.search(text):
        out["address"] = m.group(1).strip()[:290]
    if m := _RX_DET_REMARKS.search(text):
        out["remarks"] = re.sub(r"\s+", " ", m.group(1)).strip()[:1400]
    elif (i := text.find("Remarks")) >= 0:  # very long remarks: hard cut
        out["remarks"] = re.sub(r"\s+", " ", text[i + 7:i + 1400]).strip()
    if m := _RX_DET_PTYPE.search(text):
        out["prop_type"] = m.group(1).strip()[:120]
    # Labeled price only — see the regex note. "3+1 Bedrooms" counts the
    # basement rooms as the second figure; the card shows the main count.
    if m := _RX_DET_PRICE.search(text):
        out["price"] = int(m.group(1).replace(",", ""))
    elif m := _RX_DET_PRICE_FR.search(text):
        out["price"] = int(re.sub(r"[  ]", "", m.group(1)))
    if m := (_RX_DET_BEDS.search(text) or _RX_DET_BEDS2.search(text)):
        out["beds"] = int(m.group(1))
    if m := (_RX_DET_BATHS.search(text) or _RX_DET_BATHS2.search(text)):
        out["baths"] = int(m.group(1))
    rooms = [{"level": lv, "name": name.strip(),
              "w_ft": float(w), "d_ft": float(d)}
             for lv, name, w, d in _RX_DET_ROOM.findall(text)]
    if rooms:
        out["rooms"] = rooms[:24]
    return out


def parse_detailed_pdf(data: bytes) -> list[dict]:
    """→ [{centris_no, year?, living_sqft?, lot_sqft?, taxes_mun?,
    taxes_school?, address?, remarks?, rooms?, photos: [bytes]}].
    Photos come only from album pages (≥6 images) so the broker's own
    logo/headshot on the header page never leaks into a listing gallery."""
    try:
        reader = PdfReader(io.BytesIO(data))
    except Exception as exc:  # noqa: BLE001
        raise ValueError(f"PDF illisible: {exc}") from exc
    groups: dict[str, dict] = {}
    order: list[str] = []
    for page in reader.pages:
        t = page.extract_text() or ""
        m = _RX_DET_FOOTER.search(t)
        if not m:
            continue
        no = m.group(1)
        if no not in groups:
            groups[no] = {"text": "", "photos": []}
            order.append(no)
        groups[no]["text"] += "\n" + t
        try:
            imgs = list(page.images)
        except Exception:  # noqa: BLE001 — pillow missing / odd encodings
            imgs = []
        if len(imgs) >= 6:  # album page
            for im in imgs:
                try:
                    blob = im.data
                except Exception:  # noqa: BLE001
                    continue
                if blob and len(blob) >= 9000:
                    groups[no]["photos"].append(blob)
    return [{"centris_no": no, **_parse_detail_text(groups[no]["text"]),
             "photos": groups[no]["photos"][:12]} for no in order]


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
