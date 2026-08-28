---
archivist: true
entity_type: monster
slug: srd-2024_monster_white-dragon-wyrmling
name: White Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_white-dragon-wyrmling
name: White Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8 + 10
speed:
  walk: 30
  fly: 60
  swim: 30
  burrow: 15
abilities:
  str: 14
  dex: 10
  con: 14
  int: 5
  wis: 10
  cha: 11
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage plus `dmg:1d4` Cold damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: slashing
        range:
          reach: 5
        extra_damage:
          dice: 1d4
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:5d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement.
cr: '2'
saves:
  str: 2
  dex: 2
  con: 2
  int: -3
  wis: 2
  cha: 0
skills:
  perception: 4
  stealth: 2
alignment: chaotic evil
passive_perception: 14
```
