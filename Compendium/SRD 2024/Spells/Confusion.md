---
archivist: true
entity_type: spell
slug: srd-2024_spell_confusion
name: Confusion
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.152Z'
---

```spell
slug: srd-2024_spell_confusion
name: Confusion
edition: '2024'
source: SRD 5.2
level: 4
school: enchantment
casting_time: action
range: 90 feet
components: V, S, M (three nut shells)
duration: 1 minute
concentration: true
ritual: false
description: |-
  Each creature in a 10-foot-radius Sphere [Area of Effect] centered on a point you choose within range must succeed on a Wisdom saving throw, or that target can't take Bonus Actions or Reactions and must roll `d:1d10` at the start of each of its turns to determine its behavior for that turn, consulting the table below.

  | 1d10 | Behavior for the Turn |
  | --- | --- |
  | 1 | The target doesn't take an action, and it uses all its movement to move. Roll `d:1d4` for the direction: **1**, north; **2**, east; **3**, south; or **4**, west. |
  | 2-6 | The target doesn't move or take actions. |
  | 7-8 | The target doesn't move, and it takes the Attack\ action to make one melee attack against a random creature within reach. If none are within reach, the target takes no action. |
  | 9-10 | The target chooses its behavior. |

  At the end of each of its turns, an affected target repeats the save, ending the spell on itself on a success.
classes:
  - bard
  - druid
  - sorcerer
  - wizard
at_higher_levels:
  - The Sphere's radius increases by 5 feet for each spell slot level above 4.
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_5
    shape_size: 15
  - type: slot_level_6
    shape_size: 20
  - type: slot_level_7
    shape_size: 25
  - type: slot_level_8
    shape_size: 30
  - type: slot_level_9
    shape_size: 35
```
