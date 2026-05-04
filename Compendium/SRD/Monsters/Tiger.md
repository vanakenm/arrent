---
archivist: true
entity_type: monster
slug: tiger
name: Tiger
compendium: SRD
---

```monster
name: Tiger
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 37
  formula: 5d10+10
speed:
  walk: 40
abilities:
  str: 17
  dex: 15
  con: 14
  int: 3
  wis: 12
  cha: 8
skills:
  perception: 3
  stealth: 6
senses:
  - darkvision 60 ft.
passive_perception: 13
cr: '1'
traits:
  - name: Keen Smell
    entries:
      - The tiger has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pounce
    entries:
      - If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage.'
```
