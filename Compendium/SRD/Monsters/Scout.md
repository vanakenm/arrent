---
archivist: true
entity_type: monster
slug: scout
name: Scout
compendium: SRD
---

```monster
name: Scout
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 13
    from:
      - leather armor
hp:
  average: 16
  formula: 3d8+3
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 11
  wis: 13
  cha: 11
skills:
  nature: 4
  perception: 5
  stealth: 6
  survival: 5
passive_perception: 15
languages:
  - any one language (usually Common)
cr: 1/2
traits:
  - name: Keen Hearing and Sight
    entries:
      - The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.
actions:
  - name: Multiattack
    entries:
      - The scout makes two melee attacks or two ranged attacks.
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
