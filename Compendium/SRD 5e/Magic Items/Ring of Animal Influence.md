---
archivist: true
entity_type: item
slug: srd-5e_item_ring-of-animal-influence
name: Ring of Animal Influence
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.917Z'
---

```item
slug: srd-5e_item_ring-of-animal-influence
name: Ring of Animal Influence
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:

  * _Animal friendship_ (save DC 13)
  * _Fear_ (save DC 13), targeting only beasts that have an Intelligence of 3 or lower
  * _Speak with animals_
type: ring
attached_spells:
  charges:
    '1':
      - animal friendship
      - fear
      - speak with animals
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: major
```
