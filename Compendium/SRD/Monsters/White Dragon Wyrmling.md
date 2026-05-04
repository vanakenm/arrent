---
archivist: true
entity_type: monster
slug: white-dragon-wyrmling
name: White Dragon Wyrmling
compendium: SRD
---

```monster
name: White Dragon Wyrmling
size: Medium
type: Dragon
alignment: chaotic evil
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8+10
speed:
  walk: 30
  fly: 60
  swim: 30
  burrow: 15
abilities:
  str: 14
  dex: 10
  con: 14
  int: 5
  wis: 10
  cha: 11
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - cold
cr: '2'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage plus `damage:1d4` cold damage.'
  - name: Cold Breath (Recharge 5-6)
    entries:
      - The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:5d8` cold damage on a failed save, or half as much damage on a successful one.
```
