---
archivist: true
entity_type: spell
slug: srd-2024_spell_ice-storm
name: Ice Storm
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.166Z'
---

```spell
slug: srd-2024_spell_ice-storm
name: Ice Storm
edition: '2024'
source: SRD 5.2
level: 4
school: evocation
casting_time: action
range: 300 feet
components: V, S, M (a mitten)
duration: instantaneous
concentration: false
ritual: false
description: Hail falls in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature in the Cylinder makes a Dexterity saving throw. A creature takes 2d10 Bludgeoning damage and 4d6 Cold damage on a failed save or half as much damage on a successful one. Hailstones turn ground in the Cylinder into Difficult Terrain until the end of your next turn.
classes:
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - The Bludgeoning damage increases by 1d10 for each spell slot level above 4.
damage:
  types:
    - bludgeoning
    - cold
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_5
    damage_roll: 3d10
  - type: slot_level_6
    damage_roll: 4d10
  - type: slot_level_7
    damage_roll: 5d10
  - type: slot_level_8
    damage_roll: 6d10
  - type: slot_level_9
    damage_roll: 7d10
```
