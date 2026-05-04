---
archivist: true
entity_type: monster
slug: giant-sea-horse
name: Giant Sea Horse
compendium: SRD
---

```monster
name: Giant Sea Horse
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 16
  formula: 3d10
speed:
  walk: 0
  swim: 40
abilities:
  str: 12
  dex: 15
  con: 11
  int: 2
  wis: 12
  cha: 5
passive_perception: 11
cr: 1/2
traits:
  - name: Charge
    entries:
      - If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `damage:2d6` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Water Breathing
    entries:
      - The sea horse can breathe only underwater.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
```
