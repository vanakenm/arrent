---
archivist: true
entity_type: monster
slug: giant-centipede
name: Giant Centipede
compendium: SRD
---

```monster
name: Giant Centipede
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 4
  formula: 1d6+1
speed:
  walk: 30
  climb: 30
abilities:
  str: 5
  dex: 14
  con: 12
  int: 1
  wis: 7
  cha: 3
senses:
  - blindsight 30 ft.
passive_perception: 8
cr: 1/4
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or take `damage:3d6` poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
```
