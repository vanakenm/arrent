---
archivist: true
entity_type: monster
slug: hill-giant
name: Hill Giant
compendium: SRD
---

```monster
name: Hill Giant
size: Huge
type: Giant
alignment: chaotic evil
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
skills:
  perception: 2
passive_perception: 12
languages:
  - Giant
cr: '5'
actions:
  - name: Multiattack
    entries:
      - The giant makes two greatclub attacks.
  - name: Greatclub
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d8+STR` bludgeoning damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:3d10+STR` bludgeoning damage.'
```
