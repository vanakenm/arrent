---
archivist: true
entity_type: monster
slug: homunculus
name: Homunculus
compendium: SRD
---

```monster
name: Homunculus
size: Tiny
type: Construct
alignment: neutral
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 5
  formula: 2d4
speed:
  walk: 20
  fly: 40
abilities:
  str: 4
  dex: 15
  con: 11
  int: 10
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - understands the languages of its creator but can't speak
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - poisoned
cr: '0'
traits:
  - name: Telepathic Bond
    entries:
      - While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (`dice:1d10`) minutes and unconscious while poisoned in this way.'
```
