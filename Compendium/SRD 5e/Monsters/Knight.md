---
archivist: true
entity_type: monster
slug: srd-5e_monster_knight
name: Knight
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_knight
name: Knight
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 18
    from:
      - plate
hp:
  average: 52
  formula: 8d8+16
speed:
  walk: 30
abilities:
  str: 16
  dex: 11
  con: 14
  int: 11
  wis: 11
  cha: 15
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The knight makes two melee attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 100/400 ft., one target. Hit: `dmg:1d10` piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 2
        damage_type: thunder
        range:
          normal: 100
          long: 400
  - name: Leadership
    entries:
      - For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.
reactions:
  - name: Parry
    entries:
      - The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits:
  - name: Brave
    entries:
      - The knight has advantage on saving throws against being frightened.
cr: '3'
saves:
  con: 4
  wis: 2
alignment: any alignment
passive_perception: 10
```
