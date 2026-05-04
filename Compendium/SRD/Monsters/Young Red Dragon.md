---
archivist: true
entity_type: monster
slug: young-red-dragon
name: Young Red Dragon
compendium: SRD
---

```monster
name: Young Red Dragon
size: Large
type: Dragon
alignment: chaotic evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 11
  cha: 19
saves:
  dex: 4
  con: 9
  wis: 4
  cha: 8
skills:
  perception: 8
  stealth: 4
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 18
languages:
  - Common
  - Draconic
damage_immunities:
  - fire
cr: '10'
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:1d6` fire damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The dragon exhales fire in a 30-foot cone. Each creature in that area must make a `dc:17` Dexterity saving throw, taking `damage:16d6` fire damage on a failed save, or half as much damage on a successful one.
```
