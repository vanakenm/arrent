---
archivist: true
entity_type: monster
slug: ape
name: Ape
compendium: SRD
---

```monster
name: Ape
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 19
  formula: 3d8+6
speed:
  walk: 30
  climb: 30
abilities:
  str: 16
  dex: 14
  con: 14
  int: 6
  wis: 12
  cha: 7
skills:
  athletics: 5
  perception: 3
passive_perception: 13
cr: 1/2
actions:
  - name: Multiattack
    entries:
      - The ape makes two fist attacks.
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 25/50 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
```
