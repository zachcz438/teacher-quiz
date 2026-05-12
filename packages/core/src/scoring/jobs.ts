// packages/core/src/scoring/jobs.ts
import type { DimensionScores, MatchResult } from '../types.js';
import { JOBS } from '../data/jobs.js';
import { matchProfile } from './matching.js';

export function matchAllJobs(scores: DimensionScores): MatchResult[] {
  const results: MatchResult[] = JOBS.map(job => ({
    id: job.id,
    name: job.name,
    ...matchProfile(scores, job.idealProfile),
  }));
  results.sort((a, b) => b.finalScore - a.finalScore);
  return results;
}
