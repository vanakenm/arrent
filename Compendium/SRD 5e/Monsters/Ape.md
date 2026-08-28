---
archivist: true
entity_type: monster
slug: srd-5e_monster_ape
name: Ape
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.978Z'
---

```monster
slug: srd-5e_monster_ape
name: Ape
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
hp:
  average: 19
  formula: 3d8+6
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
      - The ape makes two fist attacks.
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 25/50 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          normal: 25
          long: 50
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
skills:
  athletics: 5
  perception: 3
alignment: unaligned
passive_perception: 13
```
