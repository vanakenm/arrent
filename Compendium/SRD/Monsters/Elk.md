---
archivist: true
entity_type: monster
slug: elk
name: Elk
compendium: SRD
---

```monster
name: Elk
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 13
  formula: 2d10+2
speed:
  walk: 50
abilities:
  str: 16
  dex: 10
  con: 12
  int: 2
  wis: 10
  cha: 6
passive_perception: 10
cr: 1/4
traits:
  - name: Charge
    entries:
      - If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `damage:2d6` damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one prone creature. Hit: `damage:2d4+STR` bludgeoning damage.'
```
