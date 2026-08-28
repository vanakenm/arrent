---
archivist: true
entity_type: monster
slug: srd-2024_monster_guard-captain
name: Guard Captain
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_guard-captain
name: Guard Captain
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 75
  formula: 10d8 + 30
speed:
  walk: 30
abilities:
  str: 18
  dex: 14
  con: 16
  int: 12
  wis: 14
  cha: 13
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The guard makes two attacks, using Javelin or Longsword in any combination.
  - name: Javelin
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 30/120 ft. `dmg:3d6+STR` Piercing damage.'
    attacks:
      - name: Javelin attack
        type: ranged
        bonus: 6
        damage: 3d6+4
        damage_type: piercing
        range:
          reach: 5
          normal: 30
          long: 120
  - name: Longsword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 6
        damage: 2d10+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 4
  dex: 2
  con: 3
  int: 1
  wis: 2
  cha: 1
skills:
  athletics: 6
  perception: 4
alignment: neutral
passive_perception: 14
```
