---
archivist: true
entity_type: monster
slug: giant-bat
name: Giant Bat
compendium: SRD
---

```monster
name: Giant Bat
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 13
hp:
  average: 22
  formula: 4d10
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 16
  con: 11
  int: 2
  wis: 12
  cha: 6
senses:
  - blindsight 60 ft.
passive_perception: 11
cr: 1/4
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
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d6+STR` piercing damage.'
```
