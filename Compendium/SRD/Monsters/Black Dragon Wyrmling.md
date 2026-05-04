---
archivist: true
entity_type: monster
slug: black-dragon-wyrmling
name: Black Dragon Wyrmling
compendium: SRD
---

```monster
name: Black Dragon Wyrmling
size: Medium
type: Dragon
alignment: chaotic evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8+6
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 15
  dex: 14
  con: 13
  int: 10
  wis: 11
  cha: 13
saves:
  dex: 4
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 4
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - acid
cr: '2'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage plus `damage:1d4` acid damage.'
  - name: Acid Breath (Recharge 5-6)
    entries:
      - The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a `dc:11` Dexterity saving throw, taking `damage:5d8` acid damage on a failed save, or half as much damage on a successful one.
```
