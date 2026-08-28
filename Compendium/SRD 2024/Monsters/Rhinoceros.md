---
archivist: true
entity_type: monster
slug: srd-2024_monster_rhinoceros
name: Rhinoceros
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_rhinoceros
name: Rhinoceros
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 15
  int: 2
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage. If target is a Large or smaller creature and the rhinoceros moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d8` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 7
        damage: 2d8+5
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 5
  dex: -1
  con: 2
  int: -4
  wis: 1
  cha: -2
alignment: unaligned
passive_perception: 11
```
