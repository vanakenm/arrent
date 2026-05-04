---
archivist: true
entity_type: monster
slug: panther
name: Panther
compendium: SRD
---

```monster
name: Panther
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 13
  formula: 3d8
speed:
  walk: 50
  climb: 40
abilities:
  str: 14
  dex: 15
  con: 10
  int: 3
  wis: 14
  cha: 7
skills:
  perception: 4
  stealth: 6
passive_perception: 14
cr: 1/4
traits:
  - name: Keen Smell
    entries:
      - The panther has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pounce
    entries:
      - If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` slashing damage.'
```
