---
archivist: true
entity_type: monster
slug: worg
name: Worg
compendium: SRD
---

```monster
name: Worg
size: Large
type: Monstrosity
alignment: neutral evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 50
abilities:
  str: 16
  dex: 13
  con: 13
  int: 7
  wis: 11
  cha: 8
skills:
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Goblin
  - Worg
cr: 1/2
traits:
  - name: Keen Hearing and Smell
    entries:
      - The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
```
