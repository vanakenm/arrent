---
archivist: true
entity_type: monster
slug: srd-5e_monster_ogre-zombie
name: Ogre Zombie
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.009Z'
---

```monster
slug: srd-5e_monster_ogre-zombie
name: Ogre Zombie
edition: '2014'
source: SRD 5.1
size: large
type: undead
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
senses:
  - darkvision 60 ft.
languages:
  - understands Common and Giant but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Morningstar attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.
cr: '2'
saves:
  wis: 0
subtype: Zombies
alignment: neutral evil
passive_perception: 8
```
