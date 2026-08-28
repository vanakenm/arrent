---
archivist: true
entity_type: class
slug: srd-5e_class_druid
name: Druid
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.735Z'
---

```class
slug: srd-5e_class_druid
name: Druid
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d8
primary_abilities:
  - wis
saving_throws:
  - int
  - wis
proficiencies:
  armor:
    - light
    - medium
    - shield
  weapons:
    fixed:
      - clubs
      - daggers
      - darts
      - javelins
      - maces
      - quarterstaffs
      - scimitars
      - sickles
      - slings
      - spears
  tools:
    fixed:
      - Herbalism kit
skill_choices:
  count: 2
  from:
    - animal-handling
    - arcana
    - insight
    - medicine
    - nature
    - perception
    - religion
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: A Wooden Shield
        grants:
          - category: shield
      - label: Any simple weapon
        grants:
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Scimitar
        grants:
          - item: scimitar
      - label: Any simple melee weapon
        grants:
          - category: simple-weapon
  - kind: fixed
    label: Leather Armor, an Explorer's Pack, and a Druidic Focus
    grants:
      - item: leather
spellcasting:
  caster_type: full
  ability: wis
  preparation: prepared
  spell_list: druid
subclass_level: 2
subclass_feature_name: Druid Circle
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - druidic
      - spellcasting
    columns:
      Cantrips Known: '2'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - druid-circle
      - wild-shape
    columns:
      Cantrips Known: '2'
      1st: '3'
  '3':
    prof_bonus: 2
    feature_ids: []
    columns:
      Cantrips Known: '2'
      1st: '4'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
      - wild-shape
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '2'
  '5':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
      - wild-shape
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      - beast-spells
    columns:
      Cantrips Known: '4'
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
      Cantrips Known: '4'
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
      - archdruid
    columns:
      Cantrips Known: '4'
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
    - id: druidic
      name: Druidic
      description: You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.
    - id: spellcasting
      name: Spellcasting
      description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.\r\n\r\n###Cantrips\r\n\r\nAt 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.\r\n\r\n###Preparing and Casting Spells\r\n\r\nThe Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nYou prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.\r\n\r\nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\r\n\r\nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\r\n\r\n###Spellcasting Ability\r\n\r\nWisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier\r\n\r\n###Ritual Casting\r\n\r\nYou can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.\r\n\r\n###Spellcasting Focus\r\n\r\nYou can use a druidic focus (see chapter 5, “Equipment”) as a spellcasting focus for your druid spells."
  '2':
    - id: druid-circle
      name: Druid Circle
      description: At 2nd level, you choose to identify with a circle of druids such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: wild-shape
      name: Wild Shape
      description: "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\r\n\r\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\r\n\r\n| Level | Max. CR | Limitations | Example |\r\n| --- | --- | --- | --- |\r\n| 2nd | 1/4 | No flying or swimming speed | Wolf |\r\n| 4th | 1/2 | No flying speed | Crocodile |\r\n| 8th | 1 | - | Giant Eagle |\r\n\r\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\r\n\r\nWhile you are transformed, the following rules apply:\r\nYour game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\r\n\r\nWhen you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\r\n\r\nYou can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.\r\n\r\nYou retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\r\n\r\nYou choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
      action: action
      resources:
        - id: druid:wild-shape
          name: Wild Shape
          max_formula: '2'
          reset: short-rest
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
    - id: wild-shape
      name: Wild Shape
      description: "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\r\n\r\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\r\n\r\n| Level | Max. CR | Limitations | Example |\r\n| --- | --- | --- | --- |\r\n| 2nd | 1/4 | No flying or swimming speed | Wolf |\r\n| 4th | 1/2 | No flying speed | Crocodile |\r\n| 8th | 1 | - | Giant Eagle |\r\n\r\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\r\n\r\nWhile you are transformed, the following rules apply:\r\nYour game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\r\n\r\nWhen you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\r\n\r\nYou can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.\r\n\r\nYou retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\r\n\r\nYou choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
      action: action
      resources:
        - id: druid:wild-shape
          name: Wild Shape
          max_formula: '2'
          reset: short-rest
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
    - id: wild-shape
      name: Wild Shape
      description: "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\r\n\r\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\r\n\r\n| Level | Max. CR | Limitations | Example |\r\n| --- | --- | --- | --- |\r\n| 2nd | 1/4 | No flying or swimming speed | Wolf |\r\n| 4th | 1/2 | No flying speed | Crocodile |\r\n| 8th | 1 | - | Giant Eagle |\r\n\r\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\r\n\r\nWhile you are transformed, the following rules apply:\r\nYour game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\r\n\r\nWhen you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\r\n\r\nYou can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.\r\n\r\nYou retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\r\n\r\nYou choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
      action: action
      resources:
        - id: druid:wild-shape
          name: Wild Shape
          max_formula: '2'
          reset: short-rest
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
    - id: beast-spells
      name: Beast Spells
      description: Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.
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
    - id: archdruid
      name: Archdruid
      description: "At 20th level, you can use your Wild Shape an unlimited number of times.\r\n\r\nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
resources: []
starting_gold:
  dice: 2d4
  multiplier: 10
```
