---
archivist: true
entity_type: monster
slug: giant-lizard
name: Giant Lizard
compendium: SRD
---

```monster
name: Giant Lizard
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 30
  climb: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 2
  wis: 10
  cha: 5
senses:
  - darkvision 30 ft.
passive_perception: 10
cr: 1/4
traits:
  - name: 'Variant: Hold Breath'
    entries:
      - The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)
  - name: 'Variant: Spider Climb'
    entries:
      - The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
```
