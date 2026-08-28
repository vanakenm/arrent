---
archivist: true
entity_type: monster
slug: srd-2024_monster_kobold-warrior
name: Kobold Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_kobold-warrior
name: Kobold Warrior
edition: '2024'
source: SRD 5.2
size: small
type: dragon
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 7
  formula: 3d6 - 3
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 9
  int: 8
  wis: 7
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Draconic
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
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The kobold has Advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the kobold has Disadvantage on ability checks and attack rolls.
cr: '0.125'
saves:
  str: -2
  dex: 2
  con: -1
  int: -1
  wis: -2
  cha: -1
alignment: neutral
passive_perception: 8
```
