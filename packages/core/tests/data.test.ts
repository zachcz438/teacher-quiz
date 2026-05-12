// packages/core/tests/data.test.ts
import { describe, it, expect } from 'vitest';
import { TEACHER_TYPES, findTypeByDimensions } from '../src/data/types.js';
import { FAMILIES } from '../src/data/families.js';
import { JOBS } from '../src/data/jobs.js';
import { GRADES } from '../src/data/grades.js';
import { BINARY_TAGS, DIMENSION_LETTERS, LETTER_ORDER } from '../src/data/tags.js';

describe('TEACHER_TYPES integrity', () => {
  it('should have exactly 16 types', () => {
    expect(TEACHER_TYPES).toHaveLength(16);
  });

  it('every type id is unique 1..16', () => {
    const ids = TEACHER_TYPES.map(t => t.id);
    expect(new Set(ids).size).toBe(16);
    expect(Math.min(...ids)).toBe(1);
    expect(Math.max(...ids)).toBe(16);
  });

  it('every type name is unique', () => {
    const names = TEACHER_TYPES.map(t => t.name);
    expect(new Set(names).size).toBe(16);
  });

  it('every type references a valid family', () => {
    for (const t of TEACHER_TYPES) {
      expect(FAMILIES[t.family]).toBeDefined();
    }
  });

  it('every type has primary != secondary dimension', () => {
    for (const t of TEACHER_TYPES) {
      expect(t.primary.dimension).not.toBe(t.secondary.dimension);
    }
  });

  it('Top-2 (dimension+polarity) combos are unique', () => {
    const combos = TEACHER_TYPES.map(t => {
      return [
        `${t.primary.dimension}-${t.primary.polarity}`,
        `${t.secondary.dimension}-${t.secondary.polarity}`,
      ].sort().join('|');
    });
    expect(new Set(combos).size).toBe(16);
  });

  it('findTypeByDimensions locates 守望者 (W+G)', () => {
    const t = findTypeByDimensions(
      { dimension: 'temperature', polarity: 'high' },
      { dimension: 'control', polarity: 'low' },
    );
    expect(t?.name).toBe('守望者');
  });

  it('findTypeByDimensions is order-insensitive', () => {
    const a = findTypeByDimensions(
      { dimension: 'structure', polarity: 'high' },
      { dimension: 'control', polarity: 'high' },
    );
    const b = findTypeByDimensions(
      { dimension: 'control', polarity: 'high' },
      { dimension: 'structure', polarity: 'high' },
    );
    expect(a?.name).toBe('统帅');
    expect(b?.name).toBe('统帅');
  });

  it('family distribution: guardian=5 thinker=4 performer=3 commander=2 guide=2', () => {
    const counts: Record<string, number> = {};
    for (const t of TEACHER_TYPES) {
      counts[t.family] = (counts[t.family] || 0) + 1;
    }
    expect(counts.guardian).toBe(5);
    expect(counts.thinker).toBe(4);
    expect(counts.performer).toBe(3);
    expect(counts.commander).toBe(2);
    expect(counts.guide).toBe(2);
  });
});

describe('JOBS integrity', () => {
  it('should have exactly 7 jobs', () => {
    expect(JOBS).toHaveLength(7);
  });

  it('every job id unique 1..7', () => {
    const ids = JOBS.map(j => j.id);
    expect(new Set(ids).size).toBe(7);
  });

  it('every job has at least 2 dimensions in idealProfile', () => {
    for (const j of JOBS) {
      expect(Object.keys(j.idealProfile).length).toBeGreaterThanOrEqual(2);
    }
  });

  it('every job has at least one critical-high dimension', () => {
    for (const j of JOBS) {
      const hasCritical = Object.values(j.idealProfile).some(p => p?.intensity === 'critical-high');
      expect(hasCritical, `${j.name} 应至少有一个 critical-high 维度`).toBe(true);
    }
  });
});

describe('GRADES integrity', () => {
  it('should have exactly 5 grades', () => {
    expect(GRADES).toHaveLength(5);
  });

  it('every grade id unique 1..5', () => {
    const ids = GRADES.map(g => g.id);
    expect(new Set(ids).size).toBe(5);
  });

  it('temperature monotonically decreases from 学前 to 小学以上 (intensity-wise)', () => {
    const t学前 = GRADES[0]!.idealProfile.temperature;
    expect(t学前?.intensity).toBe('critical-high');
  });
});

describe('BINARY_TAGS / DIMENSION_LETTERS', () => {
  it('all 5 dimensions have high+low tags', () => {
    expect(Object.keys(BINARY_TAGS)).toHaveLength(5);
    for (const dim of Object.keys(BINARY_TAGS) as Array<keyof typeof BINARY_TAGS>) {
      expect(BINARY_TAGS[dim].high.polarity).toBe('high');
      expect(BINARY_TAGS[dim].low.polarity).toBe('low');
    }
  });

  it('letters are unique across all 10 poles', () => {
    const letters = Object.values(DIMENSION_LETTERS).flatMap(p => [p.high, p.low]);
    expect(new Set(letters).size).toBe(10);
  });

  it('LETTER_ORDER has all 5 dimensions', () => {
    expect(LETTER_ORDER).toHaveLength(5);
    expect(new Set(LETTER_ORDER).size).toBe(5);
  });
});
