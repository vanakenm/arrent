---
archivist: true
entity_type: monster
slug: srd-2024_monster_ogre-zombie
name: Ogre Zombie
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_ogre-zombie
name: Ogre Zombie
edition: '2024'
source: SRD 5.2
size: large
type: undead
ac:
  - ac: 8
    from:
      - natural armor
hp:
  average: 85
  formula: 9d10 + 36
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
  - Understands Common and Giant but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 6
        damage: 2d8+4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (`dc:5` plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead.
cr: '2'
saves:
  str: 4
  dex: -2
  con: 4
  int: -4
  wis: 0
  cha: -3
alignment: neutral evil
passive_perception: 8
```
