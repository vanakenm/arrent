---
archivist: true
entity_type: item
slug: srd-5e_item_wand-of-lightning-bolts
name: Wand of Lightning Bolts
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.936Z'
---

```item
slug: srd-5e_item_wand-of-lightning-bolts
name: Wand of Lightning Bolts
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the _lightning bolt_ spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.

  The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.
type: wand
weight: 1
attunement:
  required: true
  restriction: requires attunement by a spellcaster
  tags:
    - spellcasting: true
attached_spells:
  charges:
    '1':
      - lightning bolt
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
tier: major
```
