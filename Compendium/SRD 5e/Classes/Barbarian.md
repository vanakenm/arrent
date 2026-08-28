---
archivist: true
entity_type: class
slug: srd-5e_class_barbarian
name: Barbarian
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.726Z'
---

```class
slug: srd-5e_class_barbarian
name: Barbarian
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d12
primary_abilities:
  - str
saving_throws:
  - con
  - str
proficiencies:
  armor:
    - light
    - medium
    - shield
  weapons:
    categories:
      - simple
      - martial
skill_choices:
  count: 2
  from:
    - animal-handling
    - athletics
    - intimidation
    - nature
    - perception
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: A Greataxe
        grants:
          - item: greataxe
      - label: Any martial melee weapon
        grants:
          - category: martial-weapon
  - kind: choice
    options:
      - label: Two Handaxes
        grants:
          - item: handaxe
            qty: 2
      - label: Any simple weapon
        grants:
          - category: simple-weapon
  - kind: fixed
    label: An Explorer's Pack and 4 Javelins
    grants:
      - item: javelin
        qty: 4
spellcasting: null
subclass_level: 3
subclass_feature_name: Primal Path
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - rage
      - unarmored-defense
    columns:
      Rage Damage: '+2'
      Rages: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - danger-sense
      - reckless-attack
    columns:
      Rage Damage: '+2'
      Rages: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - primal-path
    columns:
      Rage Damage: '+2'
      Rages: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+2'
      Rages: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - fast-movement
    columns:
      Rage Damage: '+2'
      Rages: '3'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Rage Damage: '+2'
      Rages: '4'
  '7':
    prof_bonus: 3
    feature_ids:
      - feral-instinct
    columns:
      Rage Damage: '+2'
      Rages: '4'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+2'
      Rages: '4'
  '9':
    prof_bonus: 4
    feature_ids:
      - brutal-critical
    columns:
      Rage Damage: '+3'
      Rages: '4'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Rage Damage: '+3'
      Rages: '4'
  '11':
    prof_bonus: 4
    feature_ids:
      - relentless-rage
    columns:
      Rage Damage: '+3'
      Rages: '4'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+3'
      Rages: '5'
  '13':
    prof_bonus: 5
    feature_ids:
      - brutal-critical
    columns:
      Rage Damage: '+3'
      Rages: '5'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Rage Damage: '+3'
      Rages: '5'
  '15':
    prof_bonus: 5
    feature_ids:
      - persistent-rage
    columns:
      Rage Damage: '+3'
      Rages: '5'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+4'
      Rages: '5'
  '17':
    prof_bonus: 6
    feature_ids:
      - brutal-critical
    columns:
      Rage Damage: '+4'
      Rages: '6'
  '18':
    prof_bonus: 6
    feature_ids:
      - indomitable-might
    columns:
      Rage Damage: '+4'
      Rages: '6'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+4'
      Rages: '6'
  '20':
    prof_bonus: 6
    feature_ids:
      - primal-champion
    columns:
      Rage Damage: '+4'
      Rages: Unlimited
features_by_level:
  '1':
    - id: rage
      name: Rage
      description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\r\n\r\nWhile raging, you gain the following benefits if you aren't wearing heavy armor:\r\n\r\n* You have advantage on Strength checks and Strength saving throws.\r\n* When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.\r\n* You have resistance to bludgeoning, piercing, and slashing damage. \r\n\r\nIf you are able to cast spells, you can't cast them or concentrate on them while raging.\r\n\r\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\r\n\r\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
      action: bonus-action
      resources:
        - id: barbarian:rage
          name: Rage
          max_formula: '2'
          scales_at:
            - level: 3
              max: '3'
            - level: 6
              max: '4'
            - level: 12
              max: '5'
            - level: 17
              max: '6'
            - level: 20
              max: '999'
          reset: long-rest
    - id: unarmored-defense
      name: Unarmored Defense
      description: While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.
  '2':
    - id: danger-sense
      name: Danger Sense
      description: "At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\r\n\r\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
    - id: reckless-attack
      name: Reckless Attack
      description: Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.
  '3':
    - id: primal-path
      name: Primal Path
      description: At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.
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
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.
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
    - id: fast-movement
      name: Fast Movement
      description: Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.
  '7':
    - id: feral-instinct
      name: Feral Instinct
      description: "By 7th level, your instincts are so honed that you have advantage on initiative rolls.\r\n\r\nAdditionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.
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
    - id: brutal-critical
      name: Brutal Critical
      description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\r\n\r\nThis increases to two additional dice at 13th level and three additional dice at 17th level."
  '11':
    - id: relentless-rage
      name: Relentless Rage
      description: "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\r\n\r\nEach time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.
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
    - id: brutal-critical
      name: Brutal Critical
      description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\r\n\r\nThis increases to two additional dice at 13th level and three additional dice at 17th level."
  '15':
    - id: persistent-rage
      name: Persistent Rage
      description: Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.
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
    - id: brutal-critical
      name: Brutal Critical
      description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\r\n\r\nThis increases to two additional dice at 13th level and three additional dice at 17th level."
  '18':
    - id: indomitable-might
      name: Indomitable Might
      description: Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.
  '19':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.
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
    - id: primal-champion
      name: Primal Champion
      description: At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.
resources: []
starting_gold:
  dice: 2d4
  multiplier: 10
```
