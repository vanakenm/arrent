---
archivist: true
entity_type: monster
slug: srd-2024_monster_wraith
name: Wraith
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.454Z'
---

```monster
slug: srd-2024_monster_wraith
name: Wraith
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 67
  formula: 9d8 + 27
speed:
  walk: 5
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
  - Common plus two other languages
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
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
  - unconscious
actions:
  - name: Life Drain
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:4d8+DEX` Necrotic damage. If the target is a creature, its Hit Point maximum decreases by an amount equal to the damage taken.'
    attacks:
      - name: Life Drain attack
        type: melee
        bonus: 6
        damage: 4d8+3
        damage_type: necrotic
        range:
          reach: 5
  - name: Create Specter
    entries:
      - The wraith targets a Humanoid corpse within 10 feet of itself that has been dead for no longer than 1 minute. The target's spirit rises as a Specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at a time.
reactions: []
legendary_actions: []
traits:
  - name: Incorporeal Movement
    entries:
      - The wraith can move through other creatures and objects as if they were Difficult Terrain. It takes `dmg:1d10` Force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wraith has Disadvantage on ability checks and attack rolls.
cr: '5'
saves:
  str: -2
  dex: 3
  con: 3
  int: 1
  wis: 2
  cha: 2
alignment: neutral evil
passive_perception: 12
```
