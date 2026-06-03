// packages/core/src/data/questions/basic.ts
import type { Question } from '../../types.js';

/**
 * 基础版 30 题：单主轴 + 4 选项 spectrum 设计（v2026.5.22 重做）
 *
 * 设计原则：
 * - 每题专测 1 个主维度，4 个选项形成该维度上的 spectrum（强正 / 弱正 / 弱负 / 强负）
 * - 主轴权重：+8 / +3 / -3 / -8
 * - 副维度仅在自然时 ±2 微调，不强行覆盖
 * - 6 题/维度 × 5 维度 = 30 题（前后交叉验证）
 *
 * 维度分布：
 * - temperature (温度)：1, 2, 5, 9, 23, 28
 * - structure   (结构)：4, 13, 16, 18, 22, 25
 * - expression  (表现)：8, 11, 17, 19, 24, 26
 * - thinking    (思维)：3, 12, 15, 21, 29, 30   (高=感性故事 / 低=理性逻辑)
 * - control     (控制)：6, 7, 10, 14, 20, 27
 *
 * 选项展示顺序由前端 Fisher-Yates 洗牌随机化，代码里按 spectrum 顺序写便于审阅。
 */

export const BASIC_QUESTIONS: Question[] = [
  // ====================  TEMPERATURE  ====================
  {
    id: 1, category: '教学场景', text: '开学第一天，你走进教室，第一件事你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '走到孩子中间一个个问名字、聊几句天', weights: { temperature: 8, control: -2 } },
      { label: 'B', text: '用一句温暖的开场白让大家先放轻松', weights: { temperature: 3 } },
      { label: 'C', text: '简短自我介绍后切入今天要做的事', weights: { temperature: -3, structure: 2 } },
      { label: 'D', text: '在黑板上写下课堂规则和要求，先把调定下来', weights: { temperature: -8, structure: 2, control: 2 } },
    ],
  },
  {
    id: 2, category: '师生互动', text: '有个孩子在课堂上突然哭了，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '走过去蹲下来，轻声问他发生了什么', weights: { temperature: 8 } },
      { label: 'B', text: '让全班先继续，悄悄走过去看看他', weights: { temperature: 3 } },
      { label: 'C', text: '先维持课堂秩序，下课再单独问', weights: { temperature: -3, structure: 2 } },
      { label: 'D', text: '让他先到教室外面缓一缓，等我下课再处理', weights: { temperature: -8, control: 2 } },
    ],
  },
  {
    id: 5, category: '师生互动', text: '学生说「老师我不会」，你通常的反应是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「没关系，老师陪你一起想想，不着急」蹲下来一起看', weights: { temperature: 8 } },
      { label: 'B', text: '「我们先把这个问题拆开看一下」温和地引导', weights: { temperature: 3, structure: 2 } },
      { label: 'C', text: '「先想想上节课讲的，跟这个有什么关系」', weights: { temperature: -3 } },
      { label: 'D', text: '「这道题之前讲过类似的，你自己再认真试一次」', weights: { temperature: -8, control: 2 } },
    ],
  },
  {
    id: 9, category: '教育理念', text: '你觉得一个好老师最重要的品质是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '爱心和耐心——没有爱就没有教育', weights: { temperature: 8 } },
      { label: 'B', text: '真诚和共情——能站到学生那一边', weights: { temperature: 3 } },
      { label: 'C', text: '专业能力——能给学生扎实的知识', weights: { temperature: -3, thinking: -2 } },
      { label: 'D', text: '权威感和原则——让学生有敬畏感', weights: { temperature: -8, control: 2 } },
    ],
  },
  {
    id: 23, category: '师生互动', text: '你对学生说「加油」的频率和方式——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '经常说，而且会配上温暖的笑容和眼神', weights: { temperature: 8 } },
      { label: 'B', text: '会用具体的「你这点做得真好」来鼓励', weights: { temperature: 3 } },
      { label: 'C', text: '说得比较克制，更倾向给具体可行的建议', weights: { temperature: -3, thinking: -2 } },
      { label: 'D', text: '很少口头鼓励，靠行动和高标准来表达', weights: { temperature: -8, control: 2 } },
    ],
  },
  {
    id: 28, category: '教育理念', text: '你理想的师生关系是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '像家人一样亲密温暖、互相牵挂', weights: { temperature: 8 } },
      { label: 'B', text: '像好朋友一样轻松愉快、没代沟', weights: { temperature: 3, expression: 2 } },
      { label: 'C', text: '像教练和队员，目标明确、相互信任', weights: { temperature: -3, control: 2 } },
      { label: 'D', text: '像导师和学徒，专业而有距离感', weights: { temperature: -8, structure: 2 } },
    ],
  },

  // ====================  STRUCTURE  ====================
  {
    id: 4, category: '备课方式', text: '备课时你最看重的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '把每个环节、时间分配、过渡都安排得清清楚楚', weights: { structure: 8, control: 2 } },
      { label: 'B', text: '把知识框架梳理清楚，主线分明', weights: { structure: 3 } },
      { label: 'C', text: '把几个关键场景想好，其他临场发挥', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '把内容理解透，开场后看学生状态走', weights: { structure: -8, expression: 2 } },
    ],
  },
  {
    id: 13, category: '教学风格', text: '你理想的办公桌画面是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '整洁有序，所有东西都在该在的位置', weights: { structure: 8, control: 2 } },
      { label: 'B', text: '电脑旁贴着这周的待办清单，重点一目了然', weights: { structure: 3 } },
      { label: 'C', text: '摆着孩子送的小礼物、便利贴，热闹温暖', weights: { structure: -3, temperature: 2 } },
      { label: 'D', text: '书、剪报、灵感卡片堆到处都是，像创意工坊', weights: { structure: -8, expression: 2 } },
    ],
  },
  {
    id: 16, category: '教学方法', text: '课堂进入尾声，还剩 3 分钟，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '严格按教案做最后一个收束环节，分秒不浪费', weights: { structure: 8, control: 2 } },
      { label: 'B', text: '快速回顾今天的重点，强化记忆', weights: { structure: 3 } },
      { label: 'C', text: '用一个小悬念结束，让大家期待下节课', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '看大家状态，顺势聊点啥都行', weights: { structure: -8 } },
    ],
  },
  {
    id: 18, category: '教学方法', text: '你认为好的板书应该是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '结构清晰、层次分明，逻辑关系一目了然', weights: { structure: 8 } },
      { label: 'B', text: '关键词突出、重点用色标好', weights: { structure: 3 } },
      { label: 'C', text: '有插图、有色彩，看着不枯燥', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '像一幅画一样，有画面感和故事性', weights: { structure: -8, expression: 2 } },
    ],
  },
  {
    id: 22, category: '教学方法', text: '如果要你做一个课件，你会花最多时间在——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '梳理内容的逻辑结构，确保层层递进', weights: { structure: 8 } },
      { label: 'B', text: '设计每张幻灯的节奏与停留时长', weights: { structure: 3, control: 2 } },
      { label: 'C', text: '找最对味的图片和故事素材', weights: { structure: -3, expression: 2 } },
      { label: 'D', text: '加各种动画、表情包、互动小游戏', weights: { structure: -8, expression: 2 } },
    ],
  },
  {
    id: 25, category: '教学方法', text: '期末复习时，你的策略是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '整理系统的复习框架和知识图谱，按计划推进', weights: { structure: 8 } },
      { label: 'B', text: '列出重点清单，每天过一个模块', weights: { structure: 3 } },
      { label: 'C', text: '看学生状态，灵活调整重点和节奏', weights: { structure: -3, temperature: 2 } },
      { label: 'D', text: '用游戏、竞赛、故事让复习不那么枯燥', weights: { structure: -8, expression: 2 } },
    ],
  },

  // ====================  EXPRESSION  ====================
  {
    id: 8, category: '教学场景', text: '下课后，你最有可能在做什么？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '被几个孩子围着说说笑笑、八卦不停', weights: { expression: 8, temperature: 2 } },
      { label: 'B', text: '跟同事分享今天课上的一个亮点片段', weights: { expression: 3 } },
      { label: 'C', text: '在工位上整理板书、笔记和待改进点', weights: { expression: -3, structure: 2 } },
      { label: 'D', text: '独自复盘——这节课哪里不顺，怎么调', weights: { expression: -8, thinking: -2 } },
    ],
  },
  {
    id: 11, category: '师生互动', text: '你会如何表扬一个进步很大的学生？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '当着全班来个夸张的"今日之星"小仪式', weights: { expression: 8 } },
      { label: 'B', text: '在课堂上点名表扬，让他被大家看见', weights: { expression: 3 } },
      { label: 'C', text: '私下找他，具体说他哪里做得好', weights: { expression: -3, temperature: 2 } },
      { label: 'D', text: '在他作业本上写一句肯定，不大张旗鼓', weights: { expression: -8 } },
    ],
  },
  {
    id: 17, category: '教学场景', text: '学生突然提了一个跟课程无关的问题，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '顺势接住来个小讨论，反正大家都在想这个', weights: { expression: 8 } },
      { label: 'B', text: '简短回应一下，再巧妙带回主题', weights: { expression: 3, temperature: 2 } },
      { label: 'C', text: '「这个问题很好，课后我们单独聊」', weights: { expression: -3 } },
      { label: 'D', text: '礼貌说明跟课程无关，按计划继续推进', weights: { expression: -8, structure: 2 } },
    ],
  },
  {
    id: 19, category: '教学风格', text: '如果让你写教师寄语，你的风格更接近——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「加油鸭！每一天都要元气满满冲冲冲！🚀」', weights: { expression: 8 } },
      { label: 'B', text: '「每个孩子都是一颗星星，愿你越来越闪亮 ✨」', weights: { expression: 3, temperature: 2 } },
      { label: 'C', text: '「学会方法比学会知识更重要，愿你独立思考」', weights: { expression: -3, thinking: -2 } },
      { label: 'D', text: '「自律者自由，希望你严格要求自己」', weights: { expression: -8, control: 2 } },
    ],
  },
  {
    id: 24, category: '教育理念', text: '面试时校长问「你的教学风格是什么」，你的回答——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「我的课堂永远充满快乐和惊喜！」', weights: { expression: 8 } },
      { label: 'B', text: '「我擅长用故事和场景让知识有温度」', weights: { expression: 3, thinking: 2 } },
      { label: 'C', text: '「我希望成为学生信赖的人，而不只是老师」', weights: { expression: -3, temperature: 2 } },
      { label: 'D', text: '「我注重知识体系的构建和系统训练」', weights: { expression: -8, structure: 2 } },
    ],
  },
  {
    id: 26, category: '教学风格', text: '如果你在社交媒体上分享教学日常，风格会是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '分享课堂搞笑段子和欢乐瞬间，更新很勤', weights: { expression: 8 } },
      { label: 'B', text: '分享教学心得和学生故事', weights: { expression: 3, temperature: 2 } },
      { label: 'C', text: '偶尔分享干货 / 资源，不爱出镜', weights: { expression: -3, thinking: -2 } },
      { label: 'D', text: '很少分享，觉得工作就该认真工作', weights: { expression: -8 } },
    ],
  },

  // ====================  THINKING  (高=感性故事 / 低=理性逻辑) ====================
  {
    id: 3, category: '教学风格', text: '你最喜欢什么样的课堂氛围？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '充满故事和惊喜、像一场会被记住的演出', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '温暖热烈、孩子敢表达自己的感受', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '节奏分明、问题被层层拆解推进', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '安静有序、所有人都沉浸在思考里', weights: { thinking: -8, structure: 2 } },
    ],
  },
  {
    id: 12, category: '教学方法', text: '面对一道很难的题目，全班都答不上来，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '用一个生动的故事 / 场景把它讲活', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '联想一个生活里见过的相似例子', weights: { thinking: 3 } },
      { label: 'C', text: '从最基础的概念开始，一步步推导', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '拆成几个小步骤，让学生自己接力推理', weights: { thinking: -8, structure: 2 } },
    ],
  },
  {
    id: 15, category: '教学场景', text: '你怎么记住学生的名字？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '把名字跟一个小故事 / 联想绑起来记', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '通过聊几句话、对上孩子的脸来记', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '按座位表逐排系统性地记', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '先把最需要关注的（捣蛋的 + 拔尖的）记牢', weights: { thinking: -8, control: 2 } },
    ],
  },
  {
    id: 21, category: '教学风格', text: '你更享受课堂的哪个瞬间？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '讲到高潮处所有眼睛都亮起来', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '一个孩子跑来说「老师我喜欢你」', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '学生恍然大悟「啊！原来是这样！」', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '全班鸦雀无声、所有人都认真听讲', weights: { thinking: -8, control: 2 } },
    ],
  },
  {
    id: 29, category: '教育理念', text: '学校组织教研活动，你最想参加的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '关于教育叙事 / 教学艺术的', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '关于学生心理 / 情感教育的', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '关于教学方法 / 学科前沿的', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '关于课堂数据 / 评估技术的', weights: { thinking: -8, structure: 2 } },
    ],
  },
  {
    id: 30, category: '教育理念', text: '你觉得自己最大的教学优势是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '把枯燥的知识变得像看剧一样有趣', weights: { thinking: 8, expression: 2 } },
      { label: 'B', text: '让每个孩子感受到被看见、被关注', weights: { thinking: 3, temperature: 2 } },
      { label: 'C', text: '把复杂的问题讲得清清楚楚明明白白', weights: { thinking: -3, structure: 2 } },
      { label: 'D', text: '让每个学生认真对待学习和自我成长', weights: { thinking: -8, control: 2 } },
    ],
  },

  // ====================  CONTROL  ====================
  {
    id: 6, category: '教学风格', text: '家长来学校观摩，你最希望他们看到的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '孩子纪律严明、所有人都跟着我的节奏走', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '课堂井井有条、每个环节按计划推进', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '孩子在讨论中自然生发想法，我只是引导', weights: { control: -3 } },
      { label: 'D', text: '孩子大胆举手、主动发问、不怕错', weights: { control: -8, temperature: 2 } },
    ],
  },
  {
    id: 7, category: '课堂管理', text: '面对一个总是捣乱的学生，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '用一个眼神或一句话就能让他安静下来', weights: { control: 8 } },
      { label: 'B', text: '制定明确的奖惩机制，用规则约束', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '让他担小组长 / 任务，把精力引到正事上', weights: { control: -3 } },
      { label: 'D', text: '找机会单独聊聊，了解背后的原因', weights: { control: -8, temperature: 2 } },
    ],
  },
  {
    id: 10, category: '教学场景', text: '如果让你上一节公开课，你最担心的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '出现意想不到的状况，场面失控', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '时间没踩到点，节奏崩了', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '学生太紧张放不开，没有真实的互动', weights: { control: -3, temperature: 2 } },
      { label: 'D', text: '学生太活跃，整个跑题跑飞了', weights: { control: -8, expression: 2 } },
    ],
  },
  {
    id: 14, category: '课堂管理', text: '学生之间发生了矛盾，你怎么处理？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '严肃叫停，明确指出问题所在，要求道歉', weights: { control: 8 } },
      { label: 'B', text: '按规则公正处理，谁对谁错说清楚', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '让双方各自说出感受，引导互相理解', weights: { control: -3, temperature: 2 } },
      { label: 'D', text: '让他们自己谈，我在旁边只做必要的引导', weights: { control: -8, temperature: 2 } },
    ],
  },
  {
    id: 20, category: '课堂管理', text: '你怎么看待课堂纪律？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '纪律是教学效果的保障，必须严格要求', weights: { control: 8, structure: 2 } },
      { label: 'B', text: '提前把规则说清楚并坚持执行', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '适度活泼说明孩子有活力，不必过分压制', weights: { control: -3, expression: 2 } },
      { label: 'D', text: '学生沉浸在内容里时，纪律自然就好了', weights: { control: -8, temperature: 2 } },
    ],
  },
  {
    id: 27, category: '课堂管理', text: '如果有学生抄袭作业，你会——',
    kind: 'multi-dim', tier: 'basic',
    notApplicableTo: ['学前'],
    options: [
      { label: 'A', text: '严肃处理，让他知道这是不可触碰的底线', weights: { control: 8 } },
      { label: 'B', text: '按规定处理，同时跟他分析抄袭的利弊', weights: { control: 3, structure: 2 } },
      { label: 'C', text: '半开玩笑「你这也抄得太不走心了吧」点醒他', weights: { control: -3, expression: 2 } },
      { label: 'D', text: '先了解他是不是遇到困难了，再决定怎么处理', weights: { control: -8, temperature: 2 } },
    ],
  },
];

if (BASIC_QUESTIONS.length !== 30) {
  throw new Error(`BASIC_QUESTIONS must have exactly 30 entries, got ${BASIC_QUESTIONS.length}`);
}
