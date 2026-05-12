// packages/core/src/report/admin.ts
import type { AdminReport, Answer, Question, QuestionTier } from '../types.js';
import { calcDimensionScores } from '../scoring/dimensions.js';
import { findTypeFromScores } from '../scoring/type.js';
import { toFiveLetterCode } from '../scoring/code.js';
import { FAMILIES } from '../data/families.js';
import { matchAllJobs } from '../scoring/jobs.js';
import { matchAllGrades } from '../scoring/grades.js';
import { calcAllPotential } from '../scoring/potential.js';
import { calcCredibility } from '../scoring/credibility.js';
import { ANTI_FAKE_QUESTIONS } from '../data/questions/anti-fake.js';
import { BASIC_QUESTIONS } from '../data/questions/basic.js';

export interface AdminReportInput {
  teacherName: string;
  teacherCode?: string;
  version: QuestionTier;
  submittedAt: number;
  answers: Answer[];
  growthAnswers: Answer[];
  antiFakeAnswers: Answer[];
}

export function assembleAdminReport(input: AdminReportInput, questions: Question[]): AdminReport {
  const allAnswers = [...input.answers, ...input.growthAnswers, ...input.antiFakeAnswers];
  const scores = calcDimensionScores(allAnswers, questions);
  const type = findTypeFromScores(scores);
  const family = FAMILIES[type.family];
  const fiveLetterCode = toFiveLetterCode(scores);

  const jobs = matchAllJobs(scores);
  const grades = matchAllGrades(scores);
  const potential = calcAllPotential(scores, input.growthAnswers);
  const credibility = calcCredibility(input.antiFakeAnswers, ANTI_FAKE_QUESTIONS, BASIC_QUESTIONS);

  const top1Job = jobs[0]!;
  const top2Job = jobs[1]!;
  const shortTerm: string[] = [];
  const midTerm: string[] = [];
  const longTerm: string[] = [];
  const risks: string[] = [];
  const advantages: string[] = [];

  if (top1Job.shortBoardWarnings.length > 0) {
    shortTerm.push(`重点补强：${top1Job.shortBoardWarnings.join('；')}`);
  } else {
    shortTerm.push(`深化主类型「${type.name}」的核心能力`);
  }
  shortTerm.push(`阅读 16 类型详解中的"${type.name}"画像，自我对照`);

  midTerm.push(`观察 ${top1Job.name} 与 ${top2Job.name} 两条路径的工作内容`);
  midTerm.push(`选 1 位机构内已任 ${top1Job.name} 的资深老师做导师`);

  longTerm.push(`目标路径：${top1Job.name} → ${top2Job.name}`);

  for (const j of jobs.slice(-2)) {
    risks.push(`不推荐岗位：${j.name}（匹配度 ${j.finalScore}%）`);
  }
  for (const g of grades.slice(0, 2)) {
    advantages.push(`适合年级：${g.name}（匹配度 ${g.finalScore}%）`);
  }

  return {
    meta: {
      teacherName: input.teacherName,
      ...(input.teacherCode !== undefined && { teacherCode: input.teacherCode }),
      submittedAt: input.submittedAt,
      version: input.version,
      credibility,
    },
    profile: { type, family, fiveLetterCode, scores },
    potential,
    jobMatches: jobs,
    gradeMatches: grades,
    prescription: { shortTerm, midTerm, longTerm, risks, advantages },
  };
}
