---
archivist: true
entity_type: monster
slug: baboon
name: Baboon
compendium: SRD
---

```monster
name: Baboon
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 30
  climb: 30
abilities:
  str: 8
  dex: 14
  con: 11
  int: 4
  wis: 12
  cha: 6
passive_perception: 11
cr: '0'
traits:
  - name: Pack Tactics
    entries:
      - The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` piercing damage.'
```
