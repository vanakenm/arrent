---
archivist: true
entity_type: class
slug: srd-5e_class_wizard
name: Wizard
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.747Z'
---

```class
slug: srd-5e_class_wizard
name: Wizard
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d6
primary_abilities:
  - int
saving_throws:
  - int
  - wis
proficiencies:
  armor: []
  weapons:
    fixed:
      - daggers
      - darts
      - slings
      - quarterstaffs
      - light crossbows
skill_choices:
  count: 2
  from:
    - arcana
    - history
    - insight
    - investigation
    - medicine
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: A Quarterstaff
        grants:
          - item: quarterstaff
      - label: A Dagger
        grants:
          - item: dagger
  - kind: choice
    options:
      - label: A Component Pouch
        grants: []
      - label: An Arcane Focus
        grants: []
  - kind: choice
    options:
      - label: A Scholar's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: A Spellbook
    grants: []
spellcasting:
  caster_type: full
  ability: int
  preparation: prepared
  spell_list: wizard
subclass_level: 2
subclass_feature_name: Arcane Tradition
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - arcane-recovery
      - spellcasting
    columns:
      Cantrips Known: '3'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - arcane-tradition
    columns:
      Cantrips Known: '3'
      1st: '3'
  '3':
    prof_bonus: 2
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '2'
  '5':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
  '18':
    prof_bonus: 6
    feature_ids:
      - spell-mastery
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '1'
      8th: '1'
      9th: '1'
  '20':
    prof_bonus: 6
    feature_ids:
      - signature-spells
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '2'
      8th: '1'
      9th: '1'
features_by_level:
  '1':
    - id: arcane-recovery
      name: Arcane Recovery
      description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\r\n\r\nFor example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
      action: special
      resources:
        - id: wizard:arcane-recovery
          name: Arcane Recovery
          max_formula: '1'
          reset: long-rest
          recovery:
            - id: wizard:arcane-recovery-slots
              name: Recover spell slots
              amount: ceil({class_level}/2)
              reset: long-rest
    - id: spellcasting
      name: Spellcasting
      description: "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.\r\n\r\n### Cantrips\r\n\r\nAt 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.\r\n\r\n### Spellbook\r\n\r\nAt 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.\r\n\r\n### Preparing and Casting Spells\r\n\r\nThe Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nYou prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.\r\n\r\nFor example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\r\n\r\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.\r\n\r\n### Spellcasting Ability\r\n\r\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Intelligence modifier\r\n\r\n### Ritual Casting\r\n\r\nYou can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.\r\n\r\n### Spellcasting Focus\r\n\r\nYou can use an arcane focus as a spellcasting focus for your wizard spells.\r\n\r\n### Learning Spells of 1st Level and Higher\r\n\r\nEach time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar)."
  '2':
    - id: arcane-tradition
      name: Arcane Tradition
      description: "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.\r\n\r\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
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
    - id: spell-mastery
      name: Spell Mastery
      description: "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\r\n\r\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
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
  '20':
    - id: signature-spells
      name: Signature Spells
      description: "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.\r\n\r\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal."
resources: []
starting_gold:
  dice: 4d4
  multiplier: 10
```
