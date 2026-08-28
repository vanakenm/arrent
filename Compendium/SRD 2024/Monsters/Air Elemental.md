---
archivist: true
entity_type: monster
slug: srd-2024_monster_air-elemental
name: Air Elemental
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_air-elemental
name: Air Elemental
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 90
  formula: 12d10 + 24
speed:
  walk: 10
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
  - Primordial (Auran)
damage_vulnerabilities: []
damage_resistances:
  - lightning
damage_immunities:
  - poison
  - thunder
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
      - The elemental makes two Thunderous Slam attacks.
  - name: Thunderous Slam
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 10 ft. `dmg:2d8+DEX` Thunder damage.'
    attacks:
      - name: Thunderous Slam attack
        type: melee
        bonus: 8
        damage: 2d8+5
        damage_type: thunder
        range:
          reach: 10
  - name: Whirlwind
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Medium or smaller creature in the elemental''s space. Failure: `dmg:4d10+STR` Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the Prone condition. Success: Half damage only.'
    recharge:
      type: recharge_on_roll
      param: 4
reactions: []
legendary_actions: []
traits:
  - name: Air Form
    entries:
      - The elemental can enter a creature's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so.
cr: '5'
saves:
  str: 2
  dex: 5
  con: 2
  int: -2
  wis: 0
  cha: -2
alignment: neutral
passive_perception: 10
```
