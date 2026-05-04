---
archivist: true
entity_type: monster
slug: jackal
name: Jackal
compendium: SRD
---

```monster
name: Jackal
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 40
abilities:
  str: 8
  dex: 15
  con: 11
  int: 3
  wis: 12
  cha: 6
skills:
  perception: 3
passive_perception: 13
cr: '0'
traits:
  - name: Keen Hearing and Smell
    entries:
      - The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` piercing damage.'
```
