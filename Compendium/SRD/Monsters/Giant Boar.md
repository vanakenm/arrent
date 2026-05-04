---
archivist: true
entity_type: monster
slug: giant-boar
name: Giant Boar
compendium: SRD
---

```monster
name: Giant Boar
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10+15
speed:
  walk: 40
abilities:
  str: 17
  dex: 10
  con: 16
  int: 2
  wis: 7
  cha: 5
passive_perception: 8
cr: '2'
traits:
  - name: Charge
    entries:
      - If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra `damage:2d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
actions:
  - name: Tusk
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
