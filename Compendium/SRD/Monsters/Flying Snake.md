---
archivist: true
entity_type: monster
slug: flying-snake
name: Flying Snake
compendium: SRD
---

```monster
name: Flying Snake
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 14
hp:
  average: 5
  formula: 2d4
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 4
  dex: 18
  con: 11
  int: 2
  wis: 12
  cha: 5
senses:
  - blindsight 10 ft.
passive_perception: 11
cr: 1/8
traits:
  - name: Flyby
    entries:
      - The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: 1 piercing damage plus `damage:3d4` poison damage.'
```
