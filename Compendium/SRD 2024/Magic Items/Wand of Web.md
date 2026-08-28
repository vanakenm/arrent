---
archivist: true
entity_type: item
slug: srd-2024_item_wand-of-web
name: Wand of Web
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.366Z'
---

```item
slug: srd-2024_item_wand-of-web
name: Wand of Web
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: |-
  **_Spells._** While holding the wand, you can cast one of the spells (save DC 15) on the following table from it. The table indicates how many charges you must expend to cast the spell.

  | Spell                             | Charge Cost |
  |-----------------------------------|-------------|
  | Command ("flee" or "grovel" only) | 1           |
  | Fear (60-foot Cone)               | 3           |

  **_Regaining Charges._** The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.
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
      - web|xphb
charges:
  max: 7
  recharge: dawn
  recharge_amount: '`d:1d6 + 1`'
```
