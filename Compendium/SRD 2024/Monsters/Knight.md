---
archivist: true
entity_type: monster
slug: srd-2024_monster_knight
name: Knight
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_knight
name: Knight
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8 + 16
speed:
  walk: 30
abilities:
  str: 16
  dex: 11
  con: 14
  int: 11
  wis: 11
  cha: 15
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The knight makes two attacks, using Greatsword or Heavy Crossbow in any combination.
  - name: Greatsword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d8` Radiant damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 100/400 ft. `dmg:2d10` Piercing damage plus `dmg:1d8` Radiant damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 2
        damage: 2d10
        damage_type: piercing
        range:
          normal: 100
          long: 400
reactions:
  - name: Parry
    entries:
      - _Trigger:_ The knight is hit by a melee attack roll while holding a weapon. _Response:_ The knight adds 2 to its AC against that attack, possibly causing it to miss.
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: 0
  con: 4
  int: 0
  wis: 2
  cha: 2
alignment: neutral
passive_perception: 10
```
