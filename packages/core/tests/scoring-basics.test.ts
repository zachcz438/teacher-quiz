// packages/core/tests/scoring-basics.test.ts
import { describe, it, expect } from 'vitest';
import { calcDimensionScores } from '../src/scoring/dimensions.js';
import { toFiveLetterCode, toBinaryTags } from '../src/scoring/code.js';
import type { Answer, Question } from '../src/types.js';

const QS: Question[] = [
  {
    id: 1, category: 'x', text: 'q1', kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '', weights: { temperature: 10, control: -10 } },
      { label: 'B', text: '', weights: { thinking: 10 } },
    ],
  },
  {
    id: 2, category: 'x', text: 'q2', kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '', weights: { temperature: 5 } },
      { label: 'B', text: '', weights: { temperature: -5 } },
    ],
  },
  {
    id: 3, category: 'x', text: 'growth', kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '', weights: { temperature: 100 } },
    ],
  },
];

describe('calcDimensionScores', () => {
  it('returns 50 baseline for empty answers', () => {
    const s = calcDimensionScores([], QS);
    expect(s.temperature).toBe(50);
    expect(s.structure).toBe(50);
    expect(s.expression).toBe(50);
    expect(s.control).toBe(50);
    expect(s.thinking).toBe(50);
  });

  it('accumulates weights from selected options', () => {
    const answers: Answer[] = [
      { questionId: 1, optionLabel: 'A' },  // temp +10, ctrl -10
      { questionId: 2, optionLabel: 'A' },  // temp +5
    ];
    const s = calcDimensionScores(answers, QS);
    // raw temp = 15 → 50 + 15*0.8 = 62
    // raw ctrl = -10 → 50 - 10*0.8 = 42
    expect(s.temperature).toBe(62);
    expect(s.control).toBe(42);
  });

  it('ignores growth questions in dimension scoring', () => {
    const answers: Answer[] = [{ questionId: 3, optionLabel: 'A' }];
    const s = calcDimensionScores(answers, QS);
    expect(s.temperature).toBe(50); // would be 130 if not skipped
  });

  it('clamps to 0..100 with extreme inputs', () => {
    const extreme: Answer[] = Array.from({ length: 20 }, () => ({
      questionId: 1, optionLabel: 'A',
    }));
    const s = calcDimensionScores(extreme, QS);
    expect(s.temperature).toBeLessThanOrEqual(100);
    expect(s.control).toBeGreaterThanOrEqual(0);
  });
});

describe('toFiveLetterCode', () => {
  it('returns WLEGF for high temp+expr+thinking, low struct+ctrl', () => {
    expect(toFiveLetterCode({
      temperature: 80, structure: 30, expression: 75, control: 35, thinking: 70,
    })).toBe('WLEGF');
  });

  it('returns CRIDT for low temp+expr+thinking, high struct+ctrl', () => {
    expect(toFiveLetterCode({
      temperature: 20, structure: 80, expression: 25, control: 75, thinking: 30,
    })).toBe('CRIDT');
  });

  it('treats 50 as high', () => {
    expect(toFiveLetterCode({
      temperature: 50, structure: 50, expression: 50, control: 50, thinking: 50,
    })).toBe('WREDF');
  });
});

describe('toBinaryTags', () => {
  it('returns 5 tags matching letters', () => {
    const tags = toBinaryTags({
      temperature: 80, structure: 30, expression: 75, control: 35, thinking: 70,
    });
    expect(tags).toHaveLength(5);
    expect(tags[0]?.label).toBe('#暖系');
    expect(tags[1]?.label).toBe('#即兴派');
    expect(tags[2]?.label).toBe('#外放派');
    expect(tags[3]?.label).toBe('#引路型');
    expect(tags[4]?.label).toBe('#感性派');
  });
});
