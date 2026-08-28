---
archivist: true
entity_type: item
slug: srd-5e_item_helm-of-teleportation
name: Helm of Teleportation
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.901Z'
---

```item
slug: srd-5e_item_helm-of-teleportation
name: Helm of Teleportation
edition: '2014'
source: SRD 5.1
rarity: rare
description: This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the _teleport_ spell from it. The helm regains 1d3 expended charges daily at dawn.
type: wondrous item
attunement:
  required: true
attached_spells:
  charges:
    '1':
      - teleport
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: major
```
