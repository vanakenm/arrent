---
archivist: true
entity_type: monster
slug: srd-2024_monster_steam-mephit
name: Steam Mephit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.445Z'
---

```monster
slug: srd-2024_monster_steam-mephit
name: Steam Mephit
edition: '2024'
source: SRD 5.2
size: small
type: elemental
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 17
  formula: 5d6
speed:
  walk: 30
  fly: 30
abilities:
  str: 5
  dex: 11
  con: 10
  int: 11
  wis: 10
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Aquan
  - Ignan)
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
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4` Slashing damage plus `dmg:1d4` Fire damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 2
        damage: 1d4
        damage_type: slashing
        range:
          reach: 5
  - name: Steam Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:2d4` Fire damage, and the target''s Speed decreases by 10 feet until the end of the mephit''s next turn. Success: Half damage only. Failure or Success: Being underwater doesn''t grant Resistance to this Fire damage.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Blurred Form
    entries:
      - Attack rolls against the mephit are made with Disadvantage unless the mephit has the Incapacitated condition.
  - name: Death Burst
    entries:
      - 'The mephit explodes when it dies. Dexterity Saving Throw: `dc:DEX`, each creature in a 5-foot Emanation originating from the mephit. Failure: `dmg:2d4` Fire damage. Success: Half damage.'
cr: '0.25'
saves:
  str: -3
  dex: 0
  con: 0
  int: 0
  wis: 0
  cha: 1
skills:
  stealth: 2
alignment: neutral evil
passive_perception: 10
```
