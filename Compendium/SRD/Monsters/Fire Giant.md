---
archivist: true
entity_type: monster
slug: fire-giant
name: Fire Giant
compendium: SRD
---

```monster
name: Fire Giant
size: Huge
type: Giant
alignment: lawful evil
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
saves:
  dex: 3
  con: 10
  cha: 5
skills:
  athletics: 11
  perception: 6
passive_perception: 16
languages:
  - Giant
damage_immunities:
  - fire
cr: '9'
actions:
  - name: Multiattack
    entries:
      - The giant makes two greatsword attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:6d6+STR` slashing damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:4d10+STR` bludgeoning damage.'
```
