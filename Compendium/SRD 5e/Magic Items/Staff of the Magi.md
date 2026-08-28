---
archivist: true
entity_type: item
slug: srd-5e_item_staff-of-the-magi
name: Staff of the Magi
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.928Z'
---

```item
slug: srd-5e_item_staff-of-the-magi
name: Staff of the Magi
edition: '2014'
source: SRD 5.1
rarity: legendary
description: |-
  This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.

  The staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.

  **_Spell Absorption_**. While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).

  **_Spells_**. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: _conjure elemental_ (7 charges), _dispel magic_ (3 charges), _fireball_ (7th-level version, 7 charges), _flaming sphere_ (2 charges), _ice storm_ (4 charges), _invisibility_ (2 charges), _knock_ (2 charges), _lightning bolt_ (7th-level version, 7 charges), _passwall_ (5 charges), _plane shift_ (7 charges), _telekinesis_ (5 charges), _wall of fire_ (4 charges), or _web_ (2 charges).

  You can also use an action to cast one of the following spells from the staff without using any charges: _arcane lock_, _detect magic_, _enlarge/reduce_, _light_, _mage hand_, or _protection from evil and good._

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
  spell_attack: 2
attached_spells:
  will:
    - arcane lock
    - detect magic
    - enlarge/reduce
    - light
    - mage hand
    - protection from evil and good
  charges:
    '2':
      - flaming sphere
      - invisibility
      - knock
      - web
    '3':
      - dispel magic
    '4':
      - ice storm
      - wall of fire
    '5':
      - passwall
      - telekinesis
    '7':
      - conjure elemental
      - fireball#7
      - lightning bolt#7
      - plane shift
charges:
  max: 50
  recharge: dawn
  recharge_amount: '`d:4d6 + 2`'
tier: major
```
