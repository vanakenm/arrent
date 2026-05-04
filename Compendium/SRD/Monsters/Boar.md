---
archivist: true
entity_type: monster
slug: boar
name: Boar
compendium: SRD
---

```monster
name: Boar
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
abilities:
  str: 13
  dex: 11
  con: 12
  int: 2
  wis: 9
  cha: 5
passive_perception: 9
cr: 1/4
traits:
  - name: Charge
    entries:
      - If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra `damage:1d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
actions:
  - name: Tusk
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
```
