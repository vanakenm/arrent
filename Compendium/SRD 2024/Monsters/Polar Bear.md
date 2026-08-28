---
archivist: true
entity_type: monster
slug: srd-2024_monster_polar-bear
name: Polar Bear
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_polar-bear
name: Polar Bear
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10 + 15
speed:
  walk: 40
  swim: 40
abilities:
  str: 20
  dex: 14
  con: 16
  int: 2
  wis: 13
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The bear makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 1d8+5
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 5
  dex: 2
  con: 3
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
  stealth: 4
alignment: unaligned
passive_perception: 15
```
