// packages/core/src/scoring/potential.ts
import type { Answer, DimensionScores, Grade4, PotentialReport } from '../types.js';
import { calcGrowthRawScore } from '../data/questions/growth.js';
import { matchAllJobs } from './jobs.js';

const DIMENSIONS = ['temperature', 'structure', 'expression', 'control', 'thinking'] as const;

function toGrade(score: number): Grade4 {
  if (score >= 80) return 'A';
  if (score >= 65) return 'B';
  if (score >= 50) return 'C';
  return 'D';
}

const GRADE_EXPLANATIONS: Record<Grade4, { growth: string; ceiling: string }> = {
  A: { growth: '高可塑·反思力强·开放接受反馈', ceiling: '风格鲜明·在同类老师中头部' },
  B: { growth: '中等可塑·有成长意愿', ceiling: '风格清晰·有进一步突破空间' },
  C: { growth: '一般·需要外部推动', ceiling: '风格中等·需更鲜明定位' },
  D: { growth: '低·防御性较强', ceiling: '风格不突出·建议探索更适合的方向' },
};

export function calcGrowthPotential(growthAnswers: Answer[]): PotentialReport['growth'] {
  const raw = calcGrowthRawScore(growthAnswers);
  const score = raw * 2;
  const grade = toGrade(score);
  return { score, grade, explanation: GRADE_EXPLANATIONS[grade].growth };
}

export function calcStyleCeiling(scores: DimensionScores): PotentialReport['ceiling'] {
  const deviations = DIMENSIONS.map(d => Math.abs(scores[d] - 50)).sort((a, b) => b - a);
  const top2avg = ((deviations[0] ?? 0) + (deviations[1] ?? 0)) / 2;
  const ceiling = Math.min(Math.round(top2avg * 2), 100);
  const rating = toGrade(ceiling);
  return {
    rating,
    percentile: ceiling,
    explanation: GRADE_EXPLANATIONS[rating].ceiling,
  };
}

export function calcAllPotential(scores: DimensionScores, growthAnswers: Answer[]): PotentialReport {
  return {
    growth: calcGrowthPotential(growthAnswers),
    ceiling: calcStyleCeiling(scores),
    paths: matchAllJobs(scores),
  };
}
