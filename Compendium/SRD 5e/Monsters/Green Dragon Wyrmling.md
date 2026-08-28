---
archivist: true
entity_type: monster
slug: srd-5e_monster_green-dragon-wyrmling
name: Green Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_green-dragon-wyrmling
name: Green Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 38
  formula: 7d8+7
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 14
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
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d6` poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Poison Breath
    entries:
      - The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:6d6` poison damage on a failed save, or half as much damage on a successful one.
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
  dex: 3
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 3
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 14
```
