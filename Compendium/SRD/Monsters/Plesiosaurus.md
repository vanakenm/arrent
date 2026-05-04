---
archivist: true
entity_type: monster
slug: plesiosaurus
name: Plesiosaurus
compendium: SRD
---

```monster
name: Plesiosaurus
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10+24
speed:
  walk: 20
  swim: 40
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 12
  cha: 5
skills:
  perception: 3
  stealth: 4
passive_perception: 13
cr: '2'
traits:
  - name: Hold Breath
    entries:
      - The plesiosaurus can hold its breath for 1 hour.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d6+STR` piercing damage.'
```
