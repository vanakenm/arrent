---
archivist: true
entity_type: monster
slug: wraith
name: Wraith
compendium: SRD
---

```monster
name: Wraith
size: Medium
type: Undead
alignment: neutral evil
ac:
  - ac: 13
hp:
  average: 67
  formula: 9d8+27
speed:
  walk: 0
  fly: 60
abilities:
  str: 6
  dex: 16
  con: 16
  int: 12
  wis: 14
  cha: 15
senses:
  - darkvision 60 ft.
passive_perception: 12
languages:
  - the languages it knew in life
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
cr: '5'
traits:
  - name: Incorporeal Movement
    entries:
      - The wraith can move through other creatures and objects as if they were difficult terrain. It takes `damage:1d10` force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Life Drain
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:4d8+DEX` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
  - name: Create Specter
    entries:
      - The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.
```
