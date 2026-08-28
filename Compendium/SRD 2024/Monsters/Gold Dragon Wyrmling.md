---
archivist: true
entity_type: monster
slug: srd-2024_monster_gold-dragon-wyrmling
name: Gold Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.427Z'
---

```monster
slug: srd-2024_monster_gold-dragon-wyrmling
name: Gold Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 60
  formula: 8d8 + 24
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 19
  dex: 14
  con: 17
  int: 14
  wis: 11
  cha: 16
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
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: slashing
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:13`, each creature in a 15-foot Cone. Failure: `dmg:4d10` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Weakening Breath
    entries:
      - 'Strength Saving Throw: `dc:13`, each creature that isn''t currently affected by this breath in a 15-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Test and subtracts 2 (`dice:1d4`) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '3'
saves:
  str: 4
  dex: 4
  con: 3
  int: 2
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 4
alignment: lawful good
passive_perception: 14
```
