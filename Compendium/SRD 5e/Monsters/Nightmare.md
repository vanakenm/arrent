---
archivist: true
entity_type: monster
slug: srd-5e_monster_nightmare
name: Nightmare
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.008Z'
---

```monster
slug: srd-5e_monster_nightmare
name: Nightmare
edition: '2014'
source: SRD 5.1
size: large
type: fiend
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
senses: []
languages:
  - understands Abyssal
  - Common
  - and Infernal but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage plus `dmg:2d6` fire damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Ethereal Stride
    entries:
      - The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.
reactions: []
legendary_actions: []
traits:
  - name: Confer Fire Resistance
    entries:
      - The nightmare can grant resistance to fire damage to anyone riding it.
  - name: Illumination
    entries:
      - The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet.
cr: '3'
alignment: neutral evil
passive_perception: 11
```
