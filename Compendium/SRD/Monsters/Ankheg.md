---
archivist: true
entity_type: monster
slug: ankheg
name: Ankheg
compendium: SRD
---

```monster
name: Ankheg
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 14
    from:
      - 14 (natural armor), 11 while prone
hp:
  average: 39
  formula: 6d10+6
speed:
  walk: 30
  burrow: 10
abilities:
  str: 17
  dex: 11
  con: 13
  int: 1
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
passive_perception: 11
cr: '2'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage plus `damage:1d6` acid damage. If the target is a Large or smaller creature, it is grappled (escape `dc:STR`). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.'
  - name: Acid Spray (Recharge 6)
    entries:
      - The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a `dc:13` Dexterity saving throw, taking `damage:3d6` acid damage on a failed save, or half as much damage on a successful one.
```
