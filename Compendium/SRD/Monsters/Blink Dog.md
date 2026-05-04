---
archivist: true
entity_type: monster
slug: blink-dog
name: Blink Dog
compendium: SRD
---

```monster
name: Blink Dog
size: Medium
type: Fey
alignment: lawful good
ac:
  - ac: 13
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 40
abilities:
  str: 12
  dex: 17
  con: 12
  int: 10
  wis: 13
  cha: 11
skills:
  perception: 3
  stealth: 5
passive_perception: 10
languages:
  - Blink Dog
  - understands Sylvan but can't speak it
cr: 1/4
traits:
  - name: Keen Hearing and Smell
    entries:
      - The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Teleport (Recharge 4-6)
    entries:
      - The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.
```
