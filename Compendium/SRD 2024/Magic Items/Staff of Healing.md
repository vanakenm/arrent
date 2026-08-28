---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-healing
name: Staff of Healing
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.355Z'
---

```item
slug: srd-2024_item_staff-of-healing
name: Staff of Healing
edition: '2024'
source: SRD 5.2
rarity: rare
description: |-
  This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell.

  | Spell              | Charge Cost                                              |
  |--------------------|----------------------------------------------------------|
  | Cure Wounds        | 1 charge per spell level (maximum 4 for a level 4 spell) |
  | Lesser Restoration | 2                                                        |
  | Mass Cure Wounds   | 5                                                        |

  **_Regaining Charges._** The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff vanishes in a flash of light, lost forever.
type: staff
weight: 4
attunement:
  required: true
  restriction: Requires Attunement by a Bard, Cleric, or Druid
  tags:
    - class: bard
    - class: cleric
    - class: druid
damage_type: bludgeoning
properties:
  - versatile
attached_spells:
  will:
    - cure wounds|xphb
  charges:
    '2':
      - lesser restoration|xphb
    '5':
      - mass cure wounds|xphb
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
```
