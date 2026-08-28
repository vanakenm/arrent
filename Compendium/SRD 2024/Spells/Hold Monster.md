---
archivist: true
entity_type: spell
slug: srd-2024_spell_hold-monster
name: Hold Monster
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.165Z'
---

```spell
slug: srd-2024_spell_hold-monster
name: Hold Monster
edition: '2024'
source: SRD 5.2
level: 5
school: enchantment
casting_time: action
range: 90 feet
components: V, S, M (a straight piece of iron)
duration: 1 minute
concentration: true
ritual: false
description: Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.
classes:
  - bard
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - You can target one additional creature for each spell slot level above 5.
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_6
    target_count: 2
  - type: slot_level_7
    target_count: 3
  - type: slot_level_8
    target_count: 4
  - type: slot_level_9
    target_count: 5
```
