---
archivist: true
entity_type: monster
slug: frost-giant
name: Frost Giant
compendium: SRD
---

```monster
name: Frost Giant
size: Huge
type: Giant
alignment: neutral evil
ac:
  - ac: 15
    from:
      - patchwork armor
hp:
  average: 138
  formula: 12d12+60
speed:
  walk: 40
abilities:
  str: 23
  dex: 9
  con: 21
  int: 9
  wis: 10
  cha: 12
saves:
  con: 8
  wis: 3
  cha: 4
skills:
  athletics: 9
  perception: 3
passive_perception: 13
languages:
  - Giant
damage_immunities:
  - cold
cr: '8'
actions:
  - name: Multiattack
    entries:
      - The giant makes two greataxe attacks.
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d12+STR` slashing damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:4d10+STR` bludgeoning damage.'
```
