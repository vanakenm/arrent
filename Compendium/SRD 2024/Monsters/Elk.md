---
archivist: true
entity_type: monster
slug: srd-2024_monster_elk
name: Elk
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.418Z'
---

```monster
slug: srd-2024_monster_elk
name: Elk
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 11
  formula: 2d10
speed:
  walk: 50
abilities:
  str: 16
  dex: 10
  con: 11
  int: 2
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Large or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:1d6` Bludgeoning damage and has the Prone condition.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 3
  dex: 0
  con: 0
  int: -4
  wis: 0
  cha: -2
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
