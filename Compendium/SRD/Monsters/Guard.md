---
archivist: true
entity_type: monster
slug: guard
name: Guard
compendium: SRD
---

```monster
name: Guard
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 16
    from:
      - chain shirt, shield
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 13
  dex: 12
  con: 12
  int: 10
  wis: 11
  cha: 10
skills:
  perception: 2
passive_perception: 12
languages:
  - any one language (usually Common)
cr: 1/8
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:1d8+STR` piercing damage if used with two hands to make a melee attack.'
```
