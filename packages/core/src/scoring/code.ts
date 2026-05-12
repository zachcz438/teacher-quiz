// packages/core/src/scoring/code.ts
import type { BinaryTag, DimensionScores } from '../types.js';
import { BINARY_TAGS, DIMENSION_LETTERS, LETTER_ORDER } from '../data/tags.js';

function poleOf(score: number): 'high' | 'low' {
  return score >= 50 ? 'high' : 'low';
}

export function toFiveLetterCode(scores: DimensionScores): string {
  return LETTER_ORDER
    .map(dim => {
      const pole = poleOf(scores[dim]);
      return DIMENSION_LETTERS[dim][pole];
    })
    .join('');
}

export function toBinaryTags(scores: DimensionScores): BinaryTag[] {
  return LETTER_ORDER.map(dim => {
    const pole = poleOf(scores[dim]);
    return BINARY_TAGS[dim][pole];
  });
}
