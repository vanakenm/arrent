---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-green-dragon
name: Young Green Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.027Z'
---

```monster
slug: srd-5e_monster_young-green-dragon
name: Young Green Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10+48
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 19
  dex: 12
  con: 17
  int: 16
  wis: 13
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
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:2d6` poison damage.'
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
  - name: Poison Breath
    entries:
      - The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:12d6` poison damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '8'
saves:
  dex: 4
  con: 6
  wis: 4
  cha: 5
skills:
  deception: 5
  perception: 7
  stealth: 4
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 17
```
