---
archivist: true
entity_type: monster
slug: giant-fire-beetle
name: Giant Fire Beetle
compendium: SRD
---

```monster
name: Giant Fire Beetle
size: Small
type: Beast
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 4
  formula: 1d6+1
speed:
  walk: 30
abilities:
  str: 8
  dex: 10
  con: 12
  int: 1
  wis: 7
  cha: 3
senses:
  - blindsight 30 ft.
passive_perception: 8
cr: '0'
traits:
  - name: Illumination
    entries:
      - The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft..
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
```
