---
archivist: true
entity_type: monster
slug: blood-hawk
name: Blood Hawk
compendium: SRD
---

```monster
name: Blood Hawk
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 7
  formula: 2d6
speed:
  walk: 10
  fly: 60
abilities:
  str: 6
  dex: 14
  con: 10
  int: 3
  wis: 14
  cha: 5
skills:
  perception: 4
passive_perception: 14
cr: 1/8
traits:
  - name: Keen Sight
    entries:
      - The hawk has advantage on Wisdom (Perception) checks that rely on sight.
  - name: Pack Tactics
    entries:
      - The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
```
