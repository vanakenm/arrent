---
archivist: true
entity_type: spell
slug: srd-2024_spell_vitriolic-sphere
name: Vitriolic Sphere
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.185Z'
---

```spell
slug: srd-2024_spell_vitriolic-sphere
name: Vitriolic Sphere
edition: '2024'
source: SRD 5.2
level: 4
school: evocation
casting_time: action
range: 150 feet
components: V, S, M (a drop of bile)
duration: instantaneous
concentration: false
ritual: false
description: You point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The initial damage increases by 2d4 for each spell slot level above 4.
damage:
  types:
    - acid
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_5
    damage_roll: 12d4
  - type: slot_level_6
    damage_roll: 14d4
  - type: slot_level_7
    damage_roll: 16d4
  - type: slot_level_8
    damage_roll: 18d4
  - type: slot_level_9
    damage_roll: 20d4
```
