---
archivist: true
entity_type: monster
slug: poisonous-snake
name: Poisonous Snake
compendium: SRD
---

```monster
name: Poisonous Snake
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 13
hp:
  average: 2
  formula: 1d4
speed:
  walk: 30
  swim: 30
abilities:
  str: 2
  dex: 16
  con: 11
  int: 1
  wis: 10
  cha: 3
senses:
  - blindsight 10 ft.
passive_perception: 10
cr: 1/8
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:2d4` poison damage on a failed save, or half as much damage on a successful one.'
```
