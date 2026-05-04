---
archivist: true
entity_type: monster
slug: tribal-warrior
name: Tribal Warrior
compendium: SRD
---

```monster
name: Tribal Warrior
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 12
    from:
      - hide armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 13
  dex: 11
  con: 12
  int: 8
  wis: 11
  cha: 8
passive_perception: 10
languages:
  - any one language
cr: 1/8
traits:
  - name: Pack Tactics
    entries:
      - The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:1d8+STR` piercing damage if used with two hands to make a melee attack.'
```
