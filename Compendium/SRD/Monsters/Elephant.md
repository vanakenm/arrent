---
archivist: true
entity_type: monster
slug: elephant
name: Elephant
compendium: SRD
---

```monster
name: Elephant
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 76
  formula: 8d12+24
speed:
  walk: 40
abilities:
  str: 22
  dex: 9
  con: 17
  int: 3
  wis: 11
  cha: 6
passive_perception: 10
cr: '4'
traits:
  - name: Trampling Charge
    entries:
      - If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:12` Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d8+STR` piercing damage.'
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one prone creature. Hit: `damage:3d10+STR` bludgeoning damage.'
```
