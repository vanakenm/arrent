---
archivist: true
entity_type: monster
slug: srd-5e_monster_black-dragon-wyrmling
name: Black Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.982Z'
---

```monster
slug: srd-5e_monster_black-dragon-wyrmling
name: Black Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8+6
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 15
  dex: 14
  con: 13
  int: 10
  wis: 11
  cha: 13
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d4` acid damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Acid Breath
    entries:
      - The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a `dc:11` Dexterity saving throw, taking `dmg:5d8` acid damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '2'
saves:
  dex: 4
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 4
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 14
```
