// packages/core/src/data/tags.ts
import type { BinaryTag, DimensionKey } from '../types.js';

export const BINARY_TAGS: Record<DimensionKey, { high: BinaryTag; low: BinaryTag }> = {
  temperature: {
    high: { dimension: 'temperature', polarity: 'high', label: '#暖系',   emoji: '☀️' },
    low:  { dimension: 'temperature', polarity: 'low',  label: '#冷系',   emoji: '🌙' },
  },
  structure: {
    high: { dimension: 'structure', polarity: 'high', label: '#严谨派', emoji: '📐' },
    low:  { dimension: 'structure', polarity: 'low',  label: '#即兴派', emoji: '🌊' },
  },
  expression: {
    high: { dimension: 'expression', polarity: 'high', label: '#外放派', emoji: '🎤' },
    low:  { dimension: 'expression', polarity: 'low',  label: '#沉静派', emoji: '🍃' },
  },
  control: {
    high: { dimension: 'control', polarity: 'high', label: '#指挥型', emoji: '🎯' },
    low:  { dimension: 'control', polarity: 'low',  label: '#引路型', emoji: '🌱' },
  },
  thinking: {
    high: { dimension: 'thinking', polarity: 'high', label: '#感性派', emoji: '💗' },
    low:  { dimension: 'thinking', polarity: 'low',  label: '#理性派', emoji: '🧠' },
  },
};

/** 维度 → 字母代码映射（W/C, R/L, E/I, D/G, F/T） */
export const DIMENSION_LETTERS: Record<DimensionKey, { high: string; low: string }> = {
  temperature: { high: 'W', low: 'C' },
  structure:   { high: 'R', low: 'L' },
  expression:  { high: 'E', low: 'I' },
  control:     { high: 'D', low: 'G' },
  thinking:    { high: 'F', low: 'T' },
};

/** 5 字母代码的字母顺序 */
export const LETTER_ORDER: DimensionKey[] = [
  'temperature', 'structure', 'expression', 'control', 'thinking',
];
