---
archivist: true
entity_type: monster
slug: giant-constrictor-snake
name: Giant Constrictor Snake
compendium: SRD
---

```monster
name: Giant Constrictor Snake
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 60
  formula: 8d12+8
speed:
  walk: 30
  swim: 30
abilities:
  str: 19
  dex: 14
  con: 12
  int: 1
  wis: 10
  cha: 3
skills:
  perception: 2
senses:
  - blindsight 10 ft.
passive_perception: 12
cr: '2'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one creature. Hit: `damage:2d6+STR` piercing damage.'
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:2d8+STR` bludgeoning damage, and the target is grappled (escape `dc:16`). Until this grapple ends, the creature is restrained, and the snake can''t constrict another target.'
```
