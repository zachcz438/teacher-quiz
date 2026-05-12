// packages/core/tests/e2e.test.ts
import { describe, it, expect } from 'vitest';
import {
  getQuestionPool,
  assembleTeacherReport,
  assembleAdminReport,
} from '../src/index.js';
import type { Answer } from '../src/types.js';

describe('E2E: 答完 30 题 → 双视图报告', () => {
  it('basic flow: 全部选 A → 守望者 (亲和力派 = W+G)', () => {
    const questions = getQuestionPool('basic');
    expect(questions).toHaveLength(30);

    const answers: Answer[] = questions.map(q => ({
      questionId: q.id, optionLabel: 'A',
    }));

    const teacherReport = assembleTeacherReport(answers, questions, 'basic');
    expect(teacherReport.type.name).toBe('守望者');
    expect(teacherReport.family.name).toBe('守护族');
    expect(teacherReport.binaryTags[0]?.label).toBe('#暖系');
    expect(teacherReport.personality.length).toBeGreaterThanOrEqual(30);
    expect(teacherReport.superpowers).toHaveLength(3);
    expect(teacherReport.weaknesses).toHaveLength(2);
  });

  it('basic flow: 全部选 E → 统帅 (R+D)', () => {
    const questions = getQuestionPool('basic');
    const answers: Answer[] = questions.map(q => ({
      questionId: q.id, optionLabel: 'E',
    }));

    const teacherReport = assembleTeacherReport(answers, questions, 'basic');
    expect(teacherReport.type.name).toBe('统帅');
  });

  it('basic flow: 全部选 D → 吟游者 (E+F)', () => {
    const questions = getQuestionPool('basic');
    const answers: Answer[] = questions.map(q => ({
      questionId: q.id, optionLabel: 'D',
    }));

    const teacherReport = assembleTeacherReport(answers, questions, 'basic');
    expect(teacherReport.type.name).toBe('吟游者');
  });

  it('admin report has all 6 sections', () => {
    const questions = getQuestionPool('basic');
    const answers: Answer[] = questions.map(q => ({
      questionId: q.id, optionLabel: 'A',
    }));

    const adminReport = assembleAdminReport({
      teacherName: '张三',
      teacherCode: 'T001',
      version: 'basic',
      submittedAt: Date.now(),
      answers,
      growthAnswers: [],
      antiFakeAnswers: [],
    }, questions);

    expect(adminReport.meta.teacherName).toBe('张三');
    expect(adminReport.profile.type.name).toBe('守望者');
    expect(adminReport.potential.paths).toHaveLength(7);
    expect(adminReport.jobMatches).toHaveLength(7);
    expect(adminReport.gradeMatches).toHaveLength(5);
    expect(adminReport.prescription.shortTerm.length).toBeGreaterThan(0);
  });
});
