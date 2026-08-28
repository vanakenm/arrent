---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-the-woodlands
name: Staff of the Woodlands
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.928Z'
---

```item
slug: srd-5e_item_staff-of-the-woodlands
name: Staff of the Woodlands
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.

  The staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.

  **_Spells_**. You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: _animal friendship_ (1 charge), _awaken_ (5 charges), _barkskin_ (2 charges), _locate animals or plants_ (2 charges), _speak with animals_ (1 charge), _speak with plants_ (3 charges), or _wall of thorns_ (6 charges).

  You can also use an action to cast the _pass without trace_ spell from the staff without using any charges. **_Tree Form_**. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.

  The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by _detect magic_. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a druid
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
  will:
    - pass without trace
  charges:
    '1':
      - animal friendship
      - speak with animals
    '2':
      - barkskin
      - locate animals or plants
    '3':
      - speak with plants
    '5':
      - awaken
    '6':
      - wall of thorns
charges:
  max: 10
  recharge: dawn
  recharge_amount: '`d:1d6 + 4`'
tier: major
```
