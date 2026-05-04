---
archivist: true
entity_type: monster
slug: stone-giant
name: Stone Giant
compendium: SRD
---

```monster
name: Stone Giant
size: Huge
type: Giant
alignment: neutral
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
saves:
  dex: 5
  con: 8
  wis: 4
skills:
  athletics: 12
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Giant
cr: '7'
traits:
  - name: Stone Camouflage
    entries:
      - The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
actions:
  - name: Multiattack
    entries:
      - The giant makes two greatclub attacks.
  - name: Greatclub
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:3d8+STR` bludgeoning damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:4d10+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
reactions:
  - name: Rock Catching
    entries:
      - If a rock or similar object is hurled at the giant, the giant can, with a successful `dc:10` Dexterity saving throw, catch the missile and take no bludgeoning damage from it.
```
