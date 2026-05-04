---
archivist: true
entity_type: monster
slug: vulture
name: Vulture
compendium: SRD
---

```monster
name: Vulture
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 5
  formula: 1d8+1
speed:
  walk: 10
  fly: 50
abilities:
  str: 7
  dex: 10
  con: 13
  int: 2
  wis: 12
  cha: 4
skills:
  perception: 3
passive_perception: 13
cr: '0'
traits:
  - name: Keen Sight and Smell
    entries:
      - The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.
  - name: Pack Tactics
    entries:
      - The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4` piercing damage.'
```
