// packages/core/src/data/grades.ts
import type { Grade } from '../types.js';

export const GRADES: Grade[] = [
  {
    id: 1,
    name: '学前',
    ageRange: 'K1-K3 / 3-6 岁',
    studentTraits: '注意力短、情感驱动、游戏化学习、思维启蒙包装在游戏里',
    idealProfile: {
      expression:  { polarity: 'high', intensity: 'critical-high' },
      temperature: { polarity: 'high', intensity: 'critical-high' },
      structure:   { polarity: 'low',  intensity: 'high' },
      control:     { polarity: 'low',  intensity: 'high' },
      thinking:    { polarity: 'low',  intensity: 'high' },
    },
  },
  {
    id: 2,
    name: '小学低段',
    ageRange: '1-2 年级 / 7-8 岁',
    studentTraits: '喜欢老师=喜欢学科、规则建立期、需要趣味+情感',
    idealProfile: {
      temperature: { polarity: 'high', intensity: 'high' },
      expression:  { polarity: 'high', intensity: 'high' },
      structure:   { polarity: 'high', intensity: 'mid' },
      control:     { polarity: 'low',  intensity: 'high' },
    },
  },
  {
    id: 3,
    name: '小学中段',
    ageRange: '3-4 年级 / 9-10 岁',
    studentTraits: '抽象思维起步、趣味+逻辑都要',
    idealProfile: {
      temperature: { polarity: 'high', intensity: 'mid' },
      expression:  { polarity: 'high', intensity: 'mid' },
      structure:   { polarity: 'high', intensity: 'mid' },
      thinking:    { polarity: 'low',  intensity: 'high' },
    },
  },
  {
    id: 4,
    name: '小学高段',
    ageRange: '5-6 年级 / 11-12 岁',
    studentTraits: '准青春期、要被尊重、喜欢挑战、学业压力开始',
    idealProfile: {
      thinking:  { polarity: 'low',  intensity: 'high' },
      structure: { polarity: 'high', intensity: 'high' },
      control:   { polarity: 'high', intensity: 'high' },
    },
  },
  {
    id: 5,
    name: '小学以上',
    ageRange: '初中 + 高中 / 13+ 岁',
    studentTraits: '自驱强、高知识深度、专业感重于情感',
    idealProfile: {
      thinking:   { polarity: 'low',  intensity: 'critical-high' },
      structure:  { polarity: 'high', intensity: 'critical-high' },
      control:    { polarity: 'high', intensity: 'critical-high' },
      expression: { polarity: 'low',  intensity: 'high' },
    },
  },
];
