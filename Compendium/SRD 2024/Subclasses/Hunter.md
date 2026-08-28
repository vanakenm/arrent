---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_hunter
name: Hunter
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.114Z'
---

```subclass
slug: srd-2024_subclass_hunter
name: Hunter
edition: '2024'
source: SRD 5.2
description: |-
  *Protect Nature and People from Destruction*

  You stalk prey in the wilds and elsewhere, using your abilities as a Hunter to protect nature and people everywhere from forces that would destroy them.
parent_class: '[[SRD 2024/Classes/Ranger]]'
features_by_level:
  '3':
    - id: hunters-lore
      name: Hunter's Lore
      description: You can call on the forces of nature to reveal certain strengths and weaknesses of your prey. While a creature is marked by your *Hunter's Mark*, you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are.
    - id: hunters-prey
      name: Hunter's Prey
      description: |-
        You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.

        **Colossus Slayer.** Your tenacity can wear down even the most resilient foes. When you hit a creature with a weapon, the weapon deals an extra 1d8 damage to the target if it's missing any of its Hit Points. You can deal this extra damage only once per turn.

        **Horde Breaker.** Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target, that is within the weapon's range, and that you haven't attacked this turn.
      choices:
        - kind: select-inline
          id: hunters-prey
          count: 1
          options:
            - value: colossus-slayer
              label: Colossus Slayer
              description: When you hit a creature with a weapon, the weapon deals an extra 1d8 damage to the target if it's missing any of its Hit Points (once per turn).
            - value: horde-breaker
              label: Horde Breaker
              description: Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature within 5 feet of the original target and within range.
  '7':
    - id: defensive-tactics
      name: Defensive Tactics
      description: |-
        You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.

        **Escape the Horde.** Opportunity Attacks have Disadvantage against you.

        **Multiattack Defense.** When a creature hits you with an attack roll, that creature has Disadvantage on all other attack rolls against you this turn.
      choices:
        - kind: select-inline
          id: defensive-tactics
          count: 1
          options:
            - value: escape-the-horde
              label: Escape the Horde
              description: Opportunity Attacks have Disadvantage against you.
            - value: multiattack-defense
              label: Multiattack Defense
              description: When a creature hits you with an attack roll, that creature has Disadvantage on all other attack rolls against you this turn.
  '11':
    - id: superior-hunters-prey
      name: Superior Hunter's Prey
      description: Once per turn when you deal damage to a creature marked by your *Hunter's Mark*, you can also deal that spell's extra damage to a different creature that you can see within 30 feet of the first creature.
  '15':
    - id: superior-hunters-defense
      name: Superior Hunter's Defense
      description: When you take damage, you can take a Reaction to give yourself Resistance to that damage and any other damage of the same type until the end of the current turn.
resources: []
```
