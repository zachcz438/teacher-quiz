// packages/core/tests/questions-basic.test.ts
import { describe, it, expect } from 'vitest';
import { BASIC_QUESTIONS } from '../src/data/questions/basic.js';
import { PRO_EXTRA_QUESTIONS } from '../src/data/questions/pro-extra.js';
import { GROWTH_QUESTIONS } from '../src/data/questions/growth.js';
import { ANTI_FAKE_QUESTIONS } from '../src/data/questions/anti-fake.js';
import { getQuestionPool } from '../src/index.js';

describe('BASIC_QUESTIONS', () => {
  it('should have exactly 30 questions', () => {
    expect(BASIC_QUESTIONS).toHaveLength(30);
  });

  it('every question id is unique 1..30', () => {
    const ids = BASIC_QUESTIONS.map(q => q.id);
    expect(new Set(ids).size).toBe(30);
    expect(Math.min(...ids)).toBe(1);
    expect(Math.max(...ids)).toBe(30);
  });

  it('every question has exactly 5 options labeled A B C D E', () => {
    for (const q of BASIC_QUESTIONS) {
      expect(q.options).toHaveLength(5);
      expect(q.options.map(o => o.label)).toEqual(['A', 'B', 'C', 'D', 'E']);
    }
  });

  it('every question is tier=basic kind=multi-dim', () => {
    for (const q of BASIC_QUESTIONS) {
      expect(q.tier).toBe('basic');
      expect(q.kind).toBe('multi-dim');
    }
  });

  it('every option has at least one weight in [-10, 10]', () => {
    for (const q of BASIC_QUESTIONS) {
      for (const o of q.options) {
        const values = Object.values(o.weights);
        expect(values.length).toBeGreaterThan(0);
        for (const v of values) {
          expect(v).toBeGreaterThanOrEqual(-10);
          expect(v).toBeLessThanOrEqual(10);
        }
      }
    }
  });
});

describe('PRO_EXTRA_QUESTIONS', () => {
  it('should have exactly 20 questions', () => {
    expect(PRO_EXTRA_QUESTIONS).toHaveLength(20);
  });

  it('every id is unique 31..50', () => {
    const ids = PRO_EXTRA_QUESTIONS.map(q => q.id);
    expect(new Set(ids).size).toBe(20);
    expect(Math.min(...ids)).toBe(31);
    expect(Math.max(...ids)).toBe(50);
  });

  it('all are tier=pro', () => {
    for (const q of PRO_EXTRA_QUESTIONS) {
      expect(q.tier).toBe('pro');
    }
  });

  it('contains both multi-dim and forced-choice (per spec 6.2 mix)', () => {
    const multi = PRO_EXTRA_QUESTIONS.filter(q => q.kind === 'multi-dim');
    const forced = PRO_EXTRA_QUESTIONS.filter(q => q.kind === 'forced-choice');
    expect(multi.length).toBeGreaterThanOrEqual(10);
    expect(forced.length).toBeGreaterThanOrEqual(5);
  });

  it('multi-dim options use 2+ dimensions per option', () => {
    for (const q of PRO_EXTRA_QUESTIONS) {
      if (q.kind !== 'multi-dim') continue;
      for (const o of q.options) {
        expect(Object.keys(o.weights).length, `Q${q.id} option ${o.label} should have 2+ dims`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it('forced-choice has exactly 2 options', () => {
    for (const q of PRO_EXTRA_QUESTIONS) {
      if (q.kind !== 'forced-choice') continue;
      expect(q.options).toHaveLength(2);
    }
  });

  it('weight values stay in [-10, 10]', () => {
    for (const q of PRO_EXTRA_QUESTIONS) {
      for (const o of q.options) {
        for (const v of Object.values(o.weights)) {
          expect(v).toBeGreaterThanOrEqual(-10);
          expect(v).toBeLessThanOrEqual(10);
        }
      }
    }
  });

  it('no id collision with basic / growth / anti-fake', () => {
    const proIds = new Set(PRO_EXTRA_QUESTIONS.map(q => q.id));
    for (const q of BASIC_QUESTIONS) expect(proIds.has(q.id)).toBe(false);
    for (const q of GROWTH_QUESTIONS) expect(proIds.has(q.id)).toBe(false);
    for (const q of ANTI_FAKE_QUESTIONS) expect(proIds.has(q.id)).toBe(false);
  });
});

describe('Question pool totals (per spec 6.1)', () => {
  it('basic pool = 30', () => {
    expect(getQuestionPool('basic')).toHaveLength(30);
  });

  it('pro pool = 60', () => {
    expect(getQuestionPool('pro')).toHaveLength(60);
  });
});
