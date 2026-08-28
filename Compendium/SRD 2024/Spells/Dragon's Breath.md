---
archivist: true
entity_type: spell
slug: srd-2024_spell_dragons-breath
name: Dragon's Breath
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.157Z'
---

```spell
slug: srd-2024_spell_dragons-breath
name: Dragon's Breath
edition: '2024'
source: SRD 5.2
level: 2
school: transmutation
casting_time: bonus-action
range: Touch
components: V, S, M (a hot pepper)
duration: 1 minute
concentration: true
ritual: false
description: You touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creature in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d6 for each spell slot level above 2.
damage:
  types:
    - acid
    - cold
    - fire
    - lightning
    - poison
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_3
    damage_roll: 4d6
  - type: slot_level_4
    damage_roll: 5d6
  - type: slot_level_5
    damage_roll: 6d6
  - type: slot_level_6
    damage_roll: 7d6
  - type: slot_level_7
    damage_roll: 8d6
  - type: slot_level_8
    damage_roll: 9d6
  - type: slot_level_9
    damage_roll: 10d6
```
