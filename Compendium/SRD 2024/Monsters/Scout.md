---
archivist: true
entity_type: monster
slug: srd-2024_monster_scout
name: Scout
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_scout
name: Scout
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 16
  formula: 3d8 + 3
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 11
  wis: 13
  cha: 11
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The scout makes two attacks, using Shortsword and Longbow in any combination.
  - name: Shortsword
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 150/600 ft. `dmg:1d8+DEX` Piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 0
  dex: 2
  con: 1
  int: 0
  wis: 1
  cha: 0
skills:
  nature: 4
  perception: 5
  stealth: 6
  survival: 5
alignment: neutral
passive_perception: 15
```
