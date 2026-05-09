// Quiz Engine
const Q=[
{c:"cc1",l:"教学场景",q:"开学第一天，你走进教室，第一件事你会——",o:[
{l:"A",t:"微笑着跟每个孩子打招呼，努力记住他们的名字",T:"A"},{l:"B",t:"在黑板上写下今天的学习目标和课堂规则",T:"B"},{l:"C",t:"做一个夸张的自我介绍，顺便来个小才艺展示",T:"C"},{l:"D",t:"给孩子们讲一个关于自己的小故事",T:"D"},{l:"E",t:"站在讲台上环视全班，等所有人安静下来再开口",T:"E"}]},
{c:"ci1",l:"师生互动",q:"有个孩子在课堂上突然哭了，你会——",o:[
{l:"A",t:"走过去蹲下来，轻声问他发生了什么",T:"A"},{l:"B",t:"先让其他同学自习，有条理地了解情况",T:"B"},{l:"C",t:"悄悄递一张画着笑脸的小纸条逗他",T:"C"},{l:"D",t:"讲一个自己小时候也哭过的糗事",T:"D"},{l:"E",t:"先维持课堂秩序，课后再单独了解",T:"E"}]},
{c:"ct1",l:"教学风格",q:"你最喜欢什么样的课堂氛围？",o:[
{l:"A",t:"温暖如家，孩子们敢说敢问，不怕犯错",T:"A"},{l:"B",t:"安静有序，每个人都沉浸在思考中",T:"B"},{l:"C",t:"热热闹闹，笑声不断，快乐就是生产力",T:"C"},{l:"D",t:"沉浸其中，像在看一场精彩的演出",T:"D"},{l:"E",t:"专注高效，一切尽在掌控，节奏感拉满",T:"E"}]},
{c:"cm1",l:"备课方式",q:"备课时你最看重的是——",o:[
{l:"A",t:"这节课孩子们会有什么感受，是否被关注到",T:"A"},{l:"B",t:"知识框架是否完整严密，逻辑是否自洽",T:"B"},{l:"C",t:"怎么让课堂更有趣更好玩，有没有互动环节",T:"C"},{l:"D",t:"有什么好故事、好案例能让内容变生动",T:"D"},{l:"E",t:"时间分配是否合理，节奏是否紧凑有力",T:"E"}]},
{c:"ci1",l:"师生互动",q:"学生说「老师我不会」，你通常的反应是——",o:[
{l:"A",t:"「没关系，老师陪你一起想想，不着急」",T:"A"},{l:"B",t:"「我们先把这个问题拆成几个小步骤来看」",T:"B"},{l:"C",t:"「来来来！老师教你一个超好记的神仙方法！」",T:"C"},{l:"D",t:"「你知道吗？有个小故事能帮你秒懂」",T:"D"},{l:"E",t:"「你先想想上节课讲的，跟这个有什么关系」",T:"E"}]},
{c:"ct1",l:"教学风格",q:"家长来学校观摩，你最希望他们看到的是——",o:[
{l:"A",t:"孩子们在你身边都很放松、快乐、有安全感",T:"A"},{l:"B",t:"你教学的系统性和专业性，一目了然",T:"B"},{l:"C",t:"课堂充满活力和创意，完全不像传统课堂",T:"C"},{l:"D",t:"你的课堂像一场精心编排的精彩演出",T:"D"},{l:"E",t:"课堂纪律好、效率高、学生状态投入",T:"E"}]},
{c:"cs1",l:"课堂管理",q:"面对一个总是捣乱的学生，你会——",o:[
{l:"A",t:"找机会和他单独聊聊，了解背后的原因",T:"A"},{l:"B",t:"制定明确的规则和奖惩机制，用制度说话",T:"B"},{l:"C",t:"让他当小助手或小组长，把精力引导到正事上",T:"C"},{l:"D",t:"给他讲一个关于「选择与后果」的故事",T:"D"},{l:"E",t:"用一个眼神或一句话就能让他安静下来",T:"E"}]},
{c:"cc1",l:"教学场景",q:"下课后，你最有可能在做什么？",o:[
{l:"A",t:"被几个孩子围着聊天，说说笑笑",T:"A"},{l:"B",t:"整理本节课的板书、笔记和待改进点",T:"B"},{l:"C",t:"和孩子们一起玩个小游戏或讨论有趣的事",T:"C"},{l:"D",t:"跟同事分享今天课上讲的一个精彩故事",T:"D"},{l:"E",t:"独自复盘——这节课哪里节奏没掌控好",T:"E"}]},
{c:"cg1",l:"教育理念",q:"你觉得一个好老师最重要的品质是——",o:[
{l:"A",t:"爱心和耐心——没有爱就没有教育",T:"A"},{l:"B",t:"专业能力和逻辑思维——要给学生一杯水，自己要有一桶水",T:"B"},{l:"C",t:"热情和感染力——能点燃学生的内驱力",T:"C"},{l:"D",t:"表达能力和创造力——让知识有温度",T:"D"},{l:"E",t:"权威感和掌控力——让学生学会敬畏",T:"E"}]},
{c:"cc1",l:"教学场景",q:"如果让你上一节公开课，你最担心的是——",o:[
{l:"A",t:"学生们太紧张放不开，没有真实的互动",T:"A"},{l:"B",t:"教学环节的逻辑不够严密，出现漏洞",T:"B"},{l:"C",t:"课堂气氛不够活跃，大家都在发呆",T:"C"},{l:"D",t:"准备的故事和案例不够精彩、没打动人",T:"D"},{l:"E",t:"出现意想不到的状况，场面失控",T:"E"}]},
{c:"ci1",l:"师生互动",q:"你会如何表扬一个进步很大的学生？",o:[
{l:"A",t:"摸摸他的头，真诚地说「老师为你骄傲」",T:"A"},{l:"B",t:"具体指出他哪些地方做得好、为什么进步了",T:"B"},{l:"C",t:"当着全班来个夸张的表扬仪式，配上音效",T:"C"},{l:"D",t:"给他讲一个「从后进到逆袭」的真实励志故事",T:"D"},{l:"E",t:"私下谈话，肯定他的努力并设定更高的目标",T:"E"}]},
{c:"cm1",l:"教学方法",q:"面对一道很难的题目，全班都答不上来，你会——",o:[
{l:"A",t:"「没关系，这道题确实难，我们一起攻克它」",T:"A"},{l:"B",t:"从最基础的概念开始，一步步推导讲解",T:"B"},{l:"C",t:"「给你们讲个超搞笑的例子，保证秒懂！」",T:"C"},{l:"D",t:"「你们知道吗？这个问题的背后有个天才的故事」",T:"D"},{l:"E",t:"「给你们三分钟自己思考，然后我来提问」",T:"E"}]},
{c:"ct1",l:"教学风格",q:"你理想的办公桌画面是——",o:[
{l:"A",t:"摆着孩子们送的手工作品和手写卡片",T:"A"},{l:"B",t:"电脑旁贴着详细的教学计划和流程图",T:"B"},{l:"C",t:"放着各种有趣的教具和小道具",T:"C"},{l:"D",t:"到处都是书，还有各种有趣的素材剪报",T:"D"},{l:"E",t:"整洁有序，所有东西都在该在的位置",T:"E"}]},
{c:"cs1",l:"课堂管理",q:"学生之间发生了矛盾，你怎么处理？",o:[
{l:"A",t:"让他们各自说出感受，引导双方互相理解",T:"A"},{l:"B",t:"按规则公正处理，谁对谁错一一说清楚",T:"B"},{l:"C",t:"先缓和气氛，用个玩笑让双方都消消气再说",T:"C"},{l:"D",t:"讲一个关于友谊的故事，让他们自己感悟",T:"D"},{l:"E",t:"严肃地叫停，明确指出问题所在，要求道歉",T:"E"}]},
{c:"cc1",l:"教学场景",q:"你怎么记住学生的名字？",o:[
{l:"A",t:"开学第一周就努力记住每个人的名字和特点",T:"A"},{l:"B",t:"按座位表系统性地逐排记忆",T:"B"},{l:"C",t:"给每个人取个有趣的绰号，先记绰号再慢慢改回来",T:"C"},{l:"D",t:"把名字编成小故事或顺口溜来记",T:"D"},{l:"E",t:"先记住最需要关注的——经常捣蛋的和最优秀的",T:"E"}]},
{c:"cm1",l:"教学方法",q:"课堂进入尾声，还剩3分钟，你会——",o:[
{l:"A",t:"温和地总结，并关心大家的感受「今天开心吗？」",T:"A"},{l:"B",t:"快速回顾本节课的知识框架，强调重点",T:"B"},{l:"C",t:"带大家做一个有趣的课堂小收尾游戏",T:"C"},{l:"D",t:"用一个小悬念结束，让大家期待下节课",T:"D"},{l:"E",t:"布置作业，交代清楚下节课预习要求",T:"E"}]},
{c:"cc1",l:"教学场景",q:"学生突然提了一个跟课程无关的问题，你会——",o:[
{l:"A",t:"先肯定他的好奇心，简单回应后巧妙引导回主题",T:"A"},{l:"B",t:"「这个问题很好，课后我们可以单独探讨」",T:"B"},{l:"C",t:"顺势来个小讨论，反正大家都在想这个",T:"C"},{l:"D",t:"用这个问题引出一个跟课程相关的好故事",T:"D"},{l:"E",t:"礼貌地说明，然后继续按计划推进教学",T:"E"}]},
{c:"cm1",l:"教学方法",q:"你认为好的板书应该是——",o:[
{l:"A",t:"看着舒服，颜色搭配温暖，让人放松",T:"A"},{l:"B",t:"结构清晰、层次分明，逻辑关系一目了然",T:"B"},{l:"C",t:"图文并茂，最好还能画点可爱的插画",T:"C"},{l:"D",t:"像一幅画一样有画面感和故事性",T:"D"},{l:"E",t:"简洁有力，关键词突出，让人过目不忘",T:"E"}]},
{c:"ct1",l:"教学风格",q:"如果让你写教师寄语，你的风格更接近——",o:[
{l:"A",t:"「每个孩子都是一颗星星，愿你越来越闪亮✨」",T:"A"},{l:"B",t:"「学会方法比学会知识更重要，愿你独立思考」",T:"B"},{l:"C",t:"「加油鸭！每一天都要元气满满向前冲！🚀」",T:"C"},{l:"D",t:"「你的故事才刚开始写，下一章会更精彩📖」",T:"D"},{l:"E",t:"「自律者自由，希望你严格要求自己💪」",T:"E"}]},
{c:"cs1",l:"课堂管理",q:"你怎么看待课堂纪律？",o:[
{l:"A",t:"好的师生关系比好的规则更有效",T:"A"},{l:"B",t:"没有规矩不成方圆，规则要提前说清并严格执行",T:"B"},{l:"C",t:"适度的自由和活泼说明大家有活力嘛",T:"C"},{l:"D",t:"当学生沉浸在内容里，纪律问题自然就少了",T:"D"},{l:"E",t:"纪律是教学效果的保障，必须严格要求",T:"E"}]},
{c:"ct1",l:"教学风格",q:"你更享受课堂的哪个瞬间？",o:[
{l:"A",t:"下课后一个孩子跑来说「老师我喜欢你」",T:"A"},{l:"B",t:"看到学生恍然大悟「啊！原来是这样！」",T:"B"},{l:"C",t:"全班一起哈哈大笑的那一刻",T:"C"},{l:"D",t:"讲到高潮处所有眼睛都亮起来的那一刻",T:"D"},{l:"E",t:"全班鸦雀无声、所有人都认真听讲的那一刻",T:"E"}]},
{c:"cm1",l:"教学方法",q:"如果要你做一个课件，你会花最多时间在——",o:[
{l:"A",t:"选择温暖的配色和有温度的图片素材",T:"A"},{l:"B",t:"梳理内容的逻辑结构，确保层层递进",T:"B"},{l:"C",t:"加各种有趣的动画、表情包和互动环节",T:"C"},{l:"D",t:"找最好的故事案例和视觉呈现素材",T:"D"},{l:"E",t:"把重点标注清楚，设计好课堂节奏",T:"E"}]},
{c:"ci1",l:"师生互动",q:"你对学生说「加油」的频率和方式——",o:[
{l:"A",t:"经常说，而且会配上温暖的笑容和眼神",T:"A"},{l:"B",t:"说得比较克制，更倾向于给出具体可行的建议",T:"B"},{l:"C",t:"不说「加油」，会说「冲鸭！」「你超棒的！」",T:"C"},{l:"D",t:"会用故事和比喻来鼓励，而非直接说空话",T:"D"},{l:"E",t:"很少口头鼓励，更倾向于用行动和标准来表达",T:"E"}]},
{c:"cg1",l:"教育理念",q:"面试时校长问「你的教学风格是什么」，你的回答——",o:[
{l:"A",t:"「我希望成为学生信赖的人，而不仅仅是老师」",T:"A"},{l:"B",t:"「我注重知识体系的构建和系统性的思维训练」",T:"B"},{l:"C",t:"「我的课堂永远充满快乐和惊喜！」",T:"C"},{l:"D",t:"「我擅长用故事和场景让知识变得有温度」",T:"D"},{l:"E",t:"「我能让每个学生都认真对待学习和成长」",T:"E"}]},
{c:"cm1",l:"教学方法",q:"期末复习时，你的策略是——",o:[
{l:"A",t:"关注每个学生的情绪状态，不让他们太焦虑",T:"A"},{l:"B",t:"整理系统的复习框架和知识图谱，高效推进",T:"B"},{l:"C",t:"用游戏和竞赛让复习不那么枯燥无聊",T:"C"},{l:"D",t:"把重点知识编成故事和口诀帮助记忆",T:"D"},{l:"E",t:"严格按计划推进复习进度，绝不能拖",T:"E"}]},
{c:"ct1",l:"教学风格",q:"如果你在社交媒体上分享教学日常，风格会是——",o:[
{l:"A",t:"分享和孩子们的温馨日常和感人瞬间",T:"A"},{l:"B",t:"分享教学方法和干货知识总结",T:"B"},{l:"C",t:"分享课堂上的搞笑段子和欢乐时刻",T:"C"},{l:"D",t:"分享课堂上的灵感、创意和精彩瞬间",T:"D"},{l:"E",t:"很少分享，觉得工作就该认真工作",T:"E"}]},
{c:"cs1",l:"课堂管理",q:"如果有学生抄袭作业，你会——",o:[
{l:"A",t:"先了解他是不是遇到困难了，再决定怎么处理",T:"A"},{l:"B",t:"按规定处理，同时跟他分析抄袭的利弊",T:"B"},{l:"C",t:"半开玩笑地说「你这也抄得太不走心了吧哈哈」",T:"C"},{l:"D",t:"讲一个关于「诚信」的引人深思的小故事",T:"D"},{l:"E",t:"严肃处理，让他知道这是不可触碰的底线",T:"E"}]},
{c:"cg1",l:"教育理念",q:"你理想的师生关系是——",o:[
{l:"A",t:"像家人一样亲密温暖、互相牵挂",T:"A"},{l:"B",t:"像导师和学徒一样专业而严谨",T:"B"},{l:"C",t:"像好朋友一样轻松愉快、没代沟",T:"C"},{l:"D",t:"像故事里的引路人和探险者，一起冒险",T:"D"},{l:"E",t:"像教练和队员一样，目标明确、相互信任",T:"E"}]},
{c:"cg1",l:"教育理念",q:"学校组织教研活动，你最想参加的是——",o:[
{l:"A",t:"关于学生心理健康和情感教育的",T:"A"},{l:"B",t:"关于教学方法和学科前沿的",T:"B"},{l:"C",t:"关于创意课堂和游戏化教学的",T:"C"},{l:"D",t:"关于教育叙事和教学艺术的",T:"D"},{l:"E",t:"关于课堂管理和班级建设的",T:"E"}]},
{c:"cg1",l:"教育理念",q:"你觉得自己最大的教学优势是——",o:[
{l:"A",t:"让每个孩子都感受到被爱和被关注",T:"A"},{l:"B",t:"把复杂的问题讲得清清楚楚明明白白",T:"B"},{l:"C",t:"让课堂变成大家每天最期待的地方",T:"C"},{l:"D",t:"把枯燥的知识变得像看剧一样有趣",T:"D"},{l:"E",t:"让每个学生都认真对待学习和自我成长",T:"E"}]}
];

const TC={
A:{k:"affinity",n:"亲和力型",e:"🌸",c:"#F472B6",l:"#FDE8F3",kw:["温柔耐心","共情力强","拉近距离","情绪价值","信任感"]},
B:{k:"logic",n:"逻辑专业型",e:"🧠",c:"#4A9BD9",l:"#E8F4FD",kw:["条理清晰","框架思维","层层递进","专业严谨","高效"]},
C:{k:"lively",n:"可爱活泼型",e:"🎪",c:"#FFB347",l:"#FFF5E6",kw:["元气满满","表情丰富","带动气氛","童趣语言","感染力"]},
D:{k:"story",n:"故事表现型",e:"📖",c:"#5EC4A0",l:"#E8FAF3",kw:["善于讲故事","打比方","角色扮演","画面感","创造力"]},
E:{k:"charisma",n:"气场掌控型",e:"👑",c:"#8B7CF6",l:"#F0EDFF",kw:["不怒自威","节奏感","镇住全场","高效管理","目标感"]}
};

const TD={
A:{t:"用爱发电的温度型教师",d:'<p>你天生自带让人安心的磁场。学生们在你身边会放下防备，因为你能敏锐地捕捉到每个人的情绪变化，并在最恰当的时机给出温暖的支持。</p><p>你的课堂不是冰冷的"知识工厂"，更像是一个"情感花园"——在这里，每个孩子都觉得自己是被看见的、被重视的。这种信任关系会成为教学最有力的底层支撑。</p><p>💡 <strong>发展建议</strong>：在保持温暖的同时，可以适当加强课堂的"骨架"——让关心和效率并存，你会变得更强大。</p>'},
B:{t:"用逻辑征服的硬核型教师",d:'<p>你是那种能让复杂问题瞬间变得"有章可循"的老师。你信奉"授人以渔"，比起直接给答案，你更享受带着学生一步步推理、发现规律的过程。</p><p>你的课堂像一个精密运转的系统——每个环节都有明确的逻辑链条，学生们在你的引导下，思维会变得越来越清晰、越来越独立。</p><p>💡 <strong>发展建议</strong>：在保持逻辑性的同时，试着加入更多感性元素——一个好故事或一个真诚的微笑，有时比十页PPT更有力量。</p>'},
C:{t:"用快乐点燃的能量型教师",d:'<p>你天生就是"气氛担当"。在你面前，枯燥的知识都能变得有趣，沉闷的学生都能被激活。你用感染力让学习变成一件快乐的事。</p><p>学生们最期待的就是你的课——因为你总能带来惊喜。不管是夸张的表情、有趣的道具、还是出其不意的互动，你让每一天都充满期待。</p><p>💡 <strong>发展建议</strong>：快乐是很好的入口，但别忘了搭好"脚手架"——在欢笑之余确保知识真正沉淀下来。</p>'},
D:{t:"用故事串联的艺术型教师",d:'<p>你是课堂上的"首席故事官"。你有一种神奇的能力——能把最抽象、最难懂的概念，变成一个引人入胜的故事、一段身临其境的场景。</p><p>学生们不是在"听课"，而是在"经历"——因为你把知识变成了画面、变成了角色、变成了他们能记住一辈子的故事。</p><p>💡 <strong>发展建议</strong>：故事是翅膀，但别忘了引擎——确保在精彩叙事的背后，知识的骨架同样扎实清晰。</p>'},
E:{t:"用气场定调的管理型教师",d:'<p>你是那种走进教室就能让所有人安静下来的老师。你不靠大吼大叫，不靠严厉惩罚，你靠的是一种天然的存在感和对课堂的精准把控。</p><p>你的课堂高效、紧凑、充满力量。学生们在你面前会不自觉地认真起来，因为你的节奏和专业感让他们信服。你是班级的"定海神针"。</p><p>💡 <strong>发展建议</strong>：权威是信任的起点，而非终点——试着在坚定中展现柔软的一面，你会发现学生能给你更多。</p>'}
};

const TT={
A:[{i:"🤝",t:"情感连接是你的超级武器",d:"开学第一周，多花时间了解每个学生的故事和性格。",b:"var(--rl)"},{i:"🎯",t:"温柔不等于没有底线",d:"在关心学生的同时，明确自己的教学标准和规则。",b:"var(--sl)"},{i:"📊",t:"给关心加上数据",d:"用学生成长档案记录每个孩子的进步，让你的关心更有据可依。",b:"var(--ol)"}],
B:[{i:"📐",t:"框架是你的核心竞争力",d:"把每节课都做成「知识地图」，让学生看到全局再深入细节。",b:"var(--ol)"},{i:"🎨",t:"逻辑也可以很美",d:"尝试用思维导图、信息图等方式让逻辑可视化。",b:"var(--ll)"},{i:"💬",t:"别让理性成为距离",d:"偶尔分享自己的学习和成长故事，拉近距离。",b:"var(--rl)"}],
C:[{i:"✨",t:"快乐是最好的学习引擎",d:"设计一个小小的课堂仪式感，让每天的开始都有期待。",b:"var(--sl)"},{i:"📋",t:"给快乐搭好脚手架",d:"在游戏和活动后，花1分钟总结知识要点，确保学习真正发生。",b:"var(--ol)"},{i:"🔄",t:"能量也需要管理",d:"全开模式很耗电，设计一些低能耗的教学环节来调节节奏。",b:"var(--ml)"}],
D:[{i:"📚",t:"建立你的故事素材库",d:"看到好的故事、案例就收藏起来，积少成多会成为你的宝藏。",b:"var(--ml)"},{i:"🎭",t:"让每个学生都成为角色",d:"设计角色扮演和情境模拟，让学生从「听故事的人」变成「故事里的人」。",b:"var(--ll)"},{i:"🧩",t:"故事要为知识服务",d:"每个故事都要明确对应的知识点，避免「听完很爽但没学到东西」。",b:"var(--sl)"}],
E:[{i:"⚡",t:"节奏感是你的艺术",d:"精心设计每个环节的时长和转场，让课堂像一首节奏明快的歌。",b:"var(--ll)"},{i:"❤️",t:"展示你柔软的一面",d:"偶尔的真诚和幽默，会让你的气场更有温度、更有层次。",b:"var(--rl)"},{i:"🎯",t:"目标感要清晰可感",d:"让学生知道自己为什么学、学到什么程度、怎么判断进步。",b:"var(--sl)"}]
};

let cur=0,ans=[],sc={A:0,B:0,C:0,D:0,E:0};

function sp(id){document.querySelectorAll('.pg').forEach(p=>p.classList.add('h'));document.getElementById(id).classList.remove('h')}

function startQuiz(){cur=0;ans=[];sc={A:0,B:0,C:0,D:0,E:0};sp('pq');rQ()}

function rQ(){
  const q=Q[cur],pct=Math.round((cur/Q.length)*100);
  document.getElementById('pl').textContent=q.l;
  document.getElementById('cn').textContent=cur+1;
  document.getElementById('pb').style.width=pct+'%';
  let h='<span class="qca '+q.c+'">'+q.l+'</span><div class="qt">'+q.q+'</div><div class="ops">';
  q.o.forEach(o=>{h+='<div class="op" data-t="'+o.T+'" onclick="sel(this)"><span class="ol">'+o.l+'</span><span>'+o.t+'</span></div>'});
  h+='</div><button class="bn" id="bn2" onclick="nxt()">'+(cur===Q.length-1?'查看结果 →':'下一题 →')+'</button>';
  const cd=document.getElementById('qcard');
  cd.style.animation='none';cd.offsetHeight;cd.style.animation='ci .5s ease-out';
  cd.innerHTML=h;
}

function sel(el){el.parentElement.querySelectorAll('.op').forEach(o=>o.classList.remove('sl'));el.classList.add('sl');document.getElementById('bn2').classList.add('on')}

function nxt(){
  const s=document.querySelector('.op.sl');if(!s)return;
  ans.push(s.dataset.t);cur++;
  if(cur>=Q.length){showLD();return}
  rQ();
}

function showLD(){
  sp('pld');
  const tips=['解读答题数据...','匹配教学风格...','生成个性化报告...','即将揭晓 🎉'];
  let ti=0;const iv=setInterval(()=>{ti++;if(ti<tips.length)document.getElementById('lt2').textContent=tips[ti];else clearInterval(iv)},800);
  setTimeout(()=>{clearInterval(iv);calc()},3500);
}

function calc(){
  sc={A:0,B:0,C:0,D:0,E:0};
  ans.forEach(a=>{if(sc[a]!==undefined)sc[a]++});
  const sorted=Object.entries(sc).sort((a,b)=>b[1]-a[1]);
  showRes(sorted[0][0],sorted);
}

function showRes(mt,sorted){
  sp('pr');
  const t=TC[mt],d=TD[mt],tips=TT[mt],total=ans.length;
  const pcts={};Object.keys(TC).forEach(k=>{pcts[k]=Math.round((sc[k]/total)*100)});
  let h='<div class="rh" style="--rc2:'+t.l+'"><div class="rb">'+t.e+' '+t.n+'</div><span class="re">'+t.e+'</span><div class="rn">'+t.n+'</div><div class="rsub">'+d.t+'</div><div class="rsc">';
  sorted.forEach(([k])=>{const tc2=TC[k];h+='<div class="ri"><span class="rd" style="background:'+tc2.c+'"></span>'+tc2.n+' '+pcts[k]+'%</div>'});
  h+='</div></div>';
  h+='<div class="sec"><h3>📊 风格雷达图</h3><div class="rw"><canvas id="radar" width="320" height="320"></canvas></div></div>';
  h+='<div class="sec"><h3>🏷️ 核心特质</h3><div class="tags">';
  t.kw.forEach(k=>{h+='<span class="tag" style="background:'+t.l+';color:'+t.c+'">'+k+'</span>'});
  h+='</div></div>';
  h+='<div class="sec"><h3>📝 风格解读</h3><div class="dt">'+d.d+'</div></div>';
  h+='<div class="sec"><h3>💡 成长锦囊</h3>';
  tips.forEach(tp=>{h+='<div class="tip" style="background:'+tp.b+'"><div class="ti2">'+tp.i+'</div><div class="th"><h4>'+tp.t+'</h4><p>'+tp.d+'</p></div></div>'});
  h+='</div>';
  h+='<div class="sec"><h3>📈 各维度得分</h3>';
  sorted.forEach(([k])=>{const tc2=TC[k],pct=pcts[k],isM=k===mt;
    h+='<div class="sr" style="background:'+(isM?tc2.l:'transparent')+'"><span class="se">'+tc2.e+'</span><span class="sn">'+tc2.n+'</span><div class="sw"><div class="sb" style="width:'+pct+'%;background:'+tc2.c+'"></div></div><span class="sp">'+pct+'%</span></div>'});
  h+='</div>';
  h+='<div class="ra"><button class="br" onclick="startQuiz()">🔄 重新测评</button><button class="bsh" onclick="share()">📤 分享结果</button></div>';
  h+='<div class="rf">教师风格测评 · 仅供自我认知参考 · 祝你成为最好的自己 🌟</div>';
  document.getElementById('rcon').innerHTML=h;
  requestAnimationFrame(()=>drawRadar(sc,total));
  setTimeout(()=>{document.querySelectorAll('.sb').forEach(b=>{const w=b.style.width;b.style.width='0%';requestAnimationFrame(()=>{b.style.width=w})})},100);
  window.scrollTo({top:0,behavior:'smooth'});
}

function drawRadar(sc2,total){
  const cv=document.getElementById('radar');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height,cx=W/2,cy=H/2,R=110;
  const keys=['A','B','C','D','E'],n=5,step=Math.PI*2/n,start=-Math.PI/2;
  ctx.clearRect(0,0,W,H);
  for(let lv=1;lv<=5;lv++){const r=R*lv/5;ctx.beginPath();for(let i=0;i<=n;i++){const a=start+step*i,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.closePath();ctx.strokeStyle='rgba(45,27,20,0.08)';ctx.lineWidth=1;ctx.stroke()}
  for(let i=0;i<n;i++){const a=start+step*i;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));ctx.strokeStyle='rgba(45,27,20,0.1)';ctx.stroke()}
  ctx.beginPath();keys.forEach((k,i)=>{const pct=sc2[k]/total,r=R*pct,a=start+step*i,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)});ctx.closePath();ctx.fillStyle='rgba(255,107,90,0.2)';ctx.fill();ctx.strokeStyle='#FF6B5A';ctx.lineWidth=2.5;ctx.stroke();
  keys.forEach((k,i)=>{const pct=sc2[k]/total,r=R*pct,a=start+step*i,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=TC[k].c;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke()});
  ctx.font='13px "Noto Sans SC"';ctx.textAlign='center';ctx.textBaseline='middle';
  keys.forEach((k,i)=>{const a=start+step*i,lr=R+28,x=cx+lr*Math.cos(a),y=cy+lr*Math.sin(a);ctx.fillStyle=TC[k].c;ctx.fillText(TC[k].n,x,y)});
}

function share(){
  const mt=Object.entries(sc).sort((a,b)=>b[1]-a[1])[0][0],t=TC[mt];
  const text='🎯 我的教师风格是「'+t.n+'」'+t.e+'\n'+TD[mt].t+'\n\n来测测你的教学DNA吧！';
  if(navigator.share)navigator.share({title:'教师风格测评结果',text}).catch(()=>cp(text));else cp(text);
}
function cp(text){
  navigator.clipboard.writeText(text).then(()=>{const b=document.querySelector('.bsh'),o=b.textContent;b.textContent='✅ 已复制';setTimeout(()=>b.textContent=o,2000)}).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);const b=document.querySelector('.bsh'),o=b.textContent;b.textContent='✅ 已复制';setTimeout(()=>b.textContent=o,2000)});
}
