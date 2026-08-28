---
archivist: true
entity_type: monster
slug: srd-2024_monster_gargoyle
name: Gargoyle
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.420Z'
---

```monster
slug: srd-2024_monster_gargoyle
name: Gargoyle
edition: '2024'
source: SRD 5.2
size: medium
type: elemental
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 67
  formula: 9d8 + 27
speed:
  walk: 30
  fly: 60
abilities:
  str: 15
  dex: 11
  con: 16
  int: 6
  wis: 11
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Terran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The gargoyle makes two Claw attacks.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage: 2d4+2
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The gargoyle doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.
cr: '2'
saves:
  str: 2
  dex: 0
  con: 3
  int: -2
  wis: 0
  cha: -2
skills:
  stealth: 4
alignment: chaotic evil
passive_perception: 10
```
