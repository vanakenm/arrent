---
archivist: true
entity_type: monster
slug: saber-toothed-tiger
name: Saber-Toothed Tiger
compendium: SRD
---

```monster
name: Saber-Toothed Tiger
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 52
  formula: 7d10+14
speed:
  walk: 40
abilities:
  str: 18
  dex: 14
  con: 15
  int: 3
  wis: 12
  cha: 8
skills:
  perception: 3
  stealth: 6
passive_perception: 13
cr: '2'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+5` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+5` slashing damage.'
```
