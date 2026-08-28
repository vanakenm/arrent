---
archivist: true
entity_type: monster
slug: srd-2024_monster_hobgoblin-warrior
name: Hobgoblin Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_hobgoblin-warrior
name: Hobgoblin Warrior
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 30
abilities:
  str: 13
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 9
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
  - name: Longsword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 3
        damage: 2d10+1
        damage_type: slashing
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 150/600 ft. `dmg:1d8+STR` Piercing damage plus `dmg:3d4` Poison damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 3
        damage: 1d8+1
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The hobgoblin has Advantage on an attack roll against a creature if at least one of the hobgoblin's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0.5'
saves:
  str: 1
  dex: 1
  con: 1
  int: 0
  wis: 0
  cha: -1
alignment: lawful evil
passive_perception: 10
```
