---
archivist: true
entity_type: monster
slug: srd-5e_monster_water-elemental
name: Water Elemental
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.023Z'
---

```monster
slug: srd-5e_monster_water-elemental
name: Water Elemental
edition: '2014'
source: SRD 5.1
size: large
type: elemental
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
languages:
  - Aquan
damage_vulnerabilities: []
damage_resistances:
  - acid
  - bludgeoning
  - piercing
  - slashing
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
actions:
  - name: Multiattack
    entries:
      - The elemental makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Whelm
    entries:
      - |-
        Each creature in the elemental's space must make a `dc:STR` Strength saving throw. On a failure, a target takes `dmg:2d8+STR` bludgeoning damage. If it is Large or smaller, it is also grappled (escape `dc:14`). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.
        The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes `dmg:2d8+STR` bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a `dc:14` Strength and succeeding.
reactions: []
legendary_actions: []
traits:
  - name: Freeze
    entries:
      - If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn.
  - name: Water Form
    entries:
      - The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.
cr: '5'
subtype: Elementals
alignment: neutral
passive_perception: 10
```
