---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-fireballs
name: Wand of Fireballs
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.365Z'
---

```item
slug: srd-2024_item_wand-of-fireballs
name: Wand of Fireballs
edition: '2024'
source: SRD 5.2
rarity: rare
description: This wand has 7 charges. While holding it, you can expend no more than 3 charges to cast Fireball (save DC 15) from it. For 1 charge, you cast the level 3 version of the spell. You can increase the spell's level by 1 for each additional charge you expend. Regaining Charges. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.
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
      - fireball|xphb
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
```
