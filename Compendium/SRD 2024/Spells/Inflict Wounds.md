---
archivist: true
entity_type: spell
slug: srd-2024_spell_inflict-wounds
name: Inflict Wounds
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.167Z'
---

```spell
slug: srd-2024_spell_inflict-wounds
name: Inflict Wounds
edition: '2024'
source: SRD 5.2
level: 1
school: necromancy
casting_time: action
range: Touch
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: A creature you touch makes a Constitution saving throw, taking 2d10 Necrotic damage on a failed save or half as much damage on a successful one.
classes:
  - cleric
at_higher_levels:
  - The damage increases by 1d10 for each spell slot level above 1.
damage:
  types:
    - necrotic
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_2
    damage_roll: 3d10
  - type: slot_level_3
    damage_roll: 4d10
  - type: slot_level_4
    damage_roll: 5d10
  - type: slot_level_5
    damage_roll: 6d10
  - type: slot_level_6
    damage_roll: 7d10
  - type: slot_level_7
    damage_roll: 8d10
  - type: slot_level_8
    damage_roll: 9d10
  - type: slot_level_9
    damage_roll: 10d10
```
