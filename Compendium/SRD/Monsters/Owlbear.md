---
archivist: true
entity_type: monster
slug: owlbear
name: Owlbear
compendium: SRD
---

```monster
name: Owlbear
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 40
abilities:
  str: 20
  dex: 12
  con: 17
  int: 3
  wis: 12
  cha: 7
skills:
  perception: 3
senses:
  - darkvision 60 ft.
passive_perception: 13
cr: '3'
traits:
  - name: Keen Sight and Smell
    entries:
      - The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.
actions:
  - name: Multiattack
    entries:
      - 'The owlbear makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d10+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
```
