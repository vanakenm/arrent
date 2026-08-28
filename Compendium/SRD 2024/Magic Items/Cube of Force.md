---
archivist: true
entity_type: item
slug: srd-2024_item_cube-of-force
name: Cube of Force
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.229Z'
---

```item
slug: srd-2024_item_cube-of-force
name: Cube of Force
edition: '2024'
source: SRD 5.2
rarity: rare
description: |-
  This cube is about an inch across. Each face has a distinct marking on it. You can press one of those faces, expend the number of charges required for it, and thereby cast the spell associated with it (save DC 17), as shown in the Cube of Force Faces table.

  The cube starts with 10 charges, and it regains 1d6 expended charges daily at dawn.

  Table: Cube of Force Faces

  | Spell            | Charge Cost |
  |------------------|-------------|
  | Mage Armor       | 1           |
  | Shield           | 1           |
  | Tiny Hut         | 3           |
  | Private Sanctum  | 4           |
  | Resilient Sphere | 4           |
  | Wall of Force    | 5           |
type: wondrous item
attunement:
  required: true
attached_spells:
  charges:
    '1':
      - mage armor|xphb
      - shield|xphb
    '3':
      - leomund's tiny hut|xphb
    '4':
      - mordenkainen's private sanctum|xphb
      - otiluke's resilient sphere|xphb
    '5':
      - wall of force|xphb
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6`'
```
