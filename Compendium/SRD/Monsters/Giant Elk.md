---
archivist: true
entity_type: monster
slug: giant-elk
name: Giant Elk
compendium: SRD
---

```monster
name: Giant Elk
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 42
  formula: 5d12+10
speed:
  walk: 60
abilities:
  str: 19
  dex: 16
  con: 14
  int: 7
  wis: 14
  cha: 10
skills:
  perception: 4
passive_perception: 14
languages:
  - Giant Elk
  - understands Common
  - Elvish
  - and Sylvan but can't speak
cr: '2'
traits:
  - name: Charge
    entries:
      - If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `damage:2d6` damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one prone creature. Hit: `damage:4d8+STR` bludgeoning damage.'
```
