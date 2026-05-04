---
archivist: true
entity_type: monster
slug: giant-hyena
name: Giant Hyena
compendium: SRD
---

```monster
name: Giant Hyena
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 50
abilities:
  str: 16
  dex: 14
  con: 14
  int: 2
  wis: 12
  cha: 7
skills:
  perception: 3
passive_perception: 13
cr: '1'
traits:
  - name: Rampage
    entries:
      - When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage.'
```
