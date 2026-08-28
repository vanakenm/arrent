---
archivist: true
entity_type: class
slug: srd-5e_class_paladin
name: Paladin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.739Z'
---

```class
slug: srd-5e_class_paladin
name: Paladin
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d10
primary_abilities:
  - str
  - cha
saving_throws:
  - cha
  - wis
proficiencies:
  armor:
    - shield
    - light
    - medium
    - heavy
  weapons:
    categories:
      - simple
      - martial
skill_choices:
  count: 2
  from:
    - athletics
    - insight
    - intimidation
    - medicine
    - persuasion
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: A martial weapon and a shield
        grants:
          - category: martial-weapon
          - category: shield
      - label: Two martial weapons
        grants:
          - category: martial-weapon
          - category: martial-weapon
  - kind: choice
    options:
      - label: Five Javelins
        grants:
          - item: javelin
            qty: 5
      - label: Any simple melee weapon
        grants:
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Priest's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: Chain Mail and a Holy Symbol
    grants:
      - item: chain-mail
spellcasting:
  caster_type: half
  ability: cha
  preparation: prepared
  spell_list: paladin
subclass_level: 3
subclass_feature_name: Sacred Oath
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - divine-sense
      - lay-on-hands
  '2':
    prof_bonus: 2
    feature_ids:
      - divine-smite
      - fighting-style
      - spellcasting
    columns:
      1st: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - divine-health
      - sacred-oath
    columns:
      1st: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
    columns:
      1st: '4'
      2nd: '2'
  '6':
    prof_bonus: 3
    feature_ids:
      - aura-of-protection
    columns:
      1st: '4'
      2nd: '2'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '2'
  '10':
    prof_bonus: 4
    feature_ids:
      - aura-of-courage
    columns:
      1st: '4'
      2nd: '3'
      3rd: '2'
  '11':
    prof_bonus: 4
    feature_ids:
      - improved-divine-smite
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '14':
    prof_bonus: 5
    feature_ids:
      - cleansing-touch
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '18':
    prof_bonus: 6
    feature_ids:
      - aura-of-courage
      - aura-of-protection
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '20':
    prof_bonus: 6
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
features_by_level:
  '1':
    - id: divine-sense
      name: Divine Sense
      description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.\r\n\r\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
      action: action
      resources:
        - id: paladin:divine-sense
          name: Divine Sense
          max_formula: 1 + {cha_mod}
          reset: long-rest
    - id: lay-on-hands
      name: Lay on Hands
      description: "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.\r\n\r\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\r\n\r\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\r\n\r\nThis feature has no effect on undead and constructs."
  '2':
    - id: divine-smite
      name: Divine Smite
      description: Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.
    - id: fighting-style
      name: Fighting Style
      description: "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.\r\n\r\n### Defense\r\n\r\nWhile you are wearing armor, you gain a +1 bonus to AC.\r\n\r\n### Dueling\r\n\r\nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.\r\n\r\n### Great Weapon Fighting\r\n\r\nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.\r\n\r\n### Protection\r\n\r\nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
    - id: spellcasting
      name: Spellcasting
      description: "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.\r\n\r\n### Preparing and Casting Spells\r\n\r\nThe Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nYou prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\r\n\r\nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.\r\n\r\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\r\n\r\n### Spellcasting Ability\r\n\r\nCharisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Charisma modifier\r\nSpellcasting Focus\r\n\r\nYou can use a holy symbol as a spellcasting focus for your paladin spells."
  '3':
    - id: divine-health
      name: Divine Health
      description: By 3rd level, the divine magic flowing through you makes you immune to disease.
    - id: sacred-oath
      name: Sacred Oath
      description: "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description.\r\n\r\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.\r\n\r\n### Oath Spells\r\n\r\nEach oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.\r\n\r\nIf you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.\r\n\r\n### Channel Divinity\r\n\r\nYour oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.\r\n\r\nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.\r\n\r\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
  '4':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '5':
    - id: extra-attack
      name: Extra Attack
      description: Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.
  '6':
    - id: aura-of-protection
      name: Aura of Protection
      description: "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '10':
    - id: aura-of-courage
      name: Aura of Courage
      description: "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
  '11':
    - id: improved-divine-smite
      name: Improved Divine Smite
      description: By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '14':
    - id: cleansing-touch
      name: Cleansing Touch
      description: "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.\r\n\r\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
      action: action
      resources:
        - id: paladin:cleansing-touch
          name: Cleansing Touch
          max_formula: '{cha_mod}'
          reset: long-rest
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '18':
    - id: aura-of-courage
      name: Aura of Courage
      description: "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
    - id: aura-of-protection
      name: Aura of Protection
      description: "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\r\n\r\nAt 18th level, the range of this aura increases to 30 feet."
  '19':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
