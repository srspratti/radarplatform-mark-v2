"""Unit tests for radar_acheteur.run — CLI entry point."""
import sys

import pytest

from radar_acheteur import run


def _argv(monkeypatch, *args):
    monkeypatch.setattr(sys, "argv", ["radar_acheteur.run", *args])


def test_once_runs_single_pass(monkeypatch):
    calls = []
    monkeypatch.setattr(run, "run_once", lambda with_digest=False: calls.append(with_digest))
    _argv(monkeypatch, "--once")
    run.main()
    assert calls == [False]


def test_once_with_digest(monkeypatch):
    calls = []
    monkeypatch.setattr(run, "run_once", lambda with_digest=False: calls.append(with_digest))
    _argv(monkeypatch, "--once", "--digest")
    run.main()
    assert calls == [True]


def test_digest_only_validates_and_sends(monkeypatch):
    events = []
    from radar_acheteur.config import cfg
    monkeypatch.setattr(cfg, "validate", lambda: events.append("validate"))
    monkeypatch.setattr(run, "send_digest", lambda: events.append("digest"))
    monkeypatch.setattr(run, "run_once", lambda **k: events.append("should-not-run"))
    _argv(monkeypatch, "--digest-only")
    run.main()
    assert events == ["validate", "digest"]


def test_default_without_flags_runs_once(monkeypatch):
    calls = []
    monkeypatch.setattr(run, "run_once", lambda with_digest=False: calls.append(with_digest))
    _argv(monkeypatch)
    run.main()
    assert calls == [False]


class _Break(Exception):
    pass


def test_loop_recovers_from_errors_and_sleeps(monkeypatch):
    runs = {"n": 0}

    def _run_once(with_digest=False):
        runs["n"] += 1
        raise ValueError("boom")  # caught by the loop

    def _sleep(interval):
        # Break out of the otherwise-infinite loop after one iteration.
        raise _Break()

    monkeypatch.setattr(run, "run_once", _run_once)
    monkeypatch.setattr(run.time, "sleep", _sleep)
    _argv(monkeypatch, "--loop", "--interval", "5")
    with pytest.raises(_Break):
        run.main()
    assert runs["n"] == 1
