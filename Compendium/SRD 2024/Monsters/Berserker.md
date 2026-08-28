---
archivist: true
entity_type: monster
slug: srd-2024_monster_berserker
name: Berserker
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.410Z'
---

```monster
slug: srd-2024_monster_berserker
name: Berserker
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 67
  formula: 9d8 + 27
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 17
  int: 9
  wis: 11
  cha: 9
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greataxe
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d12+STR` Slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 5
        damage: 1d12+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Bloodied Frenzy
    entries:
      - While Bloodied, the berserker has Advantage on attack rolls and saving throws.
cr: '2'
saves:
  str: 3
  dex: 1
  con: 3
  int: -1
  wis: 0
  cha: -1
alignment: neutral
passive_perception: 10
```
