---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-wolf-spider
name: Giant Wolf Spider
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.426Z'
---

```monster
slug: srd-2024_monster_giant-wolf-spider
name: Giant Wolf Spider
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 40
  climb: 40
abilities:
  str: 12
  dex: 16
  con: 13
  int: 3
  wis: 12
  cha: 4
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage plus `dmg:2d4` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check.
cr: '0.25'
saves:
  str: 1
  dex: 3
  con: 1
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
  stealth: 7
alignment: unaligned
passive_perception: 13
```
