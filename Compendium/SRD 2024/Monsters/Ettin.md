---
archivist: true
entity_type: monster
slug: srd-2024_monster_ettin
name: Ettin
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.419Z'
---

```monster
slug: srd-2024_monster_ettin
name: Ettin
edition: '2024'
source: SRD 5.2
size: large
type: giant
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 85
  formula: 10d10 + 30
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 17
  int: 6
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The ettin makes one Battleaxe attack and one Morningstar attack.
  - name: Battleaxe
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Slashing damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Battleaxe attack
        type: melee
        bonus: 7
        damage: 2d8+5
        damage_type: slashing
        range:
          reach: 5
  - name: Morningstar
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage, and the target has Disadvantage on the next attack roll it makes before the end of its next turn.'
    attacks:
      - name: Morningstar attack
        type: melee
        bonus: 7
        damage: 2d8+5
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 5
  dex: -1
  con: 3
  int: -2
  wis: 0
  cha: -1
skills:
  perception: 4
alignment: chaotic evil
passive_perception: 14
```
