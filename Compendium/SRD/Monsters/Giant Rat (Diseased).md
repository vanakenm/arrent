---
archivist: true
entity_type: monster
slug: giant-rat-diseased
name: Giant Rat (Diseased)
compendium: SRD
---

```monster
name: Giant Rat (Diseased)
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 11
  int: 2
  wis: 10
  cha: 4
senses:
  - darkvision 60 ft.
passive_perception: 10
cr: 1/8
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw or contract a disease. Until the disease is cured, the target can''t regain hit points except by magical means, and the target''s hit point maximum decreases by 3 (`dice:1d6`) every 24 hours. If the target''s hit point maximum drops to 0 as a result of this disease, the target dies.'
```
