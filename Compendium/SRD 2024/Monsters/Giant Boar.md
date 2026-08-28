---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-boar
name: Giant Boar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.422Z'
---

```monster
slug: srd-2024_monster_giant-boar
name: Giant Boar
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10 + 15
speed:
  walk: 40
abilities:
  str: 17
  dex: 10
  con: 16
  int: 2
  wis: 7
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage. If the target is a Large or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d6` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Bloodied Fury
    entries:
      - The boar has Advantage on melee attack rolls while it is Bloodied.
cr: '2'
saves:
  str: 5
  dex: 0
  con: 3
  int: -4
  wis: -2
  cha: -3
alignment: unaligned
passive_perception: 8
```
