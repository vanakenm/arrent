---
archivist: true
entity_type: monster
slug: giant-badger
name: Giant Badger
compendium: SRD
---

```monster
name: Giant Badger
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 13
  formula: 2d8+4
speed:
  walk: 30
  burrow: 10
abilities:
  str: 13
  dex: 10
  con: 15
  int: 2
  wis: 12
  cha: 5
senses:
  - darkvision 30 ft.
passive_perception: 11
cr: 1/4
traits:
  - name: Keen Smell
    entries:
      - The badger has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack
    entries:
      - 'The badger makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` slashing damage.'
```
