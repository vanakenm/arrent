---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-ape
name: Giant Ape
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_giant-ape
name: Giant Ape
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 12
hp:
  average: 157
  formula: 15d12+60
speed:
  walk: 40
  climb: 40
abilities:
  str: 23
  dex: 14
  con: 18
  int: 7
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The ape makes two fist attacks.
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d10+STR` bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 9
        damage: 3d10
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 50/100 ft., one target. Hit: `dmg:7d6+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 9
        damage: 7d6
        damage_type: thunder
        range:
          normal: 50
          long: 100
reactions: []
legendary_actions: []
traits: []
cr: '7'
skills:
  athletics: 9
  perception: 4
alignment: unaligned
passive_perception: 14
```
