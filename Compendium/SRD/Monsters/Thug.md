---
archivist: true
entity_type: monster
slug: thug
name: Thug
compendium: SRD
---

```monster
name: Thug
size: Medium
type: Humanoid
subtype: any race
alignment: any non-good alignment
ac:
  - ac: 11
    from:
      - leather armor
hp:
  average: 32
  formula: 5d8+10
speed:
  walk: 30
abilities:
  str: 15
  dex: 11
  con: 14
  int: 10
  wis: 10
  cha: 11
skills:
  intimidation: 2
passive_perception: 10
languages:
  - any one language (usually Common)
cr: 1/2
traits:
  - name: Pack Tactics
    entries:
      - The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Multiattack
    entries:
      - The thug makes two melee attacks.
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d6+STR` bludgeoning damage.'
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 100/400 ft., one target. Hit: `damage:1d10` piercing damage.'
```
