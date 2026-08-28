---
archivist: true
entity_type: item
slug: srd-2024_item_helm-of-teleportation
name: Helm of Teleportation
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.253Z'
---

```item
slug: srd-2024_item_helm-of-teleportation
name: Helm of Teleportation
edition: '2024'
source: SRD 5.2
rarity: rare
description: This helm has 3 charges. While wearing it, you can expend 1 charge to cast Teleport from it. The helm regains 1d3 expended charges daily at dawn.
type: wondrous item
attunement:
  required: true
attached_spells:
  charges:
    '1':
      - teleport|xphb
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
```
