---
archivist: true
entity_type: spell
slug: srd-2024_spell_hold-person
name: Hold Person
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.166Z'
---

```spell
slug: srd-2024_spell_hold-person
name: Hold Person
edition: '2024'
source: SRD 5.2
level: 2
school: enchantment
casting_time: action
range: 60 feet
components: V, S, M (a straight piece of iron)
duration: 1 minute
concentration: true
ritual: false
description: Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.
classes:
  - bard
  - cleric
  - druid
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - You can target one additional Humanoid for each spell slot level above 2.
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_3
    target_count: 2
  - type: slot_level_4
    target_count: 3
  - type: slot_level_5
    target_count: 4
  - type: slot_level_6
    target_count: 5
  - type: slot_level_7
    target_count: 6
  - type: slot_level_8
    target_count: 7
  - type: slot_level_9
    target_count: 8
```
