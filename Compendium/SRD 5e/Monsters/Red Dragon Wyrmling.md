---
archivist: true
entity_type: monster
slug: srd-5e_monster_red-dragon-wyrmling
name: Red Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.012Z'
---

```monster
slug: srd-5e_monster_red-dragon-wyrmling
name: Red Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 75
  formula: 10d8+30
speed:
  walk: 30
  fly: 60
  climb: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d6` fire damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - The dragon exhales fire in a 15-foot cone. Each creature in that area must make a `dc:13` Dexterity saving throw, taking `dmg:7d6` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  dex: 2
  con: 5
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 14
```
