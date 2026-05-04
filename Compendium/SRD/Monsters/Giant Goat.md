---
archivist: true
entity_type: monster
slug: giant-goat
name: Giant Goat
compendium: SRD
---

```monster
name: Giant Goat
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 40
abilities:
  str: 17
  dex: 11
  con: 12
  int: 3
  wis: 12
  cha: 6
passive_perception: 11
cr: 1/2
traits:
  - name: Charge
    entries:
      - If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `damage:2d4` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Sure-Footed
    entries:
      - The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` bludgeoning damage.'
```
