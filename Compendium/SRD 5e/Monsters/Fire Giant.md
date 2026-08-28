---
archivist: true
entity_type: monster
slug: srd-5e_monster_fire-giant
name: Fire Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_fire-giant
name: Fire Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 18
    from:
      - plate
hp:
  average: 162
  formula: 13d12+78
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
      - The giant makes two greatsword attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:6d6+STR` slashing damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 11
        damage: 6d6
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:4d10+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 11
        damage: 4d10
        damage_type: thunder
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  dex: 3
  con: 10
  cha: 5
skills:
  athletics: 11
  perception: 6
subtype: Giants
alignment: lawful evil
passive_perception: 16
```
