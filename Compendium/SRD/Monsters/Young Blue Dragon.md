---
archivist: true
entity_type: monster
slug: young-blue-dragon
name: Young Blue Dragon
compendium: SRD
---

```monster
name: Young Blue Dragon
size: Large
type: Dragon
alignment: lawful evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 152
  formula: 16d10+64
speed:
  walk: 40
  fly: 80
  burrow: 40
abilities:
  str: 21
  dex: 10
  con: 19
  int: 14
  wis: 13
  cha: 17
saves:
  dex: 4
  con: 8
  wis: 5
  cha: 7
skills:
  perception: 9
  stealth: 4
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 19
languages:
  - Common
  - Draconic
damage_immunities:
  - lightning
cr: '9'
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:1d10` lightning damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Lightning Breath (Recharge 5-6)
    entries:
      - The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:16` Dexterity saving throw, taking `damage:10d10` lightning damage on a failed save, or half as much damage on a successful one.
```
