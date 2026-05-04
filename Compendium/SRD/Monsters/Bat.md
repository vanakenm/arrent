---
archivist: true
entity_type: monster
slug: bat
name: Bat
compendium: SRD
---

```monster
name: Bat
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 5
  fly: 30
abilities:
  str: 2
  dex: 15
  con: 8
  int: 2
  wis: 12
  cha: 4
senses:
  - blindsight 60 ft.
passive_perception: 11
cr: '0'
traits:
  - name: Echolocation
    entries:
      - The bat can't use its blindsight while deafened.
  - name: Keen Hearing
    entries:
      - The bat has advantage on Wisdom (Perception) checks that rely on hearing.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+0`, reach 5 ft., one creature. Hit: 1 piercing damage.'
```
