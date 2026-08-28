---
archivist: true
entity_type: item
slug: srd-5e_item_wand-of-magic-detection
name: Wand of Magic Detection
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.936Z'
---

```item
slug: srd-5e_item_wand-of-magic-detection
name: Wand of Magic Detection
edition: '2014'
source: SRD 5.1
rarity: uncommon
description: This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the _detect magic_ spell from it. The wand regains 1d3 expended charges daily at dawn.
type: wand
weight: 1
attached_spells:
  charges:
    '1':
      - detect magic
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: minor
```
