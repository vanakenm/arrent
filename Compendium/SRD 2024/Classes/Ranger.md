---
archivist: true
entity_type: class
slug: srd-2024_class_ranger
name: Ranger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.108Z'
---

```class
slug: srd-2024_class_ranger
name: Ranger
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d10
primary_abilities:
  - dex
  - wis
saving_throws:
  - dex
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
  count: 3
  from:
    - animal-handling
    - athletics
    - insight
    - investigation
    - nature
    - perception
    - stealth
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer's Pack, and 7 GP
        grants:
          - item: studded-leather-armor
          - item: scimitar
          - item: shortsword
          - item: longbow
          - gold: 7
      - label: 150 GP
        grants:
          - gold: 150
spellcasting:
  caster_type: half
  ability: wis
  preparation: prepared
  spell_list: ranger
subclass_level: 3
subclass_feature_name: Ranger Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - favored-enemy
      - spellcasting
      - weapon-mastery
    columns:
      Favored Enemy: '2'
      Prepared Spells: '2'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - deft-explorer
      - fighting-style
    columns:
      Favored Enemy: '2'
      Prepared Spells: '3'
      1st: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - ranger-subclass
    columns:
      Favored Enemy: '2'
      Prepared Spells: '4'
      1st: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Favored Enemy: '2'
      Prepared Spells: '5'
      1st: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
    columns:
      Favored Enemy: '3'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '6':
    prof_bonus: 3
    feature_ids:
      - roving
    columns:
      Favored Enemy: '3'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Favored Enemy: '3'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Favored Enemy: '3'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
  '9':
    prof_bonus: 4
    feature_ids:
      - expertise
    columns:
      Favored Enemy: '4'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '10':
    prof_bonus: 4
    feature_ids:
      - tireless
    columns:
      Favored Enemy: '4'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Favored Enemy: '4'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Favored Enemy: '4'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
  '13':
    prof_bonus: 5
    feature_ids:
      - relentless-hunter
    columns:
      Favored Enemy: '5'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '14':
    prof_bonus: 5
    feature_ids:
      - natures-veil
    columns:
      Favored Enemy: '5'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Favored Enemy: '5'
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
      Favored Enemy: '5'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
  '17':
    prof_bonus: 6
    feature_ids:
      - precise-hunter
    columns:
      Favored Enemy: '6'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
  '18':
    prof_bonus: 6
    feature_ids:
      - feral-senses
    columns:
      Favored Enemy: '6'
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
      Favored Enemy: '6'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
  '20':
    prof_bonus: 6
    feature_ids:
      - foe-slayer
    columns:
      Favored Enemy: '6'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
features_by_level:
  '1':
    - id: favored-enemy
      name: Favored Enemy
      description: |-
        You always have the *Hunter's Mark* spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.

        The number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels, as shown in the Favored Enemy column of the Ranger Features table.
      resources:
        - id: ranger:favored-enemy
          name: Favored Enemy
          max_formula: '2'
          scales_at:
            - level: 5
              max: '3'
            - level: 9
              max: '4'
            - level: 13
              max: '5'
            - level: 17
              max: '6'
          reset: long-rest
    - id: spellcasting
      name: Spellcasting
      description: |-
        You have learned to channel the magical essence of nature to cast spells. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Ranger spells, which appear in the Ranger spell list later in the class's description.

        **Spell Slots.** The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+**. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Ranger spells. *Cure Wounds* and *Ensnaring Strike* are recommended.

        The number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the Ranger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on your list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Ranger, your list of prepared spells can include six Ranger spells of level 1 or 2 in any combination.

        If another Ranger feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.

        **Changing Your Prepared Spells.** Whenever you finish a Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.

        **Spellcasting Ability.** Wisdom is your spellcasting ability for your Ranger spells.

        **Spellcasting Focus.** You can use a Druidic Focus as a Spellcasting Focus for your Ranger spells.
    - id: weapon-mastery
      name: Weapon Mastery
      description: |-
        Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longbows and Shortswords.

        Whenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Longswords.
      choices:
        - kind: select-entity
          id: weapon-mastery
          count: 2
          entity_type: weapon
  '2':
    - id: deft-explorer
      name: Deft Explorer
      description: |-
        Thanks to your travels, you gain the following benefits.

        **Expertise.** Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill.

        **Languages.** You know two languages of your choice from the language tables in "Character Creation."
      choices:
        - kind: select-proficiency
          id: expertise
          count: 1
          domain: skill
          from_proficient: true
          expertise: true
        - kind: select-proficiency
          id: languages
          count: 2
          domain: language
    - id: fighting-style
      name: Fighting Style
      description: |-
        You gain a Fighting Style feat of your choice (see "Feats"). Instead of choosing one of those feats, you can choose the option below.

        **Druidic Warrior.** You learn two Druid cantrips of your choice (see the Druid class's section for a list of Druid spells). *Guidance* and *Starry Wisp* are recommended. The chosen cantrips count as Ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a Ranger level, you can replace one of these cantrips with another Druid cantrip.
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
  '3':
    - id: ranger-subclass
      name: Ranger Subclass
      description: You gain a Ranger subclass of your choice. The Hunter subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Ranger levels. For the rest of your career, you gain each of your subclass's features that are of your Ranger level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.
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
  '6':
    - id: roving
      name: Roving
      description: Your Speed increases by 10 feet while you aren't wearing Heavy armor. You also have a Climb Speed and a Swim Speed equal to your Speed.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.
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
    - id: expertise
      name: Expertise
      description: Choose two of your skill proficiencies with which you lack Expertise. You gain Expertise in those skills.
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
  '10':
    - id: tireless
      name: Tireless
      description: |-
        Primal forces now help fuel you on your journeys, granting you the following benefits.

        **Temporary Hit Points.** As a Magic action, you can give yourself a number of Temporary Hit Points equal to 1d8 plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

        **Decrease Exhaustion.** Whenever you finish a Short Rest, your Exhaustion level, if any, decreases by 1.
      action: action
      resources:
        - id: ranger:tireless
          name: Tireless
          max_formula: '{wis_mod}'
          reset: long-rest
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.
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
    - id: relentless-hunter
      name: Relentless Hunter
      description: Taking damage can't break your Concentration on *Hunter's Mark*.
  '14':
    - id: natures-veil
      name: Nature's Veil
      description: |-
        You invoke spirits of nature to magically hide yourself. As a Bonus Action, you can give yourself the Invisible condition until the end of your next turn.

        You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.
      action: bonus-action
      resources:
        - id: ranger:natures-veil
          name: Nature's Veil
          max_formula: '{wis_mod}'
          reset: long-rest
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16.
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
    - id: precise-hunter
      name: Precise Hunter
      description: You have Advantage on attack rolls against the creature currently marked by your *Hunter's Mark*.
  '18':
    - id: feral-senses
      name: Feral Senses
      description: Your connection to the forces of nature grants you Blindsight with a range of 30 feet.
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
    - id: foe-slayer
      name: Foe Slayer
      description: The damage die of your *Hunter's Mark* is a d10 rather than a d6.
resources: []
starting_gold:
  fixed: 150
```
