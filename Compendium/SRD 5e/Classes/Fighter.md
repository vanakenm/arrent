---
archivist: true
entity_type: class
slug: srd-5e_class_fighter
name: Fighter
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.737Z'
---

```class
slug: srd-5e_class_fighter
name: Fighter
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d10
primary_abilities:
  - str
  - dex
saving_throws:
  - con
  - str
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
    - acrobatics
    - animal-handling
    - athletics
    - history
    - insight
    - intimidation
    - perception
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Chain Mail
        grants:
          - item: chain-mail
      - label: Leather Armor, Longbow, and 20 Arrows
        grants:
          - item: leather
          - item: longbow
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
      - label: A Light Crossbow and 20 Bolts
        grants:
          - item: crossbow-light
      - label: Two Handaxes
        grants:
          - item: handaxe
            qty: 2
  - kind: choice
    options:
      - label: A Dungeoneer's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
spellcasting: null
subclass_level: 3
subclass_feature_name: Martial Archetype
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - fighting-style
      - second-wind
  '2':
    prof_bonus: 2
    feature_ids:
      - action-surge
  '3':
    prof_bonus: 2
    feature_ids:
      - martial-archetype
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
  '6':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
  '7':
    prof_bonus: 3
    feature_ids: []
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
  '9':
    prof_bonus: 4
    feature_ids:
      - indomitable
  '10':
    prof_bonus: 4
    feature_ids: []
  '11':
    prof_bonus: 4
    feature_ids:
      - extra-attack
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
  '13':
    prof_bonus: 5
    feature_ids:
      - indomitable
  '14':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
  '15':
    prof_bonus: 5
    feature_ids: []
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
  '17':
    prof_bonus: 6
    feature_ids:
      - action-surge
      - indomitable
  '18':
    prof_bonus: 6
    feature_ids: []
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
  '20':
    prof_bonus: 6
    feature_ids:
      - extra-attack
features_by_level:
  '1':
    - id: fighting-style
      name: Fighting Style
      description: "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.\r\n\r\n###Archery\r\n\r\nYou gain a +2 bonus to attack rolls you make with ranged weapons.\r\n\r\n###Defense\r\n\r\nWhile you are wearing armor, you gain a +1 bonus to AC.\r\n\r\n###Dueling\r\n\r\nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.\r\n\r\n###Great Weapon Fighting\r\n\r\nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.\r\n\r\n###Protection\r\n\r\nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.\r\n\r\n###Two-Weapon Fighting\r\n\r\nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
    - id: second-wind
      name: Second Wind
      description: You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.
      action: bonus-action
      resources:
        - id: fighter:second-wind
          name: Second Wind
          max_formula: '1'
          reset: short-rest
  '2':
    - id: action-surge
      name: Action Surge
      description: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.\r\n\r\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
      action: special
      resources:
        - id: fighter:action-surge
          name: Action Surge
          max_formula: '1'
          scales_at:
            - level: 17
              max: '2'
          reset: short-rest
  '3':
    - id: martial-archetype
      name: Martial Archetype
      description: At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.
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
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
      description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\r\n\r\nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
  '6':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '9':
    - id: indomitable
      name: Indomitable
      description: "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.\r\n\r\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
  '11':
    - id: extra-attack
      name: Extra Attack
      description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\r\n\r\nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '13':
    - id: indomitable
      name: Indomitable
      description: "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.\r\n\r\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
  '14':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '17':
    - id: action-surge
      name: Action Surge
      description: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.\r\n\r\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
      action: special
      resources:
        - id: fighter:action-surge
          name: Action Surge
          max_formula: '1'
          scales_at:
            - level: 17
              max: '2'
          reset: short-rest
    - id: indomitable
      name: Indomitable
      description: "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.\r\n\r\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
  '19':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
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
  '20':
    - id: extra-attack
      name: Extra Attack
      description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\r\n\r\nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
