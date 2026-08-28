---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-goat
name: Giant Goat
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.423Z'
---

```monster
slug: srd-2024_monster_giant-goat
name: Giant Goat
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10 + 3
speed:
  walk: 40
  climb: 30
abilities:
  str: 17
  dex: 13
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
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Large or smaller creature and the goat moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d4` Bludgeoning damage and has the Prone condition.'
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
cr: '0.5'
saves:
  str: 5
  dex: 1
  con: 1
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
