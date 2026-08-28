---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-red-dragon
name: Young Red Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.027Z'
---

```monster
slug: srd-5e_monster_young-red-dragon
name: Young Red Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 11
  cha: 19
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:1d6` fire damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
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
        bonus: 10
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - The dragon exhales fire in a 30-foot cone. Each creature in that area must make a `dc:17` Dexterity saving throw, taking `dmg:16d6` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '10'
saves:
  dex: 4
  con: 9
  wis: 4
  cha: 8
skills:
  perception: 8
  stealth: 4
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 18
```
