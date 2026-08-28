---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-power
name: Staff of Power
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.927Z'
---

```item
slug: srd-5e_item_staff-of-power
name: Staff of Power
edition: '2014'
source: SRD 5.1
rarity: very rare
description: |-
  This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.

  The staff has 20 charges for the following properties. The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.

  **_Power Strike_**. When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.

  **_Spells_**. While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: _cone of cold_ (5 charges), _fireball_ (5th-level version, 5 charges), _globe of invulnerability_ (6 charges), _hold monster_ (5 charges), _levitate_ (2 charges), _lightning bolt_ (5th-level version, 5 charges), _magic missile_ (1 charge), _ray of enfeeblement_ (1 charge), or _wall of force_ (5 charges).

  **_Retributive Strike_**. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.

  You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.

  | Distance from Origin  | Damage                                 |
  |-----------------------|----------------------------------------|
  | 10 ft. away or closer | 8 × the number of charges in the staff |
  | 11 to 20 ft. away     | 6 × the number of charges in the staff |
  | 21 to 30 ft. away     | 4 × the number of charges in the staff |
type: staff
weight: 4
attunement:
  required: true
  restriction: requires attunement by a sorcerer, warlock, or wizard
  tags:
    - class: sorcerer
    - class: warlock
    - class: wizard
damage_type: bludgeoning
properties:
  - versatile
bonuses:
  weapon_attack: 2
  weapon_damage: 2
  ac: 2
  spell_attack: 2
  saving_throws: 2
attached_spells:
  charges:
    '1':
      - magic missile
      - ray of enfeeblement
    '2':
      - levitate
    '5':
      - cone of cold
      - fireball#5
      - hold monster
      - lightning bolt#5
      - wall of force
    '6':
      - globe of invulnerability
charges:
  max: 20
  recharge: dawn
  recharge_amount: '`d:2d8 + 4`'
tier: major
```
