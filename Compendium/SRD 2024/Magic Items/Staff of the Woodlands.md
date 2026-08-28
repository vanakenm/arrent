---
archivist: true
entity_type: item
slug: srd-2024_item_staff-of-the-woodlands
name: Staff of the Woodlands
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.356Z'
---

```item
slug: srd-2024_item_staff-of-the-woodlands
name: Staff of the Woodlands
edition: '2024'
source: SRD 5.2
rarity: rare
description: |-
  This staff has 6 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.

  **_Spells._** While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell.

  | Spell                    | Charge Cost |
  |--------------------------|-------------|
  | Animal Friendship        | 1           |
  | Awaken                   | 5           |
  | Barkskin                 | 2           |
  | Locate Animals or Plants | 2           |
  | Pass without Trace       | 2           |
  | Speak with Animals       | 1           |
  | Speak with Plants        | 3           |
  | Wall of Thorns           | 6           |

  **_Tree Form._** You can take a Magic action to plant one end of the staff in earth in an unoccupied space and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of Transmutation magic that can be discerned with the *Detect Magic* spell. While touching the tree and using a Magic action, you return the staff to its normal form. Any creature in the tree falls when the tree reverts to a staff.

  **_Regaining Charges._** The staff regains 1d6 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.
type: staff
weight: 4
attunement:
  required: true
  restriction: Requires Attunement by a Druid
  tags:
    - class: druid
damage_type: bludgeoning
properties:
  - versatile
bonuses:
  weapon_attack: 2
  weapon_damage: 2
  spell_attack: 2
attached_spells:
  charges:
    '1':
      - animal friendship|xphb
      - speak with animals|xphb
    '2':
      - barkskin|xphb
      - locate animals or plants|xphb
      - pass without trace|xphb
    '3':
      - speak with plants|xphb
    '5':
      - awaken|xphb
    '6':
      - wall of thorns|xphb
charges:
  max: 6
  recharge: dawn
  recharge_amount: '`d:1d6`'
```
