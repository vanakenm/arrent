---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-badger
name: Giant Badger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_giant-badger
name: Giant Badger
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 15
  formula: 2d8 + 6
speed:
  walk: 30
  burrow: 10
abilities:
  str: 13
  dex: 10
  con: 17
  int: 2
  wis: 12
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - poison
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 2d4+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 1
  dex: 0
  con: 3
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
