import { get as idbGet, set as idbSet, del as idbDel } from 'idb-keyval';

/**
 * Thin wrapper around the File System Access API (Chromium-only).
 * Kept loosely typed on purpose: lib.dom's coverage of this API varies by
 * TS/browser version, so we treat handles as `any` internally and only
 * expose a small, well-typed surface to the rest of the app.
 */

const DIR_HANDLE_KEY = 'arrent-charsheets:dataDirHandle';

export function isFileSystemAccessSupported(): boolean {
  return typeof window !== 'undefined' && 'showDirectoryPicker' in window;
}

export async function getStoredDirHandle(): Promise<any | null> {
  const handle = await idbGet(DIR_HANDLE_KEY);
  return handle ?? null;
}

export async function forgetStoredDirHandle(): Promise<void> {
  await idbDel(DIR_HANDLE_KEY);
}

export async function pickDataDirectory(): Promise<any> {
  const handle = await (window as any).showDirectoryPicker({
    id: 'arrent-charsheets-data',
    mode: 'readwrite',
    startIn: 'documents',
  });
  await idbSet(DIR_HANDLE_KEY, handle);
  return handle;
}

/** Checks (and if needed, silently or interactively requests) readwrite permission. */
export async function ensurePermission(
  dirHandle: any,
  { requestIfNeeded }: { requestIfNeeded: boolean }
): Promise<'granted' | 'denied' | 'prompt'> {
  const opts = { mode: 'readwrite' as const };
  const current = await dirHandle.queryPermission(opts);
  if (current === 'granted') return 'granted';
  if (!requestIfNeeded) return current;
  return await dirHandle.requestPermission(opts);
}

export async function listJsonFileNames(dirHandle: any): Promise<string[]> {
  const names: string[] = [];
  for await (const entry of dirHandle.values()) {
    if (entry.kind === 'file' && entry.name.toLowerCase().endsWith('.json')) {
      names.push(entry.name);
    }
  }
  return names.sort((a, b) => a.localeCompare(b));
}

export async function readJsonFile(dirHandle: any, fileName: string): Promise<any> {
  const fileHandle = await dirHandle.getFileHandle(fileName);
  const file = await fileHandle.getFile();
  const text = await file.text();
  return JSON.parse(text);
}

export async function writeJsonFile(dirHandle: any, fileName: string, data: unknown): Promise<void> {
  const fileHandle = await dirHandle.getFileHandle(fileName, { create: false });
  const writable = await fileHandle.createWritable();
  await writable.write(JSON.stringify(data, null, 2) + '\n');
  await writable.close();
}
