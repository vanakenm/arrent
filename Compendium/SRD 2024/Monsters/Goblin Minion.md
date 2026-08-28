---
archivist: true
entity_type: monster
slug: srd-2024_monster_goblin-minion
name: Goblin Minion
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.427Z'
---

```monster
slug: srd-2024_monster_goblin-minion
name: Goblin Minion
edition: '2024'
source: SRD 5.2
size: small
type: fey
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 8
  dex: 15
  con: 10
  int: 10
  wis: 8
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Dagger
    entries:
      - 'Melee or Ranged Attack Roll: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d4+DEX` Piercing damage.'
    attacks:
      - name: Dagger attack
        type: ranged
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
  - name: Nimble Escape
    entries:
      - The goblin takes the Disengage or Hide action.
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: -1
  dex: 2
  con: 0
  int: 0
  wis: -1
  cha: -1
skills:
  stealth: 6
alignment: chaotic neutral
passive_perception: 9
```
