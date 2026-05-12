// packages/core/src/data/jobs.ts
import type { Job } from '../types.js';

/**
 * 7 个职业岗位，每个含理想画像。
 * 维度速查：
 *   thinking polarity=low → 偏理性；polarity=high → 偏感性
 *   control  polarity=high → 偏主导；polarity=low → 偏赋能
 *   structure polarity=high → 偏严谨；polarity=low → 偏灵活
 */
export const JOBS: Job[] = [
  {
    id: 1,
    name: '主讲老师',
    responsibility: '大班讲课、控场、续保服务',
    idealProfile: {
      expression:  { polarity: 'high', intensity: 'critical-high' },
      control:     { polarity: 'high', intensity: 'critical-high' },
      thinking:    { polarity: 'low',  intensity: 'high' },
      temperature: { polarity: 'high', intensity: 'high' },
    },
  },
  {
    id: 2,
    name: '刷题班老师',
    responsibility: '题目讲解、错题复盘、训练带练',
    idealProfile: {
      thinking:  { polarity: 'low',  intensity: 'critical-high' },
      structure: { polarity: 'high', intensity: 'critical-high' },
      control:   { polarity: 'high', intensity: 'high' },
    },
  },
  {
    id: 3,
    name: '教研老师',
    responsibility: '教案设计、课件开发、教学研究',
    idealProfile: {
      thinking:   { polarity: 'low',  intensity: 'critical-high' },
      structure:  { polarity: 'high', intensity: 'critical-high' },
      expression: { polarity: 'low',  intensity: 'high' },
    },
  },
  {
    id: 4,
    name: '培训师',
    responsibility: '培训新老师、师资输出',
    idealProfile: {
      expression: { polarity: 'high', intensity: 'critical-high' },
      control:    { polarity: 'high', intensity: 'critical-high' },
      structure:  { polarity: 'high', intensity: 'high' },
      thinking:   { polarity: 'low',  intensity: 'high' },
    },
  },
  {
    id: 5,
    name: '教学主管',
    responsibility: '团队管理、排课、跨部门协同',
    idealProfile: {
      control:     { polarity: 'high', intensity: 'critical-high' },
      structure:   { polarity: 'high', intensity: 'critical-high' },
      temperature: { polarity: 'high', intensity: 'mid' },
    },
  },
  {
    id: 6,
    name: '学科老师',
    responsibility: '讲讲座、招生、起声量、学科带头',
    idealProfile: {
      expression:  { polarity: 'high', intensity: 'critical-high' },
      thinking:    { polarity: 'high', intensity: 'critical-high' },
      temperature: { polarity: 'high', intensity: 'high' },
      control:     { polarity: 'high', intensity: 'high' },
    },
  },
  {
    id: 7,
    name: '拔尖班老师',
    responsibility: '教尖子生、竞赛培训',
    idealProfile: {
      thinking:  { polarity: 'low',  intensity: 'critical-high' },
      structure: { polarity: 'high', intensity: 'critical-high' },
      control:   { polarity: 'high', intensity: 'high' },
    },
  },
];
