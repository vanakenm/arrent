---
archivist: true
entity_type: monster
slug: violet-fungus
name: Violet Fungus
compendium: SRD
---

```monster
name: Violet Fungus
size: Medium
type: Plant
alignment: unaligned
ac:
  - ac: 5
hp:
  average: 18
  formula: 4d8
speed:
  walk: 5
abilities:
  str: 3
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
cr: 1/4
traits:
  - name: False Appearance
    entries:
      - While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.
actions:
  - name: Multiattack
    entries:
      - The fungus makes `dice:1d4` Rotting Touch attacks.
  - name: Rotting Touch
    entries:
      - 'Melee Weapon Attack: `atk:CON`, reach 10 ft., one creature. Hit: `damage:1d8` necrotic damage.'
```
