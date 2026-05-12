// packages/core/src/data/questions/pro-extra.ts
import type { Question } from '../../types.js';

/**
 * 专业版多出的 20 题（id 31-50），让 pro 题库达到 spec 承诺的 60 题。
 *
 * 设计原则（按 spec 6.1 / 6.2）：
 * - 13 道情境多维打分题（每选项 3-4 维度权重，比基础版的 2 维更细）
 * - 7 道强迫二选一（关键维度纯化，避免社会期望度污染）
 * - 题目情境与基础版 30 题完全不重复（新场景：AI 抄袭、家校沟通、班级动态等）
 * - 多维权重让 5 维度都有充分覆盖
 *
 * pro 题库总量 = 30 basic + 20 pro_extra + 5 growth + 5 anti-fake = 60 题
 * 题型比例 = ~72% multi-dim + ~23% forced-choice + ~5% anti-fake
 */
export const PRO_EXTRA_QUESTIONS: Question[] = [
  // ========== 多维打分题（13 道）==========

  {
    id: 31, category: '师生互动', text: '课后一个学生不肯走，欲言又止地跟你说了一件家里的事，你的本能反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '立刻放下手头的事陪他坐下，告诉他随时可以来找你',
        weights: { temperature: 8, control: -3, thinking: 3 } },
      { label: 'B', text: '认真听完，告诉他你打算怎么帮他、有几种可能的路径',
        weights: { temperature: 5, structure: 5, thinking: -5 } },
      { label: 'C', text: '先用一个轻松的话头把气氛缓下来，再慢慢聊',
        weights: { expression: 8, structure: -3, temperature: 3 } },
      { label: 'D', text: '给他讲一个"我也遇到过类似事"的小故事让他知道不孤单',
        weights: { expression: 5, thinking: 8, temperature: 5 } },
      { label: 'E', text: '简短听完，告诉他这事你会持续关注，但他得先继续上课/生活',
        weights: { control: 5, structure: 3, thinking: -5 } },
    ],
  },

  {
    id: 33, category: '师生互动', text: '一个学生当着全班说"老师，我觉得你刚才讲错了"，你的真实反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '立即停下来认真听他说，欣赏他敢质疑',
        weights: { temperature: 6, control: -5, thinking: -3 } },
      { label: 'B', text: '让他完整说完，然后跟全班一起拆解到底哪里有分歧',
        weights: { structure: 8, thinking: -8, control: 3 } },
      { label: 'C', text: '半开玩笑承认"哎呀老师老了脑子转得慢"，但回去会查证',
        weights: { expression: 8, temperature: 5, structure: -3 } },
      { label: 'D', text: '让他先想想"为什么觉得错了"，借机讲一个相关的真实故事',
        weights: { expression: 5, thinking: 5, control: -3 } },
      { label: 'E', text: '说"我们下课对答案"——课堂节奏不能被打断',
        weights: { control: 8, structure: 5, expression: -3 } },
    ],
  },

  {
    id: 34, category: '备课方式', text: '设计一个新章节的开篇 5 分钟，你最想怎么开场——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '抛一个让学生想到自己经历的小问题，让大家先聊',
        weights: { temperature: 5, control: -5, expression: 3 } },
      { label: 'B', text: '画出这一章和上一章的逻辑关系图，先建立框架',
        weights: { structure: 8, thinking: -8, control: 3 } },
      { label: 'C', text: '设一个出乎意料的谜题，让学生忍不住想破解',
        weights: { structure: -3, expression: 5, thinking: -3 } },
      { label: 'D', text: '用一个真实人物或事件的故事引入',
        weights: { expression: 8, thinking: 8, structure: -3 } },
      { label: 'E', text: '直接讲今天的学习目标 + 评估方式',
        weights: { structure: 8, control: 5, thinking: -3 } },
    ],
  },

  {
    id: 36, category: '课堂管理', text: '一个学生的作业本上画了一只奇怪的小怪兽，你的处理——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '笑着问这是什么，并告诉他下次可以画在草稿本上',
        weights: { temperature: 6, control: -3, thinking: 3 } },
      { label: 'B', text: '圈出来，旁边写一句"想象力很好，但作业本要保持整洁"',
        weights: { structure: 6, temperature: 3, thinking: -3 } },
      { label: 'C', text: '把它拍下来发到家长群里，配文"我们班的小艺术家"',
        weights: { expression: 8, temperature: 5, structure: -3 } },
      { label: 'D', text: '把它当引子，下节课让全班想象一个新的小怪兽设定',
        weights: { expression: 5, thinking: 8, control: -5 } },
      { label: 'E', text: '严肃跟他讲明白：作业本不是涂鸦本',
        weights: { control: 8, structure: 5, temperature: -5 } },
    ],
  },

  {
    id: 38, category: '教育理念', text: '一个总让你头疼的学生忽然有了进步，你最自然的回应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '私下找他真诚说"我看到了，老师为你高兴"',
        weights: { temperature: 8, control: -5, expression: -3 } },
      { label: 'B', text: '跟他细致分析他做对的具体方法是什么',
        weights: { thinking: -5, structure: 8, control: -3 } },
      { label: 'C', text: '当着全班来个夸张的"今日进步之星"小仪式',
        weights: { expression: 8, temperature: 5, control: 3 } },
      { label: 'D', text: '跟他讲一个"种子破土"的小比喻',
        weights: { expression: 5, thinking: 8, temperature: 5 } },
      { label: 'E', text: '简短点头说"继续保持"——不大动声色',
        weights: { control: 5, expression: -5, temperature: -3 } },
    ],
  },

  {
    id: 39, category: '师生互动', text: '学生发起一场"我们班谁课讲得最好"的小 PK，你最自然的反应——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '让他们说说为什么觉得这位"对方老师"好，认真听完',
        weights: { temperature: 6, control: -5, thinking: -3 } },
      { label: 'B', text: '解释"每个老师有自己的方法，但这门学科本质是..."',
        weights: { structure: 5, thinking: -8, control: 3 } },
      { label: 'C', text: '装作很受伤"哎呀你们移情别恋啦"',
        weights: { expression: 8, structure: -3, temperature: 5 } },
      { label: 'D', text: '讲一个"两个名厨用不同方法做同道菜"的小段子',
        weights: { expression: 5, thinking: 5, structure: -3 } },
      { label: 'E', text: '不接这个话题，请大家"专心上课"',
        weights: { control: 8, structure: 5, expression: -5 } },
    ],
  },

  {
    id: 41, category: '教学方法', text: '学生作业里出现明显的 AI 生成痕迹，你的第一动作——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '找他单独聊聊，先了解他最近学习上遇到了什么困难',
        weights: { temperature: 8, control: -5, thinking: 3 } },
      { label: 'B', text: '制定一份明确的"AI 使用规则"并解释为什么这样定',
        weights: { structure: 8, thinking: -5, control: 5 } },
      { label: 'C', text: '上课讲一个"AI 帮你 vs 替你"的小段子点醒大家',
        weights: { expression: 8, temperature: 3, structure: -3 } },
      { label: 'D', text: '给他讲一个"自己写出来的字才是自己的"的真实故事',
        weights: { expression: 5, thinking: 8, temperature: 3 } },
      { label: 'E', text: '严肃处理，明确这是学术不诚信的底线',
        weights: { control: 10, structure: 5, temperature: -5 } },
    ],
  },

  {
    id: 42, category: '教学场景', text: '学校要求你给自己班的"教学满意度"做自评，你最看重哪个指标——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '有没有孩子最近开始疏远我',
        weights: { temperature: 8, thinking: 3, control: -3 } },
      { label: 'B', text: '作业完成质量和课堂参与度的客观数据',
        weights: { structure: 5, thinking: -8, control: 3 } },
      { label: 'C', text: '课间还有多少学生主动找我聊天',
        weights: { temperature: 5, expression: 5 } },
      { label: 'D', text: '学生在我课上出现了多少个"啊哈"瞬间',
        weights: { expression: 5, thinking: 5, temperature: 3 } },
      { label: 'E', text: '学生测验成绩 + 课堂纪律状况',
        weights: { control: 5, structure: 5, thinking: -5 } },
    ],
  },

  {
    id: 44, category: '教育理念', text: '面对家长群里"鸡娃"焦虑，你最自然会说——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '"心疼孩子，慢一点也没关系，每个孩子节奏不同"',
        weights: { temperature: 8, control: -5, thinking: 3 } },
      { label: 'B', text: '"看孩子具体情况，不能一刀切，需要数据分析"',
        weights: { structure: 5, thinking: -5, control: 3 } },
      { label: 'C', text: '"妈妈别焦虑啦，孩子有他自己的小宇宙哒"',
        weights: { expression: 5, temperature: 5, structure: -3 } },
      { label: 'D', text: '给家长讲一个"我见过被鸡娃出事的真实故事"',
        weights: { expression: 5, thinking: 8, temperature: 3 } },
      { label: 'E', text: '"鸡得对方法、有边界，是必要的"',
        weights: { control: 5, structure: 5, thinking: -5 } },
    ],
  },

  {
    id: 46, category: '课堂管理', text: '班里两派学生开始小团体互不来往，你的处理——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '找两边各几个孩子私下聊聊，了解感受',
        weights: { temperature: 5, control: -5, thinking: 3 } },
      { label: 'B', text: '重新分小组任务，强制混合搭配',
        weights: { structure: 5, control: 5, thinking: -3 } },
      { label: 'C', text: '设计一个全班一起完成的有趣大挑战',
        weights: { expression: 5, structure: -3, temperature: 3 } },
      { label: 'D', text: '上课讲一个"两群人原本是误会"的真实故事',
        weights: { expression: 5, thinking: 8, temperature: 3 } },
      { label: 'E', text: '直接当众点出这种现象，明确"这不行"',
        weights: { control: 8, structure: 3, temperature: -3 } },
    ],
  },

  {
    id: 47, category: '师生互动', text: '你最珍视的学生反馈是哪一种——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '课后跑过来抱住你说"老师我喜欢你"',
        weights: { temperature: 8, thinking: 3, expression: 3 } },
      { label: 'B', text: '在课堂上提出一个让你都没想过的好问题',
        weights: { thinking: -5, structure: 3, control: -3 } },
      { label: 'C', text: '在小红书写"我们老师太好玩了"的安利长文',
        weights: { expression: 8, temperature: 3, structure: -3 } },
      { label: 'D', text: '多年后专门写信告诉你"你某节课改变了我"',
        weights: { thinking: 8, expression: 3, temperature: 3 } },
      { label: 'E', text: '期末时全班分数比上一届进步明显',
        weights: { control: 5, structure: 5, thinking: -5 } },
    ],
  },

  {
    id: 49, category: '教学方法', text: '让你设计一节"创新课"，你最想做哪种——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '设计一个让学生互相分享、彼此倾听的环节',
        weights: { temperature: 5, control: -5, expression: 3 } },
      { label: 'B', text: '把学科最前沿的研究讲给学生听',
        weights: { structure: 5, thinking: -8, control: -3 } },
      { label: 'C', text: '设计一个颠覆传统课堂的游戏化形式',
        weights: { structure: -5, expression: 8, control: -3 } },
      { label: 'D', text: '找一个跨学科的真实场景做整节沉浸课',
        weights: { expression: 5, thinking: 8, structure: -3 } },
      { label: 'E', text: '让学生分组互相教学，老师当评委',
        weights: { structure: 5, control: 5, thinking: -3 } },
    ],
  },

  {
    id: 50, category: '教学风格', text: '你最希望学生记住的不是知识点，而是——',
    kind: 'multi-dim', tier: 'pro',
    options: [
      { label: 'A', text: '"老师真的看见了我"的感觉',
        weights: { temperature: 8, thinking: 3, control: -3 } },
      { label: 'B', text: '"原来这件事可以被这样思考"的方法论',
        weights: { thinking: -8, structure: 3, control: 3 } },
      { label: 'C', text: '"老师总能让最闷的事变好玩"',
        weights: { expression: 8, structure: -3, temperature: 3 } },
      { label: 'D', text: '"老师讲过那个让我哭过的故事"',
        weights: { expression: 5, thinking: 8, temperature: 5 } },
      { label: 'E', text: '"在老师面前我从不敢糊弄自己"',
        weights: { control: 8, structure: 5, thinking: -3 } },
    ],
  },

  // ========== 强迫二选一题（7 道，关键维度极化）==========

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
