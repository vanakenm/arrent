---
archivist: true
entity_type: spell
slug: srd-2024_spell_conjure-elemental
name: Conjure Elemental
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.152Z'
---

```spell
slug: srd-2024_spell_conjure-elemental
name: Conjure Elemental
edition: '2024'
source: SRD 5.2
level: 5
school: conjuration
casting_time: action
range: 60 feet
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: 'You conjure a Large, intangible spirit from the Elemental Planes that appears in an unoccupied space within range. Choose the spirit''s element, which determines its damage type: air (Lightning), earth (Thunder), fire (Fire), or water (Cold). The spirit lasts for the duration. Whenever a creature you can see enters the spirit''s space or starts its turn within 5 feet of the spirit, you can force that creature to make a Dexterity saving throw if the spirit has no creature Restrained. On failed save, the target takes 8d8 damage of the spirit''s type, and the target has the Restrained condition until the spell ends. At the start of each of its turns, the Restrained target repeats the save. On a failed save, the target takes 4d8 damage of the spirit''s type. On a successful save, the target isn''t Restrained by the spirit.'
classes:
  - druid
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 5.
damage:
  types:
    - lightning
    - thunder
    - fire
    - cold
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_6
    damage_roll: 9d8
  - type: slot_level_7
    damage_roll: 10d8
  - type: slot_level_8
    damage_roll: 11d8
  - type: slot_level_9
    damage_roll: 12d8
```
