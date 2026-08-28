---
archivist: true
entity_type: monster
slug: srd-2024_monster_ape
name: Ape
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_ape
name: Ape
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d8 + 6
speed:
  walk: 30
  climb: 30
abilities:
  str: 16
  dex: 14
  con: 14
  int: 6
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The ape makes two Fist attacks.
  - name: Fist
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Rock
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 25/50 ft. `dmg:2d6+STR` Bludgeoning damage.'
    attacks:
      - name: Rock (Recharge 6) attack
        type: ranged
        bonus: 5
        damage: 2d6+3
        damage_type: bludgeoning
        range:
          normal: 25
          long: 50
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 3
  dex: 2
  con: 2
  int: -2
  wis: 1
  cha: -2
skills:
  athletics: 5
  perception: 3
alignment: unaligned
passive_perception: 13
```
