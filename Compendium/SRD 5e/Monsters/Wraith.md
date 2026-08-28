---
archivist: true
entity_type: monster
slug: srd-5e_monster_wraith
name: Wraith
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_wraith
name: Wraith
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 13
hp:
  average: 67
  formula: 9d8+27
speed:
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
languages:
  - the languages it knew in life
damage_vulnerabilities: []
damage_resistances:
  - acid
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - slashing
  - thunder
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
actions:
  - name: Life Drain
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:4d8+DEX` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
    attacks:
      - name: Life Drain attack
        type: melee
        bonus: 6
        damage: 4d8
        damage_type: thunder
        range:
          reach: 5
  - name: Create Specter
    entries:
      - The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.
reactions: []
legendary_actions: []
traits:
  - name: Incorporeal Movement
    entries:
      - The wraith can move through other creatures and objects as if they were difficult terrain. It takes `dmg:1d10` force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '5'
alignment: neutral evil
passive_perception: 12
```
