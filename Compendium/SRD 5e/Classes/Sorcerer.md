---
archivist: true
entity_type: class
slug: srd-5e_class_sorcerer
name: Sorcerer
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.745Z'
---

```class
slug: srd-5e_class_sorcerer
name: Sorcerer
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d6
primary_abilities:
  - cha
saving_throws:
  - cha
  - con
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
    - deception
    - insight
    - intimidation
    - persuasion
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: A Light Crossbow and 20 Bolts
        grants:
          - item: crossbow-light
      - label: Any simple weapon
        grants:
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Component Pouch
        grants: []
      - label: An Arcane Focus
        grants: []
  - kind: choice
    options:
      - label: A Dungeoneer's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: Two Daggers
    grants:
      - item: dagger
        qty: 2
spellcasting:
  caster_type: full
  ability: cha
  preparation: known
  spell_list: sorcerer
subclass_level: 1
subclass_feature_name: Sorcerous Origin
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - sorcerous-origin
      - spellcasting
    columns:
      Cantrips Known: '4'
      1st: '2'
      Spells Known: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - font-of-magic
    columns:
      Cantrips Known: '4'
      1st: '3'
      Sorcery Points: '2'
      Spells Known: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - metamagic
    columns:
      Cantrips Known: '4'
      1st: '4'
      Sorcery Points: '3'
      Spells Known: '4'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '2'
      Sorcery Points: '4'
      Spells Known: '5'
  '5':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '2'
      Sorcery Points: '5'
      Spells Known: '6'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      Sorcery Points: '6'
      Spells Known: '7'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Sorcery Points: '7'
      Spells Known: '8'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Sorcery Points: '8'
      Spells Known: '9'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Sorcery Points: '9'
      Spells Known: '10'
  '10':
    prof_bonus: 4
    feature_ids:
      - metamagic
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Sorcery Points: '10'
      Spells Known: '11'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Sorcery Points: '11'
      Spells Known: '12'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Sorcery Points: '12'
      Spells Known: '12'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Sorcery Points: '13'
      Spells Known: '13'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Sorcery Points: '14'
      Spells Known: '13'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Sorcery Points: '15'
      Spells Known: '14'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Sorcery Points: '16'
      Spells Known: '14'
  '17':
    prof_bonus: 6
    feature_ids:
      - metamagic
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
      Sorcery Points: '17'
      Spells Known: '15'
  '18':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
      Sorcery Points: '18'
      Spells Known: '15'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '1'
      8th: '1'
      9th: '1'
      Sorcery Points: '19'
      Spells Known: '15'
  '20':
    prof_bonus: 6
    feature_ids:
      - sorcerous-restoration
    columns:
      Cantrips Known: '6'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '2'
      8th: '1'
      9th: '1'
      Sorcery Points: '20'
      Spells Known: '15'
features_by_level:
  '1':
    - id: sorcerous-origin
      name: Sorcerous Origin
      description: "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.\r\n\r\nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: spellcasting
      name: Spellcasting
      description: "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.\r\n\r\n### Cantrips\r\n\r\nAt 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.\r\n\r\n### Spell Slots\r\n\r\nThe Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nFor example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.\r\n\r\n### Spells Known of 1st Level and Higher\r\n\r\nYou know two 1st-level spells of your choice from the sorcerer spell list.\r\n\r\nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\r\n\r\nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.\r\n\r\n### Spellcasting Ability\r\n\r\nCharisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC = 8** + your proficiency bonus + your Charisma modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Charisma modifier\r\nSpellcasting Focus\r\n\r\nYou can use an arcane focus as a spellcasting focus for your sorcerer spells."
  '2':
    - id: font-of-magic
      name: Font of Magic
      description: "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.\r\n\r\n### Sorcery Points\r\n\r\nYou have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.\r\n\r\n### Flexible Casting\r\n\r\nYou can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.\r\n\r\n***Creating Spell Slots.*** You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.\r\n\r\nAny spell slot you create with this feature vanishes when you finish a long rest.\r\n\r\n### Creating Spell Slots (table)\r\n| Spell Slot Level | Sorcery Point Cost |\r\n| --- | --- |\r\n| 1st | 2 |\r\n| 2nd | 3 |\r\n| 3rd | 5 |\r\n| 4th | 6 |\r\n| 5th | 7|\r\n\r\n***Converting a Spell Slot to Sorcery Points.*** As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
  '3':
    - id: metamagic
      name: Metamagic
      description: "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\r\n\r\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted.\r\n\r\n### Careful Spell\r\n\r\nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.\r\n\r\n### Distant Spell\r\n\r\nWhen you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.\r\n\r\nWhen you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.\r\n\r\n### Empowered Spell\r\n\r\nWhen you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.\r\n\r\nYou can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.\r\n\r\n### Extended Spell\r\n\r\nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.\r\n\r\n### Heightened Spell\r\n\r\nWhen you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.\r\n\r\n### Quickened Spell\r\n\r\nWhen you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.\r\n\r\n### Subtle Spell\r\n\r\nWhen you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.\r\n\r\n### Twinned Spell\r\n\r\nWhen you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).\r\n\r\nTo be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost and chromatic orb are."
      choices:
        - kind: select-entity
          id: metamagic
          count: 2
          entity_type: optional-feature
          where:
            feature_type: metamagic
            available_to: self
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
  '10':
    - id: metamagic
      name: Metamagic
      description: "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\r\n\r\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted.\r\n\r\n### Careful Spell\r\n\r\nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.\r\n\r\n### Distant Spell\r\n\r\nWhen you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.\r\n\r\nWhen you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.\r\n\r\n### Empowered Spell\r\n\r\nWhen you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.\r\n\r\nYou can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.\r\n\r\n### Extended Spell\r\n\r\nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.\r\n\r\n### Heightened Spell\r\n\r\nWhen you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.\r\n\r\n### Quickened Spell\r\n\r\nWhen you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.\r\n\r\n### Subtle Spell\r\n\r\nWhen you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.\r\n\r\n### Twinned Spell\r\n\r\nWhen you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).\r\n\r\nTo be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost and chromatic orb are."
      choices:
        - kind: select-entity
          id: metamagic
          count: 2
          entity_type: optional-feature
          where:
            feature_type: metamagic
            available_to: self
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
  '17':
    - id: metamagic
      name: Metamagic
      description: "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\r\n\r\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted.\r\n\r\n### Careful Spell\r\n\r\nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.\r\n\r\n### Distant Spell\r\n\r\nWhen you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.\r\n\r\nWhen you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.\r\n\r\n### Empowered Spell\r\n\r\nWhen you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.\r\n\r\nYou can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.\r\n\r\n### Extended Spell\r\n\r\nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.\r\n\r\n### Heightened Spell\r\n\r\nWhen you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.\r\n\r\n### Quickened Spell\r\n\r\nWhen you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.\r\n\r\n### Subtle Spell\r\n\r\nWhen you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.\r\n\r\n### Twinned Spell\r\n\r\nWhen you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).\r\n\r\nTo be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost and chromatic orb are."
      choices:
        - kind: select-entity
          id: metamagic
          count: 2
          entity_type: optional-feature
          where:
            feature_type: metamagic
            available_to: self
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
    - id: sorcerous-restoration
      name: Sorcerous Restoration
      description: At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.
resources: []
starting_gold:
  dice: 3d4
  multiplier: 10
```
