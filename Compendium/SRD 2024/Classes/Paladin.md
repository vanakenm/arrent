---
archivist: true
entity_type: class
slug: srd-2024_class_paladin
name: Paladin
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.107Z'
---

```class
slug: srd-2024_class_paladin
name: Paladin
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d10
primary_abilities:
  - str
  - cha
saving_throws:
  - cha
  - wis
proficiencies:
  armor:
    - light
    - medium
    - heavy
    - shield
  weapons:
    categories:
      - simple
      - martial
skill_choices:
  count: 2
  from:
    - athletics
    - insight
    - intimidation
    - medicine
    - persuasion
    - religion
starting_equipment:
  - kind: choice
    options:
      - label: Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest's Pack, and 9 GP
        grants:
          - item: chain-mail
          - item: shield
          - item: longsword
          - item: javelin
            qty: 6
          - gold: 9
      - label: 150 GP
        grants:
          - gold: 150
spellcasting:
  caster_type: half
  ability: cha
  preparation: prepared
  spell_list: paladin
subclass_level: 3
subclass_feature_name: Paladin Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - lay-on-hands
      - spellcasting
      - weapon-mastery
    columns:
      Prepared Spells: '2'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - fighting-style
      - paladins-smite
    columns:
      Prepared Spells: '3'
      1st: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - channel-divinity
      - paladin-subclass
    columns:
      Channel Divinity: '2'
      Prepared Spells: '4'
      1st: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Channel Divinity: '2'
      Prepared Spells: '5'
      1st: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - faithful-steed
    columns:
      Channel Divinity: '2'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '6':
    prof_bonus: 3
    feature_ids:
      - aura-of-protection
    columns:
      Channel Divinity: '2'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Channel Divinity: '2'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Channel Divinity: '2'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '9':
    prof_bonus: 4
    feature_ids:
      - abjure-foes
    columns:
      Channel Divinity: '2'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '10':
    prof_bonus: 4
    feature_ids:
      - aura-of-courage
    columns:
      Channel Divinity: '2'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '11':
    prof_bonus: 4
    feature_ids:
      - radiant-strikes
    columns:
      Channel Divinity: '3'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Channel Divinity: '3'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Channel Divinity: '3'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '14':
    prof_bonus: 5
    feature_ids:
      - restoring-touch
    columns:
      Channel Divinity: '3'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Channel Divinity: '3'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Channel Divinity: '3'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Channel Divinity: '3'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '18':
    prof_bonus: 6
    feature_ids:
      - aura-expansion
    columns:
      Channel Divinity: '3'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Channel Divinity: '3'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '20':
    prof_bonus: 6
    feature_ids: []
    columns:
      Channel Divinity: '3'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
features_by_level:
  '1':
    - id: lay-on-hands
      name: Lay On Hands
      description: |-
        Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level.

        As a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.

        You can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature.
    - id: spellcasting
      name: Spellcasting
      description: |-
        You have learned to cast spells through prayer and meditation. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Paladin spells, which appear in the Paladin spell list later in the class's description.

        **Spell Slots.** The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+**. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells. *Heroism* and *Searing Smite* are recommended.

        The number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.

        If another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.

        **Changing Your Prepared Spells.** Whenever you finish a Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.

        **Spellcasting Ability.** Charisma is your spellcasting ability for your Paladin spells.

        **Spellcasting Focus.** You can use a Holy Symbol as a Spellcasting Focus for your Paladin spells.
    - id: weapon-mastery
      name: Weapon Mastery
      description: |-
        Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longswords and Javelins.

        Whenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Halberds and Flails.
      choices:
        - kind: select-entity
          id: weapon-mastery
          count: 2
          entity_type: weapon
  '2':
    - id: fighting-style
      name: Fighting Style
      description: |-
        You gain a Fighting Style feat of your choice (see "Feats" for feats). Instead of choosing one of those feats, you can choose the option below.

        **Blessed Warrior.** You learn two Cleric cantrips of your choice (see the Cleric class's section for a list of Cleric spells). *Guidance* and *Sacred Flame* are recommended. The chosen cantrips count as Paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a Paladin level, you can replace one of these cantrips with another Cleric cantrip.
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
    - id: paladins-smite
      name: Paladin's Smite
      description: You always have the *Divine Smite* spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a Long Rest before you can cast it in this way again.
  '3':
    - id: channel-divinity
      name: Channel Divinity
      description: |-
        You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.

        You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11.

        If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

        **Divine Sense.** As a Bonus Action, you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the Incapacitated condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the *Hallow* spell.
      action: action
      resources:
        - id: channel-divinity
          name: Channel Divinity
          max_formula: '2'
          reset: short-rest
    - id: paladin-subclass
      name: Paladin Subclass
      description: You gain a Paladin subclass of your choice. The Oath of Devotion subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Paladin levels. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.
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
      description: You can attack twice instead of once whenever you take the Attack action on your turn.
    - id: faithful-steed
      name: Faithful Steed
      description: |-
        You can call on the aid of an otherworldly steed. You always have the *Find Steed* spell prepared.

        You can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a Long Rest.
  '6':
    - id: aura-of-protection
      name: Aura of Protection
      description: |-
        You radiate a protective, unseeable aura in a 10-foot Emanation that originates from you. The aura is inactive while you have the Incapacitated condition.

        You and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).

        If another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.
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
    - id: abjure-foes
      name: Abjure Foes
      description: 'As a Magic action, you can expend one use of this class''s Channel Divinity to overwhelm foes with awe. As you present your Holy Symbol or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes any damage. While Frightened in this way, a target can do only one of the following on its turns: move, take an action, or take a Bonus Action.'
  '10':
    - id: aura-of-courage
      name: Aura of Courage
      description: You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened ally enters the aura, that condition has no effect on that ally while there.
  '11':
    - id: radiant-strikes
      name: Radiant Strikes
      description: Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d8 Radiant damage.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.
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
    - id: restoring-touch
      name: Restoring Touch
      description: 'When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the healing pool of Lay On Hands for each of these conditions you remove; those points don''t also restore Hit Points to the creature.'
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16.
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
    - id: aura-expansion
      name: Aura Expansion
      description: Your Aura of Protection is now a 30-foot Emanation.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Truesight is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
resources: []
starting_gold:
  fixed: 150
```
