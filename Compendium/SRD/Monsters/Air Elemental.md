---
archivist: true
entity_type: monster
slug: air-elemental
name: Air Elemental
compendium: SRD
---

```monster
name: Air Elemental
size: Large
type: Elemental
alignment: neutral
ac:
  - ac: 15
hp:
  average: 90
  formula: 12d10+24
speed:
  walk: 0
  fly: 90
abilities:
  str: 14
  dex: 20
  con: 14
  int: 6
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Auran
damage_resistances:
  - lightning
  - thunder; bludgeoning
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
  - name: Air Form
    entries:
      - The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.
actions:
  - name: Multiattack
    entries:
      - The elemental makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:2d8+DEX` bludgeoning damage.'
  - name: Whirlwind (Recharge 4-6)
    entries:
      - |-
        Each creature in the elemental's space must make a `dc:STR` Strength saving throw. On a failure, a target takes `damage:3d8+CON` bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes `damage:1d6` bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a `dc:13` Dexterity saving throw or take the same damage and be knocked prone.
        If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.
```
