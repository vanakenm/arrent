---
archivist: true
entity_type: monster
slug: eagle
name: Eagle
compendium: SRD
---

```monster
name: Eagle
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 10
  fly: 60
abilities:
  str: 6
  dex: 15
  con: 10
  int: 2
  wis: 14
  cha: 7
skills:
  perception: 4
passive_perception: 14
cr: '0'
traits:
  - name: Keen Sight
    entries:
      - The eagle has advantage on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` slashing damage.'
```
