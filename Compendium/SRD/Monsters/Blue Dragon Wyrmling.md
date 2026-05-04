---
archivist: true
entity_type: monster
slug: blue-dragon-wyrmling
name: Blue Dragon Wyrmling
compendium: SRD
---

```monster
name: Blue Dragon Wyrmling
size: Medium
type: Dragon
alignment: lawful evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8+16
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 17
  dex: 10
  con: 15
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 4
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
  - lightning
cr: '3'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage plus `damage:1d6` lightning damage.'
  - name: Lightning Breath (Recharge 5-6)
    entries:
      - The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a `dc:12` Dexterity saving throw, taking `damage:4d10` lightning damage on a failed save, or half as much damage on a successful one.
```
