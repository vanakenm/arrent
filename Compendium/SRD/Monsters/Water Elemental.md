---
archivist: true
entity_type: monster
slug: water-elemental
name: Water Elemental
compendium: SRD
---

```monster
name: Water Elemental
size: Large
type: Elemental
alignment: neutral
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 30
  swim: 90
abilities:
  str: 18
  dex: 14
  con: 18
  int: 5
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Aquan
damage_resistances:
  - acid; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
cr: '5'
traits:
  - name: Water Form
    entries:
      - The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.
  - name: Freeze
    entries:
      - If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn.
actions:
  - name: Multiattack
    entries:
      - The elemental makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Whelm (Recharge 4-6)
    entries:
      - |-
        Each creature in the elemental's space must make a `dc:STR` Strength saving throw. On a failure, a target takes `damage:2d8+CON` bludgeoning damage. If it is Large or smaller, it is also grappled (escape `dc:14`). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.
        The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes `damage:2d8+CON` bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a `dc:14` Strength and succeeding.
```
