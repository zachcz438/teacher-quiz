// packages/core/src/data/questions/pro-extra.ts
import type { Question } from '../../types.js';

/**
 * 专业版多出的 20 题（id 31-50），让 pro 题库达到 spec 承诺的 60 题。
 *
 * v2026.5.22 重做：13 道多维题改为单主轴 4 选项 spectrum（与 basic 一致）
 * - 主轴权重：+8 / +3 / -3 / -8
 * - 副维度仅在自然时 ±2 微调
 * - 选项全部贴合题干情境（不再为凑 5 个 archetype 而硬塞）
 *
 * 维度分布（13 道多维）：
 * - temperature: 31, 39, 44
 * - structure:   34, 49
 * - expression:  38
 * - thinking:    42, 47, 50  (高=感性故事 / 低=理性逻辑)
 * - control:     33, 36, 41, 46
 *
 * 7 道强迫二选一（32, 35, 37, 40, 43, 45, 48）维持原设计——
 * 它们本来就是 2 选项极化，已符合"单维度纯化"原则。
 */
export const PRO_EXTRA_QUESTIONS: Question[] = [
  // ========== 多维打分题（13 道，4 选项 spectrum）==========

  // ----- temperature -----
  {
    id: 31, category: '师生互动', text: '课后一个学生不肯走，欲言又止地跟你说了一件家里的事，你的本能反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '放下手头一切，告诉他随时可以来找你', weights: { temperature: 8 } },
      { label: 'B', text: '认真听完，告诉他你愿意帮他想想办法', weights: { temperature: 3, structure: 2 } },
      { label: 'C', text: '简短听完，告诉他你会持续关注但他得先继续上课', weights: { temperature: -3, control: 2 } },
      { label: 'D', text: '提醒他这是私事，建议他找心理老师聊一聊', weights: { temperature: -8, structure: 2 } },
    ],
  },
  {
    id: 39, category: '师生互动', text: '学生发起一场"我们班谁课讲得最好"的小 PK，你最自然的反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '让他们说说为什么觉得这位"对方老师"好，认真听完', weights: { temperature: 8 } },
      { label: 'B', text: '笑着说"那我也得偷师一下"，把话题接住', weights: { temperature: 3, expression: 2 } },
      { label: 'C', text: '半开玩笑装受伤"哎呀你们移情别恋啦"，把它带过去', weights: { temperature: -3, expression: 2 } },
      { label: 'D', text: '不接这个话题，请大家专心上课', weights: { temperature: -8, control: 2 } },
    ],
  },
  {
    id: 44, category: '教育理念', text: '面对家长群里"鸡娃"焦虑，你最自然会说——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '"心疼孩子，慢一点也没关系，每个孩子节奏不同"', weights: { temperature: 8 } },
      { label: 'B', text: '"每个孩子都有自己的强项，不用跟别人比"', weights: { temperature: 3 } },
      { label: 'C', text: '"得看孩子具体情况，不能一刀切，需要看数据"', weights: { temperature: -3, structure: 2 } },
      { label: 'D', text: '"鸡得对方法、有边界、长期坚持，是必要的"', weights: { temperature: -8, control: 2 } },
    ],
  },

  // ----- structure -----
  {
    id: 34, category: '备课方式', text: '设计一个新章节的开篇 5 分钟，你最想怎么开场——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '直接讲今天的学习目标 + 评估方式', weights: { structure: 8, control: 2 } },
      { label: 'B', text: '画出这一章和上一章的逻辑关系图，建立框架', weights: { structure: 3 } },
      { label: 'C', text: '设一个出乎意料的谜题，让学生忍不住想破解', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '用一个真实人物 / 事件的故事引入', weights: { structure: -8, thinking: 2 } },
    ],
  },
  {
    id: 49, category: '教学方法', text: '让你设计一节"创新课"，你最想做哪种——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '严格设计每个环节，让结构本身成为创新点', weights: { structure: 8 } },
      { label: 'B', text: '把学科最前沿的研究系统讲给学生听', weights: { structure: 3 } },
      { label: 'C', text: '找一个跨学科的真实场景做整节沉浸课', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '设计一个颠覆传统课堂的游戏化形式', weights: { structure: -8, expression: 2 } },
    ],
  },

  // ----- expression -----
  {
    id: 38, category: '教育理念', text: '一个总让你头疼的学生忽然有了进步，你最自然的回应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '当着全班来个夸张的"今日进步之星"小仪式', weights: { expression: 8 } },
      { label: 'B', text: '在课堂上点名表扬他一句，让他被看见', weights: { expression: 3, temperature: 2 } },
      { label: 'C', text: '私下找他真诚说"我看到了，老师为你高兴"', weights: { expression: -3, temperature: 2 } },
      { label: 'D', text: '简短点头说"继续保持"，不大动声色', weights: { expression: -8, control: 2 } },
    ],
  },

  // ----- thinking (高=感性故事 / 低=理性逻辑) -----
  {
    id: 42, category: '教学场景', text: '学校要求你给自己班的"教学满意度"做自评，你最看重哪个指标——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '学生在我课上出现了多少个"啊哈"瞬间', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '有没有孩子最近开始疏远我', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '课堂参与度和作业完成质量的客观数据', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '学生测验成绩 + 课堂纪律状况', weights: { thinking: -8, control: 2 } },
    ],
  },
  {
    id: 47, category: '师生互动', text: '你最珍视的学生反馈是哪一种——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '多年后专门写信告诉你"你某节课改变了我"', weights: { thinking: 8, temperature: 2 } },
      { label: 'B', text: '课后跑过来抱住你说"老师我喜欢你"', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '在课堂上提出一个让你都没想过的好问题', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '期末时全班分数比上一届进步明显', weights: { thinking: -8, control: 2 } },
    ],
  },
  {
    id: 50, category: '教学风格', text: '你最希望学生记住的不是知识点，而是——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '"老师讲过那个让我哭过的故事"', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '"老师真的看见了我"的感觉', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '"原来这件事可以被这样思考"的方法论', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '"在老师面前我从不敢糊弄自己"', weights: { thinking: -8, control: 2 } },
    ],
  },

  // ----- control -----
  {
    id: 33, category: '师生互动', text: '一个学生当着全班说"老师，我觉得你刚才讲错了"，你的真实反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '说"我们下课对答案"——课堂节奏不能被打断', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '半开玩笑承认"老师老了脑子转得慢"，下课再查证', weights: { control: 3, expression: 2 } },
      { label: 'C', text: '暂停下来认真听他说，欣赏他敢质疑', weights: { control: -3, temperature: 2 } },
      { label: 'D', text: '让他完整说完，跟全班一起拆解哪里有分歧', weights: { control: -8, structure: 2 } },
    ],
  },
  {
    id: 36, category: '课堂管理', text: '一个学生的作业本上画了一只奇怪的小怪兽，你的处理——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '严肃跟他讲明白：作业本不是涂鸦本', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '圈出来，旁边写一句"想象力很好，但要保持整洁"', weights: { control: 3, temperature: 2 } },
      { label: 'C', text: '笑着问他这是什么，告诉他下次画在草稿本上', weights: { control: -3, temperature: 2 } },
      { label: 'D', text: '把它当引子，下节课让全班一起想象一个新怪兽', weights: { control: -8, expression: 2 } },
    ],
  },
  {
    id: 41, category: '教学方法', text: '学生作业里出现明显的 AI 生成痕迹，你的第一动作——',
    kind: 'multi-dim', tier: 'pro',
    notApplicableTo: ['学前', '小学低段'],
    options: [
      { label: 'A', text: '严肃处理，明确这是学术不诚信的底线', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '制定明确的"AI 使用规则"并跟全班讲清楚', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '找他单独聊聊，先了解他最近遇到了什么困难', weights: { control: -3, temperature: 2 } },
      { label: 'D', text: '上课讲一个"AI 帮你 vs 替你"的小段子点醒大家', weights: { control: -8, expression: 2 } },
    ],
  },
  {
    id: 46, category: '课堂管理', text: '班里两派学生开始小团体互不来往，你的处理——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '直接当众点出这种现象，明确"这不行"', weights: { control: 8 } },
      { label: 'B', text: '重新分小组任务，强制混合搭配', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '设计一个全班一起完成的有趣大挑战', weights: { control: -3, expression: 2 } },
      { label: 'D', text: '找两边各几个孩子私下聊聊，了解感受', weights: { control: -8, temperature: 2 } },
    ],
  },

  // ========== 强迫二选一题（7 道，关键维度极化，维持原设计）==========

  {
    id: 32, category: '教学风格', text: '一节课如果只能保证一件事，你选——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '每个孩子都被关注到', weights: { temperature: 10 } },
      { label: 'B', text: '每个孩子都达到知识掌握标准', weights: { thinking: -10, structure: 5 } },
    ],
  },

  {
    id: 35, category: '教育理念', text: '教学最重要的事是——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '让学生爱上这个学科', weights: { temperature: 8, expression: 5 } },
      { label: 'B', text: '让学生掌握这个学科', weights: { thinking: -10, structure: 5 } },
    ],
  },

  {
    id: 37, category: '教学风格', text: '你更愿意成为哪一种老师——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '一个学生 10 年后还会想念的人', weights: { temperature: 10, thinking: 5 } },
      { label: 'B', text: '一个学生 10 年后还会用的方法论', weights: { thinking: -10, structure: 5 } },
    ],
  },

  {
    id: 40, category: '备课方式', text: '备课时你更偏向——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '把这节课的每分钟都规划好', weights: { structure: 10, control: 5 } },
      { label: 'B', text: '把内容理解透，临场根据学生状态发挥', weights: { structure: -10, expression: 5 } },
    ],
  },

  {
    id: 43, category: '教学风格', text: '你更不能接受——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '学生觉得你严厉但不温暖', weights: { temperature: 10 } },
      { label: 'B', text: '学生觉得你温暖但不专业', weights: { thinking: -10, structure: 5 } },
    ],
  },

  {
    id: 45, category: '课堂管理', text: '一个学生抗拒学习，你的本能更接近——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '一定是出了什么事，先去问问', weights: { temperature: 10, control: -5 } },
      { label: 'B', text: '先讲清楚"不学习的后果是什么"', weights: { control: 10, thinking: -5 } },
    ],
  },

  {
    id: 48, category: '教学风格', text: '你的课堂节奏更倾向——',
    kind: 'forced-choice', tier: 'pro',
    options: [
      { label: 'A', text: '像一首歌，有起伏、有高潮', weights: { expression: 10, thinking: 5 } },
      { label: 'B', text: '像一个跑步训练，匀速、稳定', weights: { structure: 10, control: 5 } },
    ],
  },
];

if (PRO_EXTRA_QUESTIONS.length !== 20) {
  throw new Error(`PRO_EXTRA_QUESTIONS must have exactly 20 entries, got ${PRO_EXTRA_QUESTIONS.length}`);
}
