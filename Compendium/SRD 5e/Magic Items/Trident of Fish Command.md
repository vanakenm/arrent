---
archivist: true
entity_type: item
slug: srd-5e_item_trident-of-fish-command
name: Trident of Fish Command
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.931Z'
---

```item
slug: srd-5e_item_trident-of-fish-command
name: Trident of Fish Command
edition: '2014'
source: SRD 5.1
rarity: uncommon
description: This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast _dominate beast_ (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.
type: weapon
weight: 4
base_item: '[[SRD 5e/Weapons/Trident]]'
attunement:
  required: true
damage_type: piercing
properties:
  - thrown
  - versatile
attached_spells:
  charges:
    '1':
      - dominate beast
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
tier: major
```
