---
archivist: true
entity_type: class
slug: srd-2024_class_wizard
name: Wizard
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.111Z'
---

```class
slug: srd-2024_class_wizard
name: Wizard
edition: '2024'
source: SRD 5.2
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
    categories:
      - simple
skill_choices:
  count: 2
  from:
    - arcana
    - history
    - insight
    - investigation
    - medicine
    - nature
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: 2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack, and 5 GP
        grants:
          - item: dagger
            qty: 2
          - item: quarterstaff
          - gold: 5
      - label: 55 GP
        grants:
          - gold: 55
spellcasting:
  caster_type: full
  ability: int
  preparation: prepared
  spell_list: wizard
subclass_level: 3
subclass_feature_name: Wizard Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - arcane-recovery
      - ritual-adept
      - spellcasting
    columns:
      Cantrips: '3'
      Prepared Spells: '4'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - scholar
    columns:
      Cantrips: '3'
      Prepared Spells: '5'
      1st: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - wizard-subclass
    columns:
      Cantrips: '3'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - memorize-spell
    columns:
      Cantrips: '4'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '4'
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
      Cantrips: '4'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '5'
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
      Cantrips: '5'
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
      Cantrips: '5'
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
      Cantrips: '5'
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
      Cantrips: '5'
      Prepared Spells: '18'
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
      Cantrips: '5'
      Prepared Spells: '19'
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
      Cantrips: '5'
      Prepared Spells: '21'
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
      Cantrips: '5'
      Prepared Spells: '22'
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
      Cantrips: '5'
      Prepared Spells: '23'
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
      Cantrips: '5'
      Prepared Spells: '24'
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
      Cantrips: '5'
      Prepared Spells: '25'
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
      description: |-
        You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher. For example, if you're a level 4 Wizard, you can recover up to two levels' worth of spell slots, regaining either one level 2 spell slot or two level 1 spell slots.

        Once you use this feature, you can't do so again until you finish a Long Rest.
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
    - id: ritual-adept
      name: Ritual Adept
      description: You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way.
    - id: spellcasting
      name: Spellcasting
      description: |-
        As a student of arcane magic, you have learned to cast spells. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Wizard spells, which appear in the Wizard spell list later in the class's description.

        **Cantrips.** You know three Wizard cantrips of your choice. *Light*, *Mage Hand*, and *Ray of Frost* are recommended. Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Wizard cantrip of your choice.

        When you reach Wizard levels 4 and 10, you learn another Wizard cantrip of your choice, as shown in the Cantrips column of the Wizard Features table.

        **Spellbook.** Your wizardly apprenticeship culminated in the creation of a unique book: your spellbook. It is a Tiny object that weighs 3 pounds, contains 100 pages, and can be read only by you or someone casting *Identify*. You determine the book's appearance and materials, such as a gilt-edged tome or a collection of vellum bound with twine.

        The book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. *Detect Magic*, *Feather Fall*, *Mage Armor*, *Magic Missile*, *Sleep*, and *Thunderwave* are recommended.

        Whenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown in the Wizard Features table. The spells are the culmination of arcane research you do regularly.

        **Spell Slots.** The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To do so, choose four spells from your spellbook. The chosen spells must be of a level for which you have spell slots.

        The number of spells on your list increases as you gain Wizard levels, as shown in the Prepared Spells column of the Wizard Features table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Wizard, your list of prepared spells can include six spells of levels 1 and 2 in any combination, chosen from your spellbook.

        If another Wizard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Wizard spells for you.

        **Changing Your Prepared Spells.** Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.

        **Spellcasting Ability.** Intelligence is your spellcasting ability for your Wizard spells.

        **Spellcasting Focus.** You can use an Arcane Focus or your spellbook as a Spellcasting Focus for your Wizard spells.

        > ### Expanding and Replacing a Spellbook

        > The spells you add to your spellbook as you gain levels reflect your ongoing magical research, but you might find other spells during your adventures that you can add to the book. You could discover a Wizard spell on a *Spell Scroll*, for example, and then copy it into your spellbook.

        >**Copying a Spell into the Book.** When you find a level 1+ Wizard spell, you can copy it into your spellbook if it's of a level you can prepare and if you have time to copy it. For each level of the spell, the transcription takes 2 hours and costs 50 GP. Afterward you can prepare the spell like the other spells in your spellbook.

        > **Copying the Book.** You can copy a spell from your spellbook into another book. This is like copying a new spell into your spellbook but faster, since you already know how to cast the spell. You need spend only 1 hour and 10 GP for each level of the copied spell.

        > If you lose your spellbook, you can use the same procedure to transcribe the Wizard spells that you have prepared into a new spellbook. Filling out the remainder of the new book requires you to find new spells to do so. For this reason, many wizards keep a backup spellbook.
  '2':
    - id: scholar
      name: Scholar
      description: 'While studying magic, you also specialized in another field of study. Choose one of the following skills in which you have proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You have Expertise in the chosen skill.'
      choices:
        - kind: select-proficiency
          id: expertise
          count: 1
          domain: skill
          from:
            - arcana
            - history
            - investigation
            - medicine
            - nature
            - religion
          from_proficient: true
          expertise: true
  '3':
    - id: wizard-subclass
      name: Wizard Subclass
      description: You gain a Wizard subclass of your choice. The Evoker subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Wizard levels. For the rest of your career, you gain each of your subclass's features that are of your Wizard level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16.
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
    - id: memorize-spell
      name: Memorize Spell
      description: Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared for your Spellcasting feature with another level 1+ spell from the book.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16.
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
      description: |-
        You have achieved such mastery over certain spells that you can cast them at will. Choose a level 1 and a level 2 spell in your spellbook that have a casting time of an action. You always have those spells prepared, and you can cast them at their lowest level without expending a spell slot. To cast either spell at a higher level, you must expend a spell slot.

        Whenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level from the book.
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
    - id: signature-spells
      name: Signature Spells
      description: Choose two level 3 spells in your spellbook as your signature spells. You always have these spells prepared, and you can cast each of them once at level 3 without expending a spell slot. When you do so, you can't cast them in this way again until you finish a Short or Long Rest. To cast either spell at a higher level, you must expend a spell slot.
resources: []
starting_gold:
  fixed: 55
```
