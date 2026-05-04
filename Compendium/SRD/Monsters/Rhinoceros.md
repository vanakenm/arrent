---
archivist: true
entity_type: monster
slug: rhinoceros
name: Rhinoceros
compendium: SRD
---

```monster
name: Rhinoceros
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 15
  int: 2
  wis: 12
  cha: 6
passive_perception: 11
cr: '2'
traits:
  - name: Charge
    entries:
      - If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `damage:2d8` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
```
