---
archivist: true
entity_type: monster
slug: srd-2024_monster_hobgoblin-captain
name: Hobgoblin Captain
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_hobgoblin-captain
name: Hobgoblin Captain
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8 + 18
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 14
  int: 12
  wis: 10
  cha: 13
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hobgoblin makes two attacks, using Greatsword or Longbow in any combination.
  - name: Greatsword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d6` Poison damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 4
        damage: 2d6+2
        damage_type: slashing
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 150/600 ft. `dmg:1d8+STR` Piercing damage plus `dmg:2d4` Poison damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Aura of Authority
    entries:
      - While in a 10-foot Emanation originating from the hobgoblin, the hobgoblin and its allies have Advantage on attack rolls and saving throws, provided the hobgoblin doesn't have the Incapacitated condition.
cr: '3'
saves:
  str: 2
  dex: 2
  con: 2
  int: 1
  wis: 0
  cha: 1
alignment: lawful evil
passive_perception: 10
```
