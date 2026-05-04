---
archivist: true
entity_type: monster
slug: triceratops
name: Triceratops
compendium: SRD
---

```monster
name: Triceratops
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 95
  formula: 10d12+30
speed:
  walk: 50
abilities:
  str: 22
  dex: 9
  con: 17
  int: 2
  wis: 11
  cha: 5
passive_perception: 10
cr: '5'
traits:
  - name: Trampling Charge
    entries:
      - If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:13` Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d8+STR` piercing damage.'
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one prone creature. Hit: `damage:3d10+STR` bludgeoning damage.'
```
