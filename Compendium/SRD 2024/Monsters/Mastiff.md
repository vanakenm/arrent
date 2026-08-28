---
archivist: true
entity_type: monster
slug: srd-2024_monster_mastiff
name: Mastiff
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.434Z'
---

```monster
slug: srd-2024_monster_mastiff
name: Mastiff
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 5
  formula: 1d8 + 1
speed:
  walk: 40
abilities:
  str: 13
  dex: 14
  con: 12
  int: 3
  wis: 12
  cha: 7
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
        bonus: 3
        damage: 1d6+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: 1
  dex: 2
  con: 1
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
