---
archivist: true
entity_type: monster
slug: hippogriff
name: Hippogriff
compendium: SRD
---

```monster
name: Hippogriff
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 40
  fly: 60
abilities:
  str: 17
  dex: 13
  con: 13
  int: 2
  wis: 12
  cha: 8
skills:
  perception: 5
passive_perception: 15
cr: '1'
traits:
  - name: Keen Sight
    entries:
      - The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Multiattack
    entries:
      - 'The hippogriff makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
