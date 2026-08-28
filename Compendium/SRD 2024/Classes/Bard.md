---
archivist: true
entity_type: class
slug: srd-2024_class_bard
name: Bard
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.103Z'
---

```class
slug: srd-2024_class_bard
name: Bard
edition: '2024'
source: SRD 5.2
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
  tools:
    fixed:
      - Choose 3 Musical Instruments
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
      - label: Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer's Pack, and 19 GP
        grants:
          - item: leather-armor
          - item: dagger
            qty: 2
          - gold: 19
      - label: 90 GP
        grants:
          - gold: 90
spellcasting:
  caster_type: full
  ability: cha
  preparation: prepared
  spell_list: bard
subclass_level: 3
subclass_feature_name: Bard Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - bardic-inspiration
      - spellcasting
    columns:
      Bardic Die: D6
      Cantrips: '2'
      Prepared Spells: '4'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - expertise
      - jack-of-all-trades
    columns:
      Bardic Die: D6
      Cantrips: '2'
      Prepared Spells: '5'
      1st: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - bard-subclass
    columns:
      Bardic Die: D6
      Cantrips: '2'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Bardic Die: D6
      Cantrips: '3'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - font-of-inspiration
    columns:
      Bardic Die: D8
      Cantrips: '3'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Bardic Die: D8
      Cantrips: '3'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '7':
    prof_bonus: 3
    feature_ids:
      - countercharm
    columns:
      Bardic Die: D8
      Cantrips: '3'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Bardic Die: D8
      Cantrips: '3'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Bardic Die: D8
      Cantrips: '3'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '10':
    prof_bonus: 4
    feature_ids:
      - magical-secrets
    columns:
      Bardic Die: D10
      Cantrips: '4'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Bardic Die: D10
      Cantrips: '4'
      Prepared Spells: '16'
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
      Bardic Die: D10
      Cantrips: '4'
      Prepared Spells: '16'
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
      Bardic Die: D10
      Cantrips: '4'
      Prepared Spells: '17'
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
      Bardic Die: D10
      Cantrips: '4'
      Prepared Spells: '17'
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
      Bardic Die: D12
      Cantrips: '4'
      Prepared Spells: '18'
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
      Bardic Die: D12
      Cantrips: '4'
      Prepared Spells: '18'
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
      Bardic Die: D12
      Cantrips: '4'
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
  '18':
    prof_bonus: 6
    feature_ids:
      - superior-inspiration
    columns:
      Bardic Die: D12
      Cantrips: '4'
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
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Bardic Die: D12
      Cantrips: '4'
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
  '20':
    prof_bonus: 6
    feature_ids:
      - words-of-creation
    columns:
      Bardic Die: D12
      Cantrips: '4'
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
features_by_level:
  '1':
    - id: bardic-inspiration
      name: Bardic Inspiration
      description: |-
        You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.

        **Using Bardic Inspiration.** As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.

        Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.

        **Number of Uses.** You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

        **At Higher Levels.** Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15.
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
      description: |-
        You have learned to cast spells through your bardic arts. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.

        **Cantrips.** You know two cantrips of your choice from the Bard spell list. *Dancing Lights* and *Vicious Mockery* are recommended.

        Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.

        When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.

        **Spell Slots.** The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. *Charm Person*, *Color Spray*, *Dissonant Whispers*, and *Healing Word* are recommended.

        The number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

        If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.

        **Changing Your Prepared Spells.** Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.

        **Spellcasting Ability.** Charisma is your spellcasting ability for your Bard spells.

        **Spellcasting Focus.** You can use a Musical Instrument as a Spellcasting Focus for your Bard spells.
  '2':
    - id: expertise
      name: Expertise
      description: |-
        You gain Expertise (see "Rules Glossary") in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.

        At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice.
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
    - id: jack-of-all-trades
      name: Jack of All Trades
      description: |-
        You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.

        For example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency Bonus to the check.
  '3':
    - id: bard-subclass
      name: Bard Subclass
      description: You gain a Bard subclass of your choice. The College of Lore subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.
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
    - id: font-of-inspiration
      name: Font of Inspiration
      description: |-
        You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.

        In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.
  '7':
    - id: countercharm
      name: Countercharm
      description: You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.
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
    - id: magical-secrets
      name: Magical Secrets
      description: You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.
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
    - id: superior-inspiration
      name: Superior Inspiration
      description: When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Spell Recall is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: words-of-creation
      name: Words of Creation
      description: 'You have mastered two of the Words of Creation: the words of life and death. You therefore always have the *Power Word Heal* and *Power Word Kill* spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target.'
resources: []
starting_gold:
  fixed: 90
```
