---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-swarming-insects
name: Staff of Swarming Insects
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.356Z'
---

```item
slug: srd-2024_item_staff-of-swarming-insects
name: Staff of Swarming Insects
edition: '2024'
source: SRD 5.2
rarity: rare
description: |-
  This staff has 10 charges.

  **_Insect Cloud._** While holding the staff, you can take a Magic action and expend 1 charge to cause a swarm of harmless flying insects to fill a 30-foot Emanation originating from you. The insects remain for 10 minutes, making the area Heavily Obscured for creatures other than you. A strong wind (like that created by *Gust of Wind*) disperses the swarm and ends the effect.

  **_Spells._** While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell.

  | Spell         | Charge Cost |
  |---------------|-------------|
  | Giant Insect  | 4           |
  | Insect Plague | 5           |

  **_Regaining Charges._** The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.
type: staff
weight: 4
attunement:
  required: true
  restriction: Requires Attunement by a Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard
  tags:
    - class: bard
    - class: cleric
    - class: druid
    - class: sorcerer
    - class: warlock
    - class: wizard
damage_type: bludgeoning
properties:
  - versatile
attached_spells:
  charges:
    '4':
      - giant insect|xphb
    '5':
      - insect plague|xphb
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
```
