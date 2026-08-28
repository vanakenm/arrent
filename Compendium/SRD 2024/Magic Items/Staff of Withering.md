---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-withering
name: Staff of Withering
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.357Z'
---

```item
slug: srd-2024_item_staff-of-withering
name: Staff of Withering
edition: '2024'
source: SRD 5.2
rarity: rare
description: This staff has 3 charges and regains 1d3 expended charges daily at dawn. The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.
type: staff
weight: 4
attunement:
  required: true
  restriction: by a cleric, druid, or warlock
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
```
