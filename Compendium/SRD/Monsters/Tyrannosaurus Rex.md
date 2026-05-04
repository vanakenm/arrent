---
archivist: true
entity_type: monster
slug: tyrannosaurus-rex
name: Tyrannosaurus Rex
compendium: SRD
---

```monster
name: Tyrannosaurus Rex
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 136
  formula: 13d12+52
speed:
  walk: 50
abilities:
  str: 25
  dex: 10
  con: 19
  int: 2
  wis: 12
  cha: 9
skills:
  perception: 4
passive_perception: 14
cr: '8'
actions:
  - name: Multiattack
    entries:
      - 'The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can''t make both attacks against the same target.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:4d12+STR` piercing damage. If the target is a Medium or smaller creature, it is grappled (escape `dc:17`). Until this grapple ends, the target is restrained, and the tyrannosaurus can''t bite another target.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d8+STR` bludgeoning damage.'
```
