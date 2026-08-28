---
archivist: true
entity_type: monster
slug: srd-2024_monster_violet-fungus
name: Violet Fungus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.451Z'
---

```monster
slug: srd-2024_monster_violet-fungus
name: Violet Fungus
edition: '2024'
source: SRD 5.2
size: medium
type: plant
ac:
  - ac: 5
    from:
      - natural armor
hp:
  average: 18
  formula: 4d8
speed:
  walk: 5
abilities:
  str: 3
  dex: 1
  con: 10
  int: 1
  wis: 3
  cha: 1
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The fungus makes two Rotting Touch attacks.
  - name: Rotting Touch
    entries:
      - 'Melee Attack Roll: `atk:CON+PB`, reach 10 ft. `dmg:1d8` Necrotic damage.'
    attacks:
      - name: Rotting Touch attack
        type: melee
        bonus: 2
        damage: 1d8
        damage_type: necrotic
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: -4
  dex: -5
  con: 0
  int: -5
  wis: -4
  cha: -5
alignment: unaligned
passive_perception: 6
```
