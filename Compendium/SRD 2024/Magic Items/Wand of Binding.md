---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-binding
name: Wand of Binding
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.364Z'
---

```item
slug: srd-2024_item_wand-of-binding
name: Wand of Binding
edition: '2024'
source: SRD 5.2
rarity: rare
description: |-
  This wand has 7 charges.

  **_Spells._** While holding the wand, you can cast one of the spells (save DC 17) on the following table from it. The table indicates how many charges you must expend to cast the spell.

  | Spell        | Charge Cost |
  |--------------|-------------|
  | Hold Monster | 5           |
  | Hold Person  | 2           |

  **_Regaining Charges._** The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.
type: wand
weight: 1
attunement:
  required: true
attached_spells:
  charges:
    '2':
      - hold person|xphb
    '5':
      - hold monster|xphb
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
```
