---
archivist: true
entity_type: monster
slug: shrieker
name: Shrieker
compendium: SRD
---

```monster
name: Shrieker
size: Medium
type: Plant
alignment: unaligned
ac:
  - ac: 5
hp:
  average: 13
  formula: 3d8
speed:
  walk: 0
abilities:
  str: 1
  dex: 1
  con: 10
  int: 1
  wis: 3
  cha: 1
senses:
  - blindsight 30 ft. (blind beyond this radius)
passive_perception: 6
condition_immunities:
  - blinded
  - deafened
  - frightened
cr: '0'
traits:
  - name: False Appearance
    entries:
      - While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.
actions:
  - name: Shriek
    entries:
      - When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for `dice:1d4` of the shrieker's turns afterward
```
