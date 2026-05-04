---
archivist: true
entity_type: monster
slug: black-bear
name: Black Bear
compendium: SRD
---

```monster
name: Black Bear
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d8+6
speed:
  walk: 40
  climb: 30
abilities:
  str: 15
  dex: 10
  con: 14
  int: 2
  wis: 12
  cha: 7
passive_perception: 13
cr: 1/2
traits:
  - name: Keen Smell
    entries:
      - The bear has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack
    entries:
      - 'The bear makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` slashing damage.'
```
