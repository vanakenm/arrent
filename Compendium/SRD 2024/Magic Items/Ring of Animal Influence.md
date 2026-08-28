---
archivist: true
entity_type: item
slug: srd-2024_item_ring-of-animal-influence
name: Ring of Animal Influence
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.343Z'
---

```item
slug: srd-2024_item_ring-of-animal-influence
name: Ring of Animal Influence
edition: '2024'
source: SRD 5.2
rarity: rare
description: 'This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can expend 1 charge to cast one of the following spells (save DC 13) from it: - Animal Friendship - Fear (affects Beasts only) - Speak with Animals'
type: ring
attached_spells:
  charges:
    '1':
      - animal friendship|xphb
      - fear|xphb
      - speak with animals|xphb
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
```
