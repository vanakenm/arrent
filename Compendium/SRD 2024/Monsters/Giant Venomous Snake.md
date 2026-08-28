---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-venomous-snake
name: Giant Venomous Snake
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-venomous-snake
name: Giant Venomous Snake
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 40
  swim: 40
abilities:
  str: 10
  dex: 18
  con: 13
  int: 2
  wis: 10
  cha: 3
senses:
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 10 ft. `dmg:1d4+DEX` Piercing damage plus `dmg:1d8` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d4+4
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 0
  dex: 4
  con: 1
  int: -4
  wis: 0
  cha: -4
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
