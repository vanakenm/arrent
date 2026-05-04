---
archivist: true
entity_type: monster
slug: mastiff
name: Mastiff
compendium: SRD
---

```monster
name: Mastiff
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 5
  formula: 1d8+1
speed:
  walk: 40
abilities:
  str: 13
  dex: 14
  con: 12
  int: 3
  wis: 12
  cha: 7
skills:
  perception: 3
passive_perception: 13
cr: 1/8
traits:
  - name: Keen Hearing and Smell
    entries:
      - The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
```
