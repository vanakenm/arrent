---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-swarming-insects
name: Staff of Swarming Insects
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.928Z'
---

```item
slug: srd-5e_item_staff-of-swarming-insects
name: Staff of Swarming Insects
edition: '2014'
source: SRD 5.1
rarity: very rare
description: |-
  This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.

  **_Spells_**. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: _giant insect_ (4 charges) or _insect plague_ (5 charges).

  **_Insect Cloud_**. While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard
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
      - giant insect
    '5':
      - insect plague
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
