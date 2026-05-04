---
archivist: true
entity_type: monster
slug: nightmare
name: Nightmare
compendium: SRD
---

```monster
name: Nightmare
size: Large
type: Fiend
alignment: neutral evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10+24
speed:
  walk: 60
  fly: 90
abilities:
  str: 18
  dex: 15
  con: 16
  int: 10
  wis: 13
  cha: 15
passive_perception: 11
languages:
  - understands Abyssal
  - Common
  - and Infernal but can't speak
damage_immunities:
  - fire
cr: '3'
traits:
  - name: Confer Fire Resistance
    entries:
      - The nightmare can grant resistance to fire damage to anyone riding it.
  - name: Illumination
    entries:
      - The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet.
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage plus `damage:2d6` fire damage.'
  - name: Ethereal Stride
    entries:
      - The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.
```
