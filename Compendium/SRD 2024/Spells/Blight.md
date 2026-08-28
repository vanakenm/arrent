---
archivist: true
entity_type: spell
slug: srd-2024_spell_blight
name: Blight
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.149Z'
---

```spell
slug: srd-2024_spell_blight
name: Blight
edition: '2024'
source: SRD 5.2
level: 4
school: necromancy
casting_time: action
range: 30 feet
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: A creature that you can see within range makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. A Plant creature automatically fails the save. Alternatively, target a nonmagical plant that isn't a creature, such as a tree or shrub. It doesn't make a save; it simply withers and dies.
classes:
  - druid
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 4.
damage:
  types:
    - necrotic
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_5
    damage_roll: 9d8
  - type: slot_level_6
    damage_roll: 10d8
  - type: slot_level_7
    damage_roll: 11d8
  - type: slot_level_8
    damage_roll: 12d8
  - type: slot_level_9
    damage_roll: 13d8
```
