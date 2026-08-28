---
archivist: true
entity_type: monster
slug: srd-2024_monster_black-bear
name: Black Bear
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.410Z'
---

```monster
slug: srd-2024_monster_black-bear
name: Black Bear
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d8 + 6
speed:
  walk: 30
  swim: 30
  climb: 30
abilities:
  str: 15
  dex: 12
  con: 14
  int: 2
  wis: 12
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
      - The bear makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 2
  dex: 1
  con: 2
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
