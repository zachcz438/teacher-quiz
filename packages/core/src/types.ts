// packages/core/src/types.ts

/** 5 个维度的 key，全包共用 */
export type DimensionKey =
  | 'temperature'
  | 'structure'
  | 'expression'
  | 'control'
  | 'thinking';

/** 每个维度的端向 */
export type Polarity = 'high' | 'low';

/** 5 字母代码的字母（W/C, R/L, E/I, D/G, F/T） */
export type DimensionLetter =
  | 'W' | 'C'
  | 'R' | 'L'
  | 'E' | 'I'
  | 'D' | 'G'
  | 'F' | 'T';

/** 五维分数：每维度 0-100 */
export interface DimensionScores {
  temperature: number;
  structure: number;
  expression: number;
  control: number;
  thinking: number;
}

/** 单个选项的多维权重 */
export type OptionWeights = Partial<Record<DimensionKey, number>>;

/** 题目类型 */
export type QuestionKind = 'multi-dim' | 'forced-choice' | 'anti-fake' | 'growth';

/** 题目分级 */
export type QuestionTier = 'basic' | 'pro';

export interface QuestionOption {
  label: string;          // A/B/C/D/E
  text: string;
  weights: OptionWeights;
  /** 反测谎专用：标记纯白莲花选项 */
  isSocialDesirability?: boolean;
}

export interface Question {
  id: number;
  category: string;       // 教学场景 / 师生互动 / 教学风格 / 备课方式 / 课堂管理 / 教育理念
  text: string;
  kind: QuestionKind;
  tier: QuestionTier;     // 'basic' = 30 题子集中；'pro' = 仅 60 题中
  options: QuestionOption[];
  /** 反测谎反向重复对，记录配对题号 */
  invertOf?: number;
}

/** 单次作答 */
export interface Answer {
  questionId: number;
  optionLabel: string;    // 选了哪个 A/B/C/D/E
}

export type FamilyKey = 'guardian' | 'thinker' | 'performer' | 'commander' | 'guide';

export interface Family {
  key: FamilyKey;
  name: string;           // 守护族 / 思辨族 / 舞台族 / 掌控族 / 引路族
  emoji: string;
  description: string;
}

/** 16 类型 */
export interface TeacherType {
  id: number;             // 1-16
  name: string;           // 守望者 / 逻辑家 / ...
  family: FamilyKey;
  primary: { dimension: DimensionKey; polarity: Polarity };
  secondary: { dimension: DimensionKey; polarity: Polarity };
  tagline: string;        // 一句话超能力
  // 详细画像（v1 stub，v2 完整版）：
  personality: string;    // ~200 字 个人剖析
  superpowers: string[];  // 3 条 教学超能力
  weaknesses: string[];   // 2 条 小弱点
  highlight: string;      // ~200 字 风格亮点
}

/** 二元标签 */
export interface BinaryTag {
  dimension: DimensionKey;
  polarity: Polarity;
  label: string;          // #暖系 / #冷系 / ...
  emoji: string;
}

/** 理想画像的需求强度 */
export type ProfileRequirement = 'critical-high' | 'high' | 'mid' | 'low' | 'critical-low';

export type IdealProfile = Partial<Record<DimensionKey, { polarity: Polarity; intensity: ProfileRequirement }>>;

/** 7 岗位 */
export interface Job {
  id: number;
  name: string;
  responsibility: string;
  idealProfile: IdealProfile;
}

/** 5 年级段 */
export interface Grade {
  id: number;
  name: string;
  ageRange: string;
  studentTraits: string;
  idealProfile: IdealProfile;
}

/** 评级 */
export type Grade4 = 'A' | 'B' | 'C' | 'D';

/** 匹配结果 */
export interface MatchResult {
  id: number;
  name: string;
  rawScore: number;       // 0-1 归一化余弦
  finalScore: number;     // 0-100，含短板惩罚后
  hasShortBoardPenalty: boolean;
  shortBoardWarnings: string[];
}

/** 三类潜力 */
export interface PotentialReport {
  growth: { score: number; grade: Grade4; explanation: string };
  ceiling: { rating: Grade4; percentile: number; explanation: string };
  paths: MatchResult[];   // 即 7 岗位匹配
}

/** 答题可信度 */
export interface CredibilityReport {
  score: number;
  inconsistencyCount: number;
  socialDesirabilityCount: number;
  flag: 'high' | 'medium' | 'low';
}

/** 一次完整提交（保存到后端的中间形态） */
export interface Submission {
  id: string;
  token: string;
  teacherName: string;
  teacherCode?: string;
  version: QuestionTier;
  answers: Answer[];
  createdAt: number;
}

/** 老师版报告（前端渲染用） */
export interface TeacherReport {
  type: TeacherType;
  family: Family;
  fiveLetterCode: string;
  binaryTags: BinaryTag[];
  hero: { name: string; emoji: string; tagline: string; code: string };
  tagSection: BinaryTag[];
  personality: string;
  superpowers: string[];
  weaknesses: string[];
  highlight: string;
}

/** 机构版报告（admin 渲染用） */
export interface AdminReport {
  meta: {
    teacherName: string;
    teacherCode?: string;
    submittedAt: number;
    version: QuestionTier;
    credibility: CredibilityReport;
  };
  profile: {
    type: TeacherType;
    family: Family;
    fiveLetterCode: string;
    scores: DimensionScores;
  };
  potential: PotentialReport;
  jobMatches: MatchResult[];
  gradeMatches: MatchResult[];
  prescription: {
    shortTerm: string[];
    midTerm: string[];
    longTerm: string[];
    risks: string[];
    advantages: string[];
  };
}
