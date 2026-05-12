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

/**
 * 老师视角的"反思力"软文案，避免"潜力评级"的判决感。
 * 仅当 growthAnswers 非空时返回。
 */
export function generateReflectionInsight(growthAnswers: Answer[]): string | undefined {
  if (growthAnswers.length === 0) return undefined;
  const raw = calcGrowthRawScore(growthAnswers);
  const score = raw * 2; // 0-100

  if (score >= 80) {
    return '你显然是那种"愿意一直长"的老师——主动找反馈、敢承认自己的盲区、看到别人优秀会想学。这种状态在教师群体里是稀有的，它意味着你十年后会和今天非常不同。这份开放感，本身就是教学最重要的底色。';
  }
  if (score >= 65) {
    return '你对自己的成长是有意识的——会复盘、会调整、会偶尔走出舒适区。如果说有什么可以再多一点，那就是更主动一点地"暴露自己的不会"——找一个你可以放下面子的人定期听你课，会让成长更快。';
  }
  if (score >= 50) {
    return '你处在大多数老师都在的状态：能完成手头的事，但成长更多依赖外部推动而非内驱。这没什么不对，只是如果有一天你想"再往上走一截"，需要的不是更多努力，是更主动地给自己制造一些"被打脸"的机会——比如主动请新人来听你的课。';
  }
  return '你目前更倾向于"把已经会的做好"，对外部反馈和新方法保持一种谨慎的距离。这未必是坏事——稳定本身就是一种资产。但如果你愿意尝试一件事，可以是：找一个你信任的同事，每月一次坐下来认真听他给你 15 分钟的反馈，不解释、不反驳，只听完。这一个动作可能就够你走很远。';
}
