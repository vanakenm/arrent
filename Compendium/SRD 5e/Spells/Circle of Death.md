---
archivist: true
entity_type: spell
slug: srd-5e_spell_circle-of-death
name: Circle of Death
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.807Z'
---

```spell
slug: srd-5e_spell_circle-of-death
name: Circle of Death
edition: '2014'
source: SRD 5.1
level: 6
school: necromancy
casting_time: action
range: 150 feet
components: V, S, M (The powder of a crushed black pearl worth at least 500 gp.)
duration: instantaneous
concentration: false
ritual: false
description: A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.
classes:
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.
damage:
  types:
    - necrotic
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_7
    damage_roll: 10d6
  - type: slot_level_8
    damage_roll: 12d6
  - type: slot_level_9
    damage_roll: 14d6
```
