---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-fire
name: Staff of Fire
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.354Z'
---

```item
slug: srd-2024_item_staff-of-fire
name: Staff of Fire
edition: '2024'
source: SRD 5.2
rarity: very rare
description: |-
  You have Resistance to Fire damage while you hold this staff.

  **_Spells._** The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell.

  | Spell         | Charge Cost |
  |---------------|-------------|
  | Burning Hands | 1           |
  | Fireball      | 3           |
  | Wall of Fire  | 4           |

  **_Regaining Charges._** The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff crumbles into cinders and is destroyed.
type: staff
weight: 4
attunement:
  required: true
  restriction: Requires Attunement by a Druid, Sorcerer, Warlock, or Wizard
  tags:
    - class: druid
    - class: sorcerer
    - class: warlock
    - class: wizard
damage_type: bludgeoning
properties:
  - versatile
attached_spells:
  charges:
    '1':
      - burning hands|xphb
    '3':
      - fireball|xphb
    '4':
      - wall of fire|xphb
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
resist:
  - fire
```
