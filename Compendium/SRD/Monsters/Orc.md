---
archivist: true
entity_type: monster
slug: orc
name: Orc
compendium: SRD
---

```monster
name: Orc
size: Medium
type: Humanoid
subtype: orc
alignment: chaotic evil
ac:
  - ac: 13
    from:
      - hide armor
hp:
  average: 15
  formula: 2d8+6
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 16
  int: 7
  wis: 11
  cha: 10
skills:
  intimidation: 2
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Common
  - Orc
cr: 1/2
traits:
  - name: Aggressive
    entries:
      - As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d12+STR` slashing damage.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
```
