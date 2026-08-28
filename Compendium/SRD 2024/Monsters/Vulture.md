---
archivist: true
entity_type: monster
slug: srd-2024_monster_vulture
name: Vulture
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.451Z'
---

```monster
slug: srd-2024_monster_vulture
name: Vulture
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 5
  formula: 1d8 + 1
speed:
  walk: 10
  fly: 50
abilities:
  str: 7
  dex: 10
  con: 13
  int: 2
  wis: 12
  cha: 4
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Beak
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4` Piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 2
        damage: 1d4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The vulture has Advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0'
saves:
  str: -2
  dex: 0
  con: 1
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
