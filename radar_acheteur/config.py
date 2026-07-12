"""Central configuration, loaded from environment (.env)."""
import os
from dataclasses import dataclass, field
from dotenv import load_dotenv

load_dotenv()


def _f(name: str, default: float) -> float:
    return float(os.getenv(name, default))


@dataclass
class Config:
    # --- Mailbox (IMAP) ---
    imap_host: str = os.getenv("IMAP_HOST", "imap.gmail.com")
    imap_user: str = os.getenv("IMAP_USER", "")
    imap_pass: str = os.getenv("IMAP_PASS", "")          # Gmail: use an App Password
    imap_folder: str = os.getenv("IMAP_FOLDER", "INBOX")
    # Only process mail from these senders (comma-separated). Matrix alert domains.
    alert_senders: list = field(default_factory=lambda: [
        s.strip() for s in os.getenv(
            "ALERT_SENDERS",
            "noreply@matrixmailer.com,notification@centris.ca"
        ).split(",") if s.strip()
    ])

    # --- Anthropic ---
    anthropic_key: str = os.getenv("ANTHROPIC_API_KEY", "")
    # Haiku for parsing/briefs keeps cost low; override for quality tests.
    model: str = os.getenv("ANTHROPIC_MODEL", "claude-haiku-4-5-20251001")

    # --- Follow Up Boss ---
    fub_key: str = os.getenv("FUB_API_KEY", "")
    fub_system: str = os.getenv("FUB_X_SYSTEM", "RadarAcheteur")
    fub_system_key: str = os.getenv("FUB_X_SYSTEM_KEY", "")

    # --- Broker / digest ---
    broker_name: str = os.getenv("BROKER_NAME", "Danny")
    broker_email: str = os.getenv("BROKER_EMAIL", "")
    broker_lang: str = os.getenv("BROKER_LANG", "fr")     # 'fr' | 'en'
    smtp_host: str = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port: int = int(os.getenv("SMTP_PORT", "587"))
    smtp_user: str = os.getenv("SMTP_USER", "") or os.getenv("IMAP_USER", "")
    smtp_pass: str = os.getenv("SMTP_PASS", "") or os.getenv("IMAP_PASS", "")

    # --- Scoring ---
    half_life_days: float = _f("HALF_LIFE_DAYS", 7)
    hot_threshold: float = _f("HOT_THRESHOLD", 12)
    warm_threshold: float = _f("WARM_THRESHOLD", 5)
    lookback_days: int = int(os.getenv("LOOKBACK_DAYS", "30"))

    # --- Storage ---
    db_path: str = os.getenv("DB_PATH", "radar.db")

    def imap_port_ssl(self) -> bool:
        return os.getenv("IMAP_SSL", "true").lower() != "false"

    def validate(self):
        missing = [k for k in ("imap_user", "imap_pass", "anthropic_key", "fub_key")
                   if not getattr(self, k)]
        if missing:
            raise SystemExit(f"Missing required env vars: {', '.join(missing)}. "
                             f"Copy .env.example to .env and fill them in.")


cfg = Config()
