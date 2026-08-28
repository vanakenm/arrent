---
archivist: true
entity_type: spell
slug: srd-2024_spell_lightning-bolt
name: Lightning Bolt
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.169Z'
---

```spell
slug: srd-2024_spell_lightning-bolt
name: Lightning Bolt
edition: '2024'
source: SRD 5.2
level: 3
school: evocation
casting_time: action
range: Self
components: V, S, M (a bit of fur and a crystal rod)
duration: instantaneous
concentration: false
ritual: false
description: A stroke of lightning forming a 100-foot-long, 5-foot-wide Line blasts out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 8d6 Lightning damage on a failed save or half as much damage on a successful one.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d6 for each spell slot level above 3.
damage:
  types:
    - lightning
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_4
    damage_roll: 9d6
  - type: slot_level_5
    damage_roll: 10d6
  - type: slot_level_6
    damage_roll: 11d6
  - type: slot_level_7
    damage_roll: 12d6
  - type: slot_level_8
    damage_roll: 13d6
  - type: slot_level_9
    damage_roll: 14d6
```
