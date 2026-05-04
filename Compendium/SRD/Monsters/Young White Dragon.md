---
archivist: true
entity_type: monster
slug: young-white-dragon
name: Young White Dragon
compendium: SRD
---

```monster
name: Young White Dragon
size: Large
type: Dragon
alignment: chaotic evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 133
  formula: 14d10+56
speed:
  walk: 40
  fly: 80
  swim: 40
  burrow: 20
abilities:
  str: 18
  dex: 10
  con: 18
  int: 6
  wis: 11
  cha: 12
saves:
  dex: 3
  con: 7
  wis: 3
  cha: 4
skills:
  perception: 6
  stealth: 3
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 16
languages:
  - Common
  - Draconic
damage_immunities:
  - cold
cr: '6'
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement.
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:1d8` cold damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Cold Breath (Recharge 5-6)
    entries:
      - The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:10d8` cold damage on a failed save, or half as much damage on a successful one.
```
