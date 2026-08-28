---
archivist: true
entity_type: monster
slug: srd-2024_monster_brown-bear
name: Brown Bear
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.412Z'
---

```monster
slug: srd-2024_monster_brown-bear
name: Brown Bear
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 22
  formula: 3d10 + 6
speed:
  walk: 40
  climb: 30
abilities:
  str: 17
  dex: 12
  con: 15
  int: 2
  wis: 13
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The bear makes one Bite attack and one Claw attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage.'
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Slashing damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 3
  dex: 1
  con: 2
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
