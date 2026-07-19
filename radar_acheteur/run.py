"""CLI entry point.
  python -m radar_acheteur.run --once            # one pass
  python -m radar_acheteur.run --once --digest   # one pass + send morning digest
  python -m radar_acheteur.run --loop --interval 300
  python -m radar_acheteur.run --digest-only     # just resend the digest (e.g. 8am cron)
"""
import argparse
import time
import traceback
from .pipeline import run_once, send_digest


def main():
    ap = argparse.ArgumentParser(description="Radar Acheteur pipeline")
    ap.add_argument("--once", action="store_true", help="run a single pass")
    ap.add_argument("--loop", action="store_true", help="run continuously")
    ap.add_argument("--interval", type=int, default=300, help="loop interval seconds")
    ap.add_argument("--digest", action="store_true", help="also send digest this pass")
    ap.add_argument("--digest-only", action="store_true", help="only send the digest")
    args = ap.parse_args()

    if args.digest_only:
        from .config import cfg
        cfg.validate()
        send_digest()
        return
    if args.loop:
        print(f"[radar] loop every {args.interval}s (Ctrl-C to stop)")
        while True:
            try:
                run_once(with_digest=args.digest)
            except Exception as e:  # noqa: BLE001 — one bad pass must not kill the loop
                print(f"[radar] pass error: {e}")
                traceback.print_exc()
            time.sleep(args.interval)
    else:
        run_once(with_digest=args.digest)


if __name__ == "__main__":
    main()
