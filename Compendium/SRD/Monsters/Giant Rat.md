---
archivist: true
entity_type: monster
slug: giant-rat
name: Giant Rat
compendium: SRD
---

```monster
name: Giant Rat
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 11
  int: 2
  wis: 10
  cha: 4
senses:
  - darkvision 60 ft.
passive_perception: 10
cr: 1/8
traits:
  - name: Keen Smell
    entries:
      - The rat has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pack Tactics
    entries:
      - The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
```
