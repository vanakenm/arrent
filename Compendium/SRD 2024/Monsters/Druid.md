---
archivist: true
entity_type: monster
slug: srd-2024_monster_druid
name: Druid
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_druid
name: Druid
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 44
  formula: 8d8 + 8
speed:
  walk: 30
abilities:
  str: 10
  dex: 12
  con: 13
  int: 12
  wis: 16
  cha: 11
senses: []
languages:
  - Common
  - Druidic
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The druid makes two attacks, using Vine Staff or Verdant Wisp in any combination.
  - name: Vine Staff
    entries:
      - 'Melee Attack Roll: `atk:WIS+PB`, reach 5 ft. `dmg:1d8+WIS` Bludgeoning damage plus `dmg:1d4` Poison damage.'
    attacks:
      - name: Vine Staff attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Verdant Wisp
    entries:
      - 'Ranged Attack Roll: `atk:+5`, range 90 ft. `dmg:3d6` Radiant damage.'
    attacks:
      - name: Verdant Wisp attack
        type: ranged
        bonus: 5
        damage: 3d6
        damage_type: radiant
        range:
          normal: 90
  - name: Spellcasting
    entries:
      - |-
        The druid casts one of the following spells, using Wisdom as the spellcasting ability (spell save `dc:WIS`):

        - **At Will:** Druidcraft, Speak with Animals
        - **2/Day Each:** Entangle, Thunderwave
        - **1/Day Each:** Animal Messenger, Longstrider, Moonbeam
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 0
  dex: 1
  con: 1
  int: 1
  wis: 3
  cha: 0
skills:
  medicine: 5
  nature: 3
  perception: 5
alignment: neutral
passive_perception: 15
```
