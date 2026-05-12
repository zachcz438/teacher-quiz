// packages/core/src/scoring/grades.ts
import type { DimensionScores, MatchResult } from '../types.js';
import { GRADES } from '../data/grades.js';
import { matchProfile } from './matching.js';

export function matchAllGrades(scores: DimensionScores): MatchResult[] {
  const results: MatchResult[] = GRADES.map(grade => ({
    id: grade.id,
    name: grade.name,
    ...matchProfile(scores, grade.idealProfile),
  }));
  results.sort((a, b) => b.finalScore - a.finalScore);
  return results;
}
