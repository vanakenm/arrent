---
archivist: true
entity_type: monster
slug: srd-2024_monster_camel
name: Camel
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.412Z'
---

```monster
slug: srd-2024_monster_camel
name: Camel
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 17
  formula: 2d10 + 6
speed:
  walk: 50
abilities:
  str: 15
  dex: 8
  con: 17
  int: 2
  wis: 11
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Bludgeoning damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: 2
  dex: -1
  con: 5
  int: -4
  wis: 0
  cha: -3
alignment: unaligned
passive_perception: 10
```
