---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-magic-detection
name: Wand of Magic Detection
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.365Z'
---

```item
slug: srd-2024_item_wand-of-magic-detection
name: Wand of Magic Detection
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: This wand has 3 charges. While holding it, you can expend 1 charge to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.
type: wand
weight: 1
attached_spells:
  charges:
    '1':
      - detect magic|xphb
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
```
