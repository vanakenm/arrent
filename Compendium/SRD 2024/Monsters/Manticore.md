---
archivist: true
entity_type: monster
slug: srd-2024_monster_manticore
name: Manticore
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.434Z'
---

```monster
slug: srd-2024_monster_manticore
name: Manticore
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10 + 24
speed:
  walk: 30
  fly: 50
abilities:
  str: 17
  dex: 16
  con: 17
  int: 7
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The manticore makes three attacks, using Rend or Tail Spike in any combination.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: slashing
        range:
          reach: 5
  - name: Tail Spike
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 100/200 ft. `dmg:1d8+STR` Piercing damage.'
    attacks:
      - name: Tail Spike attack
        type: ranged
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          normal: 100
          long: 200
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: 3
  con: 3
  int: -2
  wis: 1
  cha: -1
alignment: lawful evil
passive_perception: 11
```
