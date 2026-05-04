---
archivist: true
entity_type: monster
slug: dire-wolf
name: Dire Wolf
compendium: SRD
---

```monster
name: Dire Wolf
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 37
  formula: 5d10+10
speed:
  walk: 50
abilities:
  str: 17
  dex: 15
  con: 15
  int: 3
  wis: 12
  cha: 7
skills:
  perception: 3
  stealth: 4
passive_perception: 13
cr: '1'
traits:
  - name: Keen Hearing and Smell
    entries:
      - The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
```
