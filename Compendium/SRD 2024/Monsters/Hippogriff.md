---
archivist: true
entity_type: monster
slug: srd-2024_monster_hippogriff
name: Hippogriff
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_hippogriff
name: Hippogriff
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10 + 4
speed:
  walk: 40
  fly: 60
abilities:
  str: 17
  dex: 13
  con: 13
  int: 2
  wis: 12
  cha: 8
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hippogriff makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The hippogriff doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.
cr: '1'
saves:
  str: 3
  dex: 1
  con: 1
  int: -4
  wis: 1
  cha: -1
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
