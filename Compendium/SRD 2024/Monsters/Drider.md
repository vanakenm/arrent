---
archivist: true
entity_type: monster
slug: srd-2024_monster_drider
name: Drider
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_drider
name: Drider
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 123
  formula: 13d10 + 52
speed:
  walk: 30
  climb: 30
abilities:
  str: 16
  dex: 19
  con: 18
  int: 13
  wis: 16
  cha: 12
senses:
  - darkvision 120 ft.
languages:
  - Elvish
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The drider makes three attacks, using Foreleg or Poison Burst in any combination.
  - name: Magic of the Spider Queen
    entries:
      - The drider casts Darkness, Faerie Fire, or Web, requiring no Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`).
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Foreleg
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 10 ft. `dmg:2d8+DEX` Piercing damage.'
    attacks:
      - name: Foreleg attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: piercing
        range:
          reach: 10
  - name: Poison Burst
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 120 ft. `dmg:3d6+STR` Poison damage.'
    attacks:
      - name: Poison Burst attack
        type: ranged
        bonus: 6
        damage: 3d6+3
        damage_type: poison
        range:
          normal: 120
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The drider can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the drider has Disadvantage on ability checks and attack rolls.
  - name: Web Walker
    entries:
      - The drider ignores movement restrictions caused by webs, and the drider knows the location of any other creature in contact with the same web.
cr: '6'
saves:
  str: 3
  dex: 4
  con: 4
  int: 1
  wis: 3
  cha: 1
skills:
  perception: 6
  stealth: 10
alignment: chaotic evil
passive_perception: 16
```
