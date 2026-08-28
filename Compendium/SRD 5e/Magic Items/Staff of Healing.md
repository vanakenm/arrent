---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-healing
name: Staff of Healing
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.927Z'
---

```item
slug: srd-5e_item_staff-of-healing
name: Staff of Healing
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: _cure wounds_ (1 charge per spell level, up to 4th), _lesser restoration_ (2 charges), or _mass cure wounds_ (5 charges).

  The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a bard, cleric, or druid
  tags:
    - class: bard
    - class: cleric
    - class: druid
damage_type: bludgeoning
properties:
  - versatile
attached_spells:
  charges:
    '1':
      - cure wounds
    '2':
      - lesser restoration
    '5':
      - mass cure wounds
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
