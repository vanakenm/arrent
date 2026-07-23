import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';

// charsheets/src/lib/notesFs.ts -> repo root is three levels up.
export const REPO_ROOT = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../../..');

const PUBLIC_DIR = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../../public');
const ASSET_URL_PREFIX = '/vault-assets';

// Not campaign content: the app itself, character sheets (handled separately),
// tooling/plugin config and metadata folders.
const EXCLUDED_TOP_LEVEL = new Set([
  'pjs',
  'charsheets',
  'copilot',
  'node_modules',
  '.git',
  '.obsidian',
  '.claude',
]);

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

export interface NoteFile {
  /** Path relative to REPO_ROOT, posix separators, e.g. "citadel-civilisations/zinda_gazetteer.md" */
  relPath: string;
  /** URL slug segments, e.g. ["citadel-civilisations", "zinda_gazetteer"] */
  slug: string[];
  title: string;
}

export interface FolderRef {
  name: string;
  path: string;
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

function toPosix(p: string): string {
  return p.split(path.sep).join('/');
}

function walk(dir: string, exts: Set<string>, isTopLevel = true): string[] {
  let results: string[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    if (isTopLevel && EXCLUDED_TOP_LEVEL.has(entry.name)) continue;
    if (!isTopLevel && entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full, exts, false));
    } else if (exts.has(path.extname(entry.name).toLowerCase())) {
      results.push(toPosix(path.relative(REPO_ROOT, full)));
    }
  }
  return results;
}

let notesCache: NoteFile[] | null = null;
let notesByBasename: Map<string, NoteFile[]> | null = null;
let notesByRelPath: Map<string, NoteFile> | null = null;
let assetsByBasename: Map<string, string[]> | null = null;
let assetsByRelPath: Map<string, string> | null = null;

function titleFromFrontmatterOrFilename(relPath: string, frontmatter: Record<string, unknown>): string {
  if (typeof frontmatter.name === 'string') return frontmatter.name;
  if (typeof frontmatter.title === 'string') return frontmatter.title;
  const base = path.basename(relPath, '.md');
  return base.replace(/[_-]+/g, ' ').trim();
}

function buildIndices() {
  if (notesCache) return;
  const mdPaths = walk(REPO_ROOT, new Set(['.md']));
  const assetPaths = walk(REPO_ROOT, IMAGE_EXTENSIONS);

  notesCache = mdPaths.map((relPath) => {
    const abs = path.join(REPO_ROOT, relPath);
    let frontmatter: Record<string, unknown> = {};
    try {
      frontmatter = matter(fs.readFileSync(abs, 'utf8')).data ?? {};
    } catch {
      // ignore unreadable files
    }
    const slug = relPath.replace(/\.md$/i, '').split('/');
    return { relPath, slug, title: titleFromFrontmatterOrFilename(relPath, frontmatter) };
  });

  notesByBasename = new Map();
  notesByRelPath = new Map();
  for (const note of notesCache) {
    notesByRelPath.set(note.relPath, note);
    const base = path.basename(note.relPath, '.md').toLowerCase();
    const list = notesByBasename.get(base) ?? [];
    list.push(note);
    notesByBasename.set(base, list);
  }

  assetsByBasename = new Map();
  assetsByRelPath = new Map();
  for (const relPath of assetPaths) {
    assetsByRelPath.set(relPath, relPath);
    const base = path.basename(relPath).toLowerCase();
    const list = assetsByBasename.get(base) ?? [];
    list.push(relPath);
    assetsByBasename.set(base, list);
  }
}

export function getAllNotes(): NoteFile[] {
  buildIndices();
  return notesCache!;
}

export function getNoteBySlug(slug: string[]): NoteFile | undefined {
  buildIndices();
  return notesByRelPath!.get(slug.join('/') + '.md');
}

function resolveRelative(fromRelDir: string, target: string): string {
  return toPosix(path.normalize(path.join(fromRelDir, target)));
}

function findNoteByTarget(target: string, fromRelDir: string): NoteFile | null {
  buildIndices();
  const cleanTarget = target.replace(/\.md$/i, '');

  // Try as a path relative to the current file first (mirrors ./ and ../ links).
  if (cleanTarget.includes('/')) {
    const candidate = resolveRelative(fromRelDir, cleanTarget) + '.md';
    const direct = notesByRelPath!.get(candidate);
    if (direct) return direct;
  }

  // Fall back to a vault-wide basename search (Obsidian's normal resolution).
  const base = path.basename(cleanTarget).toLowerCase();
  const matches = notesByBasename!.get(base);
  if (!matches || matches.length === 0) return null;
  if (matches.length === 1) return matches[0];
  // Ambiguous: prefer a match under the same top-level folder as the source file.
  const topFolder = fromRelDir.split('/')[0];
  return matches.find((m) => m.relPath.split('/')[0] === topFolder) ?? matches[0];
}

function findAssetByTarget(target: string, fromRelDir: string): string | null {
  buildIndices();
  if (target.includes('/')) {
    const candidate = resolveRelative(fromRelDir, target);
    if (assetsByRelPath!.has(candidate)) return candidate;
  }
  const base = path.basename(target).toLowerCase();
  const matches = assetsByBasename!.get(base);
  return matches && matches.length > 0 ? matches[0] : null;
}

function noteUrl(note: NoteFile): string {
  return '/notes/' + note.slug.map(encodeURIComponent).join('/');
}

function ensureAssetCopied(relPath: string): string {
  const src = path.join(REPO_ROOT, relPath);
  const dest = path.join(PUBLIC_DIR, 'vault-assets', relPath);
  try {
    const srcStat = fs.statSync(src);
    let needsCopy = true;
    if (fs.existsSync(dest)) {
      const destStat = fs.statSync(dest);
      needsCopy = srcStat.mtimeMs > destStat.mtimeMs;
    }
    if (needsCopy) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
  } catch {
    // best-effort; broken image link is better than a failed build
  }
  return ASSET_URL_PREFIX + '/' + relPath.split('/').map(encodeURIComponent).join('/');
}

/** Splits `Target#Heading|Alias` into its parts (heading is resolved-but-dropped: we link to the note, not the anchor). */
function splitWikilink(inner: string): { target: string; alias: string | null } {
  const [beforeAlias, alias] = inner.split('|');
  const target = beforeAlias.split('#')[0].trim();
  return { target, alias: alias?.trim() ?? null };
}

function preprocessWikilinks(markdown: string, fromRelDir: string): string {
  // Embeds: ![[target]] — images become <img>, note embeds become a plain link.
  let out = markdown.replace(/!\[\[([^\]]+)\]\]/g, (_match, inner: string) => {
    const { target, alias } = splitWikilink(inner);
    if (IMAGE_EXTENSIONS.has(path.extname(target).toLowerCase())) {
      const assetRel = findAssetByTarget(target, fromRelDir);
      if (assetRel) return `![${alias ?? target}](${ensureAssetCopied(assetRel)})`;
      return `*[image manquante : ${target}]*`;
    }
    const note = findNoteByTarget(target, fromRelDir);
    if (note) return `[${alias ?? note.title}](${noteUrl(note)})`;
    return alias ?? target;
  });

  // Regular wikilinks: [[target]] or [[target|alias]]
  out = out.replace(/\[\[([^\]]+)\]\]/g, (_match, inner: string) => {
    const { target, alias } = splitWikilink(inner);
    const note = findNoteByTarget(target, fromRelDir);
    if (note) return `[${alias ?? note.title}](${noteUrl(note)})`;
    return alias ?? target;
  });

  // Standard relative markdown links to other notes: [text](./foo.md) or [text](../bar/baz.md)
  out = out.replace(/\]\((\.\.?\/[^)]+?\.md)(#[^)]*)?\)/g, (match, relLink: string) => {
    const note = findNoteByTarget(relLink, fromRelDir);
    return note ? `](${noteUrl(note)})` : match;
  });

  return out;
}

export interface RenderedNote {
  title: string;
  html: string;
}

export function renderNote(note: NoteFile): RenderedNote {
  const abs = path.join(REPO_ROOT, note.relPath);
  const raw = fs.readFileSync(abs, 'utf8');
  const { data, content } = matter(raw);
  const fromRelDir = path.dirname(note.relPath);
  const preprocessed = preprocessWikilinks(content, fromRelDir === '.' ? '' : fromRelDir);
  const html = marked.parse(preprocessed, { async: false, gfm: true, breaks: false }) as string;
  return { title: titleFromFrontmatterOrFilename(note.relPath, data ?? {}), html };
}

/** Every distinct folder path that contains at least one note, at every depth (e.g. "Compendium", "Compendium/SRD"). */
export function getAllFolderPaths(): string[] {
  buildIndices();
  const folders = new Set<string>();
  for (const note of notesCache!) {
    const parts = note.slug.slice(0, -1);
    for (let i = 1; i <= parts.length; i++) {
      folders.add(parts.slice(0, i).join('/'));
    }
  }
  return Array.from(folders);
}

/**
 * The immediate children of a folder (or the vault root, for folderPath === '').
 * Each page only pays for its own folder's contents — never the whole vault.
 */
export function getFolderChildren(folderPath: string): { folders: FolderRef[]; files: NoteFile[] } {
  buildIndices();
  const prefix = folderPath === '' ? [] : folderPath.split('/');
  const depth = prefix.length;
  const folderNames = new Set<string>();
  const files: NoteFile[] = [];

  for (const note of notesCache!) {
    const dirParts = note.slug.slice(0, -1);
    if (dirParts.length < depth) continue;
    if (prefix.some((seg, i) => dirParts[i] !== seg)) continue;
    if (dirParts.length === depth) {
      files.push(note);
    } else {
      folderNames.add(dirParts[depth]);
    }
  }

  const folders: FolderRef[] = Array.from(folderNames)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, path: [...prefix, name].join('/') }));
  files.sort((a, b) => a.title.localeCompare(b.title));
  return { folders, files };
}

export function getBreadcrumb(slugParts: string[]): BreadcrumbEntry[] {
  const crumbs: BreadcrumbEntry[] = [{ name: 'Notes', path: '' }];
  for (let i = 0; i < slugParts.length; i++) {
    crumbs.push({ name: slugParts[i], path: slugParts.slice(0, i + 1).join('/') });
  }
  return crumbs;
}

/** Previous/next note within the same immediate folder, for lightweight in-folder navigation. */
export function getSiblingNav(note: NoteFile): { prev: NoteFile | null; next: NoteFile | null } {
  const folderPath = note.slug.slice(0, -1).join('/');
  const { files } = getFolderChildren(folderPath);
  const index = files.findIndex((f) => f.relPath === note.relPath);
  return {
    prev: index > 0 ? files[index - 1] : null,
    next: index >= 0 && index < files.length - 1 ? files[index + 1] : null,
  };
}
