---
archivist: true
entity_type: monster
slug: srd-2024_monster_panther
name: Panther
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_panther
name: Panther
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 13
  formula: 3d8
speed:
  walk: 50
  climb: 40
abilities:
  str: 14
  dex: 16
  con: 10
  int: 3
  wis: 14
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Nimble Escape
    entries:
      - The panther takes the Disengage or Hide action.
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 2
  dex: 3
  con: 0
  int: -4
  wis: 2
  cha: -2
skills:
  perception: 4
  stealth: 6
alignment: unaligned
passive_perception: 14
```
