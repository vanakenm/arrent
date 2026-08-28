---
archivist: true
entity_type: spell
slug: srd-2024_spell_phantasmal-killer
name: Phantasmal Killer
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.173Z'
---

```spell
slug: srd-2024_spell_phantasmal-killer
name: Phantasmal Killer
edition: '2024'
source: SRD 5.2
level: 4
school: illusion
casting_time: action
range: 120 feet
components: V, S
duration: 1 minute
concentration: true
ritual: false
description: You tap into the nightmares of a creature you can see within range and create an illusion of its deepest fears, visible only to that creature. The target makes a Wisdom saving throw. On a failed save, the target takes 4d10 Psychic damage and has Disadvantage on ability checks and attack rolls for the duration. On a successful save, the target takes half as much damage, and the spell ends. For the duration, the target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes the Psychic damage again. On a successful save, the spell ends.
classes:
  - bard
  - wizard
at_higher_levels:
  - The damage increases by 1d10 for each spell slot level above 4.
damage:
  types:
    - psychic
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_5
    damage_roll: 5d10
  - type: slot_level_6
    damage_roll: 6d10
  - type: slot_level_7
    damage_roll: 7d10
  - type: slot_level_8
    damage_roll: 8d10
  - type: slot_level_9
    damage_roll: 9d10
```
