---
archivist: true
entity_type: monster
slug: owl
name: Owl
compendium: SRD
---

```monster
name: Owl
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 5
  fly: 60
abilities:
  str: 3
  dex: 13
  con: 8
  int: 2
  wis: 12
  cha: 7
skills:
  perception: 3
  stealth: 3
senses:
  - darkvision 120 ft.
passive_perception: 13
cr: '0'
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
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: 1 slashing damage.'
```
