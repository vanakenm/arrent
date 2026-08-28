---
archivist: true
entity_type: monster
slug: srd-2024_monster_fire-giant
name: Fire Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.420Z'
---

```monster
slug: srd-2024_monster_fire-giant
name: Fire Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 162
  formula: 13d12 + 78
speed:
  walk: 30
abilities:
  str: 25
  dex: 9
  con: 23
  int: 10
  wis: 14
  cha: 13
senses: []
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Flame Sword or Hammer Throw in any combination.
  - name: Flame Sword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d6+STR` Slashing damage plus `dmg:3d6` Fire damage.'
    attacks:
      - name: Flame Sword attack
        type: melee
        bonus: 11
        damage: 4d6+7
        damage_type: slashing
        range:
          reach: 10
  - name: Hammer Throw
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 60/240 ft. `dmg:3d10+STR` Bludgeoning damage plus `dmg:1d8` Fire damage, and the target is pushed up to 15 feet straight away from the giant and has Disadvantage on the next attack roll it makes before the end of its next turn.'
    attacks:
      - name: Hammer Throw attack
        type: ranged
        bonus: 11
        damage: 3d10+7
        damage_type: bludgeoning
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  str: 7
  dex: 3
  con: 10
  int: 0
  wis: 2
  cha: 5
skills:
  athletics: 11
  perception: 6
alignment: lawful evil
passive_perception: 16
```
