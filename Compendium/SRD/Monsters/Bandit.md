---
archivist: true
entity_type: monster
slug: bandit
name: Bandit
compendium: SRD
---

```monster
name: Bandit
size: Medium
type: Humanoid
subtype: any race
alignment: any non-lawful alignment
ac:
  - ac: 12
    from:
      - leather armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 10
passive_perception: 10
languages:
  - any one language (usually Common)
cr: 1/8
actions:
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` slashing damage.'
  - name: Light Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 80/320 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
