---
archivist: true
entity_type: monster
slug: srd-5e_monster_zombie
name: Zombie
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.028Z'
---

```monster
slug: srd-5e_monster_zombie
name: Zombie
edition: '2014'
source: SRD 5.1
size: medium
type: undead
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
senses:
  - darkvision 60 ft.
languages:
  - understands the languages it knew in life but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities:
  - poisoned
actions:
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Undead Fortitude
    entries:
      - If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.
cr: '0.25'
saves:
  wis: 0
subtype: Zombies
alignment: neutral evil
passive_perception: 8
```
