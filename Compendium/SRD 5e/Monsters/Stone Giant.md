---
archivist: true
entity_type: monster
slug: srd-5e_monster_stone-giant
name: Stone Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.018Z'
---

```monster
slug: srd-5e_monster_stone-giant
name: Stone Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12+55
speed:
  walk: 40
abilities:
  str: 23
  dex: 15
  con: 20
  int: 10
  wis: 12
  cha: 9
senses:
  - darkvision 60 ft.
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:3d8+STR` bludgeoning damage.'
    attacks:
      - name: Greatclub attack
        type: melee
        bonus: 9
        damage: 3d8
        damage_type: thunder
        range:
          reach: 15
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:4d10+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 9
        damage: 4d10
        damage_type: thunder
        range:
          normal: 60
          long: 240
reactions:
  - name: Rock Catching
    entries:
      - If a rock or similar object is hurled at the giant, the giant can, with a successful `dc:10` Dexterity saving throw, catch the missile and take no bludgeoning damage from it.
legendary_actions: []
traits:
  - name: Stone Camouflage
    entries:
      - The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
cr: '7'
saves:
  dex: 5
  con: 8
  wis: 4
skills:
  athletics: 12
  perception: 4
subtype: Giants
alignment: neutral
passive_perception: 14
```
