---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-blue-dragon
name: Young Blue Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.026Z'
---

```monster
slug: srd-5e_monster_young-blue-dragon
name: Young Blue Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 152
  formula: 16d10+64
speed:
  walk: 40
  fly: 80
  burrow: 40
abilities:
  str: 21
  dex: 10
  con: 19
  int: 14
  wis: 13
  cha: 17
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:1d10` lightning damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 9
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
        bonus: 9
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Lightning Breath
    entries:
      - The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:16` Dexterity saving throw, taking `dmg:10d10` lightning damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  dex: 4
  con: 8
  wis: 5
  cha: 7
skills:
  perception: 9
  stealth: 4
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 19
```
