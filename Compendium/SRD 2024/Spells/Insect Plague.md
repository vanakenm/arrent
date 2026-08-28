---
archivist: true
entity_type: spell
slug: srd-2024_spell_insect-plague
name: Insect Plague
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.167Z'
---

```spell
slug: srd-2024_spell_insect-plague
name: Insect Plague
edition: '2024'
source: SRD 5.2
level: 5
school: conjuration
casting_time: action
range: 300 feet
components: V, S, M (a locust)
duration: 10 minutes
concentration: true
ritual: false
description: Swarming locusts fill a 20-foot-radius Sphere centered on a point you choose within range. The Sphere remains for the duration, and its area is Lightly Obscured and Difficult Terrain. When the swarm appears, each creature in it makes a Constitution saving throw, taking 4d10 Piercing damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.
classes:
  - cleric
  - druid
  - sorcerer
at_higher_levels:
  - The damage increases by 1d10 for each spell slot level above 5.
damage:
  types:
    - piercing
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_6
    damage_roll: 5d10
  - type: slot_level_7
    damage_roll: 6d10
  - type: slot_level_8
    damage_roll: 7d10
  - type: slot_level_9
    damage_roll: 8d10
```
