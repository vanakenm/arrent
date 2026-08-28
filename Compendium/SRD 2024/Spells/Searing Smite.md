---
archivist: true
entity_type: spell
slug: srd-2024_spell_searing-smite
name: Searing Smite
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.178Z'
---

```spell
slug: srd-2024_spell_searing-smite
name: Searing Smite
edition: '2024'
source: SRD 5.2
level: 1
school: evocation
casting_time: bonus-action
range: Self
components: V
duration: 1 minute
concentration: false
ritual: false
description: As you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends.
classes:
  - paladin
at_higher_levels:
  - All the damage increases by 1d6 for each spell slot level above 1.
damage:
  types:
    - fire
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_2
    damage_roll: 2d6
  - type: slot_level_3
    damage_roll: 3d6
  - type: slot_level_4
    damage_roll: 4d6
  - type: slot_level_5
    damage_roll: 5d6
  - type: slot_level_6
    damage_roll: 6d6
  - type: slot_level_7
    damage_roll: 7d6
  - type: slot_level_8
    damage_roll: 8d6
  - type: slot_level_9
    damage_roll: 9d6
```
