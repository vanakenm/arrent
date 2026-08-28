---
archivist: true
entity_type: monster
slug: srd-2024_monster_skeleton
name: Skeleton
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.443Z'
---

```monster
slug: srd-2024_monster_skeleton
name: Skeleton
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 13
  formula: 2d8 + 4
speed:
  walk: 30
abilities:
  str: 10
  dex: 16
  con: 15
  int: 6
  wis: 8
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
  - name: Shortsword
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Shortbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 80/320 ft. `dmg:1d6+DEX` Piercing damage.'
    attacks:
      - name: Shortbow attack
        type: ranged
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 0
  dex: 3
  con: 2
  int: -2
  wis: -1
  cha: -3
alignment: lawful evil
passive_perception: 9
```
