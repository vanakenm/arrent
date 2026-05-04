---
archivist: true
entity_type: monster
slug: young-black-dragon
name: Young Black Dragon
compendium: SRD
---

```monster
name: Young Black Dragon
size: Large
type: Dragon
alignment: chaotic evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 127
  formula: 15d10+45
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 19
  dex: 14
  con: 17
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 5
  con: 6
  wis: 3
  cha: 5
skills:
  perception: 6
  stealth: 5
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 16
languages:
  - Common
  - Draconic
damage_immunities:
  - acid
cr: '7'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:1d8` acid damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Acid Breath (Recharge 5-6)
    entries:
      - The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a `dc:14` Dexterity saving throw, taking `damage:11d8` acid damage on a failed save, or half as much damage on a successful one.
```
