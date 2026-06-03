// packages/core/src/data/questions/anti-fake.ts
import type { Question } from '../../types.js';

/**
 * 反测谎题：5 题，仅在专业版出现。
 * 两类设计：
 *   1. invertOf：与 basic 中某题构成反向重复对，检测一致性
 *   2. isSocialDesirability：纯白莲花选项，选了 = 美化倾向
 */
export const ANTI_FAKE_QUESTIONS: Question[] = [
  {
    id: 66, category: '师生互动', text: '面对一个让你抓狂的学生，你内心 OS 更接近——',
    kind: 'anti-fake', tier: 'pro',
    invertOf: 7,
    options: [
      { label: 'A', text: '我从来不对学生有负面情绪，不可能抓狂', weights: {}, isSocialDesirability: true },
      { label: 'B', text: '"这孩子是不是家里有事？"先共情', weights: { temperature: 5, control: -5 } },
      { label: 'C', text: '"必须立刻让他停下"', weights: { control: 8, structure: 3 } },
      { label: 'D', text: '"先深呼吸，等下课再处理"', weights: { thinking: -5, structure: 3 } },
      { label: 'E', text: '"得想个有趣的方式让他注意力转移"', weights: { expression: 5, structure: -3 } },
    ],
  },
  {
    id: 67, category: '备课方式', text: '关于备课，你最真实的状态是——',
    kind: 'anti-fake', tier: 'pro',
    invertOf: 4,
    options: [
      { label: 'A', text: '我每节课都精心备到完美无可挑剔', weights: {}, isSocialDesirability: true },
      { label: 'B', text: '会议多/家事多的时候确实会偷懒', weights: { thinking: -3 } },
      { label: 'C', text: '熟悉的内容会复用，节省精力', weights: { structure: 3, thinking: -3 } },
      { label: 'D', text: '依赖灵感，临场发挥比备课更靠谱', weights: { structure: -8, expression: 5 } },
      { label: 'E', text: '严格按计划，从不打折扣', weights: { structure: 8, control: 5 } },
    ],
  },
  {
    id: 68, category: '师生互动', text: '如果一个学生公开说不喜欢你的课，你会——',
    kind: 'anti-fake', tier: 'pro',
    options: [
      { label: 'A', text: '我从不在意学生喜不喜欢我，只在乎他学到了什么', weights: {}, isSocialDesirability: true },
      { label: 'B', text: '虽然难过，但会主动找他了解原因', weights: { temperature: 5, thinking: -3 } },
      { label: 'C', text: '心里会有点失落，但表面不动声色', weights: { temperature: -3, expression: -5 } },
      { label: 'D', text: '当场用幽默化解，私下再消化', weights: { expression: 8 } },
      { label: 'E', text: '严肃指出他的态度问题', weights: { control: 8, structure: 5 } },
    ],
  },
  {
    id: 69, category: '教学风格', text: '关于工作中的疲惫感，你最贴近的描述是——',
    kind: 'anti-fake', tier: 'pro',
    options: [
      { label: 'A', text: '从不疲惫，每天都充满教学热情', weights: {}, isSocialDesirability: true },
      { label: 'B', text: '会累，但看到学生进步就回血了', weights: { temperature: 5 } },
      { label: 'C', text: '某些时段确实会很倦，需要主动调节', weights: { thinking: -3 } },
      { label: 'D', text: '靠新尝试和创意维持新鲜感', weights: { expression: 5, structure: -3 } },
      { label: 'E', text: '靠规划和节奏感避免过度消耗', weights: { structure: 5, control: 3 } },
    ],
  },
  {
    id: 70, category: '师生互动', text: '面对一个明显比你聪明的学生，你的真实反应是——',
    kind: 'anti-fake', tier: 'pro',
    invertOf: 12,
    options: [
      { label: 'A', text: '完全没有任何不适，纯粹欣赏', weights: {}, isSocialDesirability: true },
      { label: 'B', text: '会享受和他思维碰撞的过程', weights: { thinking: -5 } },
      { label: 'C', text: '会调整教学方式给他更多挑战', weights: { structure: 5, thinking: -3 } },
      { label: 'D', text: '把他变成课堂的"小老师"', weights: { expression: 5, control: -3 } },
      { label: 'E', text: '偶尔会有一点危机感，但不会表现出来', weights: { temperature: -3, control: 3 } },
    ],
  },
];
