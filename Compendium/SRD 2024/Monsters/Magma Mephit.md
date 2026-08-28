---
archivist: true
entity_type: monster
slug: srd-2024_monster_magma-mephit
name: Magma Mephit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_magma-mephit
name: Magma Mephit
edition: '2024'
source: SRD 5.2
size: small
type: elemental
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 18
  formula: 4d6 + 4
speed:
  walk: 30
  fly: 30
abilities:
  str: 8
  dex: 12
  con: 12
  int: 7
  wis: 10
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Ignan
  - Terran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage plus `dmg:1d6` Fire damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage: 1d4+1
        damage_type: slashing
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:DEX`, each creature in a 15-foot Cone. Failure: `dmg:2d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - 'The mephit explodes when it dies. Dexterity Saving Throw: `dc:DEX`, each creature in a 5-foot Emanation originating from the mephit. Failure: `dmg:2d6` Fire damage. Success: Half damage.'
cr: '0.5'
saves:
  str: -1
  dex: 1
  con: 1
  int: -2
  wis: 0
  cha: 0
skills:
  stealth: 3
alignment: neutral evil
passive_perception: 10
```
