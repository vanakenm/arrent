---
archivist: true
entity_type: class
slug: srd-2024_class_barbarian
name: Barbarian
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.102Z'
---

```class
slug: srd-2024_class_barbarian
name: Barbarian
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d12
primary_abilities:
  - str
saving_throws:
  - con
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
  count: 2
  from:
    - animal-handling
    - athletics
    - intimidation
    - nature
    - perception
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Greataxe, 4 Handaxes, Explorer's Pack, and 15 GP
        grants:
          - item: greataxe
          - item: handaxe
            qty: 4
          - gold: 15
      - label: 75 GP
        grants:
          - gold: 75
spellcasting: null
subclass_level: 3
subclass_feature_name: Barbarian Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - rage
      - unarmored-defense
      - weapon-mastery
    columns:
      Rage Damage: '+2'
      Rages: '2'
      Weapon Mastery: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - danger-sense
      - reckless-attack
    columns:
      Rage Damage: '+2'
      Rages: '2'
      Weapon Mastery: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - barbarian-subclass
      - primal-knowledge
    columns:
      Rage Damage: '+2'
      Rages: '3'
      Weapon Mastery: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+2'
      Rages: '3'
      Weapon Mastery: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - fast-movement
    columns:
      Rage Damage: '+2'
      Rages: '3'
      Weapon Mastery: '3'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Rage Damage: '+2'
      Rages: '4'
      Weapon Mastery: '3'
  '7':
    prof_bonus: 3
    feature_ids:
      - feral-instinct
      - instinctive-pounce
    columns:
      Rage Damage: '+2'
      Rages: '4'
      Weapon Mastery: '3'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+2'
      Rages: '4'
      Weapon Mastery: '3'
  '9':
    prof_bonus: 4
    feature_ids:
      - brutal-strike
    columns:
      Rage Damage: '+3'
      Rages: '4'
      Weapon Mastery: '3'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Rage Damage: '+3'
      Rages: '4'
      Weapon Mastery: '4'
  '11':
    prof_bonus: 4
    feature_ids:
      - relentless-rage
    columns:
      Rage Damage: '+3'
      Rages: '4'
      Weapon Mastery: '4'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+3'
      Rages: '5'
      Weapon Mastery: '4'
  '13':
    prof_bonus: 5
    feature_ids:
      - improved-brutal-strike
    columns:
      Rage Damage: '+3'
      Rages: '5'
      Weapon Mastery: '4'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Rage Damage: '+3'
      Rages: '5'
      Weapon Mastery: '4'
  '15':
    prof_bonus: 5
    feature_ids:
      - persistent-rage
    columns:
      Rage Damage: '+3'
      Rages: '5'
      Weapon Mastery: '4'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Rage Damage: '+4'
      Rages: '5'
      Weapon Mastery: '4'
  '17':
    prof_bonus: 6
    feature_ids:
      - improved-brutal-strike-enhanced
    columns:
      Rage Damage: '+4'
      Rages: '6'
      Weapon Mastery: '4'
  '18':
    prof_bonus: 6
    feature_ids:
      - indomitable-might
    columns:
      Rage Damage: '+4'
      Rages: '6'
      Weapon Mastery: '4'
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Rage Damage: '+4'
      Rages: '6'
      Weapon Mastery: '4'
  '20':
    prof_bonus: 6
    feature_ids:
      - primal-champion
    columns:
      Rage Damage: '+4'
      Rages: '6'
      Weapon Mastery: '4'
features_by_level:
  '1':
    - id: rage
      name: Rage
      description: |-
        You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor.

        You can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.

        While active, your Rage follows the rules below. *Damage Resistance.* You have Resistance to Bludgeoning, Piercing, and Slashing damage.

        **Rage Damage.** When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.

        **Strength Advantage.** You have Advantage on Strength checks and Strength saving throws.

        **No Concentration or Spells.** You can't maintain Concentration, and you can't cast spells.

        **Duration.** The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:
        - Make an attack roll against an enemy.
        - Force an enemy to make a saving throw.
        - Take a Bonus Action to extend your Rage.

        Each time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes.
      action: bonus-action
      resources:
        - id: barbarian:rage
          name: Rage
          max_formula: '2'
          scales_at:
            - level: 3
              max: '3'
            - level: 6
              max: '4'
            - level: 12
              max: '5'
            - level: 17
              max: '6'
          reset: long-rest
    - id: unarmored-defense
      name: Unarmored Defense
      description: While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.
    - id: weapon-mastery
      name: Weapon Mastery
      description: |-
        Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.

        When you reach certain Barbarian levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Barbarian Features table.
      choices:
        - kind: select-entity
          id: weapon-mastery
          count: 2
          entity_type: weapon
  '2':
    - id: danger-sense
      name: Danger Sense
      description: You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.
    - id: reckless-attack
      name: Reckless Attack
      description: You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.
  '3':
    - id: barbarian-subclass
      name: Barbarian Subclass
      description: You gain a Barbarian subclass of your choice. The Path of the Berserker subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass's features that are of your Barbarian level or lower.
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: primal-knowledge
      name: Primal Knowledge
      description: |-
        You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.

        In addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses.
      choices:
        - kind: select-proficiency
          id: skill
          count: 1
          domain: skill
          from:
            - animal-handling
            - athletics
            - intimidation
            - nature
            - perception
            - survival
  '4':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.
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
    - id: fast-movement
      name: Fast Movement
      description: Your speed increases by 10 feet while you aren't wearing Heavy armor.
  '7':
    - id: feral-instinct
      name: Feral Instinct
      description: Your instincts are so honed that you have Advantage on Initiative rolls.
    - id: instinctive-pounce
      name: Instinctive Pounce
      description: As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.
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
    - id: brutal-strike
      name: Brutal Strike
      description: |-
        If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options.

        **Forceful Blow.** The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attacks.

        **Hamstring Blow.** The target's Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time the most recent one.
  '11':
    - id: relentless-rage
      name: Relentless Rage
      description: |-
        Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level.

        Each time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC resets to 10.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.
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
    - id: improved-brutal-strike
      name: Improved Brutal Strike
      description: |-
        You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.

        **Staggering Blow.** The target has Disadvantage on the next saving throw it makes, and it can't make Opportunity Attacks until the start of your next turn.

        **Sundering Blow.** Before the start of your next turn, the next attack roll made by another creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow bonus.
  '15':
    - id: persistent-rage
      name: Persistent Rage
      description: |-
        When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can't do so again until you finish a Long Rest.

        In addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor.
      action: special
      resources:
        - id: barbarian:persistent-rage
          name: Persistent Rage
          max_formula: '1'
          reset: long-rest
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.
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
    - id: improved-brutal-strike-enhanced
      name: Improved Brutal Strike (Enhanced)
      description: The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature.
  '18':
    - id: indomitable-might
      name: Indomitable Might
      description: If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: primal-champion
      name: Primal Champion
      description: You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25.
resources: []
starting_gold:
  fixed: 75
```
