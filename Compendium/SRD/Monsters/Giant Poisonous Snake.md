---
archivist: true
entity_type: monster
slug: giant-poisonous-snake
name: Giant Poisonous Snake
compendium: SRD
---

```monster
name: Giant Poisonous Snake
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 14
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
  swim: 30
abilities:
  str: 10
  dex: 18
  con: 13
  int: 2
  wis: 10
  cha: 3
skills:
  perception: 2
senses:
  - blindsight 10 ft.
passive_perception: 12
cr: 1/4
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 10 ft., one target. Hit: `damage:1d4+DEX` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:3d6` poison damage on a failed save, or half as much damage on a successful one.'
```
