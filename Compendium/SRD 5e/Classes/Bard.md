---
archivist: true
entity_type: class
slug: srd-5e_class_bard
name: Bard
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.730Z'
---

```class
slug: srd-5e_class_bard
name: Bard
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d8
primary_abilities:
  - cha
saving_throws:
  - cha
  - dex
proficiencies:
  armor:
    - light
  weapons:
    categories:
      - simple
    fixed:
      - hand crossbows
      - longswords
      - rapiers
      - shortswords
  tools:
    fixed:
      - Three musical instruments of your choice
skill_choices:
  count: 3
  from:
    - acrobatics
    - animal-handling
    - arcana
    - athletics
    - deception
    - history
    - insight
    - intimidation
    - investigation
    - medicine
    - nature
    - perception
    - performance
    - persuasion
    - religion
    - sleight-of-hand
    - stealth
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: A Rapier
        grants:
          - item: rapier
      - label: A Longsword
        grants:
          - item: longsword
      - label: Any simple weapon
        grants:
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Diplomat's Pack
        grants: []
      - label: An Entertainer's Pack
        grants: []
  - kind: choice
    options:
      - label: A Lute
        grants: []
      - label: Any other musical instrument
        grants: []
  - kind: fixed
    label: Leather Armor and a Dagger
    grants:
      - item: leather
      - item: dagger
spellcasting:
  caster_type: full
  ability: cha
  preparation: known
  spell_list: bard
subclass_level: 3
subclass_feature_name: Bard College
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - bardic-inspiration
      - spellcasting
    columns:
      Cantrips Known: '2'
      1st: '2'
      Spells Known: '4'
  '2':
    prof_bonus: 2
    feature_ids:
      - jack-of-all-trades
      - song-of-rest
    columns:
      Cantrips Known: '2'
      1st: '3'
      Spells Known: '5'
  '3':
    prof_bonus: 2
    feature_ids:
      - bard-college
      - expertise
    columns:
      Cantrips Known: '2'
      1st: '4'
      Spells Known: '6'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '2'
      Spells Known: '7'
  '5':
    prof_bonus: 3
    feature_ids:
      - bardic-inspiration
      - font-of-inspiration
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '2'
      Spells Known: '8'
  '6':
    prof_bonus: 3
    feature_ids:
      - countercharm
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      Spells Known: '9'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Spells Known: '10'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Spells Known: '11'
  '9':
    prof_bonus: 4
    feature_ids:
      - song-of-rest
    columns:
      Cantrips Known: '3'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Spells Known: '12'
  '10':
    prof_bonus: 4
    feature_ids:
      - bardic-inspiration
      - expertise
      - magical-secrets
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Spells Known: '14'
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
      Spells Known: '15'
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
      Spells Known: '15'
  '13':
    prof_bonus: 5
    feature_ids:
      - song-of-rest
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Spells Known: '16'
  '14':
    prof_bonus: 5
    feature_ids:
      - magical-secrets
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Spells Known: '18'
  '15':
    prof_bonus: 5
    feature_ids:
      - bardic-inspiration
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
      Spells Known: '19'
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
      Spells Known: '19'
  '17':
    prof_bonus: 6
    feature_ids:
      - song-of-rest
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
      Spells Known: '20'
  '18':
    prof_bonus: 6
    feature_ids:
      - magical-secrets
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
      Spells Known: '22'
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
      Spells Known: '22'
  '20':
    prof_bonus: 6
    feature_ids:
      - superior-inspiration
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
      Spells Known: '22'
features_by_level:
  '1':
    - id: bardic-inspiration
      name: Bardic Inspiration
      description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\r\n\r\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\r\n\r\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\r\n\r\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
      action: bonus-action
      resources:
        - id: bard:bardic-inspiration
          name: Bardic Inspiration
          max_formula: '{cha_mod}'
          die:
            base: d6
            scaling:
              '5': d8
              '10': d10
              '15': d12
          reset: short-rest
    - id: spellcasting
      name: Spellcasting
      description: "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.\r\n\r\nYour spells are part of your vast repertoire, magic that you can tune to different situations.\r\n\r\n###Cantrips\r\n\r\nYou know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.\r\n\r\n###Spell Slots\r\n\r\nThe Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nFor example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.\r\n\r\n###Spells Known of 1st Level and Higher\r\n\r\nYou know four 1st-level spells of your choice from the bard spell list.\r\n\r\nThe Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\r\n\r\nAdditionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.\r\n\r\n###Spellcasting Ability\r\n\r\nCharisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.\r\n\r\n*Spell save DC* = 8 + your proficiency bonus + your Charisma modifier\r\n\r\n*Spell attack modifier* = your proficiency bonus + your Charisma modifier\r\n\r\n###Ritual Casting\r\n\r\nYou can cast any bard spell you know as a ritual if that spell has the ritual tag.\r\n\r\n###Spellcasting Focus\r\n\r\nYou can use a musical instrument (see chapter 5, “Equipment”) as a spellcasting focus for your bard spells."
  '2':
    - id: jack-of-all-trades
      name: Jack of All Trades
      description: Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.
    - id: song-of-rest
      name: Song of Rest
      description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\r\n\r\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
  '3':
    - id: bard-college
      name: Bard College
      description: 'At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level.'
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: expertise
      name: Expertise
      description: "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\r\n\r\nAt 10th level, you can choose another two skill proficiencies to gain this benefit."
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
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
    - id: bardic-inspiration
      name: Bardic Inspiration
      description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\r\n\r\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\r\n\r\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\r\n\r\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
      action: bonus-action
      resources:
        - id: bard:bardic-inspiration
          name: Bardic Inspiration
          max_formula: '{cha_mod}'
          die:
            base: d6
            scaling:
              '5': d8
              '10': d10
              '15': d12
          reset: short-rest
    - id: font-of-inspiration
      name: Font of Inspiration
      description: Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.
  '6':
    - id: countercharm
      name: Countercharm
      description: At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).
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
  '9':
    - id: song-of-rest
      name: Song of Rest
      description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\r\n\r\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
  '10':
    - id: bardic-inspiration
      name: Bardic Inspiration
      description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\r\n\r\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\r\n\r\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\r\n\r\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
      action: bonus-action
      resources:
        - id: bard:bardic-inspiration
          name: Bardic Inspiration
          max_formula: '{cha_mod}'
          die:
            base: d6
            scaling:
              '5': d8
              '10': d10
              '15': d12
          reset: short-rest
    - id: expertise
      name: Expertise
      description: "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\r\n\r\nAt 10th level, you can choose another two skill proficiencies to gain this benefit."
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
    - id: magical-secrets
      name: Magical Secrets
      description: "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\r\n\r\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\r\n\r\nYou learn two additional spells from any class at 14th level and again at 18th level."
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
  '13':
    - id: song-of-rest
      name: Song of Rest
      description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\r\n\r\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
  '14':
    - id: magical-secrets
      name: Magical Secrets
      description: "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\r\n\r\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\r\n\r\nYou learn two additional spells from any class at 14th level and again at 18th level."
  '15':
    - id: bardic-inspiration
      name: Bardic Inspiration
      description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\r\n\r\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\r\n\r\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\r\n\r\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
      action: bonus-action
      resources:
        - id: bard:bardic-inspiration
          name: Bardic Inspiration
          max_formula: '{cha_mod}'
          die:
            base: d6
            scaling:
              '5': d8
              '10': d10
              '15': d12
          reset: short-rest
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
  '17':
    - id: song-of-rest
      name: Song of Rest
      description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\r\n\r\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
  '18':
    - id: magical-secrets
      name: Magical Secrets
      description: "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\r\n\r\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\r\n\r\nYou learn two additional spells from any class at 14th level and again at 18th level."
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
    - id: superior-inspiration
      name: Superior Inspiration
      description: At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
