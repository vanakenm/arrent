---
archivist: true
entity_type: monster
slug: hunter-shark
name: Hunter Shark
compendium: SRD
---

```monster
name: Hunter Shark
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  swim: 40
abilities:
  str: 18
  dex: 13
  con: 15
  int: 1
  wis: 10
  cha: 4
skills:
  perception: 2
senses:
  - darkvision 30 ft.
passive_perception: 12
cr: '2'
traits:
  - name: Blood Frenzy
    entries:
      - The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.
  - name: Water Breathing
    entries:
      - The shark can breathe only underwater.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
```
