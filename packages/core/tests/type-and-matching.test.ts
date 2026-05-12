// packages/core/tests/type-and-matching.test.ts
import { describe, it, expect } from 'vitest';
import { findTypeFromScores } from '../src/scoring/type.js';
import { matchProfile } from '../src/scoring/matching.js';
import type { IdealProfile } from '../src/types.js';

describe('findTypeFromScores', () => {
  it('returns 守望者 for high temp + low control', () => {
    const t = findTypeFromScores({
      temperature: 90, structure: 50, expression: 50, control: 10, thinking: 50,
    });
    expect(t.name).toBe('守望者');
  });

  it('returns 统帅 for high struct + high control', () => {
    const t = findTypeFromScores({
      temperature: 50, structure: 90, expression: 50, control: 90, thinking: 50,
    });
    expect(t.name).toBe('统帅');
  });

  it('returns 吟游者 for high expr + high thinking', () => {
    const t = findTypeFromScores({
      temperature: 50, structure: 50, expression: 90, control: 50, thinking: 90,
    });
    expect(t.name).toBe('吟游者');
  });

  it('returns 倾听者 for high temp + low expression', () => {
    const t = findTypeFromScores({
      temperature: 90, structure: 50, expression: 10, control: 50, thinking: 50,
    });
    expect(t.name).toBe('倾听者');
  });

  it('order of equal-strength dimensions follows LETTER_ORDER', () => {
    const t = findTypeFromScores({
      temperature: 90, structure: 50, expression: 50, control: 10, thinking: 50,
    });
    expect(t.primary.dimension).toBe('temperature');
    expect(t.secondary.dimension).toBe('control');
  });
});

const idealHighTempLowCtrl: IdealProfile = {
  temperature: { polarity: 'high', intensity: 'critical-high' },
  control: { polarity: 'low', intensity: 'high' },
};

describe('matchProfile', () => {
  it('returns high score for perfect match', () => {
    const r = matchProfile(
      { temperature: 100, structure: 50, expression: 50, control: 0, thinking: 50 },
      idealHighTempLowCtrl,
    );
    expect(r.finalScore).toBeGreaterThan(80);
    expect(r.hasShortBoardPenalty).toBe(false);
  });

  it('triggers short-board penalty when critical dimension low', () => {
    const r = matchProfile(
      { temperature: 20, structure: 50, expression: 50, control: 0, thinking: 50 },
      idealHighTempLowCtrl,
    );
    expect(r.hasShortBoardPenalty).toBe(true);
    expect(r.shortBoardWarnings.length).toBeGreaterThan(0);
  });

  it('returns low score for opposite profile', () => {
    const r = matchProfile(
      { temperature: 0, structure: 50, expression: 50, control: 100, thinking: 50 },
      idealHighTempLowCtrl,
    );
    expect(r.finalScore).toBeLessThan(30);
  });
});
