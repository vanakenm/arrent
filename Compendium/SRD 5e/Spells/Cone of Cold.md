---
archivist: true
entity_type: spell
slug: srd-5e_spell_cone-of-cold
name: Cone of Cold
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.808Z'
---

```spell
slug: srd-5e_spell_cone-of-cold
name: Cone of Cold
edition: '2014'
source: SRD 5.1
level: 5
school: evocation
casting_time: action
range: Self
components: V, S, M (A small crystal or glass cone.)
duration: instantaneous
concentration: false
ritual: false
description: A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.
classes:
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.
damage:
  types:
    - cold
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_6
    damage_roll: 9d8
  - type: slot_level_7
    damage_roll: 10d8
  - type: slot_level_8
    damage_roll: 11d8
  - type: slot_level_9
    damage_roll: 12d8
```
