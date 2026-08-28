---
archivist: true
entity_type: class
slug: srd-2024_class_sorcerer
name: Sorcerer
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.110Z'
---

```class
slug: srd-2024_class_sorcerer
name: Sorcerer
edition: '2024'
source: SRD 5.2
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
    categories:
      - simple
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
      - label: Spear, 2 Daggers, Arcane Focus (crystal), Dungeoneer's Pack, and 28 GP
        grants:
          - item: spear
          - item: dagger
            qty: 2
          - gold: 28
      - label: 50 GP
        grants:
          - gold: 50
spellcasting:
  caster_type: full
  ability: cha
  preparation: known
  spell_list: sorcerer
subclass_level: 3
subclass_feature_name: Sorcerer Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - innate-sorcery
      - spellcasting
    columns:
      Cantrips: '4'
      Prepared Spells: '2'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - font-of-magic
      - metamagic
    columns:
      Cantrips: '4'
      Prepared Spells: '4'
      1st: '3'
      Sorcery Points: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - sorcerer-subclass
    columns:
      Cantrips: '4'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
      Sorcery Points: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '5'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
      Sorcery Points: '4'
  '5':
    prof_bonus: 3
    feature_ids:
      - sorcerous-restoration
    columns:
      Cantrips: '5'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
      Sorcery Points: '5'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '5'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
      Sorcery Points: '6'
  '7':
    prof_bonus: 3
    feature_ids:
      - sorcery-incarnate
    columns:
      Cantrips: '5'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Sorcery Points: '7'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '5'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Sorcery Points: '8'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '5'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Sorcery Points: '9'
  '10':
    prof_bonus: 4
    feature_ids:
      - metamagic
    columns:
      Cantrips: '6'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Sorcery Points: '10'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '16'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Sorcery Points: '11'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '6'
      Prepared Spells: '16'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Sorcery Points: '12'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '17'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Sorcery Points: '13'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '17'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Sorcery Points: '14'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '18'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Sorcery Points: '15'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '6'
      Prepared Spells: '18'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Sorcery Points: '16'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '19'
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
  '18':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips: '6'
      Prepared Spells: '20'
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
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Cantrips: '6'
      Prepared Spells: '21'
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
  '20':
    prof_bonus: 6
    feature_ids:
      - arcane-apotheosis
    columns:
      Cantrips: '6'
      Prepared Spells: '22'
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
features_by_level:
  '1':
    - id: innate-sorcery
      name: Innate Sorcery
      description: |-
        An event in your past left an indelible mark on you, infusing you with simmering magic. As a Bonus Action, you can unleash that magic for 1 minute, during which you gain the following benefits:

        - The spell save DC of your Sorcerer spells increases by 1.
        - You have Advantage on the attack rolls of Sorcerer spells you cast.

        You can use this feature twice, and you regain all expended uses of it when you finish a Long Rest.
      action: bonus-action
      resources:
        - id: sorcerer:innate-sorcery
          name: Innate Sorcery
          max_formula: '2'
          reset: long-rest
    - id: spellcasting
      name: Spellcasting
      description: |-
        Drawing from your innate magic, you can cast spells. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Sorcerer spells, which appear in the Sorcerer spell list later in the class's description.

        **Cantrips.** You know four Sorcerer cantrips of your choice. *Light*, *Prestidigitation*, *Shocking Grasp*, and *Sorcerous Burst* are recommended. Whenever you gain a Sorcerer level, you can replace one of your cantrips from this feature with another Sorcerer cantrip of your choice.

        When you reach Sorcerer levels 4 and 10, you learn another Sorcerer cantrip of your choice, as shown in the Cantrips column of the Sorcerer Features table.

        **Spell Slots.** The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Sorcerer spells. *Burning Hands* and *Detect Magic* are recommended.

        The number of spells on your list increases as you gain Sorcerer levels, as shown in the Prepared Spells column of the Sorcerer Features table. Whenever that number increases, choose additional Sorcerer spells until the number of spells on your list matches the number in the Sorcerer Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Sorcerer, your list of prepared spells can include six Sorcerer spells of level 1 or 2 in any combination.

        If another Sorcerer feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Sorcerer spells for you.

        **Changing Your Prepared Spells.** Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.

        **Spellcasting Ability.** Charisma is your spellcasting ability for your Sorcerer spells.

        **Spellcasting Focus.** You can use an Arcane Focus as a Spellcasting Focus for your Sorcerer spells.
  '2':
    - id: font-of-magic
      name: Font of Magic
      description: |-
        You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.

        You have 2 Sorcery Points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer Features table. You can't have more Sorcery Points than the number shown in the table for your level. You regain all expended Sorcery Points when you finish a Long Rest.

        You can use your Sorcery Points to fuel the options below, along with other features, such as Metamagic, that use those points.

        **Converting Spell Slots to Sorcery Points.** You can expend a spell slot to gain a number of Sorcery Points equal to the slot's level (no action required).

        **Creating Spell Slots.** As a Bonus Action, you can transform unexpended Sorcery Points into one spell slot. The Creating Spell Slots table shows the cost of creating a spell slot of a given level, and it lists the minimum Sorcerer level you must be to create a slot. You can create a spell slot no higher than level 5.

        Any spell slot you create with this feature vanishes when you finish a Long Rest.

        Table: Creating Spell Slots

        |Spell Slot Level|Sorcery Point Cost|Min. Sorcerer Level|
        |---|---|---|
        |1|2|2|
        |2|3|3|
        |3|5|5|
        |4|6|7|
        |5|7|9|
      resources:
        - id: sorcerer:sorcery-points
          name: Sorcery Points
          max_formula: class_level
          reset: long-rest
    - id: metamagic
      name: Metamagic
      description: |-
        Because your magic flows from within, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from "Metamagic Options" later in this class's description. You use the chosen options to temporarily modify spells you cast. To use an option, you must spend the number of Sorcery Points that it costs.

        You can use only one Metamagic option on a spell when you cast it unless otherwise noted in one of those options.

        Whenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know. You gain two more options at Sorcerer level 10 and two more at Sorcerer level 17.
      choices:
        - kind: select-entity
          id: metamagic
          count: 2
          entity_type: optional-feature
          where:
            feature_type: metamagic
            available_to: self
  '3':
    - id: sorcerer-subclass
      name: Sorcerer Subclass
      description: You gain a Sorcerer subclass of your choice. The Draconic Sorcery subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Sorcerer levels. For the rest of your career, you gain each of your subclass's features that are of your Sorcerer level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16.
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
    - id: sorcerous-restoration
      name: Sorcerous Restoration
      description: When you finish a Short Rest, you can regain expended Sorcery Points, but no more than a number equal to half your Sorcerer level (round down). Once you use this feature, you can't do so again until you finish a Long Rest.
      resources:
        - id: sorcerer:sorcerous-restoration
          name: Sorcerous Restoration
          max_formula: '1'
          reset: long-rest
  '7':
    - id: sorcery-incarnate
      name: Sorcery Incarnate
      description: |-
        If you have no uses of Innate Sorcery left, you can use it if you spend 2 Sorcery Points when you take the Bonus Action to activate it.

        In addition, while your Innate Sorcery feature is active, you can use up to two of your Metamagic options on each spell you cast.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16.
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
      description: |-
        Because your magic flows from within, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from "Metamagic Options" later in this class's description. You use the chosen options to temporarily modify spells you cast. To use an option, you must spend the number of Sorcery Points that it costs.

        You can use only one Metamagic option on a spell when you cast it unless otherwise noted in one of those options.

        Whenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know. You gain two more options at Sorcerer level 10 and two more at Sorcerer level 17.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16.
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
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: arcane-apotheosis
      name: Arcane Apotheosis
      description: While your Innate Sorcery feature is active, you can use one Metamagic option on each of your turns without spending Sorcery Points on it.
resources: []
starting_gold:
  fixed: 50
```
