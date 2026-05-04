---
archivist: true
entity_type: monster
slug: red-dragon-wyrmling
name: Red Dragon Wyrmling
compendium: SRD
---

```monster
name: Red Dragon Wyrmling
size: Medium
type: Dragon
alignment: chaotic evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 75
  formula: 10d8+30
speed:
  walk: 30
  fly: 60
  climb: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 2
  con: 5
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
  - fire
cr: '4'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage plus `damage:1d6` fire damage.'
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The dragon exhales fire in a 15-foot cone. Each creature in that area must make a `dc:13` Dexterity saving throw, taking `damage:7d6` fire damage on a failed save, or half as much damage on a successful one.
```
