---
archivist: true
entity_type: monster
slug: merfolk
name: Merfolk
compendium: SRD
---

```monster
name: Merfolk
size: Medium
type: Humanoid
subtype: merfolk
alignment: neutral
ac:
  - ac: 11
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 10
  swim: 40
abilities:
  str: 10
  dex: 13
  con: 12
  int: 11
  wis: 11
  cha: 12
skills:
  perception: 2
passive_perception: 12
languages:
  - Aquan
  - Common
cr: 1/8
traits:
  - name: Amphibious
    entries:
      - The merfolk can breathe air and water.
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d6` piercing damage, or `damage:1d8` piercing damage if used with two hands to make a melee attack.'
```
