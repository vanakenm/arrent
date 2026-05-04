---
archivist: true
entity_type: monster
slug: reef-shark
name: Reef Shark
compendium: SRD
---

```monster
name: Reef Shark
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8+1
speed:
  swim: 40
abilities:
  str: 14
  dex: 13
  con: 13
  int: 1
  wis: 10
  cha: 4
skills:
  perception: 2
senses:
  - blindsight 30 ft.
passive_perception: 12
cr: 1/2
traits:
  - name: Pack Tactics
    entries:
      - The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Water Breathing
    entries:
      - The shark can breathe only underwater.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
```
