---
archivist: true
entity_type: monster
slug: srd-2024_monster_guard
name: Guard
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_guard
name: Guard
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 30
abilities:
  str: 13
  dex: 12
  con: 12
  int: 10
  wis: 11
  cha: 10
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d6+STR` Piercing damage.'
    attacks:
      - name: Spear attack
        type: ranged
        bonus: 3
        damage: 1d6+1
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: 1
  dex: 1
  con: 1
  int: 0
  wis: 0
  cha: 0
skills:
  perception: 2
alignment: neutral
passive_perception: 12
```
