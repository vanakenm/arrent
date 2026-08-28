---
archivist: true
entity_type: spell
slug: srd-2024_spell_glyph-of-warding
name: Glyph of Warding
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.163Z'
---

```spell
slug: srd-2024_spell_glyph-of-warding
name: Glyph of Warding
edition: '2024'
source: SRD 5.2
level: 3
school: abjuration
casting_time: 1hour
range: Touch
components: V, S, M (powdered diamond worth 200+ GP, which the spell consumes)
duration: until dispelled or triggered
concentration: false
ritual: false
description: |-
  You inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.

  The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.

  When you inscribe the glyph, you set its trigger and choose whether it's an explosive rune or a spell glyph, as explained below.

  **_Set the Trigger._** You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends.

  You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.

  **_Explosive Rune._** When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one.

  **_Spell Glyph._** You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way.

  When the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration.
classes:
  - bard
  - cleric
  - wizard
at_higher_levels:
  - The damage of an explosive rune increases by 1d8 for each spell slot level above 3. If you create a spell glyph, you can store any spell of up to the same level as the spell slot you use for the Glyph of Warding.
damage:
  types:
    - acid
    - cold
    - fire
    - lightning
    - thunder
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_4
    damage_roll: 6d8
    desc: Explosive rune deals 6d8 damage. Spell glyph can store up to level 4 spell.
  - type: slot_level_5
    damage_roll: 7d8
    desc: Explosive rune deals 7d8 damage. Spell glyph can store up to level 5 spell.
  - type: slot_level_6
    damage_roll: 8d8
    desc: Explosive rune deals 8d8 damage. Spell glyph can store up to level 6 spell.
  - type: slot_level_7
    damage_roll: 9d8
    desc: Explosive rune deals 9d8 damage. Spell glyph can store up to level 7 spell.
  - type: slot_level_8
    damage_roll: 10d8
    desc: Explosive rune deals 10d8 damage. Spell glyph can store up to level 8 spell.
  - type: slot_level_9
    damage_roll: 11d8
    desc: Explosive rune deals 11d8 damage. Spell glyph can store up to level 9 spell.
```
