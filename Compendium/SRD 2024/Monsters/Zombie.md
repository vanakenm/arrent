---
archivist: true
entity_type: monster
slug: srd-2024_monster_zombie
name: Zombie
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_zombie
name: Zombie
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 8
    from:
      - natural armor
hp:
  average: 15
  formula: 2d8 + 6
speed:
  walk: 20
abilities:
  str: 13
  dex: 6
  con: 16
  int: 3
  wis: 6
  cha: 5
senses:
  - darkvision 60 ft.
languages:
  - Understands Common plus one other language but can't speak
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 3
        damage: 1d8+1
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (`dc:5` plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead.
cr: '0.25'
saves:
  str: 1
  dex: -2
  con: 3
  int: -4
  wis: 0
  cha: -3
alignment: neutral evil
passive_perception: 8
```
