"""Pull Matrix/Centris notification emails over IMAP. No API keys, no GCP project.
For a single mailbox this is the cheapest possible ingestion path."""
import imaplib
import email
from email.header import decode_header
from email.utils import parsedate_to_datetime


def _decode(s):
    if not s:
        return ""
    parts = decode_header(s)
    out = ""
    for text, enc in parts:
        out += text.decode(enc or "utf-8", "ignore") if isinstance(text, bytes) else text
    return out


def _body_html(msg) -> str:
    if msg.is_multipart():
        # prefer html, fall back to plain
        html = plain = ""
        for part in msg.walk():
            ctype = part.get_content_type()
            if part.get("Content-Disposition"):
                continue
            payload = part.get_payload(decode=True)
            if not payload:
                continue
            text = payload.decode(part.get_content_charset() or "utf-8", "ignore")
            if ctype == "text/html":
                html = text
            elif ctype == "text/plain":
                plain = text
        return html or plain
    payload = msg.get_payload(decode=True)
    return payload.decode(msg.get_content_charset() or "utf-8", "ignore") if payload else ""


def fetch_unseen(cfg):
    """Yield dicts for unread messages from allowed senders. Marks them \\Seen."""
    M = imaplib.IMAP4_SSL(cfg.imap_host) if cfg.imap_port_ssl() else imaplib.IMAP4(cfg.imap_host)
    M.login(cfg.imap_user, cfg.imap_pass)
    M.select(cfg.imap_folder)
    try:
        typ, data = M.search(None, "UNSEEN")
        for num in data[0].split():
            typ, msg_data = M.fetch(num, "(RFC822)")
            msg = email.message_from_bytes(msg_data[0][1])
            sender = email.utils.parseaddr(msg.get("From"))[1].lower()
            if cfg.alert_senders and not any(s.lower() in sender for s in cfg.alert_senders):
                continue  # leave unrelated mail untouched
            try:
                received = parsedate_to_datetime(msg.get("Date")).isoformat()
            except Exception:
                received = None
            yield {
                "message_id": msg.get("Message-ID", f"nomsgid-{num.decode()}"),
                "sender": sender,
                "subject": _decode(msg.get("Subject")),
                "received_at": received,
                "html": _body_html(msg),
            }
            M.store(num, "+FLAGS", "\\Seen")
    finally:
        M.logout()
