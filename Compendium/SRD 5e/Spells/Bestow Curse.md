---
archivist: true
entity_type: spell
slug: srd-5e_spell_bestow-curse
name: Bestow Curse
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.804Z'
---

```spell
slug: srd-5e_spell_bestow-curse
name: Bestow Curse
edition: '2014'
source: SRD 5.1
level: 3
school: necromancy
casting_time: action
range: Touch
components: V, S
duration: 1 minute
concentration: true
ritual: false
description: |-
  You touch a creature, and that creature must succeed on a wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: 
  - Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. 
  - While cursed, the target has disadvantage on attack rolls against you. 
  - While cursed, the target must make a wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. 
  - While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.
classes:
  - bard
  - cleric
  - wizard
at_higher_levels:
  - If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.
damage:
  types:
    - necrotic
saving_throw:
  ability: wisdom
casting_options:
  - type: slot_level_4
    duration: 10 minutes
  - type: slot_level_5
    duration: 8 hours
  - type: slot_level_6
    duration: 8 hours
  - type: slot_level_7
    duration: 24 hours
  - type: slot_level_8
    duration: 24 hours
  - type: slot_level_9
    duration: Until dispelled
```
