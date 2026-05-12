// @teacher-quiz/core - public API

// Types
export type * from './types.js';

// Data
export { TEACHER_TYPES, findTypeByDimensions } from './data/types.js';
export { FAMILIES } from './data/families.js';
export { JOBS } from './data/jobs.js';
export { GRADES } from './data/grades.js';
export { BINARY_TAGS, DIMENSION_LETTERS, LETTER_ORDER } from './data/tags.js';
export { BASIC_QUESTIONS } from './data/questions/basic.js';
export { PRO_EXTRA_QUESTIONS } from './data/questions/pro-extra.js';
export { GROWTH_QUESTIONS, calcGrowthRawScore } from './data/questions/growth.js';
export { ANTI_FAKE_QUESTIONS } from './data/questions/anti-fake.js';

// Scoring
export { calcDimensionScores } from './scoring/dimensions.js';
export { toFiveLetterCode, toBinaryTags } from './scoring/code.js';
export { findTypeFromScores } from './scoring/type.js';
export { matchProfile } from './scoring/matching.js';
export { matchAllJobs } from './scoring/jobs.js';
export { matchAllGrades } from './scoring/grades.js';
export { calcGrowthPotential, calcStyleCeiling, calcAllPotential, generateReflectionInsight } from './scoring/potential.js';
export { calcCredibility } from './scoring/credibility.js';

// Reports
export { assembleTeacherReport } from './report/teacher.js';
export { assembleAdminReport, type AdminReportInput } from './report/admin.js';

// 题库聚合
import { BASIC_QUESTIONS } from './data/questions/basic.js';
import { PRO_EXTRA_QUESTIONS } from './data/questions/pro-extra.js';
import { GROWTH_QUESTIONS } from './data/questions/growth.js';
import { ANTI_FAKE_QUESTIONS } from './data/questions/anti-fake.js';
import type { Question, QuestionTier } from './types.js';

/**
 * 获取题库池
 * @param tier basic = 30 题; pro = 60 题
 * @param teacherGrade 老师当前主要教的年级段名（与 GRADES.name 对齐），传入则过滤不适用的题
 */
export function getQuestionPool(tier: QuestionTier, teacherGrade?: string): Question[] {
  const all = tier === 'basic'
    ? [...BASIC_QUESTIONS]
    : [
        ...BASIC_QUESTIONS,
        ...PRO_EXTRA_QUESTIONS,
        ...GROWTH_QUESTIONS,
        ...ANTI_FAKE_QUESTIONS,
      ];
  if (!teacherGrade) return all;
  return all.filter(q => !q.notApplicableTo?.includes(teacherGrade));
}
