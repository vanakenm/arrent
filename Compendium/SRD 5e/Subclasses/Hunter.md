---
archivist: true
entity_type: subclass
slug: srd-5e_subclass_hunter
name: Hunter
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.751Z'
---

```subclass
slug: srd-5e_subclass_hunter
name: Hunter
edition: '2014'
source: SRD 5.1
description: ''
parent_class: '[[SRD 5e/Classes/Ranger]]'
features_by_level:
  '3':
    - id: hunters-prey
      name: Hunter's Prey
      description: "At 3rd level, you gain one of the following features of your choice.\r\n\r\n***Colossus Slayer.*** Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.\r\n\r\n***Giant Killer.*** When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.\r\n\r\n***Horde Breaker.*** Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
      choices:
        - kind: select-inline
          id: hunters-prey
          count: 1
          options:
            - value: colossus-slayer
              label: Colossus Slayer
              description: When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.
            - value: giant-killer
              label: Giant Killer
              description: When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack.
            - value: horde-breaker
              label: Horde Breaker
              description: Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.
  '7':
    - id: defensive-tactics
      name: Defensive Tactics
      description: "At 7th level, you gain one of the following features of your choice.\r\n\r\n***Escape the Horde.*** Opportunity attacks against you are made with disadvantage.\r\n\r\n***Multiattack Defense.*** When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.\r\n\r\n***Steel Will.*** You have advantage on saving throws against being frightened."
      choices:
        - kind: select-inline
          id: defensive-tactics
          count: 1
          options:
            - value: escape-the-horde
              label: Escape the Horde
              description: Opportunity attacks against you are made with disadvantage.
            - value: multiattack-defense
              label: Multiattack Defense
              description: When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.
            - value: steel-will
              label: Steel Will
              description: You have advantage on saving throws against being frightened.
  '11':
    - id: multiattack
      name: Multiattack
      description: "At 11th level, you gain one of the following features of your choice.\r\n\r\n***Volley.*** You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.\r\n\r\n***Whirlwind Attack.*** You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
      choices:
        - kind: select-inline
          id: multiattack
          count: 1
          options:
            - value: volley
              label: Volley
              description: You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target.
            - value: whirlwind-attack
              label: Whirlwind Attack
              description: You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.
  '15':
    - id: superior-hunters-defense
      name: Superior Hunter's Defense
      description: "At 15th level, you gain one of the following features of your choice.\r\n\r\n***Evasion.*** When you are subjected to an effect, such as a red dragon's fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.\r\n\r\n***Stand Against the Tide.*** When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.\r\n\r\n***Uncanny Dodge.*** When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
      choices:
        - kind: select-inline
          id: superior-hunters-defense
          count: 1
          options:
            - value: evasion
              label: Evasion
              description: When you make a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.
            - value: stand-against-the-tide
              label: Stand Against the Tide
              description: When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature of your choice.
            - value: uncanny-dodge
              label: Uncanny Dodge
              description: When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.
resources: []
```
