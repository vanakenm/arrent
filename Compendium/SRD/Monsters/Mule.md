---
archivist: true
entity_type: monster
slug: mule
name: Mule
compendium: SRD
---

```monster
name: Mule
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
abilities:
  str: 14
  dex: 10
  con: 13
  int: 2
  wis: 10
  cha: 5
passive_perception: 10
cr: 1/8
traits:
  - name: Beast of Burden
    entries:
      - The mule is considered to be a Large animal for the purpose of determining its carrying capacity.
  - name: Sure-Footed
    entries:
      - The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+STR` bludgeoning damage.'
```
