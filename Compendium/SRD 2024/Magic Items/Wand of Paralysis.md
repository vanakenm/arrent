---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-paralysis
name: Wand of Paralysis
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.365Z'
---

```item
slug: srd-2024_item_wand-of-paralysis
name: Wand of Paralysis
edition: '2024'
source: SRD 5.2
rarity: rare
description: This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of yourself. The target must succeed on a DC 15 Constitution saving throw or have the Paralyzed condition for 1 minute. At the end of each of the target's turns, it repeats the save, ending the effect on itself on a success. Regaining Charges. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.
type: wand
weight: 1
attunement:
  required: true
  restriction: Requires Attunement by a Spellcaster
  tags:
    - spellcasting: true
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
effects:
  - foundryId: wandOfParalysis
```
