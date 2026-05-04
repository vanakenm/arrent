---
archivist: true
entity_type: monster
slug: knight
name: Knight
compendium: SRD
---

```monster
name: Knight
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
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
saves:
  con: 4
  wis: 2
passive_perception: 10
languages:
  - any one language (usually Common)
cr: '3'
traits:
  - name: Brave
    entries:
      - The knight has advantage on saving throws against being frightened.
actions:
  - name: Multiattack
    entries:
      - The knight makes two melee attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 100/400 ft., one target. Hit: `damage:1d10` piercing damage.'
  - name: Leadership (Recharges after a Short or Long Rest)
    entries:
      - For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.
reactions:
  - name: Parry
    entries:
      - The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.
```
