---
archivist: true
entity_type: spell
slug: srd-2024_spell_command
name: Command
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.151Z'
---

```spell
slug: srd-2024_spell_command
name: Command
edition: '2024'
source: SRD 5.2
level: 1
school: enchantment
casting_time: action
range: 60 feet
components: V
duration: instantaneous
concentration: false
ritual: false
description: |-
  You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options:

  - **Drop.** The target drops whatever it is holding and then ends its turn.
  - **Flee.** The target spends its turn moving away from you by the fastest available means.
  - **Grovel.** The target has the Prone condition and then ends its turn.
  - **Halt.** On its turn, the target doesn't move and takes no action or Bonus Action.
classes:
  - bard
  - cleric
  - paladin
at_higher_levels:
  - You can affect one additional creature for each spell slot level above 1.
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_2
    target_count: 2
  - type: slot_level_3
    target_count: 3
  - type: slot_level_4
    target_count: 4
  - type: slot_level_5
    target_count: 5
  - type: slot_level_6
    target_count: 6
  - type: slot_level_7
    target_count: 7
  - type: slot_level_8
    target_count: 8
  - type: slot_level_9
    target_count: 9
```
