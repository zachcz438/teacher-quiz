// packages/core/src/data/families.ts
import type { Family, FamilyKey } from '../types.js';

export const FAMILIES: Record<FamilyKey, Family> = {
  guardian: {
    key: 'guardian',
    name: '守护族',
    emoji: '🌱',
    description: '以温度为底色，默默守护学生成长',
  },
  thinker: {
    key: 'thinker',
    name: '思辨族',
    emoji: '🧠',
    description: '以理性为底色，构建严密的知识世界',
  },
  performer: {
    key: 'performer',
    name: '舞台族',
    emoji: '🎭',
    description: '以表达为底色，把课堂变成感染人心的舞台',
  },
  commander: {
    key: 'commander',
    name: '掌控族',
    emoji: '⚔️',
    description: '以规则与节奏为底色，让一切井然有序',
  },
  guide: {
    key: 'guide',
    name: '引路族',
    emoji: '💡',
    description: '以赋能与启发为底色，引学生走自己的路',
  },
};
