---
archivist: true
entity_type: spell
slug: srd-5e_spell_cloudkill
name: Cloudkill
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.808Z'
---

```spell
slug: srd-5e_spell_cloudkill
name: Cloudkill
edition: '2014'
source: SRD 5.1
level: 5
school: conjuration
casting_time: action
range: 120 feet
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.
classes:
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.
damage:
  types:
    - poison
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_6
    damage_roll: 6d8
  - type: slot_level_7
    damage_roll: 7d8
  - type: slot_level_8
    damage_roll: 8d8
  - type: slot_level_9
    damage_roll: 9d8
```
