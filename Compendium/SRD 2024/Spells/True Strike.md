---
archivist: true
entity_type: spell
slug: srd-2024_spell_true-strike
name: True Strike
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.185Z'
---

```spell
slug: srd-2024_spell_true-strike
name: True Strike
edition: '2024'
source: SRD 5.2
level: 0
school: divination
casting_time: action
range: Self
components: S, M (a weapon with which you have proficiency and that is worth 1+ CP)
duration: instantaneous
concentration: false
ritual: false
description: Guided by a flash of magical insight, you make one attack with the weapon used in the spell's casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon's normal damage type (your choice).
classes:
  - bard
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - Whether you deal Radiant damage or the weapon's normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).
damage:
  types:
    - radiant
casting_options:
  - type: player_level_5
    damage_roll: 1d6
  - type: player_level_11
    damage_roll: 2d6
  - type: player_level_17
    damage_roll: 3d6
```
