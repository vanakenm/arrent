import type { Character } from './types';

const PREFIX = 'arrent-charsheets:draft:';

/** Unsaved in-progress edits, kept in localStorage so a page refresh doesn't lose them. */
export function loadDraft(fileName: string): Character | null {
  const raw = localStorage.getItem(PREFIX + fileName);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Character;
  } catch {
    return null;
  }
}

export function saveDraft(fileName: string, data: Character): void {
  localStorage.setItem(PREFIX + fileName, JSON.stringify(data));
}

export function clearDraft(fileName: string): void {
  localStorage.removeItem(PREFIX + fileName);
}
