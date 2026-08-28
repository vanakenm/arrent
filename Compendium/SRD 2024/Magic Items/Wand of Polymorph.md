---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-polymorph
name: Wand of Polymorph
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.365Z'
---

```item
slug: srd-2024_item_wand-of-polymorph
name: Wand of Polymorph
edition: '2024'
source: SRD 5.2
rarity: very rare
description: This wand has 7 charges. While holding it, you can expend 1 charge to cast Polymorph (save DC 15) from it. Regaining Charges. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.
type: wand
weight: 1
attunement:
  required: true
  restriction: Requires Attunement by a Spellcaster
  tags:
    - spellcasting: true
attached_spells:
  charges:
    '1':
      - polymorph|xphb
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
```
