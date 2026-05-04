---
archivist: true
entity_type: monster
slug: ogre-zombie
name: Ogre Zombie
compendium: SRD
---

```monster
name: Ogre Zombie
size: Large
type: Undead
alignment: neutral evil
ac:
  - ac: 8
hp:
  average: 85
  formula: 9d10+36
speed:
  walk: 30
abilities:
  str: 19
  dex: 6
  con: 18
  int: 3
  wis: 6
  cha: 5
saves:
  wis: 0
senses:
  - darkvision 60 ft.
passive_perception: 8
languages:
  - understands Common and Giant but can't speak
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '2'
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.
actions:
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
```
