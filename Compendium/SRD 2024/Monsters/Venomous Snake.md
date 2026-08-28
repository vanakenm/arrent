---
archivist: true
entity_type: monster
slug: srd-2024_monster_venomous-snake
name: Venomous Snake
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.451Z'
---

```monster
slug: srd-2024_monster_venomous-snake
name: Venomous Snake
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 5
  formula: 2d4
speed:
  walk: 30
  swim: 30
abilities:
  str: 2
  dex: 15
  con: 11
  int: 1
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
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage plus `dmg:1d6` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: -4
  dex: 2
  con: 0
  int: -5
  wis: 0
  cha: -4
alignment: unaligned
passive_perception: 10
```
