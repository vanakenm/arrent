---
archivist: true
entity_type: class
slug: srd-5e_class_monk
name: Monk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.738Z'
---

```class
slug: srd-5e_class_monk
name: Monk
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d8
primary_abilities:
  - dex
  - wis
saving_throws:
  - dex
  - str
proficiencies:
  armor: []
  weapons:
    categories:
      - simple
    fixed:
      - shortswords
  tools:
    fixed:
      - Choose one type of artisan’s tools or one musical instrument
skill_choices:
  count: 2
  from:
    - acrobatics
    - athletics
    - history
    - insight
    - religion
    - stealth
starting_equipment:
  - kind: choice
    options:
      - label: A Shortsword
        grants:
          - item: shortsword
      - label: Any simple weapon
        grants:
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Dungeoneer's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: 10 Darts
    grants:
      - item: dart
        qty: 10
spellcasting: null
subclass_level: 3
subclass_feature_name: Monastic Tradition
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - martial-arts
      - unarmored-defense
    columns:
      Martial Arts: 1d4
  '2':
    prof_bonus: 2
    feature_ids:
      - ki
      - unarmored-movement
    columns:
      Ki Points: '2'
      Martial Arts: 1d4
      Unarmored Movement: +10 ft.
  '3':
    prof_bonus: 2
    feature_ids:
      - deflect-missiles
      - monastic-tradition
    columns:
      Ki Points: '3'
      Martial Arts: 1d4
      Unarmored Movement: +10 ft.
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
      - slow-fall
    columns:
      Ki Points: '4'
      Martial Arts: 1d4
      Unarmored Movement: +10 ft.
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - stunning-strike
    columns:
      Ki Points: '5'
      Martial Arts: 1d6
      Unarmored Movement: +10 ft.
  '6':
    prof_bonus: 3
    feature_ids:
      - ki-empowered-strikes
    columns:
      Ki Points: '6'
      Martial Arts: 1d6
      Unarmored Movement: +15 ft.
  '7':
    prof_bonus: 3
    feature_ids:
      - evasion
      - stillness-of-mind
    columns:
      Ki Points: '7'
      Martial Arts: 1d6
      Unarmored Movement: +15 ft.
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Ki Points: '8'
      Martial Arts: 1d6
      Unarmored Movement: +15 ft.
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Ki Points: '9'
      Martial Arts: 1d6
      Unarmored Movement: +15 ft.
  '10':
    prof_bonus: 4
    feature_ids:
      - purity-of-body
    columns:
      Ki Points: '10'
      Martial Arts: 1d6
      Unarmored Movement: +20 ft.
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Ki Points: '11'
      Martial Arts: 1d8
      Unarmored Movement: +20 ft.
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Ki Points: '12'
      Martial Arts: 1d8
      Unarmored Movement: +20 ft.
  '13':
    prof_bonus: 5
    feature_ids:
      - tongue-of-the-sun-and-moon
    columns:
      Ki Points: '13'
      Martial Arts: 1d8
      Unarmored Movement: +20 ft.
  '14':
    prof_bonus: 5
    feature_ids:
      - diamond-soul
    columns:
      Ki Points: '14'
      Martial Arts: 1d8
      Unarmored Movement: +25 ft.
  '15':
    prof_bonus: 5
    feature_ids:
      - timeless-body
    columns:
      Ki Points: '15'
      Martial Arts: 1d8
      Unarmored Movement: +25 ft.
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Ki Points: '16'
      Martial Arts: 1d8
      Unarmored Movement: +25 ft.
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Ki Points: '17'
      Martial Arts: 1d10
      Unarmored Movement: +25 ft.
  '18':
    prof_bonus: 6
    feature_ids:
      - empty-body
    columns:
      Ki Points: '18'
      Martial Arts: 1d10
      Unarmored Movement: +30 ft.
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      Ki Points: '19'
      Martial Arts: 1d10
      Unarmored Movement: +30 ft.
  '20':
    prof_bonus: 6
    feature_ids:
      - perfect-self
    columns:
      Ki Points: '20'
      Martial Arts: 1d10
      Unarmored Movement: +30 ft.
features_by_level:
  '1':
    - id: martial-arts
      name: Martial Arts
      description: "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property.\r\n\r\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\r\n\r\n* You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\r\n* You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\r\n* When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn. \r\n\r\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
    - id: unarmored-defense
      name: Unarmored Defense
      description: Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.
  '2':
    - id: ki
      name: Ki
      description: "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.\r\n\r\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\r\n\r\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\r\n\r\nSome of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:\r\n\r\n*Ki save DC* = 8 + your proficiency bonus + your Wisdom modifier\r\n\r\n### Flurry of Blows\r\n\r\nImmediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action. \r\n\r\n### Patient Defense\r\n\r\nYou can spend 1 ki point to take the Dodge action as a bonus action on your turn.\r\n\r\n### Step of the Wind\r\n\r\nYou can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
    - id: unarmored-movement
      name: Unarmored Movement
      description: "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\r\n\r\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
  '3':
    - id: deflect-missiles
      name: Deflect Missiles
      description: "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.\r\n\r\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
    - id: monastic-tradition
      name: Monastic Tradition
      description: When you reach 3rd level, you commit yourself to a monastic tradition such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.
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
    - id: slow-fall
      name: Slow Fall
      description: Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.
  '5':
    - id: extra-attack
      name: Extra Attack
      description: Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.
    - id: stunning-strike
      name: Stunning Strike
      description: Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.
  '6':
    - id: ki-empowered-strikes
      name: Ki-Empowered Strikes
      description: Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
  '7':
    - id: evasion
      name: Evasion
      description: At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.
    - id: stillness-of-mind
      name: Stillness of Mind
      description: Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.
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
    - id: purity-of-body
      name: Purity of Body
      description: At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.
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
    - id: tongue-of-the-sun-and-moon
      name: Tongue of the Sun and Moon
      description: Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.
  '14':
    - id: diamond-soul
      name: Diamond Soul
      description: "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\r\n\r\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
  '15':
    - id: timeless-body
      name: Timeless Body
      description: At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.
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
    - id: empty-body
      name: Empty Body
      description: "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\r\n\r\nAdditionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you."
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
    - id: perfect-self
      name: Perfect Self
      description: At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
