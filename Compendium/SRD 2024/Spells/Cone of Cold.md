---
archivist: true
entity_type: spell
slug: srd-2024_spell_cone-of-cold
name: Cone of Cold
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.152Z'
---

```spell
slug: srd-2024_spell_cone-of-cold
name: Cone of Cold
edition: '2024'
source: SRD 5.2
level: 5
school: evocation
casting_time: action
range: Self
components: V, S, M (a small crystal or glass cone)
duration: instantaneous
concentration: false
ritual: false
description: You unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.
classes:
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 5.
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
