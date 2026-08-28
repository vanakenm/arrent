---
archivist: true
entity_type: class
slug: srd-5e_class_cleric
name: Cleric
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.733Z'
---

```class
slug: srd-5e_class_cleric
name: Cleric
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d8
primary_abilities:
  - wis
saving_throws:
  - cha
  - wis
proficiencies:
  armor:
    - light
    - medium
    - shield
  weapons:
    categories:
      - simple
skill_choices:
  count: 2
  from:
    - history
    - insight
    - medicine
    - persuasion
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: A Mace
        grants:
          - item: mace
      - label: A Warhammer (if proficient)
        grants:
          - item: warhammer
  - kind: choice
    options:
      - label: Scale Mail
        grants:
          - item: scale-mail
      - label: Leather Armor
        grants:
          - item: leather
      - label: Chain Mail (if proficient)
        grants:
          - item: chain-mail
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
      - label: A Priest's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: A Shield and a Holy Symbol
    grants:
      - category: shield
spellcasting:
  caster_type: full
  ability: wis
  preparation: prepared
  spell_list: cleric
subclass_level: 1
subclass_feature_name: Divine Domain
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - divine-domain
      - spellcasting
    columns:
      Cantrips Known: '3'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - channel-divinity
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
    feature_ids:
      - destroy-undead
    columns:
      Cantrips Known: '4'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids:
      - channel-divinity
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
      - destroy-undead
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
    feature_ids:
      - divine-intervention
    columns:
      Cantrips Known: '5'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '11':
    prof_bonus: 4
    feature_ids:
      - destroy-undead
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
    feature_ids: []
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
    feature_ids:
      - destroy-undead
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
    feature_ids:
      - destroy-undead
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
      - channel-divinity
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
      - divine-intervention
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
    - id: divine-domain
      name: Divine Domain
      description: "Choose one domain related to your deity, such as  Life. Each domain is detailed at the end of the class  description, and each one provides examples of gods  associated with it. Your choice grants you domain  spells and other features when you choose it at 1st  level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd  level, and additional benefits at 6th, 8th, and 17th  levels.\r\n\r\n### Domain Spells\r\nEach domain has a list of spells—its domain spells—that you gain at the cleric levels noted in the domain  description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. \r\nIf you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: spellcasting
      name: Spellcasting
      description: "As a conduit for divine power, you can cast cleric spells.\r\n\r\n###Cantrips\r\n\r\nAt 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.\r\nPreparing and Casting Spells\r\n\r\nThe Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nYou prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\r\n\r\nFor example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\r\n\r\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\r\n\r\n###Spellcasting Ability\r\n\r\nWisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier\r\n\r\n###Ritual Casting\r\n\r\nYou can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.\r\n\r\n###Spellcasting Focus\r\n\r\nYou can use a holy symbol (see chapter 5, “Equipment”) as a spellcasting focus for your cleric spells."
  '2':
    - id: channel-divinity
      name: Channel Divinity
      description: "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\r\n\r\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\r\n\r\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\r\n\r\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.\r\n\r\n### Channel Divinity: Turn Undead\r\n\r\nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\r\n\r\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
      action: action
      resources:
        - id: cleric:channel-divinity
          name: Channel Divinity
          max_formula: '1'
          scales_at:
            - level: 6
              max: '2'
            - level: 18
              max: '3'
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
  '5':
    - id: destroy-undead
      name: Destroy Undead
      description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \r\n\r\n### Destroy Undead (table)\r\n\r\n| Cleric Level | Destroys Undead of CR... | \r\n|---|---|\r\n| 5th | 1/2 or lower |\r\n| 8th | 1 or lower |\r\n| 11th | 2 or lower |\r\n| 14th | 3 or lower | \r\n| 17th | 4 or lower |"
  '6':
    - id: channel-divinity
      name: Channel Divinity
      description: "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\r\n\r\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\r\n\r\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\r\n\r\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.\r\n\r\n### Channel Divinity: Turn Undead\r\n\r\nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\r\n\r\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
      action: action
      resources:
        - id: cleric:channel-divinity
          name: Channel Divinity
          max_formula: '1'
          scales_at:
            - level: 6
              max: '2'
            - level: 18
              max: '3'
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
    - id: destroy-undead
      name: Destroy Undead
      description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \r\n\r\n### Destroy Undead (table)\r\n\r\n| Cleric Level | Destroys Undead of CR... | \r\n|---|---|\r\n| 5th | 1/2 or lower |\r\n| 8th | 1 or lower |\r\n| 11th | 2 or lower |\r\n| 14th | 3 or lower | \r\n| 17th | 4 or lower |"
  '10':
    - id: divine-intervention
      name: Divine Intervention
      description: "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\r\n\r\nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.\r\n\r\nIf your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.\r\n\r\nAt 20th level, your call for intervention succeeds automatically, no roll required."
  '11':
    - id: destroy-undead
      name: Destroy Undead
      description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \r\n\r\n### Destroy Undead (table)\r\n\r\n| Cleric Level | Destroys Undead of CR... | \r\n|---|---|\r\n| 5th | 1/2 or lower |\r\n| 8th | 1 or lower |\r\n| 11th | 2 or lower |\r\n| 14th | 3 or lower | \r\n| 17th | 4 or lower |"
  '14':
    - id: destroy-undead
      name: Destroy Undead
      description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \r\n\r\n### Destroy Undead (table)\r\n\r\n| Cleric Level | Destroys Undead of CR... | \r\n|---|---|\r\n| 5th | 1/2 or lower |\r\n| 8th | 1 or lower |\r\n| 11th | 2 or lower |\r\n| 14th | 3 or lower | \r\n| 17th | 4 or lower |"
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
    - id: destroy-undead
      name: Destroy Undead
      description: "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \r\n\r\n### Destroy Undead (table)\r\n\r\n| Cleric Level | Destroys Undead of CR... | \r\n|---|---|\r\n| 5th | 1/2 or lower |\r\n| 8th | 1 or lower |\r\n| 11th | 2 or lower |\r\n| 14th | 3 or lower | \r\n| 17th | 4 or lower |"
  '18':
    - id: channel-divinity
      name: Channel Divinity
      description: "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\r\n\r\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\r\n\r\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\r\n\r\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.\r\n\r\n### Channel Divinity: Turn Undead\r\n\r\nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\r\n\r\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
      action: action
      resources:
        - id: cleric:channel-divinity
          name: Channel Divinity
          max_formula: '1'
          scales_at:
            - level: 6
              max: '2'
            - level: 18
              max: '3'
          reset: short-rest
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
    - id: divine-intervention
      name: Divine Intervention
      description: "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\r\n\r\nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.\r\n\r\nIf your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.\r\n\r\nAt 20th level, your call for intervention succeeds automatically, no roll required."
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
