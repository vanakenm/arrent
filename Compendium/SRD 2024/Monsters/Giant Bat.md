---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-bat
name: Giant Bat
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_giant-bat
name: Giant Bat
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 22
  formula: 4d10
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 16
  con: 11
  int: 2
  wis: 12
  cha: 6
senses:
  - blindsight 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 2
  dex: 3
  con: 0
  int: -4
  wis: 1
  cha: -2
alignment: unaligned
passive_perception: 11
```
