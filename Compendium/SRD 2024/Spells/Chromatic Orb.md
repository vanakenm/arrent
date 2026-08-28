---
archivist: true
entity_type: spell
slug: srd-2024_spell_chromatic-orb
name: Chromatic Orb
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.150Z'
---

```spell
slug: srd-2024_spell_chromatic-orb
name: Chromatic Orb
edition: '2024'
source: SRD 5.2
level: 1
school: evocation
casting_time: action
range: 90 feet
components: V, S, M (a diamond worth 50+ GP)
duration: instantaneous
concentration: false
ritual: false
description: You hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type. If you roll the same number on two or more of the d8s, the orb leaps to a different target of your choice within 30 feet of the target. Make an attack roll against the new target, and make a new damage roll. The orb can't leap again unless you cast the spell with a level 2+ spell slot.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 1. The orb can leap a maximum number of times equal to the level of the slot expended, and a creature can be targeted only once by each casting of this spell.
damage:
  types:
    - acid
    - cold
    - fire
    - lightning
    - poison
    - thunder
casting_options:
  - type: slot_level_2
    damage_roll: 4d8
  - type: slot_level_3
    damage_roll: 5d8
  - type: slot_level_4
    damage_roll: 6d8
  - type: slot_level_5
    damage_roll: 7d8
  - type: slot_level_6
    damage_roll: 8d8
  - type: slot_level_7
    damage_roll: 9d8
  - type: slot_level_8
    damage_roll: 10d8
  - type: slot_level_9
    damage_roll: 11d8
```
