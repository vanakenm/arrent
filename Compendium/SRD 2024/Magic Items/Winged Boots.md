---
archivist: true
entity_type: item
slug: srd-2024_item_winged-boots
name: Winged Boots
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.372Z'
---

```item
slug: srd-2024_item_winged-boots
name: Winged Boots
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: These boots have 4 charges and regain 1d4 expended charges daily at dawn. While wearing the boots, you can take a Magic action to expend 1 charge, gaining a Fly Speed of 30 feet for 1 hour. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.
type: wondrous item
attunement:
  required: true
bonuses:
  speed:
    fly: 30
charges:
  max: 4
  recharge: dawn
  recharge_amount: '`d:1d4`'
effects:
  - foundryId: wingedBoots
```
