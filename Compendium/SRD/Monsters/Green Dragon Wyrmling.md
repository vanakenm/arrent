---
archivist: true
entity_type: monster
slug: green-dragon-wyrmling
name: Green Dragon Wyrmling
compendium: SRD
---

```monster
name: Green Dragon Wyrmling
size: Medium
type: Dragon
alignment: lawful evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 38
  formula: 7d8+7
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 14
  wis: 11
  cha: 13
saves:
  dex: 3
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 3
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '2'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage plus `damage:1d6` poison damage.'
  - name: Poison Breath (Recharge 5-6)
    entries:
      - The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:6d6` poison damage on a failed save, or half as much damage on a successful one.
```
