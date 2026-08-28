---
archivist: true
entity_type: monster
slug: srd-2024_monster_boar
name: Boar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_boar
name: Boar
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 13
  formula: 2d8 + 4
speed:
  walk: 40
abilities:
  str: 13
  dex: 11
  con: 14
  int: 2
  wis: 9
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Piercing damage. If the target is a Medium or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:1d6` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 3
        damage: 1d6+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Bloodied Fury
    entries:
      - While Bloodied, the boar has Advantage on attack rolls.
cr: '0.25'
saves:
  str: 1
  dex: 0
  con: 2
  int: -4
  wis: -1
  cha: -3
alignment: unaligned
passive_perception: 9
```
