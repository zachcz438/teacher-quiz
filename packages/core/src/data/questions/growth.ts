// packages/core/src/data/questions/growth.ts
import type { Answer, Question } from '../../types.js';

/**
 * 成长心态题：5 题，仅在专业版出现。
 * 计分约定：A=10, B=8, C=6, D=3, E=0（成长潜力分，不参与五维计分）
 */
export const GROWTH_QUESTIONS: Question[] = [
  {
    id: 61, category: '成长心态', text: '上完一节自我感觉不太好的课，你的本能反应是——',
    kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '马上分析哪里可以改进，下节课立刻调整', weights: {} },
      { label: 'B', text: '请同事来听一节课，听他们的真实反馈', weights: {} },
      { label: 'C', text: '让自己缓一下，过几天再回顾', weights: {} },
      { label: 'D', text: '安慰自己「今天孩子状态不好」，不细想', weights: {} },
      { label: 'E', text: '假装这事没发生，下节课换个话题', weights: {} },
    ],
  },
  {
    id: 62, category: '成长心态', text: '听到对自己课堂的负面评价时，你的第一感受是——',
    kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '感谢——这是别人没看见的盲区', weights: {} },
      { label: 'B', text: '记下来，私下慢慢消化和验证', weights: {} },
      { label: 'C', text: '当下有点不舒服，但能听进去', weights: {} },
      { label: 'D', text: '本能想解释和反驳', weights: {} },
      { label: 'E', text: '怀疑评价者是不是带了偏见', weights: {} },
    ],
  },
  {
    id: 63, category: '成长心态', text: '看到同事用了一种你没见过的教法效果很好，你会——',
    kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '主动请教，下节课就尝试用一下', weights: {} },
      { label: 'B', text: '观察一段时间，确定有效再学', weights: {} },
      { label: 'C', text: '心里记下来，但不一定会用', weights: {} },
      { label: 'D', text: '觉得"她的方式不一定适合我"', weights: {} },
      { label: 'E', text: '继续用自己习惯的方式', weights: {} },
    ],
  },
  {
    id: 64, category: '成长心态', text: '入行 3 年和现在比，你觉得自己——',
    kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '能清晰说出在哪些具体方面进步了', weights: {} },
      { label: 'B', text: '感觉成熟了不少，但说不太具体', weights: {} },
      { label: 'C', text: '差不多吧，没太大变化', weights: {} },
      { label: 'D', text: '其实不太想回顾这个问题', weights: {} },
      { label: 'E', text: '可能还不如刚入行时有热情了', weights: {} },
    ],
  },
  {
    id: 65, category: '成长心态', text: '如果机构给你一笔自由支配的学习预算，你会——',
    kind: 'growth', tier: 'pro',
    options: [
      { label: 'A', text: '马上想到几个想报的课/想看的书', weights: {} },
      { label: 'B', text: '需要想想哪个方向最值得投入', weights: {} },
      { label: 'C', text: '可能存起来，等遇到合适的再用', weights: {} },
      { label: 'D', text: '不太确定该学什么', weights: {} },
      { label: 'E', text: '直接领现金更实在', weights: {} },
    ],
  },
];

/** 计算成长心态原始分（0-50） */
export function calcGrowthRawScore(answers: Answer[]): number {
  const SCALE: Record<string, number> = { A: 10, B: 8, C: 6, D: 3, E: 0 };
  let total = 0;
  for (const q of GROWTH_QUESTIONS) {
    const ans = answers.find(a => a.questionId === q.id);
    if (ans) total += SCALE[ans.optionLabel] ?? 0;
  }
  return total;
}
