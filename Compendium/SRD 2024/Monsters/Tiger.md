---
archivist: true
entity_type: monster
slug: srd-2024_monster_tiger
name: Tiger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_tiger
name: Tiger
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 30
  formula: 4d10 + 8
speed:
  walk: 40
abilities:
  str: 17
  dex: 16
  con: 14
  int: 3
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Nimble Escape
    entries:
      - The tiger takes the Disengage or Hide action.
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 3
  dex: 3
  con: 2
  int: -4
  wis: 1
  cha: -1
skills:
  perception: 3
  stealth: 7
alignment: unaligned
passive_perception: 13
```
