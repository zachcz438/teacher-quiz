// packages/core/src/scoring/matching.ts
import type { DimensionKey, DimensionScores, IdealProfile, MatchResult, ProfileRequirement } from '../types.js';

const INTENSITY_VALUE: Record<ProfileRequirement, number> = {
  'critical-high': 1.0,
  'high': 0.6,
  'mid': 0.0,
  'low': -0.6,
  'critical-low': -1.0,
};

const SHORT_BOARD_LOW_THRESHOLD = 30;
const SHORT_BOARD_HIGH_THRESHOLD = 70;
const SHORT_BOARD_PENALTY = 0.30;

const DIMENSIONS: DimensionKey[] = [
  'temperature', 'structure', 'expression', 'control', 'thinking',
];

const DIM_NAMES_CN: Record<DimensionKey, string> = {
  temperature: '温度',
  structure: '结构',
  expression: '表达',
  control: '控制',
  thinking: '思维',
};

/**
 * 通用匹配：余弦相似度 + 短板惩罚
 * - 老师向量：(score - 50) / 50 → -1 ~ +1
 * - 理想向量：仅含 ideal 中明确标记的维度（其它视为 0）
 *   polarity high → 正方向；polarity low → 负方向
 *   intensity → 系数（critical-high=1.0, high=0.6, mid=0, low=-0.6, critical-low=-1.0）
 * - 余弦 -1..+1 → 归一化 0..1
 * - 短板惩罚：若某维度 ideal 是 critical-high+high 但老师 score < 30，扣 30%；
 *           若 ideal 是 critical-high+low 但老师 score > 70，扣 30%
 */
export function matchProfile(
  scores: DimensionScores,
  ideal: IdealProfile,
): Omit<MatchResult, 'id' | 'name'> {
  const teacherVec = DIMENSIONS.map(d => (scores[d] - 50) / 50);
  const idealVec = DIMENSIONS.map(d => {
    const req = ideal[d];
    if (!req) return 0;
    const sign = req.polarity === 'high' ? 1 : -1;
    return sign * INTENSITY_VALUE[req.intensity];
  });

  let dot = 0, magT = 0, magI = 0;
  for (let i = 0; i < DIMENSIONS.length; i++) {
    dot += teacherVec[i]! * idealVec[i]!;
    magT += teacherVec[i]! ** 2;
    magI += idealVec[i]! ** 2;
  }
  const denom = Math.sqrt(magT) * Math.sqrt(magI);
  const cosine = denom === 0 ? 0 : dot / denom;
  const cosineNorm = (cosine + 1) / 2;

  const warnings: string[] = [];
  let hasShortBoard = false;
  for (const d of DIMENSIONS) {
    const req = ideal[d];
    if (!req || req.intensity !== 'critical-high') continue;
    const sc = scores[d];
    if (req.polarity === 'high' && sc < SHORT_BOARD_LOW_THRESHOLD) {
      warnings.push(`${DIM_NAMES_CN[d]}维度过低（${sc.toFixed(0)}分），是这个画像的致命短板`);
      hasShortBoard = true;
    } else if (req.polarity === 'low' && sc > SHORT_BOARD_HIGH_THRESHOLD) {
      warnings.push(`${DIM_NAMES_CN[d]}维度过高（${sc.toFixed(0)}分），是这个画像的致命短板`);
      hasShortBoard = true;
    }
  }

  const penalty = hasShortBoard ? SHORT_BOARD_PENALTY : 0;
  const finalScore = Math.round(cosineNorm * 100 * (1 - penalty));

  return {
    rawScore: cosineNorm,
    finalScore,
    hasShortBoardPenalty: hasShortBoard,
    shortBoardWarnings: warnings,
  };
}
