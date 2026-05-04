---
archivist: true
entity_type: monster
slug: phase-spider
name: Phase Spider
compendium: SRD
---

```monster
name: Phase Spider
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 32
  formula: 5d10+5
speed:
  walk: 30
  climb: 30
abilities:
  str: 15
  dex: 15
  con: 12
  int: 6
  wis: 10
  cha: 6
skills:
  stealth: 6
senses:
  - darkvision 60 ft.
passive_perception: 10
cr: '3'
traits:
  - name: Ethereal Jaunt
    entries:
      - As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d10+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:4d8` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
```
