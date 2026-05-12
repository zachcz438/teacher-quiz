// packages/core/src/scoring/type.ts
import type { DimensionKey, DimensionScores, TeacherType } from '../types.js';
import { findTypeByDimensions, TEACHER_TYPES } from '../data/types.js';
import { LETTER_ORDER } from '../data/tags.js';

interface DimRank {
  dimension: DimensionKey;
  polarity: 'high' | 'low';
  strength: number;
}

/**
 * 16 型映射：取最强 2 个维度（按 |score - 50| 偏离强度）+ 各自端向，
 * 查 findTypeByDimensions。若 Top-2 不在 16 型组合表中，fallback 到 Top-1 + Top-3。
 */
export function findTypeFromScores(scores: DimensionScores): TeacherType {
  const ranks: DimRank[] = LETTER_ORDER.map(dim => ({
    dimension: dim,
    polarity: scores[dim] >= 50 ? 'high' : 'low',
    strength: Math.abs(scores[dim] - 50),
  }));

  // 排序：strength 降序，相同 strength 按 LETTER_ORDER 顺序保持确定性
  ranks.sort((a, b) => {
    if (b.strength !== a.strength) return b.strength - a.strength;
    return LETTER_ORDER.indexOf(a.dimension) - LETTER_ORDER.indexOf(b.dimension);
  });

  const top1 = ranks[0]!;
  const top2 = ranks[1]!;

  const found = findTypeByDimensions(
    { dimension: top1.dimension, polarity: top1.polarity },
    { dimension: top2.dimension, polarity: top2.polarity },
  );
  if (found) return found;

  // Fallback: top1 + top3
  const top3 = ranks[2]!;
  const fallback = findTypeByDimensions(
    { dimension: top1.dimension, polarity: top1.polarity },
    { dimension: top3.dimension, polarity: top3.polarity },
  );
  if (fallback) return fallback;

  // Last resort: 守望者
  return TEACHER_TYPES[0]!;
}
