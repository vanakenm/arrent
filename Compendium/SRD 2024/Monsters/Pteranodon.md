---
archivist: true
entity_type: monster
slug: srd-2024_monster_pteranodon
name: Pteranodon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.440Z'
---

```monster
slug: srd-2024_monster_pteranodon
name: Pteranodon
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
  walk: 10
  fly: 60
abilities:
  str: 12
  dex: 15
  con: 10
  int: 2
  wis: 9
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Piercing damage.'
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
  - name: Flyby
    entries:
      - The pteranodon doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.
cr: '0.25'
saves:
  str: 1
  dex: 2
  con: 0
  int: -4
  wis: -1
  cha: -3
skills:
  perception: 1
alignment: unaligned
passive_perception: 11
```
