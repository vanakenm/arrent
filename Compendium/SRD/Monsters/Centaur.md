---
archivist: true
entity_type: monster
slug: centaur
name: Centaur
compendium: SRD
---

```monster
name: Centaur
size: Large
type: Monstrosity
alignment: neutral good
ac:
  - ac: 12
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 50
abilities:
  str: 18
  dex: 14
  con: 14
  int: 9
  wis: 13
  cha: 11
skills:
  athletics: 6
  perception: 3
  survival: 3
passive_perception: 13
languages:
  - Elvish
  - Sylvan
cr: '2'
traits:
  - name: Charge
    entries:
      - If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra `damage:3d6` piercing damage.
actions:
  - name: Multiattack
    entries:
      - 'The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.'
  - name: Pike
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
