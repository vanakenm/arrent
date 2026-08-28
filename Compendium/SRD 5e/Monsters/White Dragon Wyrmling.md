---
archivist: true
entity_type: monster
slug: srd-5e_monster_white-dragon-wyrmling
name: White Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_white-dragon-wyrmling
name: White Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8+10
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
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d4` cold damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Cold Breath
    entries:
      - The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:5d8` cold damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 14
```
