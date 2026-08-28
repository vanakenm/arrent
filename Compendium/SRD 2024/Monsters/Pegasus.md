---
archivist: true
entity_type: monster
slug: srd-2024_monster_pegasus
name: Pegasus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.438Z'
---

```monster
slug: srd-2024_monster_pegasus
name: Pegasus
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 59
  formula: 7d10 + 21
speed:
  walk: 60
  fly: 90
abilities:
  str: 18
  dex: 15
  con: 16
  int: 10
  wis: 15
  cha: 13
senses: []
languages:
  - Understands Celestial
  - Common
  - Elvish
  - And Sylvan but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage plus `dmg:2d4` Radiant damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 1d6+4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 4
  con: 5
  int: 0
  wis: 4
  cha: 3
skills:
  perception: 6
alignment: chaotic good
passive_perception: 16
```
