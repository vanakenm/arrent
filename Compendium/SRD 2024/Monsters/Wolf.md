---
archivist: true
entity_type: monster
slug: srd-2024_monster_wolf
name: Wolf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.454Z'
---

```monster
slug: srd-2024_monster_wolf
name: Wolf
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 40
abilities:
  str: 14
  dex: 15
  con: 12
  int: 3
  wis: 12
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The wolf has Advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0.25'
saves:
  str: 2
  dex: 2
  con: 1
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
  stealth: 4
alignment: unaligned
passive_perception: 15
```
