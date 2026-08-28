---
archivist: true
entity_type: spell
slug: srd-2024_spell_moonbeam
name: Moonbeam
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.173Z'
---

```spell
slug: srd-2024_spell_moonbeam
name: Moonbeam
edition: '2024'
source: SRD 5.2
level: 2
school: evocation
casting_time: action
range: 120 feet
components: V, S, M (a moonseed leaf)
duration: 1 minute
concentration: true
ritual: false
description: When the Cylinder appears, each creature in it makes a Constitution saving throw. On a failed save, a creature takes 2d10 Radiant damage, and if the creature is shape-shifted (as a result of the Polymorph spell, for example), it reverts to its true form and can't shape-shift until it leaves the Cylinder. On a successful save, a creature takes half as much damage only. A creature also makes this save when the spell's area moves into its space and when it enters the spell's area or ends its turn there. A creature makes this save only once per turn.
classes:
  - druid
at_higher_levels:
  - The damage increases by 1d10 for each spell slot level above 2.
damage:
  types:
    - radiant
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_3
    damage_roll: 3d10
  - type: slot_level_4
    damage_roll: 4d10
  - type: slot_level_5
    damage_roll: 5d10
  - type: slot_level_6
    damage_roll: 6d10
  - type: slot_level_7
    damage_roll: 7d10
  - type: slot_level_8
    damage_roll: 8d10
  - type: slot_level_9
    damage_roll: 9d10
```
