// packages/core/src/scoring/dimensions.ts
import type { Answer, DimensionKey, DimensionScores, Question } from '../types.js';

const DIMENSIONS: DimensionKey[] = [
  'temperature', 'structure', 'expression', 'control', 'thinking',
];

const SCALE_FACTOR = 0.8;
const NEUTRAL = 50;

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

/**
 * 五维计分主函数
 * - 仅 multi-dim / forced-choice 题参与（growth / anti-fake 题对维度计分有自己的 weights，也算入；isSocialDesirability 仅用于可信度）
 * - 累加每题选中选项的 weights
 * - 映射 raw 分到 0-100：score = clamp(50 + raw * 0.8, 0, 100)
 */
export function calcDimensionScores(answers: Answer[], questions: Question[]): DimensionScores {
  const raw: Record<DimensionKey, number> = {
    temperature: 0, structure: 0, expression: 0, control: 0, thinking: 0,
  };

  const qMap = new Map(questions.map(q => [q.id, q]));

  for (const ans of answers) {
    const q = qMap.get(ans.questionId);
    if (!q) continue;
    if (q.kind === 'growth') continue;  // growth 不参与五维计分

    const opt = q.options.find(o => o.label === ans.optionLabel);
    if (!opt) continue;

    for (const dim of DIMENSIONS) {
      const w = opt.weights[dim];
      if (typeof w === 'number') {
        raw[dim] += w;
      }
    }
  }

  return {
    temperature: clamp(NEUTRAL + raw.temperature * SCALE_FACTOR, 0, 100),
    structure:   clamp(NEUTRAL + raw.structure   * SCALE_FACTOR, 0, 100),
    expression:  clamp(NEUTRAL + raw.expression  * SCALE_FACTOR, 0, 100),
    control:     clamp(NEUTRAL + raw.control     * SCALE_FACTOR, 0, 100),
    thinking:    clamp(NEUTRAL + raw.thinking    * SCALE_FACTOR, 0, 100),
  };
}
