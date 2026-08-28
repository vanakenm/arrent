---
archivist: true
entity_type: class
slug: srd-2024_class_rogue
name: Rogue
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.109Z'
---

```class
slug: srd-2024_class_rogue
name: Rogue
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d8
primary_abilities:
  - dex
saving_throws:
  - dex
  - int
proficiencies:
  armor:
    - light
  weapons:
    categories:
      - simple
      - martial
  tools:
    fixed:
      - Thieves' Tools
skill_choices:
  count: 4
  from:
    - acrobatics
    - athletics
    - deception
    - insight
    - intimidation
    - investigation
    - perception
    - persuasion
    - sleight-of-hand
    - stealth
starting_equipment:
  - kind: choice
    options:
      - label: Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, and 8 GP
        grants:
          - item: leather-armor
          - item: dagger
            qty: 2
          - item: shortsword
          - item: shortbow
          - gold: 8
      - label: 100 GP
        grants:
          - gold: 100
spellcasting: null
subclass_level: 3
subclass_feature_name: Rogue Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - expertise
      - sneak-attack
      - thieves-cant
      - weapon-mastery
    columns:
      Sneak Attack: 1d6
  '2':
    prof_bonus: 2
    feature_ids:
      - cunning-action
    columns:
      Sneak Attack: 1d6
  '3':
    prof_bonus: 2
    feature_ids:
      - rogue-subclass
      - steady-aim
    columns:
      Sneak Attack: 2d6
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Sneak Attack: 2d6
  '5':
    prof_bonus: 3
    feature_ids:
      - cunning-strike
      - uncanny-dodge
    columns:
      Sneak Attack: 3d6
  '6':
    prof_bonus: 3
    feature_ids:
      - expertise
    columns:
      Sneak Attack: 3d6
  '7':
    prof_bonus: 3
    feature_ids:
      - evasion
      - reliable-talent
    columns:
      Sneak Attack: 4d6
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Sneak Attack: 4d6
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Sneak Attack: 5d6
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Sneak Attack: 5d6
  '11':
    prof_bonus: 4
    feature_ids:
      - improved-cunning-strike
    columns:
      Sneak Attack: 6d6
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Sneak Attack: 6d6
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Sneak Attack: 7d6
  '14':
    prof_bonus: 5
    feature_ids:
      - devious-strikes
    columns:
      Sneak Attack: 7d6
  '15':
    prof_bonus: 5
    feature_ids:
      - slippery-mind
    columns:
      Sneak Attack: 8d6
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Sneak Attack: 8d6
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Sneak Attack: 9d6
  '18':
    prof_bonus: 6
    feature_ids:
      - elusive
    columns:
      Sneak Attack: 9d6
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Sneak Attack: 10d6
  '20':
    prof_bonus: 6
    feature_ids:
      - stroke-of-luck
    columns:
      Sneak Attack: 10d6
features_by_level:
  '1':
    - id: expertise
      name: Expertise
      description: |-
        You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.

        At Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice.
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
    - id: sneak-attack
      name: Sneak Attack
      description: |-
        You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.

        You don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.

        The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.
    - id: thieves-cant
      name: Thieves' Cant
      description: You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables in "Character Creation."
      choices:
        - kind: select-proficiency
          id: languages
          count: 1
          domain: language
    - id: weapon-mastery
      name: Weapon Mastery
      description: |-
        Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Daggers and Shortbows.

        Whenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Shortswords.
      choices:
        - kind: select-entity
          id: weapon-mastery
          count: 2
          entity_type: weapon
  '2':
    - id: cunning-action
      name: Cunning Action
      description: 'Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide.'
  '3':
    - id: rogue-subclass
      name: Rogue Subclass
      description: You gain a Rogue subclass of your choice. The Thief subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: steady-aim
      name: Steady Aim
      description: As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn.
  '4':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 12, and 16.
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
    - id: cunning-strike
      name: Cunning Strike
      description: |-
        You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack's damage before rolling.

        If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.

        **Poison (Cost: 1d6).** You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.

        To use this effect, you must have a Poisoner's Kit on your person.

        **Trip (Cost: 1d6).** If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition.

        **Withdraw (Cost: 1d6).** Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks.
    - id: uncanny-dodge
      name: Uncanny Dodge
      description: When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack's damage against you (round down).
  '6':
    - id: expertise
      name: Expertise
      description: |-
        You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.

        At Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice.
      choices:
        - kind: select-proficiency
          id: expertise
          count: 2
          domain: skill
          from_proficient: true
          expertise: true
  '7':
    - id: evasion
      name: Evasion
      description: You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the Incapacitated condition.
    - id: reliable-talent
      name: Reliable Talent
      description: Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 12, and 16.
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
    - id: improved-cunning-strike
      name: Improved Cunning Strike
      description: You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 12, and 16.
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
    - id: devious-strikes
      name: Devious Strikes
      description: |-
        You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.

        **Daze (Cost: 2d6).** The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action.

        **Knock Out (Cost: 6d6).** The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at the end of each of its turns, ending the effect on itself on a success.

        **Obscure (Cost: 3d6).** The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn.
  '15':
    - id: slippery-mind
      name: Slippery Mind
      description: Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 12, and 16.
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
    - id: elusive
      name: Elusive
      description: You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of the Night Spirit is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: stroke-of-luck
      name: Stroke of Luck
      description: |-
        You have a marvelous knack for succeeding when you need to. If you fail a D20 Test, you can turn the roll into a 20.

        Once you use this feature, you can't use it again until you finish a Short or Long Rest.
resources: []
starting_gold:
  fixed: 100
```
