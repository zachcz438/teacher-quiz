// packages/core/src/scoring/credibility.ts
import type { Answer, CredibilityReport, Question } from '../types.js';

/**
 * 答题可信度：
 * - 反向重复一致性：暂以"两题首要权重维度的方向是否相反"做轻量判定
 * - 社会期望度：选了 isSocialDesirability 选项即 +1
 * 公式：score = 100 - 15 * inconsistency - 10 * socialDesirability
 */
export function calcCredibility(
  allAnswers: Answer[],
  antiFakeQuestions: Question[],
  basicQuestions: Question[],
): CredibilityReport {
  let inconsistencyCount = 0;
  let socialDesirabilityCount = 0;

  // 1. 反向重复一致性
  for (const af of antiFakeQuestions) {
    if (af.invertOf === undefined) continue;
    const ansAF = allAnswers.find(a => a.questionId === af.id);
    const ansBase = allAnswers.find(a => a.questionId === af.invertOf);
    if (!ansAF || !ansBase) continue;

    const optAF = af.options.find(o => o.label === ansAF.optionLabel);
    const baseQ = basicQuestions.find(q => q.id === af.invertOf);
    const optBase = baseQ?.options.find(o => o.label === ansBase.optionLabel);
    if (!optAF || !optBase) continue;

    // 取共同维度，看符号是否相反
    for (const dim of Object.keys(optAF.weights)) {
      const wAF = (optAF.weights as Record<string, number>)[dim] ?? 0;
      const wBase = (optBase.weights as Record<string, number>)[dim] ?? 0;
      if (wAF !== 0 && wBase !== 0 && Math.sign(wAF) === Math.sign(wBase)) {
        // 配对题应该相反却同向 → inconsistency
        inconsistencyCount++;
        break;
      }
    }
  }

  // 2. 社会期望度
  for (const ans of allAnswers) {
    const af = antiFakeQuestions.find(q => q.id === ans.questionId);
    if (!af) continue;
    const opt = af.options.find(o => o.label === ans.optionLabel);
    if (opt?.isSocialDesirability) socialDesirabilityCount++;
  }

  const score = Math.max(0, 100 - 15 * inconsistencyCount - 10 * socialDesirabilityCount);
  const flag: 'high' | 'medium' | 'low' = score >= 80 ? 'high' : score >= 50 ? 'medium' : 'low';

  return { score, inconsistencyCount, socialDesirabilityCount, flag };
}
