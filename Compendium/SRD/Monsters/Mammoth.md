---
archivist: true
entity_type: monster
slug: mammoth
name: Mammoth
compendium: SRD
---

```monster
name: Mammoth
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12+55
speed:
  walk: 40
abilities:
  str: 24
  dex: 9
  con: 21
  int: 3
  wis: 11
  cha: 6
passive_perception: 10
cr: '6'
traits:
  - name: Trampling Charge
    entries:
      - If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:4d8+STR` piercing damage.'
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one prone creature. Hit: `damage:4d10+STR` bludgeoning damage.'
```
