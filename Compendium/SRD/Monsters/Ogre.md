---
archivist: true
entity_type: monster
slug: ogre
name: Ogre
compendium: SRD
---

```monster
name: Ogre
size: Large
type: Giant
alignment: chaotic evil
ac:
  - ac: 11
    from:
      - hide armor
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 40
abilities:
  str: 19
  dex: 8
  con: 16
  int: 5
  wis: 7
  cha: 7
senses:
  - darkvision 60 ft.
passive_perception: 8
languages:
  - Common
  - Giant
cr: '2'
actions:
  - name: Greatclub
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:2d6+STR` piercing damage.'
```
