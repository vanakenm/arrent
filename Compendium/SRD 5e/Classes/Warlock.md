---
archivist: true
entity_type: class
slug: srd-5e_class_warlock
name: Warlock
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.746Z'
---

```class
slug: srd-5e_class_warlock
name: Warlock
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d8
primary_abilities:
  - cha
saving_throws:
  - cha
  - wis
proficiencies:
  armor:
    - light
  weapons:
    categories:
      - simple
skill_choices:
  count: 2
  from:
    - arcana
    - deception
    - history
    - intimidation
    - investigation
    - nature
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
      - label: A Scholar's Pack
        grants: []
      - label: A Dungeoneer's Pack
        grants: []
  - kind: fixed
    label: Leather Armor, Any Simple Weapon, and Two Daggers
    grants:
      - item: leather
      - category: simple-weapon
      - item: dagger
        qty: 2
spellcasting:
  caster_type: pact
  ability: cha
  preparation: known
  spell_list: warlock
subclass_level: 1
subclass_feature_name: Otherworldly Patron
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - otherworldly-patron
      - pact-magic
    columns:
      Cantrips Known: '2'
      Slot Level: 1st
      Spell Slots: '1'
      Spells Known: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - eldritch-invocations
    columns:
      Cantrips Known: '2'
      Invocations Known: '2'
      Slot Level: 1st
      Spell Slots: '2'
      Spells Known: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - pact-boon
    columns:
      Cantrips Known: '2'
      Invocations Known: '2'
      Slot Level: 2nd
      Spell Slots: '2'
      Spells Known: '4'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '3'
      Invocations Known: '2'
      Slot Level: 2nd
      Spell Slots: '2'
      Spells Known: '5'
  '5':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      Invocations Known: '3'
      Slot Level: 3rd
      Spell Slots: '2'
      Spells Known: '6'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      Invocations Known: '3'
      Slot Level: 3rd
      Spell Slots: '2'
      Spells Known: '7'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips Known: '3'
      Invocations Known: '4'
      Slot Level: 4th
      Spell Slots: '2'
      Spells Known: '8'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '3'
      Invocations Known: '4'
      Slot Level: 4th
      Spell Slots: '2'
      Spells Known: '9'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '3'
      Invocations Known: '5'
      Slot Level: 5th
      Spell Slots: '2'
      Spells Known: '10'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips Known: '4'
      Invocations Known: '5'
      Slot Level: 5th
      Spell Slots: '2'
      Spells Known: '10'
  '11':
    prof_bonus: 4
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips Known: '4'
      Invocations Known: '5'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '11'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '4'
      Invocations Known: '6'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '11'
  '13':
    prof_bonus: 5
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips Known: '4'
      Invocations Known: '6'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '12'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '4'
      Invocations Known: '6'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '12'
  '15':
    prof_bonus: 5
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips Known: '4'
      Invocations Known: '7'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '13'
  '16':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips Known: '4'
      Invocations Known: '7'
      Slot Level: 5th
      Spell Slots: '3'
      Spells Known: '13'
  '17':
    prof_bonus: 6
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips Known: '4'
      Invocations Known: '7'
      Slot Level: 5th
      Spell Slots: '4'
      Spells Known: '14'
  '18':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips Known: '4'
      Invocations Known: '8'
      Slot Level: 5th
      Spell Slots: '4'
      Spells Known: '14'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips Known: '4'
      Invocations Known: '8'
      Slot Level: 5th
      Spell Slots: '4'
      Spells Known: '15'
  '20':
    prof_bonus: 6
    feature_ids:
      - eldritch-master
    columns:
      Cantrips Known: '4'
      Invocations Known: '8'
      Slot Level: 5th
      Spell Slots: '4'
      Spells Known: '15'
features_by_level:
  '1':
    - id: otherworldly-patron
      name: Otherworldly Patron
      description: 'At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.'
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: pact-magic
      name: Pact Magic
      description: "Your arcane research and the magic bestowed on you by your patron have given you facility with spells.\r\n\r\n### Cantrips\r\n\r\nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.\r\nSpell Slots\r\n\r\nThe Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.\r\n\r\nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.\r\n\r\n### Spells Known of 1st Level and Higher\r\n\r\nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list.\r\n\r\nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.\r\n\r\nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.\r\n\r\n### Spellcasting Ability\r\n\r\nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Charisma modifier\r\n\r\n### Spellcasting Focus\r\n\r\nYou can use an arcane focus as a spellcasting focus for your warlock spells."
  '2':
    - id: eldritch-invocations
      name: Eldritch Invocations
      description: "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.\r\n\r\nAt 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.\r\n\r\nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
      choices:
        - kind: select-entity
          id: invocation
          count: 2
          entity_type: optional-feature
          where:
            feature_type: invocation
            available_to: self
  '3':
    - id: pact-boon
      name: Pact Boon
      description: "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.\r\n\r\n### Pact of the Chain\r\n\r\nYou learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.\r\n\r\nWhen you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.\r\n\r\nAdditionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.\r\n\r\n### Pact of the Blade\r\n\r\nYou can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\r\n\r\nYour pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.\r\n\r\nYou can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.\r\n\r\n### Pact of the Tome\r\n\r\nYour patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.\r\n\r\nIf you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die."
      choices:
        - kind: select-inline
          id: pact-boon
          count: 1
          options:
            - value: pact-of-the-chain
              label: Pact of the Chain
              description: You learn the Find Familiar spell and can cast it as a ritual; you can choose special familiar forms (imp, pseudodragon, quasit, or sprite). When you take the Attack action, you can forgo one of your attacks to let your familiar make one attack of its own with its reaction.
            - value: pact-of-the-blade
              label: Pact of the Blade
              description: You can use your action to create a pact weapon in your empty hand, choosing its form each time. You are proficient with it, and it counts as magical. You can also transform one magic weapon into your pact weapon.
            - value: pact-of-the-tome
              label: Pact of the Tome
              description: Your patron gives you a Book of Shadows. Choose three cantrips from any class's spell list; while the book is on your person you can cast those cantrips at will (they don't count against your cantrips known).
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
  '11':
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.\r\n\r\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\r\n\r\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
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
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.\r\n\r\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\r\n\r\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
  '15':
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.\r\n\r\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\r\n\r\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
  '17':
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.\r\n\r\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\r\n\r\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
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
    - id: eldritch-master
      name: Eldritch Master
      description: At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.
      action: special
      resources:
        - id: warlock:eldritch-master
          name: Eldritch Master
          max_formula: '1'
          reset: long-rest
resources: []
starting_gold:
  dice: 4d4
  multiplier: 10
```
