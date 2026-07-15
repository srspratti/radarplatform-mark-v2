"""Outbound SMS/WhatsApp dispatch — Twilio REST over httpx (already a dep).

Dev mode (no TWILIO_SID): every send returns "simulated" so the queue and the
ops console show exactly what WOULD have gone out, with a tap-to-send sms:
fallback the realtor can fire from their own phone. Nothing here ever raises
into a webhook or intake pipeline — failures become status "failed".
"""
from __future__ import annotations
import re
from sqlalchemy.orm import Session
from ..config import settings
from ..models import OutboundMessage, utcnow

_TWILIO_URL = "https://api.twilio.com/2010-04-01/Accounts/{sid}/Messages.json"


def normalize_phone(raw: str) -> str:
    """Digits → E.164, North-America default (514 555 0199 → +15145550199)."""
    digits = re.sub(r"\D", "", raw or "")
    if not digits:
        return ""
    if raw.strip().startswith("+"):
        return "+" + digits
    if len(digits) == 10:
        return "+1" + digits
    if len(digits) == 11 and digits.startswith("1"):
        return "+" + digits
    return "+" + digits


def send_sms(to: str, body: str, whatsapp: bool = False) -> tuple[str, str]:
    """Returns (status, detail): status ∈ sent|simulated|failed. Never raises."""
    to = normalize_phone(to)
    if not to:
        return "failed", "numéro invalide"
    if not (settings.TWILIO_SID and settings.TWILIO_TOKEN and settings.TWILIO_FROM):
        return "simulated", ""
    frm, dest = settings.TWILIO_FROM, to
    if whatsapp:
        frm, dest = f"whatsapp:{frm}", f"whatsapp:{dest}"
    try:
        import httpx
        r = httpx.post(_TWILIO_URL.format(sid=settings.TWILIO_SID),
                       data={"From": frm, "To": dest, "Body": body},
                       auth=(settings.TWILIO_SID, settings.TWILIO_TOKEN),
                       timeout=10)
        if r.status_code == 201:
            return "sent", r.json().get("sid", "")
        return "failed", f"twilio {r.status_code}: {r.text[:120]}"
    except Exception as exc:  # noqa: BLE001 — transport errors must not propagate
        return "failed", str(exc)[:120]


def dispatch(db: Session, msg: OutboundMessage) -> OutboundMessage:
    """Best-effort transport for one queued message; updates status in place."""
    if msg.status not in ("pending", "simulated"):
        return msg
    if msg.channel in ("sms", "whatsapp"):
        status, _detail = send_sms(msg.to_addr, msg.body,
                                   whatsapp=msg.channel == "whatsapp")
    elif msg.channel == "email":
        from ..mailer import send_email
        status = send_email(msg.to_addr, msg.purpose or "Radar Hub", msg.body)
    elif msg.channel == "voice":
        from ..agents import voice
        status, _detail = voice.place_voice_call(
            msg.to_addr, voice.build_twiml(msg.id, msg.body))
    else:
        status = "failed"
    msg.status = status
    if status == "sent":
        msg.sent_at = utcnow()
    db.commit()
    return msg


def flush_pending(db: Session, tenant_id: str) -> dict:
    """Re-drive every still-pending message (e.g. after adding Twilio creds)."""
    rows = (db.query(OutboundMessage)
            .filter_by(tenant_id=tenant_id, status="pending").all())
    out = {"sent": 0, "simulated": 0, "failed": 0}
    for m in rows:
        dispatch(db, m)
        out[m.status] = out.get(m.status, 0) + 1
    return out
