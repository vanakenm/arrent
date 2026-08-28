---
archivist: true
entity_type: class
slug: srd-2024_class_fighter
name: Fighter
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.106Z'
---

```class
slug: srd-2024_class_fighter
name: Fighter
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d10
primary_abilities:
  - str
  - dex
saving_throws:
  - dex
  - str
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
    - acrobatics
    - animal-handling
    - athletics
    - history
    - insight
    - intimidation
    - persuasion
    - perception
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4 GP
        grants:
          - item: chain-mail
          - item: greatsword
          - item: flail
          - item: javelin
            qty: 8
          - gold: 4
      - label: Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack, and 11 GP
        grants:
          - item: studded-leather-armor
          - item: scimitar
          - item: shortsword
          - item: longbow
          - gold: 11
      - label: 155 GP
        grants:
          - gold: 155
spellcasting: null
subclass_level: 3
subclass_feature_name: Fighter Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - fighting-style
      - second-wind
      - weapon-mastery
    columns:
      Second Wind: '2'
      Weapon Mastery: '3'
  '2':
    prof_bonus: 2
    feature_ids:
      - action-surge
      - tactical-mind
    columns:
      Second Wind: '2'
      Weapon Mastery: '3'
  '3':
    prof_bonus: 2
    feature_ids:
      - fighter-subclass
    columns:
      Second Wind: '2'
      Weapon Mastery: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - tactical-shift
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '6':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '9':
    prof_bonus: 4
    feature_ids:
      - indomitable
      - tactical-master
    columns:
      Second Wind: '3'
      Weapon Mastery: '4'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '11':
    prof_bonus: 4
    feature_ids:
      - two-extra-attacks
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '13':
    prof_bonus: 5
    feature_ids:
      - indomitable
      - studdied-attacks
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '14':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      Second Wind: '4'
      Weapon Mastery: '5'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Second Wind: '4'
      Weapon Mastery: '6'
  '17':
    prof_bonus: 6
    feature_ids:
      - action-surge
      - indomitable
    columns:
      Second Wind: '4'
      Weapon Mastery: '6'
  '18':
    prof_bonus: 6
    feature_ids: []
    columns:
      Second Wind: '4'
      Weapon Mastery: '6'
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Second Wind: '4'
      Weapon Mastery: '6'
  '20':
    prof_bonus: 6
    feature_ids:
      - three-extra-attacks
    columns:
      Second Wind: '4'
      Weapon Mastery: '6'
features_by_level:
  '1':
    - id: fighting-style
      name: Fighting Style
      description: |-
        You have honed your martial prowess and gain a Fighting Style feat of your choice (see "Feats"). Defense is recommended.

        Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
    - id: second-wind
      name: Second Wind
      description: |-
        You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.

        You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.

        When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table.
      action: bonus-action
      resources:
        - id: fighter:second-wind
          name: Second Wind
          max_formula: '2'
          scales_at:
            - level: 10
              max: '3'
            - level: 17
              max: '4'
          reset: short-rest
    - id: weapon-mastery
      name: Weapon Mastery
      description: |-
        Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.

        When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table.
      choices:
        - kind: select-entity
          id: weapon-mastery
          count: 3
          entity_type: weapon
  '2':
    - id: action-surge
      name: Action Surge
      description: |-
        You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.

        Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.
      action: special
      resources:
        - id: fighter:action-surge
          name: Action Surge
          max_formula: '1'
          scales_at:
            - level: 17
              max: '2'
          reset: short-rest
    - id: tactical-mind
      name: Tactical Mind
      description: You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.
  '3':
    - id: fighter-subclass
      name: Fighter Subclass
      description: You gain a Fighter subclass of your choice. The Champion subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
    - id: tactical-shift
      name: Tactical Shift
      description: Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.
  '6':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
    - id: indomitable
      name: Indomitable
      description: If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
    - id: tactical-master
      name: Tactical Master
      description: When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack.
  '11':
    - id: two-extra-attacks
      name: Two Extra Attacks
      description: You can attack three times instead of once whenever you take the Attack action on your turn.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
    - id: indomitable
      name: Indomitable
      description: If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
    - id: studdied-attacks
      name: Studdied Attacks
      description: You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn.
  '14':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.
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
    - id: action-surge
      name: Action Surge
      description: |-
        You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.

        Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.
      action: special
      resources:
        - id: fighter:action-surge
          name: Action Surge
          max_formula: '1'
          scales_at:
            - level: 17
              max: '2'
          reset: short-rest
    - id: indomitable
      name: Indomitable
      description: If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: three-extra-attacks
      name: Three Extra Attacks
      description: You can attack four times instead of once whenever you take the Attack action on your turn.
resources: []
starting_gold:
  fixed: 155
```
