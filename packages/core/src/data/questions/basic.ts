// packages/core/src/data/questions/basic.ts
import type { Question } from '../../types.js';

/**
 * 基础版 30 题，从 v1 quiz.js 迁移：每选项给主调+辅调各 ±5 权重
 * 迁移规则（v1 type → 新维度）：
 *   A 亲和力型 (W+G) → temperature:+5, control:-5
 *   B 逻辑专业型 (R+T) → structure:+5, thinking:-5
 *   C 可爱活泼型 (L+E) → structure:-5, expression:+5
 *   D 故事表现型 (E+F) → expression:+5, thinking:+5
 *   E 气场掌控型 (R+D) → structure:+5, control:+5
 */

const W_A = { temperature: 5, control: -5 };
const W_B = { structure: 5, thinking: -5 };
const W_C = { structure: -5, expression: 5 };
const W_D = { expression: 5, thinking: 5 };
const W_E = { structure: 5, control: 5 };

export const BASIC_QUESTIONS: Question[] = [
  {
    id: 1, category: '教学场景', text: '开学第一天，你走进教室，第一件事你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '微笑着跟每个孩子打招呼，努力记住他们的名字', weights: W_A },
      { label: 'B', text: '在黑板上写下今天的学习目标和课堂规则', weights: W_B },
      { label: 'C', text: '做一个夸张的自我介绍，顺便来个小才艺展示', weights: W_C },
      { label: 'D', text: '给孩子们讲一个关于自己的小故事', weights: W_D },
      { label: 'E', text: '站在讲台上环视全班，等所有人安静下来再开口', weights: W_E },
    ],
  },
  {
    id: 2, category: '师生互动', text: '有个孩子在课堂上突然哭了，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '走过去蹲下来，轻声问他发生了什么', weights: W_A },
      { label: 'B', text: '先让其他同学自习，有条理地了解情况', weights: W_B },
      { label: 'C', text: '悄悄递一张画着笑脸的小纸条逗他', weights: W_C },
      { label: 'D', text: '讲一个自己小时候也哭过的糗事', weights: W_D },
      { label: 'E', text: '先维持课堂秩序，课后再单独了解', weights: W_E },
    ],
  },
  {
    id: 3, category: '教学风格', text: '你最喜欢什么样的课堂氛围？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '温暖如家，孩子们敢说敢问，不怕犯错', weights: W_A },
      { label: 'B', text: '安静有序，每个人都沉浸在思考中', weights: W_B },
      { label: 'C', text: '热热闹闹，笑声不断，快乐就是生产力', weights: W_C },
      { label: 'D', text: '沉浸其中，像在看一场精彩的演出', weights: W_D },
      { label: 'E', text: '专注高效，一切尽在掌控，节奏感拉满', weights: W_E },
    ],
  },
  {
    id: 4, category: '备课方式', text: '备课时你最看重的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '这节课孩子们会有什么感受，是否被关注到', weights: W_A },
      { label: 'B', text: '知识框架是否完整严密，逻辑是否自洽', weights: W_B },
      { label: 'C', text: '怎么让课堂更有趣更好玩，有没有互动环节', weights: W_C },
      { label: 'D', text: '有什么好故事、好案例能让内容变生动', weights: W_D },
      { label: 'E', text: '时间分配是否合理，节奏是否紧凑有力', weights: W_E },
    ],
  },
  {
    id: 5, category: '师生互动', text: '学生说「老师我不会」，你通常的反应是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「没关系，老师陪你一起想想，不着急」', weights: W_A },
      { label: 'B', text: '「我们先把这个问题拆成几个小步骤来看」', weights: W_B },
      { label: 'C', text: '「来来来！老师教你一个超好记的神仙方法！」', weights: W_C },
      { label: 'D', text: '「你知道吗？有个小故事能帮你秒懂」', weights: W_D },
      { label: 'E', text: '「你先想想上节课讲的，跟这个有什么关系」', weights: W_E },
    ],
  },
  {
    id: 6, category: '教学风格', text: '家长来学校观摩，你最希望他们看到的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '孩子们在你身边都很放松、快乐、有安全感', weights: W_A },
      { label: 'B', text: '你教学的系统性和专业性，一目了然', weights: W_B },
      { label: 'C', text: '课堂充满活力和创意，完全不像传统课堂', weights: W_C },
      { label: 'D', text: '你的课堂像一场精心编排的精彩演出', weights: W_D },
      { label: 'E', text: '课堂纪律好、效率高、学生状态投入', weights: W_E },
    ],
  },
  {
    id: 7, category: '课堂管理', text: '面对一个总是捣乱的学生，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '找机会和他单独聊聊，了解背后的原因', weights: W_A },
      { label: 'B', text: '制定明确的规则和奖惩机制，用制度说话', weights: W_B },
      { label: 'C', text: '让他当小助手或小组长，把精力引导到正事上', weights: W_C },
      { label: 'D', text: '给他讲一个关于「选择与后果」的故事', weights: W_D },
      { label: 'E', text: '用一个眼神或一句话就能让他安静下来', weights: W_E },
    ],
  },
  {
    id: 8, category: '教学场景', text: '下课后，你最有可能在做什么？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '被几个孩子围着聊天，说说笑笑', weights: W_A },
      { label: 'B', text: '整理本节课的板书、笔记和待改进点', weights: W_B },
      { label: 'C', text: '和孩子们一起玩个小游戏或讨论有趣的事', weights: W_C },
      { label: 'D', text: '跟同事分享今天课上讲的一个精彩故事', weights: W_D },
      { label: 'E', text: '独自复盘——这节课哪里节奏没掌控好', weights: W_E },
    ],
  },
  {
    id: 9, category: '教育理念', text: '你觉得一个好老师最重要的品质是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '爱心和耐心——没有爱就没有教育', weights: W_A },
      { label: 'B', text: '专业能力和逻辑思维——要给学生一杯水，自己要有一桶水', weights: W_B },
      { label: 'C', text: '热情和感染力——能点燃学生的内驱力', weights: W_C },
      { label: 'D', text: '表达能力和创造力——让知识有温度', weights: W_D },
      { label: 'E', text: '权威感和掌控力——让学生学会敬畏', weights: W_E },
    ],
  },
  {
    id: 10, category: '教学场景', text: '如果让你上一节公开课，你最担心的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '学生们太紧张放不开，没有真实的互动', weights: W_A },
      { label: 'B', text: '教学环节的逻辑不够严密，出现漏洞', weights: W_B },
      { label: 'C', text: '课堂气氛不够活跃，大家都在发呆', weights: W_C },
      { label: 'D', text: '准备的故事和案例不够精彩、没打动人', weights: W_D },
      { label: 'E', text: '出现意想不到的状况，场面失控', weights: W_E },
    ],
  },
  {
    id: 11, category: '师生互动', text: '你会如何表扬一个进步很大的学生？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '摸摸他的头，真诚地说「老师为你骄傲」', weights: W_A },
      { label: 'B', text: '具体指出他哪些地方做得好、为什么进步了', weights: W_B },
      { label: 'C', text: '当着全班来个夸张的表扬仪式，配上音效', weights: W_C },
      { label: 'D', text: '给他讲一个「从后进到逆袭」的真实励志故事', weights: W_D },
      { label: 'E', text: '私下谈话，肯定他的努力并设定更高的目标', weights: W_E },
    ],
  },
  {
    id: 12, category: '教学方法', text: '面对一道很难的题目，全班都答不上来，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「没关系，这道题确实难，我们一起攻克它」', weights: W_A },
      { label: 'B', text: '从最基础的概念开始，一步步推导讲解', weights: W_B },
      { label: 'C', text: '「给你们讲个超搞笑的例子，保证秒懂！」', weights: W_C },
      { label: 'D', text: '「你们知道吗？这个问题的背后有个天才的故事」', weights: W_D },
      { label: 'E', text: '「给你们三分钟自己思考，然后我来提问」', weights: W_E },
    ],
  },
  {
    id: 13, category: '教学风格', text: '你理想的办公桌画面是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '摆着孩子们送的手工作品和手写卡片', weights: W_A },
      { label: 'B', text: '电脑旁贴着详细的教学计划和流程图', weights: W_B },
      { label: 'C', text: '放着各种有趣的教具和小道具', weights: W_C },
      { label: 'D', text: '到处都是书，还有各种有趣的素材剪报', weights: W_D },
      { label: 'E', text: '整洁有序，所有东西都在该在的位置', weights: W_E },
    ],
  },
  {
    id: 14, category: '课堂管理', text: '学生之间发生了矛盾，你怎么处理？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '让他们各自说出感受，引导双方互相理解', weights: W_A },
      { label: 'B', text: '按规则公正处理，谁对谁错一一说清楚', weights: W_B },
      { label: 'C', text: '先缓和气氛，用个玩笑让双方都消消气再说', weights: W_C },
      { label: 'D', text: '讲一个关于友谊的故事，让他们自己感悟', weights: W_D },
      { label: 'E', text: '严肃地叫停，明确指出问题所在，要求道歉', weights: W_E },
    ],
  },
  {
    id: 15, category: '教学场景', text: '你怎么记住学生的名字？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '开学第一周就努力记住每个人的名字和特点', weights: W_A },
      { label: 'B', text: '按座位表系统性地逐排记忆', weights: W_B },
      { label: 'C', text: '给每个人取个有趣的绰号，先记绰号再慢慢改回来', weights: W_C },
      { label: 'D', text: '把名字编成小故事或顺口溜来记', weights: W_D },
      { label: 'E', text: '先记住最需要关注的——经常捣蛋的和最优秀的', weights: W_E },
    ],
  },
  {
    id: 16, category: '教学方法', text: '课堂进入尾声，还剩 3 分钟，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '温和地总结，并关心大家的感受「今天开心吗？」', weights: W_A },
      { label: 'B', text: '快速回顾本节课的知识框架，强调重点', weights: W_B },
      { label: 'C', text: '带大家做一个有趣的课堂小收尾游戏', weights: W_C },
      { label: 'D', text: '用一个小悬念结束，让大家期待下节课', weights: W_D },
      { label: 'E', text: '布置作业，交代清楚下节课预习要求', weights: W_E },
    ],
  },
  {
    id: 17, category: '教学场景', text: '学生突然提了一个跟课程无关的问题，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '先肯定他的好奇心，简单回应后巧妙引导回主题', weights: W_A },
      { label: 'B', text: '「这个问题很好，课后我们可以单独探讨」', weights: W_B },
      { label: 'C', text: '顺势来个小讨论，反正大家都在想这个', weights: W_C },
      { label: 'D', text: '用这个问题引出一个跟课程相关的好故事', weights: W_D },
      { label: 'E', text: '礼貌地说明，然后继续按计划推进教学', weights: W_E },
    ],
  },
  {
    id: 18, category: '教学方法', text: '你认为好的板书应该是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '看着舒服，颜色搭配温暖，让人放松', weights: W_A },
      { label: 'B', text: '结构清晰、层次分明，逻辑关系一目了然', weights: W_B },
      { label: 'C', text: '图文并茂，最好还能画点可爱的插画', weights: W_C },
      { label: 'D', text: '像一幅画一样有画面感和故事性', weights: W_D },
      { label: 'E', text: '简洁有力，关键词突出，让人过目不忘', weights: W_E },
    ],
  },
  {
    id: 19, category: '教学风格', text: '如果让你写教师寄语，你的风格更接近——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「每个孩子都是一颗星星，愿你越来越闪亮 ✨」', weights: W_A },
      { label: 'B', text: '「学会方法比学会知识更重要，愿你独立思考」', weights: W_B },
      { label: 'C', text: '「加油鸭！每一天都要元气满满向前冲！🚀」', weights: W_C },
      { label: 'D', text: '「你的故事才刚开始写，下一章会更精彩 📖」', weights: W_D },
      { label: 'E', text: '「自律者自由，希望你严格要求自己 💪」', weights: W_E },
    ],
  },
  {
    id: 20, category: '课堂管理', text: '你怎么看待课堂纪律？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '好的师生关系比好的规则更有效', weights: W_A },
      { label: 'B', text: '没有规矩不成方圆，规则要提前说清并严格执行', weights: W_B },
      { label: 'C', text: '适度的自由和活泼说明大家有活力嘛', weights: W_C },
      { label: 'D', text: '当学生沉浸在内容里，纪律问题自然就少了', weights: W_D },
      { label: 'E', text: '纪律是教学效果的保障，必须严格要求', weights: W_E },
    ],
  },
  {
    id: 21, category: '教学风格', text: '你更享受课堂的哪个瞬间？',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '下课后一个孩子跑来说「老师我喜欢你」', weights: W_A },
      { label: 'B', text: '看到学生恍然大悟「啊！原来是这样！」', weights: W_B },
      { label: 'C', text: '全班一起哈哈大笑的那一刻', weights: W_C },
      { label: 'D', text: '讲到高潮处所有眼睛都亮起来的那一刻', weights: W_D },
      { label: 'E', text: '全班鸦雀无声、所有人都认真听讲的那一刻', weights: W_E },
    ],
  },
  {
    id: 22, category: '教学方法', text: '如果要你做一个课件，你会花最多时间在——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '选择温暖的配色和有温度的图片素材', weights: W_A },
      { label: 'B', text: '梳理内容的逻辑结构，确保层层递进', weights: W_B },
      { label: 'C', text: '加各种有趣的动画、表情包和互动环节', weights: W_C },
      { label: 'D', text: '找最好的故事案例和视觉呈现素材', weights: W_D },
      { label: 'E', text: '把重点标注清楚，设计好课堂节奏', weights: W_E },
    ],
  },
  {
    id: 23, category: '师生互动', text: '你对学生说「加油」的频率和方式——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '经常说，而且会配上温暖的笑容和眼神', weights: W_A },
      { label: 'B', text: '说得比较克制，更倾向于给出具体可行的建议', weights: W_B },
      { label: 'C', text: '不说「加油」，会说「冲鸭！」「你超棒的！」', weights: W_C },
      { label: 'D', text: '会用故事和比喻来鼓励，而非直接说空话', weights: W_D },
      { label: 'E', text: '很少口头鼓励，更倾向于用行动和标准来表达', weights: W_E },
    ],
  },
  {
    id: 24, category: '教育理念', text: '面试时校长问「你的教学风格是什么」，你的回答——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '「我希望成为学生信赖的人，而不仅仅是老师」', weights: W_A },
      { label: 'B', text: '「我注重知识体系的构建和系统性的思维训练」', weights: W_B },
      { label: 'C', text: '「我的课堂永远充满快乐和惊喜！」', weights: W_C },
      { label: 'D', text: '「我擅长用故事和场景让知识变得有温度」', weights: W_D },
      { label: 'E', text: '「我能让每个学生都认真对待学习和成长」', weights: W_E },
    ],
  },
  {
    id: 25, category: '教学方法', text: '期末复习时，你的策略是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '关注每个学生的情绪状态，不让他们太焦虑', weights: W_A },
      { label: 'B', text: '整理系统的复习框架和知识图谱，高效推进', weights: W_B },
      { label: 'C', text: '用游戏和竞赛让复习不那么枯燥无聊', weights: W_C },
      { label: 'D', text: '把重点知识编成故事和口诀帮助记忆', weights: W_D },
      { label: 'E', text: '严格按计划推进复习进度，绝不能拖', weights: W_E },
    ],
  },
  {
    id: 26, category: '教学风格', text: '如果你在社交媒体上分享教学日常，风格会是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '分享和孩子们的温馨日常和感人瞬间', weights: W_A },
      { label: 'B', text: '分享教学方法和干货知识总结', weights: W_B },
      { label: 'C', text: '分享课堂上的搞笑段子和欢乐时刻', weights: W_C },
      { label: 'D', text: '分享课堂上的灵感、创意和精彩瞬间', weights: W_D },
      { label: 'E', text: '很少分享，觉得工作就该认真工作', weights: W_E },
    ],
  },
  {
    id: 27, category: '课堂管理', text: '如果有学生抄袭作业，你会——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '先了解他是不是遇到困难了，再决定怎么处理', weights: W_A },
      { label: 'B', text: '按规定处理，同时跟他分析抄袭的利弊', weights: W_B },
      { label: 'C', text: '半开玩笑地说「你这也抄得太不走心了吧哈哈」', weights: W_C },
      { label: 'D', text: '讲一个关于「诚信」的引人深思的小故事', weights: W_D },
      { label: 'E', text: '严肃处理，让他知道这是不可触碰的底线', weights: W_E },
    ],
  },
  {
    id: 28, category: '教育理念', text: '你理想的师生关系是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '像家人一样亲密温暖、互相牵挂', weights: W_A },
      { label: 'B', text: '像导师和学徒一样专业而严谨', weights: W_B },
      { label: 'C', text: '像好朋友一样轻松愉快、没代沟', weights: W_C },
      { label: 'D', text: '像故事里的引路人和探险者，一起冒险', weights: W_D },
      { label: 'E', text: '像教练和队员一样，目标明确、相互信任', weights: W_E },
    ],
  },
  {
    id: 29, category: '教育理念', text: '学校组织教研活动，你最想参加的是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '关于学生心理健康和情感教育的', weights: W_A },
      { label: 'B', text: '关于教学方法和学科前沿的', weights: W_B },
      { label: 'C', text: '关于创意课堂和游戏化教学的', weights: W_C },
      { label: 'D', text: '关于教育叙事和教学艺术的', weights: W_D },
      { label: 'E', text: '关于课堂管理和班级建设的', weights: W_E },
    ],
  },
  {
    id: 30, category: '教育理念', text: '你觉得自己最大的教学优势是——',
    kind: 'multi-dim', tier: 'basic',
    options: [
      { label: 'A', text: '让每个孩子都感受到被爱和被关注', weights: W_A },
      { label: 'B', text: '把复杂的问题讲得清清楚楚明明白白', weights: W_B },
      { label: 'C', text: '让课堂变成大家每天最期待的地方', weights: W_C },
      { label: 'D', text: '把枯燥的知识变得像看剧一样有趣', weights: W_D },
      { label: 'E', text: '让每个学生都认真对待学习和自我成长', weights: W_E },
    ],
  },
];

if (BASIC_QUESTIONS.length !== 30) {
  throw new Error(`BASIC_QUESTIONS must have exactly 30 entries, got ${BASIC_QUESTIONS.length}`);
}
