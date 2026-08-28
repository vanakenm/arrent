---
archivist: true
entity_type: spell
slug: srd-2024_spell_circle-of-death
name: Circle of Death
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.150Z'
---

```spell
slug: srd-2024_spell_circle-of-death
name: Circle of Death
edition: '2024'
source: SRD 5.2
level: 6
school: necromancy
casting_time: action
range: 150 feet
components: V, S, M (the powder of a crushed black pearl worth 500+ GP)
duration: instantaneous
concentration: false
ritual: false
description: Negative energy ripples out in a 60-foot-radius Sphere from a point you choose within range. Each creature in that area makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one.
classes:
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - The damage increases by 2d8 for each spell slot level above 6.
damage:
  types:
    - necrotic
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_7
    damage_roll: 10d8
  - type: slot_level_8
    damage_roll: 12d8
  - type: slot_level_9
    damage_roll: 14d8
```
