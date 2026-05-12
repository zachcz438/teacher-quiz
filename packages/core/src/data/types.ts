// packages/core/src/data/types.ts
import type { TeacherType } from '../types.js';

/**
 * 16 类型，按 Top-2 维度组合定义。详细画像在 Task 19 充实。
 *
 * 维度速查（参考 spec 2.5）：
 *   temperature: 温暖(W,high) / 冷静(C,low)
 *   structure:   严谨(R,high) / 灵活(L,low)
 *   expression:  外放(E,high) / 内敛(I,low)
 *   control:     主导(D,high) / 赋能(G,low)
 *   thinking:    感性(F,high) / 理性(T,low)
 */
export const TEACHER_TYPES: TeacherType[] = [
  {
    id: 1, name: '守望者', family: 'guardian',
    primary:   { dimension: 'temperature', polarity: 'high' },
    secondary: { dimension: 'control',     polarity: 'low' },
    tagline: '默默守护学生成长',
    personality: '你是那种把"看见每一个孩子"当作本能的人。在朋友眼里你温柔可靠，能在别人最需要的时候出现，却很少把自己的需求摆在最前面。课堂之外，你大概率也是身边人的情绪树洞。',
    superpowers: ['让最害羞的孩子也敢举手发言', '记得每个学生的小心事和家庭背景', '在学生情绪崩溃时第一时间在场'],
    weaknesses: ['可能因为太想保护每个人而忽视了规则', '对自己的"被需要"过度依赖，不太擅长说不'],
    highlight: '在所有"暖系"老师里，你的特别之处是温度从不被消耗——你给得越多，似乎越有得给。这是一种稀有的"补偿型"温度，是天赋。',
  },
  {
    id: 2, name: '逻辑家', family: 'thinker',
    primary:   { dimension: 'structure', polarity: 'high' },
    secondary: { dimension: 'thinking',  polarity: 'low' },
    tagline: '严密构建知识体系',
    personality: '你天生喜欢把复杂的东西拆成一格一格、再用清晰的关系连起来。生活里你也是这样：旅行行程、家具采购、人际关系，都能被你画成一张表。别人觉得你"太较真"，但你知道这是你和世界相处的方式。',
    superpowers: ['一节课能把零散知识点串成一棵树', '学生听完会说"我以前学的好像第一次懂了"', '错题分析比学生自己还细'],
    weaknesses: ['当学生需要的是情绪安抚时你常给的是"步骤拆解"', '对"差不多就行"的容忍度有点低'],
    highlight: '在所有"思辨系"老师里，你的特别之处是把"清晰"做到了极致。你的板书和讲义本身就是教学产品，可以单独出版。',
  },
  {
    id: 3, name: '演艺家', family: 'performer',
    primary:   { dimension: 'structure',  polarity: 'low' },
    secondary: { dimension: 'expression', polarity: 'high' },
    tagline: '把课堂玩成舞台',
    personality: '你的存在感是会"溢出"的那种。朋友聚会有你在，气氛永远不会冷场；你天生会用表情、肢体、声音去抓住注意力。你害怕的从不是"没准备好"，而是"没意思"。',
    superpowers: ['五分钟把发呆的孩子全部叫醒', '把枯燥概念变成段子和小游戏', '学生会主动期待你的下一节课'],
    weaknesses: ['临场发挥太多，可能漏掉知识点', '"好玩"有时盖过了"学到了什么"'],
    highlight: '在所有"舞台系"老师里，你的特别之处是"自带能量场"——你不靠教具靠肢体也能撑满 45 分钟。这是表演天赋，不是教学技巧。',
  },
  {
    id: 4, name: '吟游者', family: 'performer',
    primary:   { dimension: 'expression', polarity: 'high' },
    secondary: { dimension: 'thinking',   polarity: 'high' },
    tagline: '用故事点燃心灵',
    personality: '你天生是个会讲故事的人。任何概念到你嘴里都能变成一段有人物、有起承转合的小剧场。私下你也是那种朋友想"听你讲讲"的人——你看到的世界比别人多一层叙事。',
    superpowers: ['用一个故事让学生记住一个公式', '能让最沉闷的内容有"画面感"', '学生十年后还记得你讲过的某个比喻'],
    weaknesses: ['故事讲嗨了课堂时间会失控', '不擅长应付"老师，能直接告诉我答案吗"的学生'],
    highlight: '在所有"舞台系"老师里，你的特别之处是把感性和叙事结合得恰到好处——你不是表演型，你是讲述型，是另一种感染力。',
  },
  {
    id: 5, name: '统帅', family: 'commander',
    primary:   { dimension: 'structure', polarity: 'high' },
    secondary: { dimension: 'control',   polarity: 'high' },
    tagline: '全局掌控、号令清晰',
    personality: '你天生喜欢"一切都在掌握中"的感觉。生活里别人的混乱让你不舒服，你会忍不住接管。朋友形容你"靠谱到可怕"——他们知道交给你的事情不会出问题。',
    superpowers: ['一个眼神课堂就能安静下来', '45 分钟节奏卡得分秒不差', '学生在你课上从不敢偷懒'],
    weaknesses: ['学生可能怕你大于喜欢你', '对"突发状况"有时反应不够柔'],
    highlight: '在所有"掌控系"老师里，你的特别之处是兼有结构和气场——你的"严"是有体系的，不是一时性子，这让学生信服。',
  },
  {
    id: 6, name: '耕耘者', family: 'guardian',
    primary:   { dimension: 'temperature', polarity: 'high' },
    secondary: { dimension: 'structure',   polarity: 'high' },
    tagline: '温暖中持续打磨',
    personality: '你像那种把"事做扎实"当本能的人——温柔但不软弱，温暖但有原则。朋友觉得你做事"靠谱又用心"，少有的能在严格和体贴之间找到平衡的人。',
    superpowers: ['学生会"又怕你又喜欢你"', '能记得每个学生的进步细节', '把陪伴变成日积月累的力量'],
    weaknesses: ['对自己要求太高容易累', '可能对"佛系"学生不够耐心'],
    highlight: '在所有"守护系"老师里，你的特别之处是"严慈并存"——既给得了情感安全感，又能扛起规矩，这种组合稀缺。',
  },
  {
    id: 7, name: '导师', family: 'guardian',
    primary:   { dimension: 'temperature', polarity: 'high' },
    secondary: { dimension: 'thinking',    polarity: 'low' },
    tagline: '温润引领、循循善诱',
    personality: '你有一种"不动声色把人带到光里"的能力。说话不重，但每句都有分量；不轻易给答案，喜欢让对方自己想明白。朋友圈里你是大家"想找个明白人"时第一个想起的人。',
    superpowers: ['用提问而非答案带学生走', '学生会把私事都告诉你', '让学生学会自己思考'],
    weaknesses: ['有时太克制，学生没法第一时间感受到你的关心', '不擅长"快节奏推进"的课堂'],
    highlight: '在所有"守护系"老师里，你的特别之处是温暖中带着理性的清醒——你不会被情绪卷走，永远能给学生稳稳的指引。',
  },
  {
    id: 8, name: '使者', family: 'guardian',
    primary:   { dimension: 'temperature', polarity: 'high' },
    secondary: { dimension: 'expression',  polarity: 'high' },
    tagline: '传递温暖与知识',
    personality: '你像一个"自带光"的人——走到哪里都能让那里热起来。你天然会用语言和神态让人感到被欢迎、被看到。朋友说和你在一起"会觉得自己也变得有趣"。',
    superpowers: ['第一节课就能让全班记住你', '用感染力点燃学生的学习意愿', '家长会上你最受欢迎'],
    weaknesses: ['"被喜欢"有时盖过了"被尊重"', '需要小心控场，避免课堂太放飞'],
    highlight: '在所有"守护系"老师里，你的特别之处是温暖向外辐射——很多人温暖但内敛，你温暖且能把它传递出去，这是稀有组合。',
  },
  {
    id: 9, name: '思辨家', family: 'thinker',
    primary:   { dimension: 'temperature', polarity: 'low' },
    secondary: { dimension: 'thinking',    polarity: 'low' },
    tagline: '冷静批判思考',
    personality: '你大概是那种"先想清楚再说"的人。情绪在你这里很少喧宾夺主——别人激动时你在拆解逻辑，别人感性时你在追问"是吗？"。这让你看起来有距离感，但思考的深度也是因此而来。',
    superpowers: ['一句话戳破学生的思维误区', '不会被流行的"教育金句"忽悠', '学生学到的是"怎么想"而非"想什么"'],
    weaknesses: ['对学生的情绪反应可能慢半拍', '低龄段学生可能觉得你"不够温暖"'],
    highlight: '在所有"思辨系"老师里，你的特别之处是冷静和理性同时高——你是那种不靠情感共鸣也能让学生服气的老师，靠的是真东西。',
  },
  {
    id: 10, name: '教练', family: 'commander',
    primary:   { dimension: 'structure', polarity: 'high' },
    secondary: { dimension: 'control',   polarity: 'low' },
    tagline: '严谨打磨 + 赋能成长',
    personality: '你的本质角色更像"教练"——清晰、严谨，但目的是让对方"自己强大"，不是让对方依赖你。朋友说和你共事"压力大但收获大"，你不是 push 型而是磨砺型。',
    superpowers: ['能把学生的"怕"转成"敢"', '细节上抠得严，但永远给学生留思考空间', '学生离开你后还能持续进步'],
    weaknesses: ['过程可能比结果更让你满足，节奏有时偏慢', '对"功利型"学生你可能不够耐心'],
    highlight: '在所有"掌控系"老师里，你的特别之处是严而不专制——你给规矩但留空间，这种边界感让学生从"被推动"变成"自驱动"。',
  },
  {
    id: 11, name: '启发者', family: 'guide',
    primary:   { dimension: 'structure', polarity: 'low' },
    secondary: { dimension: 'control',   polarity: 'low' },
    tagline: '用提问引导自悟',
    personality: '你不是那种"给答案"的人。你天生喜欢追问，喜欢看到对方自己想出来时的眼睛——那个 aha 的瞬间是你的兴奋点。生活中你是大家心里那个"不催不push但能让人想清楚"的人。',
    superpowers: ['用问题代替讲授，学生学得更深', '能让"答不上来"变成"想多一点"', '培养出来的学生有独立思考力'],
    weaknesses: ['课堂节奏慢，赶进度的场景不适合', '对"只想要标准答案"的学生不够友好'],
    highlight: '在所有"引路系"老师里，你的特别之处是把启发做到了苏格拉底式——你的提问本身就是教学，不是辅助。',
  },
  {
    id: 12, name: '策士', family: 'thinker',
    primary:   { dimension: 'control',  polarity: 'high' },
    secondary: { dimension: 'thinking', polarity: 'low' },
    tagline: '理性运筹、谋划全局',
    personality: '你的脑子总在跑两步以上：眼前在做的、下一步会怎样、再下一步又会怎样。朋友说你"看事情比别人清醒"。你不擅长被推着走，更喜欢自己规划路径。',
    superpowers: ['一开学就把整学期布局想清楚', '学生的成长路径你能精准预判', '能把"该刷题还是该理解"判断得准'],
    weaknesses: ['有时太理性会忽略学生情感诉求', '不擅长应付"非理性"的家长'],
    highlight: '在所有"思辨系"老师里，你的特别之处是把理性和掌控结合——你不是被动思考，是主动布局，这让你在长线培养上特别强。',
  },
  {
    id: 13, name: '传播者', family: 'thinker',
    primary:   { dimension: 'expression', polarity: 'high' },
    secondary: { dimension: 'thinking',   polarity: 'low' },
    tagline: '把复杂讲简单的话筒',
    personality: '你天生会"翻译"——把一件复杂的事用一个所有人都能听懂的方式讲出来。朋友里你常承担"解释器"的角色：政策、新闻、专业知识，到你这里就变得平易近人。',
    superpowers: ['一个比喻就把抽象概念讲透', '能让"听不懂"变成"原来这么简单"', '学生喜欢复述你说过的话'],
    weaknesses: ['有时为了通俗会牺牲精确', '需要警惕"讲嗨了"忽略个体差异'],
    highlight: '在所有"思辨系"老师里，你的特别之处是把理性的内核穿上了"听得懂"的外衣——你是知识的桥，是稀缺的"翻译型"老师。',
  },
  {
    id: 14, name: '观察者', family: 'guide',
    primary:   { dimension: 'expression', polarity: 'low' },
    secondary: { dimension: 'thinking',   polarity: 'high' },
    tagline: '静默感知每个细节',
    personality: '你说话不多，但看得很多。别人聊天你常常是那个"听了一会儿就能戳中要害"的人。朋友说你"安静但通透"——你的存在感不在声量，在洞察。',
    superpowers: ['一眼看出哪个学生今天状态不对', '能在不打扰的情况下给学生最准的反馈', '观察笔记是别的老师没有的资产'],
    weaknesses: ['"沉默"有时被误读为"冷淡"', '不擅长大场面的公开课/讲座'],
    highlight: '在所有"引路系"老师里，你的特别之处是把内敛变成了一种"在场"——你不打扰但学生能感觉到你在看着，这种安全感很特别。',
  },
  {
    id: 15, name: '演说家', family: 'performer',
    primary:   { dimension: 'structure',  polarity: 'high' },
    secondary: { dimension: 'expression', polarity: 'high' },
    tagline: '严谨内容 + 强场感染',
    personality: '你不是那种为了表演而表演的人——你的感染力建立在"我准备得很扎实"之上。朋友圈里你是大家临时需要"上去说几句"时第一个被想起的人。',
    superpowers: ['把一个知识点讲到学生想鼓掌', '在大班里也能把每个角落的注意力抓回来', '公开课能炸场'],
    weaknesses: ['1对1 场景你可能"用力过猛"', '对"不喜欢被注视"的内向学生不够友好'],
    highlight: '在所有"舞台系"老师里，你的特别之处是有内容也有气场——你不是只靠技巧，你是用底子撑起来的演说家。',
  },
  {
    id: 16, name: '倾听者', family: 'guardian',
    primary:   { dimension: 'temperature', polarity: 'high' },
    secondary: { dimension: 'expression',  polarity: 'low' },
    tagline: '给学生稀缺的"被看见"',
    personality: '你不抢话、不打断、不急着给建议。朋友说和你聊天"心里会慢慢松下来"。你提供的是这个时代越来越少的东西——一个不评判的耳朵和一双看见的眼睛。',
    superpowers: ['学生愿意把家里的事告诉你', '能让"沉默的孩子"开始说话', '永远是学生第一个想找的成年人'],
    weaknesses: ['课堂节奏可能偏慢', '需要主动表达时会有点不自在'],
    highlight: '在所有"守护系"老师里，你的特别之处是用"安静"传递温度——大多数温暖型老师靠表达，你靠在场。这是另一种珍贵的师生关系。',
  },
];

/** 通过 (主调维度+端向, 辅调维度+端向) 反查类型，顺序无关 */
export function findTypeByDimensions(
  d1: { dimension: string; polarity: string },
  d2: { dimension: string; polarity: string },
): TeacherType | undefined {
  return TEACHER_TYPES.find(t => {
    const a = (t.primary.dimension === d1.dimension && t.primary.polarity === d1.polarity)
           && (t.secondary.dimension === d2.dimension && t.secondary.polarity === d2.polarity);
    const b = (t.primary.dimension === d2.dimension && t.primary.polarity === d2.polarity)
           && (t.secondary.dimension === d1.dimension && t.secondary.polarity === d1.polarity);
    return a || b;
  });
}
