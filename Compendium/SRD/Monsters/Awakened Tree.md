---
archivist: true
entity_type: monster
slug: awakened-tree
name: Awakened Tree
compendium: SRD
---

```monster
name: Awakened Tree
size: Huge
type: Plant
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 59
  formula: 7d12+14
speed:
  walk: 20
abilities:
  str: 19
  dex: 6
  con: 15
  int: 10
  wis: 10
  cha: 7
passive_perception: 10
languages:
  - one language known by its creator
damage_vulnerabilities:
  - fire
damage_resistances:
  - bludgeoning
  - piercing
cr: '2'
traits:
  - name: False Appearance
    entries:
      - While the tree remains motionless, it is indistinguishable from a normal tree.
actions:
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d6+STR` bludgeoning damage.'
```
