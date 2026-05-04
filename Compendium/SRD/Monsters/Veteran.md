---
archivist: true
entity_type: monster
slug: veteran
name: Veteran
compendium: SRD
---

```monster
name: Veteran
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 17
    from:
      - splint
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 30
abilities:
  str: 16
  dex: 13
  con: 14
  int: 10
  wis: 11
  cha: 10
skills:
  athletics: 5
  perception: 2
passive_perception: 12
languages:
  - any one language (usually Common)
cr: '3'
actions:
  - name: Multiattack
    entries:
      - The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands.'
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 100/400 ft., one target. Hit: `damage:1d10+DEX` piercing damage.'
```
