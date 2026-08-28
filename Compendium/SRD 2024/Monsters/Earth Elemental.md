---
archivist: true
entity_type: monster
slug: srd-2024_monster_earth-elemental
name: Earth Elemental
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_earth-elemental
name: Earth Elemental
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 147
  formula: 14d10 + 70
speed:
  walk: 30
  burrow: 30
abilities:
  str: 20
  dex: 8
  con: 20
  int: 5
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages:
  - Primordial (Terran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - paralyzed
  - petrified
  - poisoned
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The elemental makes two attacks, using Slam or Rock Launch in any combination.
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 8
        damage: 2d8+5
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Rock Launch
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 60 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Rock Launch attack
        type: ranged
        bonus: 8
        damage: 1d6+5
        damage_type: bludgeoning
        range:
          normal: 60
reactions: []
legendary_actions: []
traits:
  - name: Earth Glide
    entries:
      - The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.
  - name: Siege Monster
    entries:
      - The elemental deals double damage to objects and structures.
cr: '5'
saves:
  str: 5
  dex: -1
  con: 5
  int: -3
  wis: 0
  cha: -3
alignment: neutral
passive_perception: 10
```
