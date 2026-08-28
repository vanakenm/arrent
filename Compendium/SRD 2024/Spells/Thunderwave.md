---
archivist: true
entity_type: spell
slug: srd-2024_spell_thunderwave
name: Thunderwave
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.184Z'
---

```spell
slug: srd-2024_spell_thunderwave
name: Thunderwave
edition: '2024'
source: SRD 5.2
level: 1
school: evocation
casting_time: action
range: Self
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: |-
  You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only.

  In addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet.
classes:
  - bard
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 1.
damage:
  types:
    - thunder
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_2
    damage_roll: 3d8
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
