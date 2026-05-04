---
archivist: true
entity_type: monster
slug: giant-shark
name: Giant Shark
compendium: SRD
---

```monster
name: Giant Shark
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12+55
speed:
  swim: 50
abilities:
  str: 23
  dex: 11
  con: 21
  int: 1
  wis: 10
  cha: 5
skills:
  perception: 3
senses:
  - blindsight 60 ft.
passive_perception: 13
cr: '5'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d10+STR` piercing damage.'
```
