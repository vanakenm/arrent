---
archivist: true
entity_type: monster
slug: young-green-dragon
name: Young Green Dragon
compendium: SRD
---

```monster
name: Young Green Dragon
size: Large
type: Dragon
alignment: lawful evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10+48
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 19
  dex: 12
  con: 17
  int: 16
  wis: 13
  cha: 15
saves:
  dex: 4
  con: 6
  wis: 4
  cha: 5
skills:
  deception: 5
  perception: 7
  stealth: 4
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 17
languages:
  - Common
  - Draconic
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '8'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:2d6` poison damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Poison Breath (Recharge 5-6)
    entries:
      - The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:12d6` poison damage on a failed save, or half as much damage on a successful one.
```
