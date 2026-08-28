---
archivist: true
entity_type: monster
slug: srd-2024_monster_black-dragon-wyrmling
name: Black Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.410Z'
---

```monster
slug: srd-2024_monster_black-dragon-wyrmling
name: Black Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8 + 6
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
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Slashing damage plus `dmg:1d4` Acid damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: slashing
        range:
          reach: 5
        extra_damage:
          dice: 1d4
          type: acid
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:11`, each creature in a 15-foot-long, 5-foot-wide Line. Failure: `dmg:5d8` Acid damage. Success: Half damage.'
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
  str: 2
  dex: 4
  con: 1
  int: 0
  wis: 2
  cha: 1
skills:
  perception: 4
  stealth: 4
alignment: chaotic evil
passive_perception: 14
```
