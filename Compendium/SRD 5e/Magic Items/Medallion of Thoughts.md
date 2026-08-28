---
archivist: true
entity_type: item
slug: srd-5e_item_medallion-of-thoughts
name: Medallion of Thoughts
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.910Z'
---

```item
slug: srd-5e_item_medallion-of-thoughts
name: Medallion of Thoughts
edition: '2014'
source: SRD 5.1
rarity: uncommon
description: The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the _detect thoughts_ spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.
type: wondrous item
weight: 1
attunement:
  required: true
attached_spells:
  daily:
    1e:
      - detect thoughts
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: major
```
