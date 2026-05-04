---
archivist: true
entity_type: monster
slug: warhorse
name: Warhorse
compendium: SRD
---

```monster
name: Warhorse
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 60
abilities:
  str: 18
  dex: 12
  con: 13
  int: 2
  wis: 12
  cha: 7
passive_perception: 11
cr: 1/2
traits:
  - name: Trampling Charge
    entries:
      - If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
```
