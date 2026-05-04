---
archivist: true
entity_type: monster
slug: gnoll
name: Gnoll
compendium: SRD
---

```monster
name: Gnoll
size: Medium
type: Humanoid
subtype: gnoll
alignment: chaotic evil
ac:
  - ac: 15
    from:
      - hide armor, shield
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 14
  dex: 12
  con: 11
  int: 6
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Gnoll
cr: 1/2
traits:
  - name: Rampage
    entries:
      - When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d4+STR` piercing damage.'
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:1d8+STR` piercing damage if used with two hands to make a melee attack.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
