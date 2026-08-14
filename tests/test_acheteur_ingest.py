"""Unit tests for radar_acheteur.ingest — IMAP fetch and MIME decoding."""
import types
from email.message import EmailMessage

from radar_acheteur import ingest


# ------------------------------------------------------------------ _decode -
def test_decode_none_and_plain():
    assert ingest._decode(None) == ""
    assert ingest._decode("Plain subject") == "Plain subject"


def test_decode_encoded_word():
    # "café" encoded as an RFC 2047 word.
    assert ingest._decode("=?utf-8?q?caf=C3=A9?=") == "café"


# --------------------------------------------------------------- _body_html -
def _multipart(html=None, plain=None):
    msg = EmailMessage()
    msg["From"] = "a@b.c"
    if plain is not None:
        msg.set_content(plain)
    if html is not None:
        if plain is not None:
            msg.add_alternative(html, subtype="html")
        else:
            msg.set_content(html, subtype="html")
    return msg


def test_body_html_prefers_html_over_plain():
    msg = _multipart(html="<b>rich</b>", plain="poor")
    assert ingest._body_html(msg).strip() == "<b>rich</b>"


def test_body_html_falls_back_to_plain():
    msg = _multipart(plain="only plain")
    assert ingest._body_html(msg).strip() == "only plain"


def test_body_html_singlepart():
    msg = EmailMessage()
    msg["From"] = "a@b.c"
    msg.set_content("<p>single</p>", subtype="html")
    assert "<p>single</p>" in ingest._body_html(msg)


# ------------------------------------------------------------- fetch_unseen -
class _FakeIMAP:
    def __init__(self, messages):
        self._messages = messages  # dict: num(bytes) -> raw bytes
        self.logged_in = False
        self.selected = None
        self.seen = []
        self.logged_out = False

    def login(self, user, pw):
        self.logged_in = (user, pw)

    def select(self, folder):
        self.selected = folder

    def search(self, charset, criterion):
        return "OK", [b" ".join(self._messages.keys())]

    def fetch(self, num, spec):
        return "OK", [(f"{num} (RFC822".encode(), self._messages[num])]

    def store(self, num, flag, value):
        self.seen.append((num, value))

    def logout(self):
        self.logged_out = True


def _raw(from_addr, subject="Sujet", date="Mon, 03 Jun 2024 10:00:00 +0000",
         msgid="<id@x>", body="<p>hi</p>"):
    m = EmailMessage()
    m["From"] = from_addr
    m["Subject"] = subject
    m["Date"] = date
    m["Message-ID"] = msgid
    m.set_content(body, subtype="html")
    return m.as_bytes()


def _cfg(**over):
    base = dict(imap_host="imap.x", imap_user="u", imap_pass="p", imap_folder="INBOX",
                alert_senders=["matrixmailer.com"])
    base.update(over)
    ns = types.SimpleNamespace(**base)
    ns.imap_port_ssl = lambda: True
    return ns


def test_fetch_unseen_yields_allowed_and_marks_seen(monkeypatch):
    fake = _FakeIMAP({b"1": _raw("Matrix <noreply@matrixmailer.com>")})
    monkeypatch.setattr(ingest.imaplib, "IMAP4_SSL", lambda host: fake)
    out = list(ingest.fetch_unseen(_cfg()))
    assert len(out) == 1
    row = out[0]
    assert row["sender"] == "noreply@matrixmailer.com"
    assert row["subject"] == "Sujet"
    assert row["received_at"].startswith("2024-06-03")
    assert "<p>hi</p>" in row["html"]
    assert fake.seen == [(b"1", "\\Seen")]
    assert fake.logged_out is True


def test_fetch_unseen_skips_disallowed_senders(monkeypatch):
    fake = _FakeIMAP({b"1": _raw("spam@evil.com")})
    monkeypatch.setattr(ingest.imaplib, "IMAP4_SSL", lambda host: fake)
    out = list(ingest.fetch_unseen(_cfg()))
    assert out == []
    assert fake.seen == []  # untouched


def test_fetch_unseen_bad_date_yields_none_received(monkeypatch):
    fake = _FakeIMAP({b"1": _raw("noreply@matrixmailer.com", date="not-a-date")})
    monkeypatch.setattr(ingest.imaplib, "IMAP4_SSL", lambda host: fake)
    out = list(ingest.fetch_unseen(_cfg()))
    assert out[0]["received_at"] is None


def test_fetch_unseen_uses_plain_imap_when_not_ssl(monkeypatch):
    fake = _FakeIMAP({})
    used = {}
    monkeypatch.setattr(ingest.imaplib, "IMAP4",
                        lambda host: used.setdefault("plain", fake) or fake)
    cfg = _cfg()
    cfg.imap_port_ssl = lambda: False
    list(ingest.fetch_unseen(cfg))
    assert used["plain"] is fake
