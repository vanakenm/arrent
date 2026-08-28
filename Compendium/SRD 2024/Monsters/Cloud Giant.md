---
archivist: true
entity_type: monster
slug: srd-2024_monster_cloud-giant
name: Cloud Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_cloud-giant
name: Cloud Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 200
  formula: 16d12 + 96
speed:
  walk: 40
  fly: 20
abilities:
  str: 27
  dex: 10
  con: 22
  int: 12
  wis: 16
  cha: 16
senses: []
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Thunderous Mace or Thundercloud in any combination. It can replace one attack with a use of Spellcasting to cast Fog Cloud.
  - name: Misty Step
    entries:
      - The giant casts the Misty Step spell, using the same spellcasting ability as Spellcasting.
  - name: Thunderous Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Bludgeoning damage plus `dmg:2d6` Thunder damage.'
    attacks:
      - name: Thunderous Mace attack
        type: melee
        bonus: 12
        damage: 3d8+8
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Thundercloud
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 240 ft. `dmg:3d6+STR` Thunder damage, and the target has the Incapacitated condition until the end of its next turn.'
    attacks:
      - name: Thundercloud attack
        type: ranged
        bonus: 12
        damage: 3d6+8
        damage_type: thunder
        range:
          normal: 240
  - name: Spellcasting
    entries:
      - |-
        The giant casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Fog Cloud, Light
        - **1/Day Each:** Control Weather, Gaseous Form, Telekinesis
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  str: 8
  dex: 0
  con: 10
  int: 1
  wis: 7
  cha: 3
skills:
  insight: 7
  perception: 11
alignment: neutral
passive_perception: 21
```
