---
archivist: true
entity_type: monster
slug: zombie
name: Zombie
compendium: SRD
---

```monster
name: Zombie
size: Medium
type: Undead
alignment: neutral evil
ac:
  - ac: 8
hp:
  average: 22
  formula: 3d8+9
speed:
  walk: 20
abilities:
  str: 13
  dex: 6
  con: 16
  int: 3
  wis: 6
  cha: 5
saves:
  wis: 0
senses:
  - darkvision 60 ft.
passive_perception: 8
languages:
  - understands the languages it knew in life but can't speak
condition_immunities:
  - poisoned
cr: 1/4
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.
actions:
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
```
