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
export { calcGrowthPotential, calcStyleCeiling, calcAllPotential } from './scoring/potential.js';
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

export function getQuestionPool(tier: QuestionTier): Question[] {
  if (tier === 'basic') {
    return [...BASIC_QUESTIONS];
  }
  return [
    ...BASIC_QUESTIONS,
    ...PRO_EXTRA_QUESTIONS,
    ...GROWTH_QUESTIONS,
    ...ANTI_FAKE_QUESTIONS,
  ];
}
