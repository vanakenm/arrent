---
archivist: true
entity_type: spell
slug: srd-2024_spell_spirit-guardians
name: Spirit Guardians
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.181Z'
---

```spell
slug: srd-2024_spell_spirit-guardians
name: Spirit Guardians
edition: '2024'
source: SRD 5.2
level: 3
school: conjuration
casting_time: action
range: Self
components: V, S, M (a prayer scroll)
duration: 10 minutes
concentration: true
ritual: false
description: Protective spirits flit around you in a 15-foot Emanation for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate creatures to be unaffected by it. Any other creature's Speed is halved in the Emanation, and whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature must make a Wisdom saving throw. On a failed save, the creature takes 3d8 Radiant damage (if you are good or neutral) or 3d8 Necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. A creature makes this save only once per turn.
classes:
  - cleric
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 3.
damage:
  types:
    - radiant
    - necrotic
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_4
    damage_roll: 4d8
  - type: slot_level_5
    damage_roll: 5d8
  - type: slot_level_6
    damage_roll: 6d8
  - type: slot_level_7
    damage_roll: 7d8
  - type: slot_level_8
    damage_roll: 8d8
  - type: slot_level_9
    damage_roll: 9d8
```
