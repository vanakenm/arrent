interface Props {
  names: string[];
  displayNames: Record<string, string>;
  dirtyNames: Set<string>;
  selected: string | null;
  onSelect: (fileName: string) => void;
}

export default function CharacterList({ names, displayNames, dirtyNames, selected, onSelect }: Props) {
  return (
    <nav className="character-list">
      {names.map((fileName) => (
        <button
          key={fileName}
          className={fileName === selected ? 'character-item selected' : 'character-item'}
          onClick={() => onSelect(fileName)}
        >
          {displayNames[fileName] ?? fileName}
          {dirtyNames.has(fileName) && <span className="dot-dirty" title="Modifications non enregistrées" />}
        </button>
      ))}
    </nav>
  );
}
