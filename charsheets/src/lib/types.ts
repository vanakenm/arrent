export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export interface AbilityScore {
  score: number | null;
  modifier: number | null;
}

export interface SavingThrow {
  ability: Ability;
  proficient: boolean;
  bonus: number | null;
}

export interface Skill {
  name: string;
  ability: Ability;
  proficient: boolean;
  expertise: boolean;
  bonus: number | null;
  note?: string;
}

export interface SpellSlot {
  level: number;
  max: number | null;
  current: number | null;
}

export interface SpellByLevel {
  level: number;
  knownCount: number | null;
  spells: string[];
}

export interface Spellcasting {
  ability?: Ability;
  saveDC?: number | null;
  attackBonus?: number | null;
  focus?: string | null;
  slots: SpellSlot[];
  innate?: { name: string; englishName?: string; usage?: string }[];
  grantedByClassLevel?: { characterLevel: number; name: string; englishName?: string }[];
  byLevel: SpellByLevel[];
}

export interface Resource {
  name: string;
  min: number | null;
  max: number | null;
  current: number | null;
  description?: string | null;
}

export interface Capability {
  name: string;
  description: string;
  recovery?: string | null;
}

export interface SavageManeuver {
  name: string;
  furyCost: number | string;
  action: string;
  description: string;
  progressionTable?: { level: number; cost: number; damage: string }[];
}

export interface EquipmentItem {
  name: string;
  description?: string | null;
  englishName?: string;
  link?: string;
  used?: boolean;
}

export interface Equipment {
  attunement: {
    max: number | null;
    current: number | null;
    items: EquipmentItem[];
  };
  nonAttunement: EquipmentItem[];
  weaponsAndArmor: EquipmentItem[];
  potions: EquipmentItem[];
}

export interface BlessingOrEffect {
  description: string;
  active: boolean;
}

export interface Companion {
  beastType: string | null;
  statBlock: string | null;
  name: string | null;
  hp: number | null;
  ac: number | null;
  speed: string | null;
  attacks: string | null;
  specialAbilities: string | null;
}

export interface Character {
  name: string;
  identity: {
    race: string | null;
    class: string | null;
    secondaryClass: string | null;
    level: number | null;
    background: string | null;
  };
  combatStats: {
    hpMax: number | null;
    hpCurrent: number | null;
    ac: number | null;
    initiative: number | null;
    speed: string | null;
    hitDice: string | null;
  };
  abilityScores: Record<Ability, AbilityScore>;
  proficiencyBonus: number | null;
  savingThrows: SavingThrow[];
  skills: Skill[];
  skillsNote?: string;
  proficienciesAndLanguages: {
    languages: string | null;
    armor: string | null;
    weapons: string | null;
    tools: string | null;
  };
  spellcasting: Spellcasting | null;
  resources: Resource[];
  capabilities: Capability[];
  savageManeuvers?: SavageManeuver[];
  equipment: Equipment;
  blessingsAndActiveEffects: BlessingOrEffect[];
  companion: Companion | null;
  notes: string;
  status: string;
  [key: string]: unknown;
}

/** A character plus the filesystem plumbing needed to read/write it back. */
export interface LoadedCharacter {
  fileName: string;
  data: Character;
  /** JSON string as last read from / written to disk — used to detect unsaved edits. */
  savedSnapshot: string;
}
