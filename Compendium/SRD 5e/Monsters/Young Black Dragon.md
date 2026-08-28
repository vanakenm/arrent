---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-black-dragon
name: Young Black Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.026Z'
---

```monster
slug: srd-5e_monster_young-black-dragon
name: Young Black Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 127
  formula: 15d10+45
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 19
  dex: 14
  con: 17
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:1d8` acid damage.'
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
  - name: Acid Breath
    entries:
      - The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a `dc:14` Dexterity saving throw, taking `dmg:11d8` acid damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '7'
saves:
  dex: 5
  con: 6
  wis: 3
  cha: 5
skills:
  perception: 6
  stealth: 5
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 16
```
