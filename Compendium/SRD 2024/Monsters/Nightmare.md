---
archivist: true
entity_type: monster
slug: srd-2024_monster_nightmare
name: Nightmare
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_nightmare
name: Nightmare
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10 + 24
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
  - Understands Abyssal
  - Common
  - And Infernal but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage plus `dmg:3d6` Fire damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 2d8+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Ethereal Stride
    entries:
      - The nightmare and up to three willing creatures within 5 feet of it teleport to the Ethereal Plane from the Material Plane or vice versa.
reactions: []
legendary_actions: []
traits:
  - name: Confer Fire Resistance
    entries:
      - The nightmare can grant Resistance to Fire damage to a rider while it is on the nightmare.
  - name: Illumination
    entries:
      - The nightmare sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.
cr: '3'
saves:
  str: 4
  dex: 2
  con: 3
  int: 0
  wis: 1
  cha: 2
alignment: neutral evil
passive_perception: 11
```
