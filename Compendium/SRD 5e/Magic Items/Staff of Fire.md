---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-fire
name: Staff of Fire
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.927Z'
---

```item
slug: srd-5e_item_staff-of-fire
name: Staff of Fire
edition: '2014'
source: SRD 5.1
rarity: very rare
description: |-
  You have resistance to fire damage while you hold this staff.

  The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: _burning hands_ (1 charge), _fireball_ (3 charges), or _wall of fire_ (4 charges).

  The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a druid, sorcerer, warlock, or wizard
  tags:
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
      - burning hands
    '3':
      - fireball
    '4':
      - wall of fire
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
