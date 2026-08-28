---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-wasp
name: Giant Wasp
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-wasp
name: Giant Wasp
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 10
  fly: 50
abilities:
  str: 10
  dex: 14
  con: 10
  int: 1
  wis: 10
  cha: 3
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Sting
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:2d4` Poison damage.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The wasp doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.
cr: '0.5'
saves:
  str: 0
  dex: 2
  con: 0
  int: -5
  wis: 0
  cha: -4
alignment: unaligned
passive_perception: 10
```
