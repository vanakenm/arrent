---
archivist: true
entity_type: monster
slug: srd-2024_monster_mule
name: Mule
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_mule
name: Mule
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 40
abilities:
  str: 14
  dex: 10
  con: 13
  int: 2
  wis: 10
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Beast of Burden
    entries:
      - The mule counts as one size larger for the purpose of determining its carrying capacity.
cr: '0.125'
saves:
  str: 4
  dex: 0
  con: 1
  int: -4
  wis: 0
  cha: -3
alignment: unaligned
passive_perception: 10
```
