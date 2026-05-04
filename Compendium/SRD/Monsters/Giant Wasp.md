---
archivist: true
entity_type: monster
slug: giant-wasp
name: Giant Wasp
compendium: SRD
---

```monster
name: Giant Wasp
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 13
  formula: 3d8
speed:
  walk: 10
  fly: 50
abilities:
  str: 10
  dex: 14
  con: 10
  int: 1
  wis: 10
  cha: 3
passive_perception: 10
cr: 1/2
actions:
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d6+DEX` piercing damage, and the target must make a `dc:11` Constitution saving throw, taking `damage:3d6` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
```
