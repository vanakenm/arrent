---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-white-dragon
name: Young White Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.028Z'
---

```monster
slug: srd-5e_monster_young-white-dragon
name: Young White Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
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
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:1d8` cold damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Cold Breath
    entries:
      - The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:10d8` cold damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement.
cr: '6'
saves:
  dex: 3
  con: 7
  wis: 3
  cha: 4
skills:
  perception: 6
  stealth: 3
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 16
```
