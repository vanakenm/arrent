---
archivist: true
entity_type: monster
slug: giant-owl
name: Giant Owl
compendium: SRD
---

```monster
name: Giant Owl
size: Large
type: Beast
alignment: neutral
ac:
  - ac: 12
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 5
  fly: 60
abilities:
  str: 13
  dex: 15
  con: 12
  int: 8
  wis: 13
  cha: 10
skills:
  perception: 5
  stealth: 4
senses:
  - darkvision 120 ft.
passive_perception: 15
languages:
  - Giant Owl
  - understands Common
  - Elvish
  - and Sylvan but can't speak
cr: 1/4
traits:
  - name: Flyby
    entries:
      - The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.
  - name: Keen Hearing and Sight
    entries:
      - The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.
actions:
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
