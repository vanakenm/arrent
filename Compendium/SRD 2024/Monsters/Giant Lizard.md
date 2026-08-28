---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-lizard
name: Giant Lizard
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.424Z'
---

```monster
slug: srd-2024_monster_giant-lizard
name: Giant Lizard
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10 + 3
speed:
  walk: 40
  climb: 40
abilities:
  str: 15
  dex: 12
  con: 13
  int: 2
  wis: 10
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The lizard can climb difficult surfaces, including along ceilings, without needing to make an ability check.
cr: '0.25'
saves:
  str: 2
  dex: 3
  con: 1
  int: -4
  wis: 0
  cha: -3
alignment: unaligned
passive_perception: 10
```
