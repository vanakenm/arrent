---
archivist: true
entity_type: spell
slug: srd-5e_spell_blight
name: Blight
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.805Z'
---

```spell
slug: srd-5e_spell_blight
name: Blight
edition: '2014'
source: SRD 5.1
level: 4
school: necromancy
casting_time: action
range: 30 feet
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.
classes:
  - druid
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th.
damage:
  types:
    - necrotic
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_5
    damage_roll: 9d8
  - type: slot_level_6
    damage_roll: 10d8
  - type: slot_level_7
    damage_roll: 11d8
  - type: slot_level_8
    damage_roll: 12d8
  - type: slot_level_9
    damage_roll: 13d8
```
