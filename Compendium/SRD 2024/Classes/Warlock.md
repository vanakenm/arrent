---
archivist: true
entity_type: class
slug: srd-2024_class_warlock
name: Warlock
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.110Z'
---

```class
slug: srd-2024_class_warlock
name: Warlock
edition: '2024'
source: SRD 5.2
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
      - label: Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar's Pack, and 15 GP
        grants:
          - item: leather-armor
          - item: sickle
          - item: dagger
            qty: 2
          - gold: 15
      - label: 100 GP
        grants:
          - gold: 100
spellcasting:
  caster_type: pact
  ability: cha
  preparation: known
  spell_list: warlock
subclass_level: 3
subclass_feature_name: Warlock Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - eldritch-invocations
      - pact-magic
    columns:
      Cantrips: '2'
      Eldritch Invocations: '1'
      Prepared Spells: '2'
      Slot Level: 1st
      Spell Slots: '1'
  '2':
    prof_bonus: 2
    feature_ids:
      - magic-cunning
    columns:
      Cantrips: '2'
      Eldritch Invocations: '3'
      Prepared Spells: '3'
      Slot Level: 1st
      Spell Slots: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - warlock-subclass
    columns:
      Cantrips: '2'
      Eldritch Invocations: '3'
      Prepared Spells: '4'
      Slot Level: 2nd
      Spell Slots: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '3'
      Eldritch Invocations: '3'
      Prepared Spells: '5'
      Slot Level: 2nd
      Spell Slots: '2'
  '5':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '3'
      Eldritch Invocations: '5'
      Prepared Spells: '6'
      Slot Level: 3rd
      Spell Slots: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '3'
      Eldritch Invocations: '5'
      Prepared Spells: '7'
      Slot Level: 3rd
      Spell Slots: '2'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '3'
      Eldritch Invocations: '6'
      Prepared Spells: '8'
      Slot Level: 4th
      Spell Slots: '2'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '3'
      Eldritch Invocations: '6'
      Prepared Spells: '9'
      Slot Level: 4th
      Spell Slots: '2'
  '9':
    prof_bonus: 4
    feature_ids:
      - contact-patron
    columns:
      Cantrips: '3'
      Eldritch Invocations: '7'
      Prepared Spells: '10'
      Slot Level: 5th
      Spell Slots: '2'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '4'
      Eldritch Invocations: '7'
      Prepared Spells: '10'
      Slot Level: 5th
      Spell Slots: '2'
  '11':
    prof_bonus: 4
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips: '4'
      Eldritch Invocations: '7'
      Prepared Spells: '11'
      Slot Level: 5th
      Spell Slots: '3'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Eldritch Invocations: '8'
      Prepared Spells: '11'
      Slot Level: 5th
      Spell Slots: '3'
  '13':
    prof_bonus: 5
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips: '4'
      Eldritch Invocations: '8'
      Prepared Spells: '12'
      Slot Level: 5th
      Spell Slots: '3'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '4'
      Eldritch Invocations: '8'
      Prepared Spells: '12'
      Slot Level: 5th
      Spell Slots: '3'
  '15':
    prof_bonus: 5
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips: '4'
      Eldritch Invocations: '9'
      Prepared Spells: '13'
      Slot Level: 5th
      Spell Slots: '3'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Eldritch Invocations: '9'
      Prepared Spells: '13'
      Slot Level: 5th
      Spell Slots: '3'
  '17':
    prof_bonus: 6
    feature_ids:
      - mystic-arcanum
    columns:
      Cantrips: '4'
      Eldritch Invocations: '9'
      Prepared Spells: '14'
      Slot Level: 5th
      Spell Slots: '4'
  '18':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips: '4'
      Eldritch Invocations: '10'
      Prepared Spells: '14'
      Slot Level: 5th
      Spell Slots: '4'
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Cantrips: '4'
      Eldritch Invocations: '10'
      Prepared Spells: '15'
      Slot Level: 5th
      Spell Slots: '4'
  '20':
    prof_bonus: 6
    feature_ids:
      - eldritch-master
    columns:
      Cantrips: '4'
      Eldritch Invocations: '10'
      Prepared Spells: '15'
      Slot Level: 5th
      Spell Slots: '4'
features_by_level:
  '1':
    - id: eldritch-invocations
      name: Eldritch Invocations
      description: |-
        You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the "Eldritch Invocation Options" section later in this class's description.

        **Prerequisites.** If an invocation has a prerequisite, you must meet it to learn that invocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once you reach Warlock level 5.

        **Replacing and Gaining Invocations.** Whenever you gain a Warlock level, you can replace one of your invocations with another one for which you qualify. You can't replace an invocation if it's a prerequisite for another invocation that you have.

        When you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of the Warlock Features table.

        You can't pick the same invocation more than once unless its description says otherwise.
      choices:
        - kind: select-entity
          id: invocation
          count: 1
          entity_type: optional-feature
          where:
            feature_type: invocation
            available_to: self
    - id: pact-magic
      name: Pact Magic
      description: |-
        Through occult ceremony, you have formed a pact with a mysterious entity to gain magical powers. The entity is a voice in the shadows—its identity unclear—but its boon to you is concrete: the ability to cast spells. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Warlock spells, which appear in the Warlock spell list later in the class's description.

        **Cantrips.** You know two Warlock cantrips of your choice. *Eldritch Blast* and *Prestidigitation* are recommended. Whenever you gain a Warlock level, you can replace one of your cantrips from this feature with another Warlock cantrip of your choice.

        When you reach Warlock levels 4 and 10, you learn another Warlock cantrip of your choice, as shown in the Cantrips column of the Warlock Features table.

        **Spell Slots.** The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1–5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a Short or Long Rest.

        For example, when you're a level 5 Warlock, you have two level 3 spell slots. To cast the level 1 spell *Charm Person*, you must spend one of those slots, and you cast it as a level 3 spell.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Warlock spells. *Charm Person* and *Hex* are recommended.

        The number of spells on your list increases as you gain Warlock levels, as shown in the Prepared Spells column of the Warlock Features table. Whenever that number increases, choose additional Warlock spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach level 6, for example, you learn a new Warlock spell, which can be of levels 1–3.

        If another Warlock feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Warlock spells for you.

        **Changing Your Prepared Spells.** Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level.

        **Spellcasting Ability.** Charisma is the spellcasting ability for your Warlock spells.

        **Spellcasting Focus.** You can use an Arcane Focus as a Spellcasting Focus for your Warlock spells.
  '2':
    - id: magic-cunning
      name: Magic Cunning
      description: You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no more than a number equal to half your maximum (round up). Once you use this feature, you can't do so again until you finish a Long Rest.
      action: special
      resources:
        - id: warlock:magic-cunning
          name: Magical Cunning
          max_formula: '1'
          reset: long-rest
  '3':
    - id: warlock-subclass
      name: Warlock Subclass
      description: You gain a Warlock subclass of your choice. The Fiend Patron subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Warlock levels. For the rest of your career, you gain each of your subclass's features that are of your Warlock level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.
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
    - id: contact-patron
      name: Contact Patron
      description: |-
        In the past, you usually contacted your patron through intermediaries. Now you can communicate directly; you always have the *Contact Other Plane* spell prepared. With this feature, you can cast the spell without expending a spell slot to contact your patron, and you automatically succeed on the spell's saving throw.

        Once you cast the spell with this feature, you can't do so in this way again until you finish a Long Rest.
  '11':
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: |-
        Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.

        You can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.

        As shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.

        Whenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.
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
      description: |-
        Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.

        You can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.

        As shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.

        Whenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level.
  '15':
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: |-
        Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.

        You can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.

        As shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.

        Whenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16.
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
    - id: mystic-arcanum
      name: Mystic Arcanum
      description: |-
        Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.

        You can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.

        As shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.

        Whenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Fate is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: eldritch-master
      name: Eldritch Master
      description: When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots.
resources: []
starting_gold:
  fixed: 100
```
