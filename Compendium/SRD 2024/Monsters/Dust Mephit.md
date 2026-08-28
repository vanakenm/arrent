---
archivist: true
entity_type: monster
slug: srd-2024_monster_dust-mephit
name: Dust Mephit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_dust-mephit
name: Dust Mephit
edition: '2024'
source: SRD 5.2
size: small
type: elemental
ac:
  - ac: 12
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
  dex: 14
  con: 10
  int: 9
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Auran
  - Terran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: slashing
        range:
          reach: 5
  - name: Blinding Breath
    entries:
      - 'Dexterity Saving Throw: `dc:10`, each creature in a 15-foot Cone. Failure: The target has the Blinded condition until the end of the mephit''s next turn.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Sleep
    entries:
      - The mephit casts the Sleep spell, requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`).
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - 'The mephit explodes when it dies. Dexterity Saving Throw: `dc:10`, each creature in a 5-foot Emanation originating from the mephit. Failure: `dmg:2d4` Bludgeoning damage. Success: Half damage.'
cr: '0.5'
saves:
  str: -3
  dex: 2
  con: 0
  int: -1
  wis: 0
  cha: 0
skills:
  perception: 2
  stealth: 4
alignment: neutral evil
passive_perception: 12
```
