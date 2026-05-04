---
archivist: true
entity_type: monster
slug: giant-wolf-spider
name: Giant Wolf Spider
compendium: SRD
---

```monster
name: Giant Wolf Spider
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 13
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
  climb: 40
abilities:
  str: 12
  dex: 16
  con: 13
  int: 3
  wis: 12
  cha: 4
skills:
  perception: 3
  stealth: 7
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 13
cr: 1/4
traits:
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d6+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:2d6` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
```
