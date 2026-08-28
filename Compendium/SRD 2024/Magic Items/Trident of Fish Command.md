---
archivist: true
entity_type: item
slug: srd-2024_item_trident-of-fish-command
name: Trident of Fish Command
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.358Z'
---

```item
slug: srd-2024_item_trident-of-fish-command
name: Trident of Fish Command
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.
type: weapon
weight: 4
base_item: '[[SRD 2024/Weapons/Trident]]'
attunement:
  required: true
damage_type: piercing
properties:
  - thrown
  - versatile
attached_spells:
  charges:
    '1':
      - dominate beast|xphb
charges:
  max: 3
  recharge: dawn
  recharge_amount: '`d:1d3`'
```
