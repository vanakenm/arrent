---
archivist: true
entity_type: monster
slug: giant-ape
name: Giant Ape
compendium: SRD
---

```monster
name: Giant Ape
size: Huge
type: Beast
alignment: unaligned
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
skills:
  athletics: 9
  perception: 4
passive_perception: 14
cr: '7'
actions:
  - name: Multiattack
    entries:
      - The ape makes two fist attacks.
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d10+STR` bludgeoning damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 50/100 ft., one target. Hit: `damage:7d6+STR` bludgeoning damage.'
```
