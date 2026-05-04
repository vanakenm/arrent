---
archivist: true
entity_type: monster
slug: awakened-shrub
name: Awakened Shrub
compendium: SRD
---

```monster
name: Awakened Shrub
size: Small
type: Plant
alignment: unaligned
ac:
  - ac: 9
hp:
  average: 10
  formula: 3d6
speed:
  walk: 20
abilities:
  str: 3
  dex: 8
  con: 11
  int: 10
  wis: 10
  cha: 6
passive_perception: 10
languages:
  - one language known by its creator
damage_vulnerabilities:
  - fire
damage_resistances:
  - piercing
cr: '0'
traits:
  - name: False Appearance
    entries:
      - While the shrub remains motionless, it is indistinguishable from a normal shrub.
actions:
  - name: Rake
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` slashing damage.'
```
