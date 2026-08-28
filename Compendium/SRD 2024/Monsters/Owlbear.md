---
archivist: true
entity_type: monster
slug: srd-2024_monster_owlbear
name: Owlbear
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_owlbear
name: Owlbear
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 59
  formula: 7d10 + 21
speed:
  walk: 40
  climb: 40
abilities:
  str: 20
  dex: 12
  con: 17
  int: 3
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
      - The owlbear makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d8+5
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 5
  dex: 1
  con: 3
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
