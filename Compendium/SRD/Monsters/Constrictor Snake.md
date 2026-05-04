---
archivist: true
entity_type: monster
slug: constrictor-snake
name: Constrictor Snake
compendium: SRD
---

```monster
name: Constrictor Snake
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 13
  formula: 2d10+2
speed:
  walk: 30
  swim: 30
abilities:
  str: 15
  dex: 14
  con: 12
  int: 1
  wis: 10
  cha: 3
senses:
  - blindsight 10 ft.
passive_perception: 10
cr: 1/4
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d6+STR` piercing damage.'
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d8+STR` bludgeoning damage, and the target is grappled (escape `dc:14`). Until this grapple ends, the creature is restrained, and the snake can''t constrict another target.'
```
