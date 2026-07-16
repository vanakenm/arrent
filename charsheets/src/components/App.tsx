import { useEffect, useMemo, useState } from 'react';
import type { Character, LoadedCharacter } from '../lib/types';
import {
  ensurePermission,
  forgetStoredDirHandle,
  getStoredDirHandle,
  isFileSystemAccessSupported,
  listJsonFileNames,
  pickDataDirectory,
  readJsonFile,
  writeJsonFile,
} from '../lib/fsAccess';
import { clearDraft, loadDraft, saveDraft } from '../lib/drafts';
import CharacterList from './CharacterList';
import CharacterSheet from './CharacterSheet';

type Status = 'checking' | 'unsupported' | 'no-handle' | 'needs-permission' | 'loading' | 'ready' | 'error';

export default function App() {
  const [status, setStatus] = useState<Status>('checking');
  const [dirHandle, setDirHandle] = useState<any | null>(null);
  const [characters, setCharacters] = useState<Map<string, LoadedCharacter>>(new Map());
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      if (!isFileSystemAccessSupported()) {
        setStatus('unsupported');
        return;
      }
      const stored = await getStoredDirHandle();
      if (!stored) {
        setStatus('no-handle');
        return;
      }
      setDirHandle(stored);
      const permission = await ensurePermission(stored, { requestIfNeeded: false });
      if (permission === 'granted') {
        await loadAll(stored);
      } else {
        setStatus('needs-permission');
      }
    })();
  }, []);

  async function loadAll(handle: any) {
    setStatus('loading');
    setError(null);
    try {
      const names = await listJsonFileNames(handle);
      const entries = await Promise.all(
        names.map(async (fileName): Promise<[string, LoadedCharacter]> => {
          const fileData = (await readJsonFile(handle, fileName)) as Character;
          const draft = loadDraft(fileName);
          const data = draft ?? fileData;
          return [fileName, { fileName, data, savedSnapshot: JSON.stringify(fileData) }];
        })
      );
      const map = new Map(entries);
      setCharacters(map);
      setSelected((prev) => prev ?? entries[0]?.[0] ?? null);
      setStatus('ready');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStatus('error');
    }
  }

  async function handlePickDirectory() {
    try {
      const handle = await pickDataDirectory();
      setDirHandle(handle);
      await loadAll(handle);
    } catch (e) {
      // AbortError when the user cancels the picker — not a real error.
      if (e instanceof Error && e.name === 'AbortError') return;
      setError(e instanceof Error ? e.message : String(e));
      setStatus('error');
    }
  }

  async function handleGrantPermission() {
    if (!dirHandle) return;
    const result = await ensurePermission(dirHandle, { requestIfNeeded: true });
    if (result === 'granted') {
      await loadAll(dirHandle);
    } else {
      setError("Accès au dossier refusé. Choisissez à nouveau le dossier de données.");
      setStatus('no-handle');
      await forgetStoredDirHandle();
      setDirHandle(null);
    }
  }

  async function handleChangeDirectory() {
    await forgetStoredDirHandle();
    setDirHandle(null);
    setCharacters(new Map());
    setSelected(null);
    setStatus('no-handle');
  }

  function handleEdit(fileName: string, updater: (c: Character) => Character) {
    setCharacters((prev) => {
      const loaded = prev.get(fileName);
      if (!loaded) return prev;
      const data = updater(loaded.data);
      saveDraft(fileName, data);
      const next = new Map(prev);
      next.set(fileName, { ...loaded, data });
      return next;
    });
  }

  async function handleSave(fileName: string) {
    const loaded = characters.get(fileName);
    if (!loaded || !dirHandle) return;
    setSaving(true);
    setError(null);
    try {
      await writeJsonFile(dirHandle, fileName, loaded.data);
      clearDraft(fileName);
      setCharacters((prev) => {
        const next = new Map(prev);
        next.set(fileName, { ...loaded, savedSnapshot: JSON.stringify(loaded.data) });
        return next;
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  async function handleReload(fileName: string) {
    if (!dirHandle) return;
    setError(null);
    try {
      const fileData = (await readJsonFile(dirHandle, fileName)) as Character;
      clearDraft(fileName);
      setCharacters((prev) => {
        const next = new Map(prev);
        next.set(fileName, { fileName, data: fileData, savedSnapshot: JSON.stringify(fileData) });
        return next;
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  const names = useMemo(() => Array.from(characters.keys()), [characters]);
  const displayNames = useMemo(() => {
    const map: Record<string, string> = {};
    characters.forEach((loaded, fileName) => {
      map[fileName] = loaded.data.name || fileName;
    });
    return map;
  }, [characters]);
  const dirtyNames = useMemo(() => {
    const set = new Set<string>();
    characters.forEach((loaded, fileName) => {
      if (JSON.stringify(loaded.data) !== loaded.savedSnapshot) set.add(fileName);
    });
    return set;
  }, [characters]);

  if (status === 'unsupported') {
    return (
      <div className="center-message">
        <h1>Fiches de personnages</h1>
        <p>
          Ce navigateur ne supporte pas la File System Access API. Ouvrez cette page avec une version récente de
          Chrome ou Edge.
        </p>
      </div>
    );
  }

  if (status === 'checking') {
    return <div className="center-message">Chargement…</div>;
  }

  if (status === 'no-handle') {
    return (
      <div className="center-message">
        <h1>Fiches de personnages</h1>
        <p>Sélectionnez le dossier <code>data/</code> du dépôt Arrent pour commencer.</p>
        {error && <p className="error">{error}</p>}
        <button className="primary" onClick={handlePickDirectory}>
          Choisir le dossier de données
        </button>
      </div>
    );
  }

  if (status === 'needs-permission') {
    return (
      <div className="center-message">
        <h1>Fiches de personnages</h1>
        <p>L'accès au dossier de données doit être confirmé pour cette session.</p>
        {error && <p className="error">{error}</p>}
        <button className="primary" onClick={handleGrantPermission}>
          Autoriser l'accès au dossier
        </button>
      </div>
    );
  }

  if (status === 'loading') {
    return <div className="center-message">Lecture des fiches…</div>;
  }

  const selectedCharacter = selected ? characters.get(selected) : null;

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h1>Arrent</h1>
        <CharacterList
          names={names}
          displayNames={displayNames}
          dirtyNames={dirtyNames}
          selected={selected}
          onSelect={setSelected}
        />
        <button className="link-button" onClick={handleChangeDirectory}>
          Changer de dossier
        </button>
      </aside>
      <main className="main-content">
        {selectedCharacter ? (
          <CharacterSheet
            character={selectedCharacter.data}
            dirty={dirtyNames.has(selectedCharacter.fileName)}
            saving={saving}
            error={error}
            onChange={(updater) => handleEdit(selectedCharacter.fileName, updater)}
            onSave={() => handleSave(selectedCharacter.fileName)}
            onReload={() => handleReload(selectedCharacter.fileName)}
          />
        ) : (
          <p>Aucun fichier .json trouvé dans le dossier sélectionné.</p>
        )}
      </main>
    </div>
  );
}
