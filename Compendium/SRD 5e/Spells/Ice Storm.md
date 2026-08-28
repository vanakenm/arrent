---
archivist: true
entity_type: spell
slug: srd-5e_spell_ice-storm
name: Ice Storm
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.824Z'
---

```spell
slug: srd-5e_spell_ice-storm
name: Ice Storm
edition: '2014'
source: SRD 5.1
level: 4
school: evocation
casting_time: action
range: 300 feet
components: V, S, M (A pinch of dust and a few drops of water.)
duration: instantaneous
concentration: false
ritual: false
description: A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.
classes:
  - cleric
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.
damage:
  types:
    - bludgeoning
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_5
    damage_roll: 3d8
  - type: slot_level_6
    damage_roll: 4d8
  - type: slot_level_7
    damage_roll: 5d8
  - type: slot_level_8
    damage_roll: 6d8
  - type: slot_level_9
    damage_roll: 7d8
```
