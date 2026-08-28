---
archivist: true
entity_type: spell
slug: srd-2024_spell_shatter
name: Shatter
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.179Z'
---

```spell
slug: srd-2024_spell_shatter
name: Shatter
edition: '2024'
source: SRD 5.2
level: 2
school: evocation
casting_time: action
range: 60 feet
components: V, S, M (a chip of mica)
duration: instantaneous
concentration: false
ritual: false
description: A loud noise erupts from a point of your choice within range. Each creature in a 10-foot-radius Sphere centered there makes a Constitution saving throw, taking 3d8 Thunder damage on a failed save or half as much damage on a successful one. A Construct has Disadvantage on the save. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.
classes:
  - bard
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 2.
damage:
  types:
    - thunder
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_3
    damage_roll: 4d8
  - type: slot_level_4
    damage_roll: 5d8
  - type: slot_level_5
    damage_roll: 6d8
  - type: slot_level_6
    damage_roll: 7d8
  - type: slot_level_7
    damage_roll: 8d8
  - type: slot_level_8
    damage_roll: 9d8
  - type: slot_level_9
    damage_roll: 10d8
```
