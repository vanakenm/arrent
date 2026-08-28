---
archivist: true
entity_type: monster
slug: srd-5e_monster_frost-giant
name: Frost Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.992Z'
---

```monster
slug: srd-5e_monster_frost-giant
name: Frost Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 15
    from:
      - patchwork armor
hp:
  average: 138
  formula: 12d12+60
speed:
  walk: 40
abilities:
  str: 23
  dex: 9
  con: 21
  int: 9
  wis: 10
  cha: 12
senses: []
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two greataxe attacks.
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d12+STR` slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 9
        damage: 3d12
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:4d10+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 9
        damage: 4d10
        damage_type: thunder
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits: []
cr: '8'
saves:
  con: 8
  wis: 3
  cha: 4
skills:
  athletics: 9
  perception: 3
subtype: Giants
alignment: neutral evil
passive_perception: 13
```
