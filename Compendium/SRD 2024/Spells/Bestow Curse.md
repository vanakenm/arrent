---
archivist: true
entity_type: spell
slug: srd-2024_spell_bestow-curse
name: Bestow Curse
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.148Z'
---

```spell
slug: srd-2024_spell_bestow-curse
name: Bestow Curse
edition: '2024'
source: SRD 5.2
level: 3
school: necromancy
casting_time: action
range: Touch
components: V, S
duration: 1 minute
concentration: true
ritual: false
description: 'You touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice: - Choose one ability. The target has Disadvantage on ability checks and saving throws made with that ability. - The target has Disadvantage on attack rolls against you. - In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn. - If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage.'
classes:
  - bard
  - cleric
  - wizard
at_higher_levels:
  - If you cast this spell using a level 4 spell slot, you can maintain Concentration on it for up to 10 minutes. If you use a level 5+ spell slot, the spell doesn't require Concentration, and the duration becomes 8 hours (level 5–6 slot) or 24 hours (level 7–8 slot). If you use a level 9 spell slot, the spell lasts until dispelled.
damage:
  types:
    - necrotic
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_5
    duration: 8 hours
    concentration: false
  - type: slot_level_6
    duration: 8 hours
    concentration: false
  - type: slot_level_7
    duration: 24 hours
    concentration: false
  - type: slot_level_8
    duration: 24 hours
    concentration: false
  - type: slot_level_9
    duration: until dispelled
    concentration: false
  - type: slot_level_4
    duration: 10 minutes
    concentration: true
    desc: You can maintain Concentration for up to 10 minutes.
```
