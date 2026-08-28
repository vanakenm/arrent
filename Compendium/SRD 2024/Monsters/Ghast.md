---
archivist: true
entity_type: monster
slug: srd-2024_monster_ghast
name: Ghast
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_ghast
name: Ghast
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 36
  formula: 8d8
speed:
  walk: 30
abilities:
  str: 16
  dex: 17
  con: 10
  int: 11
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage plus `dmg:2d8` Necrotic damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage. If the target is a non-Undead creature, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target has the Paralyzed condition until the end of its next turn.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Stench
    entries:
      - 'Constitution Saving Throw: `dc:CON`, any creature that starts its turn in a 5-foot Emanation originating from the ghast. Failure: The target has the Poisoned condition until the start of its next turn. Success: The target is immune to this ghast''s Stench for 24 hours.'
cr: '2'
saves:
  str: 3
  dex: 3
  con: 0
  int: 0
  wis: 2
  cha: -1
alignment: chaotic evil
passive_perception: 10
```
