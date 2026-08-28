---
archivist: true
entity_type: monster
slug: srd-2024_monster_merfolk-skirmisher
name: Merfolk Skirmisher
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_merfolk-skirmisher
name: Merfolk Skirmisher
edition: '2024'
source: SRD 5.2
size: medium
type: elemental
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 10
  swim: 40
abilities:
  str: 10
  dex: 13
  con: 12
  int: 11
  wis: 14
  cha: 12
senses: []
languages:
  - Common
  - Primordial (Aquan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ocean Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d6` Piercing damage plus `dmg:1d4` Cold damage. If the target is a creature, its Speed decreases by 10 feet until the end of its next turn. HitomThe spear magically returns to the merfolk''s hand immediately after a ranged attack.'
    attacks:
      - name: Ocean Spear attack
        type: ranged
        bonus: 2
        damage: 1d6
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The merfolk can breathe air and water.
cr: '0.125'
saves:
  str: 0
  dex: 1
  con: 1
  int: 0
  wis: 2
  cha: 1
alignment: neutral
passive_perception: 12
```
