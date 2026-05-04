---
archivist: true
entity_type: monster
slug: giant-eagle
name: Giant Eagle
compendium: SRD
---

```monster
name: Giant Eagle
size: Large
type: Beast
alignment: neutral good
ac:
  - ac: 13
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 10
  fly: 80
abilities:
  str: 16
  dex: 17
  con: 13
  int: 8
  wis: 14
  cha: 10
skills:
  perception: 4
passive_perception: 14
languages:
  - Giant Eagle
  - understands Common and Auran but can't speak
cr: '1'
traits:
  - name: Keen Sight
    entries:
      - The eagle has advantage on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Multiattack
    entries:
      - 'The eagle makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
