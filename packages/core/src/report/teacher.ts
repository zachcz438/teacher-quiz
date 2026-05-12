// packages/core/src/report/teacher.ts
import type { Answer, Question, QuestionTier, TeacherReport } from '../types.js';
import { calcDimensionScores } from '../scoring/dimensions.js';
import { findTypeFromScores } from '../scoring/type.js';
import { toFiveLetterCode, toBinaryTags } from '../scoring/code.js';
import { FAMILIES } from '../data/families.js';
import { generateReflectionInsight } from '../scoring/potential.js';

export function assembleTeacherReport(
  answers: Answer[],
  questions: Question[],
  _version: QuestionTier,
  growthAnswers: Answer[] = [],
): TeacherReport {
  const scores = calcDimensionScores(answers, questions);
  const type = findTypeFromScores(scores);
  const family = FAMILIES[type.family];
  const code = toFiveLetterCode(scores);
  const tags = toBinaryTags(scores);
  const reflectionInsight = generateReflectionInsight(growthAnswers);

  return {
    type,
    family,
    fiveLetterCode: code,
    binaryTags: tags,
    hero: {
      name: type.name,
      emoji: family.emoji,
      tagline: type.tagline,
      code,
    },
    tagSection: tags,
    personality: type.personality,
    superpowers: type.superpowers,
    weaknesses: type.weaknesses,
    highlight: type.highlight,
    classroomScene: type.classroomScene,
    studentRelation: type.studentRelation,
    idealMoment: type.idealMoment,
    pitfall: type.pitfall,
    ...(reflectionInsight !== undefined && { reflectionInsight }),
  };
}
