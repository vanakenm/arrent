---
archivist: true
entity_type: monster
slug: hell-hound
name: Hell Hound
compendium: SRD
---

```monster
name: Hell Hound
size: Medium
type: Fiend
alignment: lawful evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 45
  formula: 7d8+14
speed:
  walk: 50
abilities:
  str: 17
  dex: 12
  con: 14
  int: 6
  wis: 13
  cha: 6
skills:
  perception: 5
senses:
  - darkvision 60 ft.
passive_perception: 15
languages:
  - understands Infernal but can't speak it
damage_immunities:
  - fire
cr: '3'
traits:
  - name: Keen Hearing and Smell
    entries:
      - The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage plus `damage:2d6` fire damage.'
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The hound exhales fire in a 15-foot cone. Each creature in that area must make a `dc:12` Dexterity saving throw, taking `damage:6d6` fire damage on a failed save, or half as much damage on a successful one.
```
