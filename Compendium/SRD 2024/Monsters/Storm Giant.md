---
archivist: true
entity_type: monster
slug: srd-2024_monster_storm-giant
name: Storm Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_storm-giant
name: Storm Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 230
  formula: 20d12 + 100
speed:
  walk: 50
  fly: 25
  swim: 50
abilities:
  str: 29
  dex: 14
  con: 20
  int: 16
  wis: 20
  cha: 18
senses:
  - darkvision 120 ft.
  - truesight 30 ft.
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - lightning
  - thunder
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Storm Sword or Thunderbolt in any combination.
  - name: Storm Sword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d6+STR` Slashing damage plus `dmg:3d8` Lightning damage.'
    attacks:
      - name: Storm Sword attack
        type: melee
        bonus: 14
        damage: 4d6+9
        damage_type: slashing
        range:
          reach: 10
  - name: Thunderbolt
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 500 ft. `dmg:2d12+STR` Lightning damage, and the target has the Blinded and Deafened conditions until the start of the giant''s next turn.'
    attacks:
      - name: Thunderbolt attack
        type: ranged
        bonus: 14
        damage: 2d12+9
        damage_type: lightning
        range:
          normal: 500
  - name: Lightning Storm
    entries:
      - 'Dexterity Saving Throw: `dc:18`, each creature in a 10-foot-radius, 40-foot-high Cylinder [Area of Effect]|XPHB|Cylinder originating from a point the giant can see within 500 feet. Failure: `dmg:10d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The giant casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`):

        - **At Will:** Detect Magic, Light
        - **1/Day Each:** Control Weather
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The giant can breathe air and water.
cr: '13'
saves:
  str: 14
  dex: 2
  con: 10
  int: 3
  wis: 10
  cha: 9
skills:
  arcana: 8
  athletics: 14
  history: 8
  perception: 10
alignment: chaotic good
passive_perception: 20
```
