---
archivist: true
entity_type: spell
slug: srd-2024_spell_conjure-woodland-beings
name: Conjure Woodland Beings
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.153Z'
---

```spell
slug: srd-2024_spell_conjure-woodland-beings
name: Conjure Woodland Beings
edition: '2024'
source: SRD 5.2
level: 4
school: conjuration
casting_time: action
range: Self
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: You conjure nature spirits that flit around you in a 10-foot Emanation for the duration. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn. In addition, you can take the Disengage action as a Bonus Action for the spell's duration.
classes:
  - druid
  - ranger
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 4.
damage:
  types:
    - force
saving_throw:
  ability: wisdom
casting_options:
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
