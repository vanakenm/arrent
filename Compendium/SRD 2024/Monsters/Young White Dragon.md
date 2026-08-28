---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-white-dragon
name: Young White Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_young-white-dragon
name: Young White Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 123
  formula: 13d10 + 52
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
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d4+STR` Slashing damage plus `dmg:1d4` Cold damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d4+4
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d4
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. Failure: `dmg:9d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement.
cr: '6'
saves:
  str: 4
  dex: 3
  con: 4
  int: -2
  wis: 3
  cha: 1
skills:
  perception: 6
  stealth: 3
alignment: chaotic evil
passive_perception: 16
```
