---
archivist: true
entity_type: monster
slug: polar-bear
name: Polar Bear
compendium: SRD
---

```monster
name: Polar Bear
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10+15
speed:
  walk: 40
  swim: 30
abilities:
  str: 20
  dex: 10
  con: 16
  int: 2
  wis: 13
  cha: 7
skills:
  perception: 3
passive_perception: 13
cr: '2'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
