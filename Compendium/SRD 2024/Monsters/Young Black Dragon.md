---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-black-dragon
name: Young Black Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_young-black-dragon
name: Young Black Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 127
  formula: 15d10 + 45
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
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d4+STR` Slashing damage plus `dmg:1d6` Acid damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d4+4
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d6
          type: acid
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:14`, each creature in a 30-foot-long, 5-foot-wide Line. Failure: `dmg:14d6` Acid damage. Success: Half damage.'
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
  str: 4
  dex: 5
  con: 3
  int: 1
  wis: 3
  cha: 2
skills:
  perception: 6
  stealth: 5
alignment: chaotic evil
passive_perception: 16
```
