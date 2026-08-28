---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-crab
name: Giant Crab
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.422Z'
---

```monster
slug: srd-2024_monster_giant-crab
name: Giant Crab
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 13
  formula: 3d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 13
  dex: 13
  con: 11
  int: 1
  wis: 9
  cha: 3
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`) from one of two claws.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage: 1d6+1
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The crab can breathe air and water.
cr: '0.125'
saves:
  str: 1
  dex: 1
  con: 0
  int: -5
  wis: -1
  cha: -4
skills:
  stealth: 3
alignment: unaligned
passive_perception: 9
```
