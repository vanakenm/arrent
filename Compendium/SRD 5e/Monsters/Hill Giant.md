---
archivist: true
entity_type: monster
slug: srd-5e_monster_hill-giant
name: Hill Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_hill-giant
name: Hill Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 105
  formula: 10d12+40
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
      - The giant makes two greatclub attacks.
  - name: Greatclub
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d8+STR` bludgeoning damage.'
    attacks:
      - name: Greatclub attack
        type: melee
        bonus: 8
        damage: 3d8
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:3d10+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 8
        damage: 3d10
        damage_type: thunder
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits: []
cr: '5'
skills:
  perception: 2
subtype: Giants
alignment: chaotic evil
passive_perception: 12
```
