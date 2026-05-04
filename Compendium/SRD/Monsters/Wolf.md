---
archivist: true
entity_type: monster
slug: wolf
name: Wolf
compendium: SRD
---

```monster
name: Wolf
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
abilities:
  str: 12
  dex: 15
  con: 12
  int: 3
  wis: 12
  cha: 6
skills:
  perception: 3
  stealth: 4
passive_perception: 13
cr: 1/4
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
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:2d4+DEX` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
```
