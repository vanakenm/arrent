---
archivist: true
entity_type: item
slug: srd-2024_item_medallion-of-thoughts
name: Medallion of Thoughts
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.273Z'
---

```item
slug: srd-2024_item_medallion-of-thoughts
name: Medallion of Thoughts
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: The medallion has 5 charges. While wearing it, you can expend 1 charge to cast Detect Thoughts (save DC 13) from it. The medallion regains 1d4 expended charges daily at dawn.
type: wondrous item
weight: 1
attunement:
  required: true
attached_spells:
  charges:
    '1':
      - detect thoughts|xphb
charges:
  max: 5
  recharge: dawn
  recharge_amount: '`d:1d4`'
```
