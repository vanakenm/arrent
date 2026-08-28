---
archivist: true
entity_type: monster
slug: srd-2024_monster_ice-mephit
name: Ice Mephit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_ice-mephit
name: Ice Mephit
edition: '2024'
source: SRD 5.2
size: small
type: elemental
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 21
  formula: 6d6
speed:
  walk: 30
  fly: 30
abilities:
  str: 7
  dex: 13
  con: 10
  int: 9
  wis: 11
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Aquan
  - Auran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage plus `dmg:1d4` Cold damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage: 1d4+1
        damage_type: slashing
        range:
          reach: 5
  - name: Frost Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:3d4` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Fog Cloud
    entries:
      - |-
        The mephit casts Fog Cloud, requiring no spell components and using Charisma as the spellcasting ability.

        - **At Will:**
        - **1/Day Each:** Fog Cloud
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - 'The mephit explodes when it dies. Constitution Saving Throw: `dc:CON`, each creature in a 5-foot Emanation originating from the mephit. Failure: `dmg:2d4` Cold damage. Success: Half damage.'
cr: '0.5'
saves:
  str: -2
  dex: 1
  con: 0
  int: -1
  wis: 0
  cha: 1
skills:
  perception: 2
  stealth: 3
alignment: neutral evil
passive_perception: 12
```
