import type { Character } from './types';

/**
 * Bundled at build time from ../../../data/*.json (the repo's data/ folder).
 * Used as a read-only fallback on browsers that don't support the File
 * System Access API (mobile Chrome, Firefox, Safari) — no live editing there.
 */
const modules = import.meta.glob<{ default: Character }>('../../../data/*.json', { eager: true });

export const staticCharacters: { fileName: string; data: Character }[] = Object.entries(modules)
  .map(([path, mod]) => ({
    fileName: path.split('/').pop() as string,
    data: mod.default,
  }))
  .sort((a, b) => a.fileName.localeCompare(b.fileName));
