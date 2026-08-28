---
archivist: true
entity_type: monster
slug: srd-2024_monster_griffon
name: Griffon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_griffon
name: Griffon
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 59
  formula: 7d10 + 21
speed:
  walk: 30
  fly: 80
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 13
  cha: 8
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
      - The griffon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`) from both of the griffon''s front claws.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 1d8+4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 2
  con: 3
  int: -4
  wis: 1
  cha: -1
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
