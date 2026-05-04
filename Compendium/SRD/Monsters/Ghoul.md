---
archivist: true
entity_type: monster
slug: ghoul
name: Ghoul
compendium: SRD
---

```monster
name: Ghoul
size: Medium
type: Undead
alignment: chaotic evil
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 13
  dex: 15
  con: 10
  int: 7
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Common
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
cr: '1'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:CON`, reach 5 ft., one creature. Hit: `damage:2d6+DEX` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:2d4+DEX` slashing damage. If the target is a creature other than an elf or undead, it must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
```
