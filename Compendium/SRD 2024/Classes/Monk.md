---
archivist: true
entity_type: class
slug: srd-2024_class_monk
name: Monk
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.107Z'
---

```class
slug: srd-2024_class_monk
name: Monk
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d8
primary_abilities:
  - dex
  - wis
saving_throws:
  - dex
  - wis
proficiencies:
  armor: []
  weapons:
    categories:
      - simple
      - martial
  tools:
    fixed:
      - Choose one type of Artisan's Tools or Musical Instrument
skill_choices:
  count: 2
  from:
    - acrobatics
    - athletics
    - history
    - insight
    - religion
    - stealth
starting_equipment:
  - kind: choice
    options:
      - label: Spear, 5 Daggers, Artisan's Tools or Musical Instrument chosen for the tool proficiency, Explorer's Pack, and 11 GP
        grants:
          - item: spear
          - item: dagger
            qty: 5
          - gold: 11
      - label: 50 GP
        grants:
          - gold: 50
spellcasting: null
subclass_level: 3
subclass_feature_name: Monk Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - martial-arts
      - unarmored-defense
    columns:
      Martial Arts: 1d6
  '2':
    prof_bonus: 2
    feature_ids:
      - monks-focus
      - unarmoed-movement
      - uncanny-metabolism
    columns:
      Focus Points: '2'
      Martial Arts: 1d6
      Unarmoed Movement: +10 ft.
  '3':
    prof_bonus: 2
    feature_ids:
      - monk-subclass
      - stunning-strike
    columns:
      Focus Points: '3'
      Martial Arts: 1d6
      Unarmoed Movement: +10 ft.
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
      - slow-fall
    columns:
      Focus Points: '4'
      Martial Arts: 1d6
      Unarmoed Movement: +10 ft.
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
      - stunning-strike
    columns:
      Focus Points: '5'
      Martial Arts: 1d8
      Unarmoed Movement: +10 ft.
  '6':
    prof_bonus: 3
    feature_ids:
      - empowered-strikes
    columns:
      Focus Points: '6'
      Martial Arts: 1d8
      Unarmoed Movement: +15 ft.
  '7':
    prof_bonus: 3
    feature_ids:
      - evasion
    columns:
      Focus Points: '7'
      Martial Arts: 1d8
      Unarmoed Movement: +15 ft.
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Focus Points: '8'
      Martial Arts: 1d8
      Unarmoed Movement: +15 ft.
  '9':
    prof_bonus: 4
    feature_ids:
      - acrobatic-movement
    columns:
      Focus Points: '9'
      Martial Arts: 1d8
      Unarmoed Movement: +15 ft.
  '10':
    prof_bonus: 4
    feature_ids:
      - heightened-focus
      - self-restoration
    columns:
      Focus Points: '10'
      Martial Arts: 1d8
      Unarmoed Movement: +20 ft.
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Focus Points: '11'
      Martial Arts: 1d10
      Unarmoed Movement: +20 ft.
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Focus Points: '12'
      Martial Arts: 1d10
      Unarmoed Movement: +20 ft.
  '13':
    prof_bonus: 5
    feature_ids:
      - deflect-energy
    columns:
      Focus Points: '13'
      Martial Arts: 1d10
      Unarmoed Movement: +20 ft.
  '14':
    prof_bonus: 5
    feature_ids:
      - disciplined-survivor
    columns:
      Focus Points: '14'
      Martial Arts: 1d10
      Unarmoed Movement: +25 ft.
  '15':
    prof_bonus: 5
    feature_ids:
      - perfect-focus
    columns:
      Focus Points: '15'
      Martial Arts: 1d10
      Unarmoed Movement: +25 ft.
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Focus Points: '16'
      Martial Arts: 1d10
      Unarmoed Movement: +25 ft.
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Focus Points: '17'
      Martial Arts: 1d12
      Unarmoed Movement: +25 ft.
  '18':
    prof_bonus: 6
    feature_ids:
      - superior-defense
    columns:
      Focus Points: '18'
      Martial Arts: 1d12
      Unarmoed Movement: +30 ft.
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Focus Points: '19'
      Martial Arts: 1d12
      Unarmoed Movement: +30 ft.
  '20':
    prof_bonus: 6
    feature_ids:
      - body-and-mind
    columns:
      Focus Points: '20'
      Martial Arts: 1d12
      Unarmoed Movement: +30 ft.
features_by_level:
  '1':
    - id: martial-arts
      name: Martial Arts
      description: |-
        Your practice of martial arts gives you mastery of combat styles that use your Unarmed Strike and Monk weapons, which are the following:

        - Simple Melee weapons
        - Martial Melee weapons that have the Light property

        You gain the following benefits while you are unarmed or wielding only Monk weapons and you aren't wearing armor or wielding a Shield.

        **Bonus Unarmed Strike.** You can make an Unarmed Strike as a Bonus Action.

        **Martial Arts Die.** You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table.

        **Dexterous Attacks.** You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC.
    - id: unarmored-defense
      name: Unarmored Defense
      description: While you aren't wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers.
  '2':
    - id: monks-focus
      name: Monk's Focus
      description: |-
        Your focus and martial training allow you to harness a well of extraordinary energy within yourself. This energy is represented by Focus Points. Your Monk level determines the number of points you have, as shown in the Focus Points column of the Monk Features table.

        You can expend these points to enhance or fuel certain Monk features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind, each of which is detailed below.

        When you expend a Focus Point, it is unavailable until you finish a Short or Long Rest, at the end of which you regain all your expended points.

        Some features that use Focus Points require your target to make a saving throw. The save DC equals 8 plus your Wisdom modifier and Proficiency Bonus.

        **Flurry of Blows.** You can expend 1 Focus Point to make two Unarmed Strikes as a Bonus Action.

        **Patient Defense.** You can take the Disengage action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and the Dodge actions as a Bonus Action.

        **Step of the Wind.** You can take the Dash action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn.
      resources:
        - id: monk:focus-points
          name: Focus Points
          max_formula: class_level
          reset: short-rest
    - id: unarmoed-movement
      name: Unarmoed Movement
      description: Your speed increases by 10 feet while you aren't wearing armor or wielding a Shield. This bonus increases when you reach certain Monk levels, as shown on the Monk Features table.
    - id: uncanny-metabolism
      name: Uncanny Metabolism
      description: |-
        When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of Hit Points equal to your Monk level plus the number rolled.

        Once you use this feature, you can't use it again until you finish a Long Rest.
      resources:
        - id: monk:uncanny-metabolism
          name: Uncanny Metabolism
          max_formula: '1'
          reset: long-rest
  '3':
    - id: monk-subclass
      name: Monk Subclass
      description: You gain a Monk subclass of your choice. The Warrior of the Open Hand subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Monk levels. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower.
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
    - id: stunning-strike
      name: Stunning Strike
      description: Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, the target's Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage.
  '4':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.
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
    - id: slow-fall
      name: Slow Fall
      description: You can take a Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level.
  '5':
    - id: extra-attack
      name: Extra Attack
      description: You can attack twice instead of once whenever you take the Attack action on your turn.
    - id: stunning-strike
      name: Stunning Strike
      description: Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, the target's Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage.
  '6':
    - id: empowered-strikes
      name: Empowered Strikes
      description: Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type.
  '7':
    - id: evasion
      name: Evasion
      description: |-
        When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.

        You don't benefit from this feature if you have the Incapacitated condition.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.
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
    - id: acrobatic-movement
      name: Acrobatic Movement
      description: While you aren't wearing armor or wielding a Shield, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the movement.
  '10':
    - id: heightened-focus
      name: Heightened Focus
      description: |-
        Your Flurry of Blows, Patient Defense, and Step of the Wind gain the following benefits.

        **Flurry of Blows.** You can expend 1 Focus Point to use Flurry of Blows and make three Unarmed Strikes with it instead of two.

        **Patient Defense.** When you expend a Focus Point to use Patient Defense, you gain a number of Temporary Hit Points equal to two rolls of your Martial Arts die.

        **Step of the Wind.** When you expend a Focus Point to use Step of the Wind, you can choose a willing creature within 5 feet of yourself that is Large or smaller. You move the creature with you until the end of your turn. The creature's movement doesn't provoke Opportunity Attacks.
    - id: self-restoration
      name: Self-Restoration
      description: |-
        Through sheer force of will, you can remove one of the following conditions from yourself at the end of each of your turns: Charmed, Frightened, or Poisoned.

        In addition, forgoing food and drink doesn't give you levels of Exhaustion.
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.
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
    - id: deflect-energy
      name: Deflect Energy
      description: You can now use your Deflect Attacks feature against attacks that deal any damage type, not just Bludgeoning, Piercing, or Slashing.
  '14':
    - id: disciplined-survivor
      name: Disciplined Survivor
      description: |-
        Your physical and mental discipline grant you proficiency in all saving throws.

        Additionally, whenever you make a saving throw and fail, you can expend 1 Focus Point to reroll it, and you must use the new roll.
  '15':
    - id: perfect-focus
      name: Perfect Focus
      description: When you roll Initiative and don't use Uncanny Metabolism, you regain expended Focus Points until you have 4 if you have 3 or fewer.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.
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
    - id: superior-defense
      name: Superior Defense
      description: At the start of your turn, you can expend 3 Focus Points to bolster yourself against harm for 1 minute or until you have the Incapacitated condition. During that time, you have Resistance to all damage except Force damage.
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
    - id: body-and-mind
      name: Body and Mind
      description: You have developed your body and mind to new heights. Your Dexterity and Wisdom scores increase by 4, to a maximum of 25.
resources: []
starting_gold:
  fixed: 50
```
