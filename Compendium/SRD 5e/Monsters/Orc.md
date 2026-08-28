---
archivist: true
entity_type: monster
slug: srd-5e_monster_orc
name: Orc
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.009Z'
---

```monster
slug: srd-5e_monster_orc
name: Orc
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 13
    from:
      - hide armor
hp:
  average: 15
  formula: 2d8+6
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 16
  int: 7
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Orc
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d12+STR` slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 5
        damage: 1d12
        damage_type: thunder
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:CON+PB`, reach 5 ft. or range 30/120 ft., one target. Hit: `dmg:1d6+CON` piercing damage.'
    attacks:
      - name: Javelin Melee attack
        type: ranged
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
          normal: 30
          long: 120
      - name: Javelin Ranged attack
        type: ranged
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Aggressive
    entries:
      - As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.
cr: '0.5'
skills:
  intimidation: 2
alignment: chaotic evil
passive_perception: 10
```
