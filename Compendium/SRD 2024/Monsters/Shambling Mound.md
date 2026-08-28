---
archivist: true
entity_type: monster
slug: srd-2024_monster_shambling-mound
name: Shambling Mound
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.443Z'
---

```monster
slug: srd-2024_monster_shambling-mound
name: Shambling Mound
edition: '2024'
source: SRD 5.2
size: large
type: plant
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10 + 39
speed:
  walk: 30
  swim: 20
abilities:
  str: 18
  dex: 8
  con: 16
  int: 5
  wis: 10
  cha: 5
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
damage_immunities:
  - lightning
condition_immunities:
  - deafened
  - exhaustion
actions:
  - name: Multiattack
    entries:
      - The shambling mound makes three Charged Tendril attacks. It can replace one attack with a use of Engulf.
  - name: Charged Tendril
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d6+STR` Bludgeoning damage plus `dmg:2d4` Lightning damage. If the target is a Medium or smaller creature, the shambling mound pulls the target 5 feet straight toward itself.'
    attacks:
      - name: Charged Tendril attack
        type: melee
        bonus: 7
        damage: 1d6+4
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Engulf
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Medium or smaller creature within 5 feet. Failure: The target is pulled into the shambling mound''s space and has the Grappled condition (escape `dc:CON`). Until the grapple ends, the target has the Blinded and Restrained conditions, and it takes `dmg:3d6` Lightning damage at the start of each of its turns. When the shambling mound moves, the Grappled target moves with it, costing it no extra movement. The shambling mound can have only one creature Grappled by this action at a time.'
reactions: []
legendary_actions: []
traits:
  - name: Lightning Absorption
    entries:
      - Whenever the shambling mound is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt.
cr: '5'
saves:
  str: 4
  dex: -1
  con: 3
  int: -3
  wis: 0
  cha: -3
skills:
  stealth: 3
alignment: unaligned
passive_perception: 10
```
