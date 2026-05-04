---
archivist: true
entity_type: monster
slug: lion
name: Lion
compendium: SRD
---

```monster
name: Lion
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 50
abilities:
  str: 17
  dex: 15
  con: 13
  int: 3
  wis: 12
  cha: 8
skills:
  perception: 3
  stealth: 6
passive_perception: 13
cr: '1'
traits:
  - name: Keen Smell
    entries:
      - The lion has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pack Tactics
    entries:
      - The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Pounce
    entries:
      - If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.
  - name: Running Leap
    entries:
      - With a 10-foot running start, the lion can long jump up to 25 ft..
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
```
