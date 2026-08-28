---
archivist: true
entity_type: monster
slug: srd-2024_monster_ogre
name: Ogre
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_ogre
name: Ogre
edition: '2024'
source: SRD 5.2
size: large
type: giant
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10 + 24
speed:
  walk: 40
abilities:
  str: 19
  dex: 8
  con: 16
  int: 5
  wis: 7
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greatclub
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage.'
    attacks:
      - name: Greatclub attack
        type: melee
        bonus: 6
        damage: 2d8+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 30/120 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Javelin attack
        type: ranged
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: -1
  con: 3
  int: -3
  wis: -2
  cha: -2
alignment: chaotic evil
passive_perception: 8
```
