---
archivist: true
entity_type: spell
slug: srd-2024_spell_mind-spike
name: Mind Spike
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.172Z'
---

```spell
slug: srd-2024_spell_mind-spike
name: Mind Spike
edition: '2024'
source: SRD 5.2
level: 2
school: divination
casting_time: action
range: 120 feet
components: S
duration: 1 hour
concentration: true
ritual: false
description: You drive a spike of psionic energy into the mind of one creature you can see within range. The target makes a Wisdom saving throw, taking 3d8 Psychic damage on a failed save or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it has the Invisible condition, it gains no benefit from that condition against you.
classes:
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 2.
damage:
  types:
    - psychic
saving_throw:
  ability: wisdom
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
