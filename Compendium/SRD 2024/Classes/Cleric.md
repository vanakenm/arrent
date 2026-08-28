---
archivist: true
entity_type: class
slug: srd-2024_class_cleric
name: Cleric
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.104Z'
---

```class
slug: srd-2024_class_cleric
name: Cleric
edition: '2024'
source: SRD 5.2
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
      - label: Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack, and 7 GP
        grants:
          - item: chain-shirt
          - item: shield
          - item: mace
          - gold: 7
      - label: 110 GP
        grants:
          - gold: 110
spellcasting:
  caster_type: full
  ability: wis
  preparation: prepared
  spell_list: cleric
subclass_level: 3
subclass_feature_name: Cleric Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - divine-order
      - spellcasting
    columns:
      Cantrips: '3'
      Prepared Spells: '4'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - channel-divinity
    columns:
      Cantrips: '3'
      Channel Divinity: '2'
      Prepared Spells: '5'
      1st: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - cleric-subclasses
    columns:
      Cantrips: '3'
      Channel Divinity: '2'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Channel Divinity: '2'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - sear-undead
    columns:
      Cantrips: '4'
      Channel Divinity: '2'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '4'
      Channel Divinity: '3'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '7':
    prof_bonus: 3
    feature_ids:
      - blessed-strikes
    columns:
      Cantrips: '4'
      Channel Divinity: '3'
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
      Channel Divinity: '3'
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
      Channel Divinity: '3'
      Prepared Spells: '14'
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
      Cantrips: '5'
      Channel Divinity: '3'
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
      Channel Divinity: '3'
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
      Channel Divinity: '3'
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
      Channel Divinity: '3'
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
    feature_ids:
      - improved-blessed-strikes
    columns:
      Cantrips: '5'
      Channel Divinity: '3'
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
      Cantrips: '5'
      Channel Divinity: '3'
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
      Cantrips: '5'
      Channel Divinity: '3'
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
      Cantrips: '5'
      Channel Divinity: '3'
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
    feature_ids: []
    columns:
      Cantrips: '5'
      Channel Divinity: '4'
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
      Cantrips: '5'
      Channel Divinity: '4'
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
      - greater-divine-intervention
    columns:
      Cantrips: '5'
      Channel Divinity: '4'
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
    - id: divine-order
      name: Divine Order
      description: |-
        You have dedicated yourself to one of the following sacred roles of your choice.

        **Protector.** Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.

        **Thaumaturge.** You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1).
      choices:
        - kind: select-inline
          id: divine-order
          count: 1
          options:
            - value: protector
              label: Protector
              description: Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.
            - value: thaumaturge
              label: Thaumaturge
              description: You know one extra cantrip from the Cleric spell list, and gain a bonus to Intelligence (Arcana or Religion) checks equal to your Wisdom modifier (minimum +1).
    - id: spellcasting
      name: Spellcasting
      description: |-
        You have learned to cast spells through prayer and meditation. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list later in the class's description.

        **Cantrips.** You know three cantrips of your choice from the Cleric spell list. *Guidance*, *Sacred Flame*, and *Thaumaturgy* are recommended.

        Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.

        When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.

        **Spell Slots.** The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. *Bless*, *Cure Wounds*, *Guiding Bolt*, and *Shield of Faith* are recommended.

        The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

        If another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.

        **Changing Your Prepared Spells.** Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.

        **Spellcasting Ability.** Wisdom is your spellcasting ability for your Cleric spells.

        **Spellcasting Focus.** You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells.
  '2':
    - id: channel-divinity
      name: Channel Divinity
      description: |-
        You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.

        You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.

        If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

        **Divine Spark.** As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).

        You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8).

        **Turn Undead.** As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die.
      action: action
      resources:
        - id: channel-divinity
          name: Channel Divinity
          max_formula: '2'
          reset: short-rest
  '3':
    - id: cleric-subclasses
      name: Cleric Subclasses
      description: You gain a Cleric subclass of your choice. The Life Domain subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.
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
    - id: sear-undead
      name: Sear Undead
      description: Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.
  '7':
    - id: blessed-strikes
      name: Blessed Strikes
      description: |-
        Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).

        **Divine Strike.** Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).

        **Potent Spellcasting.** Add your Wisdom modifier to the damage you deal with any Cleric cantrip.
      choices:
        - kind: select-inline
          id: blessed-strikes
          count: 1
          options:
            - value: divine-strike
              label: Divine Strike
              description: Once on each of your turns when you hit with a weapon, deal an extra 1d8 Necrotic or Radiant damage (your choice).
            - value: potent-spellcasting
              label: Potent Spellcasting
              description: Add your Wisdom modifier to the damage you deal with any Cleric cantrip.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.
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
    - id: divine-intervention
      name: Divine Intervention
      description: You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn't require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a Long Rest.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.
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
  '14':
    - id: improved-blessed-strikes
      name: Improved Blessed Strikes
      description: |-
        The option you chose for Blessed Strikes grows more powerful.

        **Divine Strike.** The extra damage of your Divine Strike increases to 2d8.

        **Potent Spellcasting.** When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.
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
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Fate is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: greater-divine-intervention
      name: Greater Divine Intervention
      description: You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose *Wish* when you select a spell. If you do so, you can't use Divine Intervention again until you finish 2d4 Long Rests.
resources: []
starting_gold:
  fixed: 110
```
