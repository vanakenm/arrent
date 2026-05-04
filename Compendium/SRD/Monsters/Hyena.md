---
archivist: true
entity_type: monster
slug: hyena
name: Hyena
compendium: SRD
---

```monster
name: Hyena
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 5
  formula: 1d8+1
speed:
  walk: 50
abilities:
  str: 11
  dex: 13
  con: 12
  int: 2
  wis: 12
  cha: 5
skills:
  perception: 3
passive_perception: 13
cr: '0'
traits:
  - name: Pack Tactics
    entries:
      - The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6` piercing damage.'
```
