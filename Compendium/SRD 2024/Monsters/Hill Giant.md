---
archivist: true
entity_type: monster
slug: srd-2024_monster_hill-giant
name: Hill Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_hill-giant
name: Hill Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 105
  formula: 10d12 + 40
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 19
  int: 5
  wis: 9
  cha: 6
senses: []
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Tree Club or Trash Lob in any combination.
  - name: Tree Club
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tree Club attack
        type: melee
        bonus: 8
        damage: 3d8+5
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Trash Lob
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 60/240 ft. `dmg:2d10+STR` Bludgeoning damage, and the target has the Poisoned condition until the end of its next turn.'
    attacks:
      - name: Trash Lob attack
        type: ranged
        bonus: 8
        damage: 2d10+5
        damage_type: bludgeoning
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 5
  dex: -1
  con: 4
  int: -3
  wis: -1
  cha: -2
skills:
  perception: 2
alignment: chaotic evil
passive_perception: 12
```
