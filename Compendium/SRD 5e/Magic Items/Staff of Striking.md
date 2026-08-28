---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-striking
name: Staff of Striking
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.927Z'
---

```item
slug: srd-5e_item_staff-of-striking
name: Staff of Striking
edition: '2014'
source: SRD 5.1
rarity: very rare
description: |-
  This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.

  The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.
type: staff
weight: 4
attunement:
  required: true
damage_type: bludgeoning
properties:
  - versatile
bonuses:
  weapon_attack: 3
  weapon_damage: 3
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
