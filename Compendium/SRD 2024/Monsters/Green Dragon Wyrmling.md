---
archivist: true
entity_type: monster
slug: srd-2024_monster_green-dragon-wyrmling
name: Green Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_green-dragon-wyrmling
name: Green Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 38
  formula: 7d8 + 7
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
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage plus `dmg:1d6` Poison damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d10+2
        damage_type: slashing
        range:
          reach: 5
        extra_damage:
          dice: 1d6
          type: poison
  - name: Poison Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:6d6` Poison damage. Success: Half damage.'
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
  dex: 3
  con: 1
  int: 2
  wis: 2
  cha: 1
skills:
  perception: 4
  stealth: 3
alignment: lawful evil
passive_perception: 14
```
