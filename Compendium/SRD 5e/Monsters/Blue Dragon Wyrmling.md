---
archivist: true
entity_type: monster
slug: srd-5e_monster_blue-dragon-wyrmling
name: Blue Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.982Z'
---

```monster
slug: srd-5e_monster_blue-dragon-wyrmling
name: Blue Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8+16
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 17
  dex: 10
  con: 15
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
  - lightning
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d6` lightning damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Lightning Breath
    entries:
      - The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a `dc:12` Dexterity saving throw, taking `dmg:4d10` lightning damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 14
```
