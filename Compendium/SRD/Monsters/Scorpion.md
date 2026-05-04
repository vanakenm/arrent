---
archivist: true
entity_type: monster
slug: scorpion
name: Scorpion
compendium: SRD
---

```monster
name: Scorpion
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 10
abilities:
  str: 2
  dex: 11
  con: 8
  int: 1
  wis: 8
  cha: 2
senses:
  - blindsight 10 ft.
passive_perception: 9
cr: '0'
actions:
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:1d8` poison damage on a failed save, or half as much damage on a successful one.'
```
