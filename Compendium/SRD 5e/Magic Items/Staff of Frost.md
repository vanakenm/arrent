---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-frost
name: Staff of Frost
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.927Z'
---

```item
slug: srd-5e_item_staff-of-frost
name: Staff of Frost
edition: '2014'
source: SRD 5.1
rarity: very rare
description: |-
  You have resistance to cold damage while you hold this staff.

  The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: _cone of cold_ (5 charges), _fog cloud_ (1 charge), _ice storm_ (4 charges), or _wall of ice_ (4 charges).

  The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.
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
      - fog cloud
    '4':
      - ice storm
      - wall of ice
    '5':
      - cone of cold
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
