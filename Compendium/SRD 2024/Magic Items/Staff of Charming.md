---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-charming
name: Staff of Charming
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.354Z'
---

```item
slug: srd-2024_item_staff-of-charming
name: Staff of Charming
edition: '2024'
source: SRD 5.2
rarity: rare
description: 'This staff has 10 charges. While holding the staff, you can use any of its properties: Cast Spell. You can expend 1 of the staff''s charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. Reflect Enchantment.* If you succeed on a saving throw against an Enchantment spell that targets only you, you can take a Reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell. Resist Enchantment. If you fail a saving throw against an Enchantment spell that targets only you, you can turn your failed save into a successful one. You can''t use this property of the staff again until the next dawn. Regaining Charges. The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff crumbles to dust and is destroyed.'
type: staff
weight: 4
attunement:
  required: true
  restriction: Requires Attunement by a Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard
  tags:
    - class: bard
    - class: cleric
    - class: druid
    - class: sorcerer
    - class: warlock
    - class: wizard
damage_type: bludgeoning
properties:
  - versatile
attached_spells:
  charges:
    '1':
      - charm person|xphb
      - command|xphb
      - comprehend languages|xphb
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d8 + 2`'
```
