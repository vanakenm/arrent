---
archivist: true
entity_type: monster
slug: srd-2024_monster_allosaurus
name: Allosaurus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_allosaurus
name: Allosaurus
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 51
  formula: 6d10 + 18
speed:
  walk: 60
abilities:
  str: 19
  dex: 13
  con: 17
  int: 2
  wis: 12
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d10+4
        damage_type: piercing
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage. If the target is a Large or smaller creature and the allosaurus moved 30+ feet straight toward it immediately before the hit, the target has the Prone condition, and the allosaurus can make one Bite attack against it.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 6
        damage: 1d8+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 1
  con: 3
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
