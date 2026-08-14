"""Unit tests for radar_acheteur.score — decay-weighted activity scoring."""
from datetime import datetime, timezone, timedelta

import pytest

from radar_acheteur import score


def _sig(type_, listing_no=None, age_days=0.0):
    occurred = (datetime.now(timezone.utc) - timedelta(days=age_days)).isoformat()
    return {"type": type_, "listing_no": listing_no, "occurred_at": occurred}


def test_empty_signals_score_zero():
    assert score.score_contact([], half_life_days=7) == 0.0


def test_weights_applied_fresh_signal():
    # A brand-new favorite (age ~0) should contribute ~its full weight (5.0).
    got = score.score_contact([_sig("favorite", "111", age_days=0)], half_life_days=7)
    assert abs(got - score.WEIGHTS["favorite"]) < 0.05


def test_unknown_type_contributes_zero():
    assert score.score_contact([_sig("mystery", "1", age_days=0)], half_life_days=7) == 0.0


def test_decay_halves_at_one_half_life():
    fresh = score.score_contact([_sig("view", "1", age_days=0)], half_life_days=4)
    aged = score.score_contact([_sig("view", "1", age_days=4)], half_life_days=4)
    assert abs(aged - fresh * 0.5) < 0.05


def test_repeat_view_bonus_after_three_views():
    sigs = [_sig("view", "999", age_days=0) for _ in range(3)]
    got = score.score_contact(sigs, half_life_days=7)
    # 3 fresh views (~3.0) plus the repeat-view bonus.
    assert got >= score.REPEAT_VIEW_BONUS + 2.9


def test_repeat_view_bonus_not_applied_below_threshold():
    sigs = [_sig("view", "999", age_days=0) for _ in range(2)]
    got = score.score_contact(sigs, half_life_days=7)
    assert got < score.REPEAT_VIEW_BONUS


def test_views_without_listing_no_never_earn_bonus():
    no_listing = score.score_contact(
        [_sig("view", None, age_days=0) for _ in range(5)], half_life_days=7)
    with_listing = score.score_contact(
        [_sig("view", "555", age_days=0) for _ in range(5)], half_life_days=7)
    # Same five views; only the ones anchored to a listing earn the repeat bonus.
    assert with_listing - no_listing == pytest.approx(score.REPEAT_VIEW_BONUS)


def test_age_days_invalid_iso_returns_zero():
    assert score._age_days("not-a-date") == 0.0


def test_age_days_naive_datetime_is_treated_as_utc():
    naive = (datetime.now(timezone.utc)).replace(tzinfo=None).isoformat()
    # Should be ~0 days old, not raise on the missing tzinfo.
    assert 0.0 <= score._age_days(naive) < 1.0


def test_tier_for_boundaries():
    assert score.tier_for(12, hot=12, warm=5) == "hot"
    assert score.tier_for(11.9, hot=12, warm=5) == "warm"
    assert score.tier_for(5, hot=12, warm=5) == "warm"
    assert score.tier_for(4.9, hot=12, warm=5) == "cool"
