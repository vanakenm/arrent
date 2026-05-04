---
archivist: true
entity_type: monster
slug: giant-vulture
name: Giant Vulture
compendium: SRD
---

```monster
name: Giant Vulture
size: Large
type: Beast
alignment: neutral evil
ac:
  - ac: 10
hp:
  average: 22
  formula: 3d10+6
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 10
  con: 15
  int: 6
  wis: 12
  cha: 7
skills:
  perception: 3
passive_perception: 13
languages:
  - understands Common but can't speak
cr: '1'
traits:
  - name: Keen Sight and Smell
    entries:
      - The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.
  - name: Pack Tactics
    entries:
      - The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Multiattack
    entries:
      - 'The vulture makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` piercing damage.'
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
