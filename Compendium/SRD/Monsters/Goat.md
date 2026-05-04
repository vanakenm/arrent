---
archivist: true
entity_type: monster
slug: goat
name: Goat
compendium: SRD
---

```monster
name: Goat
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 4
  formula: 1d8
speed:
  walk: 40
abilities:
  str: 12
  dex: 10
  con: 11
  int: 2
  wis: 10
  cha: 5
passive_perception: 10
cr: '0'
traits:
  - name: Charge
    entries:
      - If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `damage:1d4` bludgeoning damage. If the target is a creature, it must succeed on a `dc:10` Strength saving throw or be knocked prone.
  - name: Sure-Footed
    entries:
      - The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` bludgeoning damage.'
```
