---
archivist: true
entity_type: monster
slug: srd-5e_monster_air-elemental
name: Air Elemental
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.974Z'
---

```monster
slug: srd-5e_monster_air-elemental
name: Air Elemental
edition: '2014'
source: SRD 5.1
size: large
type: elemental
ac:
  - ac: 15
hp:
  average: 90
  formula: 12d10+24
speed:
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
languages:
  - Auran
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - lightning
  - piercing
  - slashing
  - thunder
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
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:2d8+DEX` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 8
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Whirlwind
    entries:
      - |-
        Each creature in the elemental's space must make a `dc:STR` Strength saving throw. On a failure, a target takes `dmg:3d8+STR` bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes `dmg:1d6` bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a `dc:13` Dexterity saving throw or take the same damage and be knocked prone.
        If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.
reactions: []
legendary_actions: []
traits:
  - name: Air Form
    entries:
      - The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.
cr: '5'
subtype: Elementals
alignment: neutral
passive_perception: 10
```
