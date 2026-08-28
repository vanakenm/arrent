---
archivist: true
entity_type: monster
slug: srd-2024_monster_azer-sentinel
name: Azer Sentinel
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.408Z'
---

```monster
slug: srd-2024_monster_azer-sentinel
name: Azer Sentinel
edition: '2024'
source: SRD 5.2
size: medium
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 39
  formula: 6d8 + 12
speed:
  walk: 30
abilities:
  str: 17
  dex: 12
  con: 15
  int: 12
  wis: 13
  cha: 10
senses: []
languages:
  - Primordial (Ignan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Burning Hammer
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Bludgeoning damage plus `dmg:1d6` Fire damage.'
    attacks:
      - name: Burning Hammer attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Fire Aura
    entries:
      - At the end of each of the azer's turns, each creature of the azer's choice in a 5-foot Emanation originating from the azer takes `dmg:1d10` Fire damage unless the azer has the Incapacitated condition.
  - name: Illumination
    entries:
      - The azer sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.
cr: '2'
saves:
  str: 3
  dex: 1
  con: 4
  int: 1
  wis: 1
  cha: 0
alignment: lawful neutral
passive_perception: 11
```
