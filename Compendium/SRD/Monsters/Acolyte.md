---
archivist: true
entity_type: monster
slug: acolyte
name: Acolyte
compendium: SRD
---

```monster
name: Acolyte
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 10
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 14
  cha: 11
skills:
  medicine: 4
  religion: 2
passive_perception: 12
languages:
  - any one language (usually Common)
cr: 1/4
traits:
  - name: Spellcasting
    entries:
      - |-
        The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). The acolyte has following cleric spells prepared:

        * Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (3 slots): bless, cure wounds, sanctuary
actions:
  - name: Club
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4` bludgeoning damage.'
```
