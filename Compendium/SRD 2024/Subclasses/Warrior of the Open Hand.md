---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_warrior-of-the-open-hand
name: Warrior of the Open Hand
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.115Z'
---

```subclass
slug: srd-2024_subclass_warrior-of-the-open-hand
name: Warrior of the Open Hand
edition: '2024'
source: SRD 5.2
description: |-
  *Master Unarmed Combat Techniques*

  Warriors of the Open Hand are masters of unarmed combat. They learn techniques to push and trip their opponents and manipulate their own energy to protect themselves from harm.
parent_class: '[[SRD 2024/Classes/Monk]]'
features_by_level:
  '3':
    - id: open-hand-technique
      name: Open Hand Technique
      description: |-
        Whenever you hit a creature with an attack granted by your Flurry of Blows, you can impose one of the following effects on that target.

        **Addle.** The target can't make Opportunity Attacks until the start of its next turn.

        **Push.** The target must succeed on a Strength saving throw or be pushed up to 15 feet away from you.

        **Topple.** The target must succeed on a Dexterity saving throw or have the Prone condition.
  '6':
    - id: wholeness-of-body
      name: Wholeness of Body
      description: |-
        You gain the ability to heal yourself. As a Bonus Action, you can roll your Martial Arts die. You regain a number of Hit Points equal to the number rolled plus your Wisdom modifier (minimum of 1 Hit Point regained).

        You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.
      action: bonus-action
      resources:
        - id: warrior-of-the-open-hand:wholeness-of-body
          name: Wholeness of Body
          max_formula: '{wis_mod}'
          reset: long-rest
  '11':
    - id: fleet-step
      name: Fleet Step
      description: When you take a Bonus Action other than Step of the Wind, you can also use Step of the Wind immediately after that Bonus Action.
  '17':
    - id: quivering-palm
      name: Quivering Palm
      description: |-
        You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an Unarmed Strike, you can expend 4 Focus Points to start these imperceptible vibrations, which last for a number of days equal to your Monk level. The vibrations are harmless unless you take an action to end them. Alternatively, when you take the Attack action on your turn, you can forgo one of the attacks to end the vibrations. To end them, you and the target must be on the same plane of existence. When you end them, the target must make a Constitution saving throw, taking 10d12 Force damage on a failed save or half as much damage on a successful one.

        You can have only one creature under the effect of this feature at a time. You can end the vibrations harmlessly (no action required).
resources: []
```
