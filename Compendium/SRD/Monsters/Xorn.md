---
archivist: true
entity_type: monster
slug: xorn
name: Xorn
compendium: SRD
---

```monster
name: Xorn
size: Medium
type: Elemental
alignment: neutral
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 73
  formula: 7d8+42
speed:
  walk: 20
  burrow: 20
abilities:
  str: 17
  dex: 10
  con: 22
  int: 11
  wis: 10
  cha: 11
skills:
  perception: 6
  stealth: 3
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
passive_perception: 16
languages:
  - Terran
damage_resistances:
  - piercing and slashing from nonmagical attacks not made with adamantine weapons
cr: '5'
traits:
  - name: Earth Glide
    entries:
      - The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.
  - name: Stone Camouflage
    entries:
      - The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
  - name: Treasure Sense
    entries:
      - The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.
actions:
  - name: Multiattack
    entries:
      - The xorn makes three claw attacks and one bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d6+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
```
