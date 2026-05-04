---
archivist: true
entity_type: monster
slug: spider
name: Spider
compendium: SRD
---

```monster
name: Spider
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 20
  climb: 20
abilities:
  str: 2
  dex: 14
  con: 8
  int: 1
  wis: 10
  cha: 2
skills:
  stealth: 4
senses:
  - darkvision 30 ft.
passive_perception: 12
cr: '0'
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
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or take `damage:1d4` poison damage.'
```
