// packages/core/tests/questions-basic.test.ts
import { describe, it, expect } from 'vitest';
import { BASIC_QUESTIONS } from '../src/data/questions/basic.js';

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
