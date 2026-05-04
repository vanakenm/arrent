---
archivist: true
entity_type: monster
slug: warhorse-skeleton
name: Warhorse Skeleton
compendium: SRD
---

```monster
name: Warhorse Skeleton
size: Large
type: Undead
alignment: lawful evil
ac:
  - ac: 13
    from:
      - barding scraps
hp:
  average: 22
  formula: 3d10+6
speed:
  walk: 60
abilities:
  str: 18
  dex: 12
  con: 15
  int: 2
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 9
damage_vulnerabilities:
  - bludgeoning
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
cr: 1/2
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
```
