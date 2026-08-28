---
archivist: true
entity_type: monster
slug: srd-2024_monster_specter
name: Specter
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.444Z'
---

```monster
slug: srd-2024_monster_specter
name: Specter
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
  fly: 50
abilities:
  str: 1
  dex: 14
  con: 11
  int: 10
  wis: 10
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Understands Common plus one other language but can't speak
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Life Drain
    entries:
      - 'Melee Attack Roll: `atk:+4`, reach 5 ft. `dmg:2d6` Necrotic damage. If the target is a creature, its Hit Point maximum decreases by an amount equal to the damage taken.'
    attacks:
      - name: Life Drain attack
        type: melee
        bonus: 4
        damage: 2d6
        damage_type: necrotic
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Incorporeal Movement
    entries:
      - The specter can move through other creatures and objects as if they were Difficult Terrain. It takes `dmg:1d10` Force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the specter has Disadvantage on ability checks and attack rolls.
cr: '1'
saves:
  str: -5
  dex: 2
  con: 0
  int: 0
  wis: 0
  cha: 0
alignment: chaotic evil
passive_perception: 10
```
