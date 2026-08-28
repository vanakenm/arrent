---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-withering
name: Staff of Withering
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.929Z'
---

```item
slug: srd-5e_item_staff-of-withering
name: Staff of Withering
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This staff has 3 charges and regains 1d3 expended charges daily at dawn.

  The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a cleric, druid, or warlock
  tags:
    - class: cleric
    - class: druid
    - class: warlock
damage_type: bludgeoning
properties:
  - versatile
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: major
```
