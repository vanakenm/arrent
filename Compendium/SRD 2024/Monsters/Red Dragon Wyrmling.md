---
archivist: true
entity_type: monster
slug: srd-2024_monster_red-dragon-wyrmling
name: Red Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.440Z'
---

```monster
slug: srd-2024_monster_red-dragon-wyrmling
name: Red Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 75
  formula: 10d8 + 30
speed:
  walk: 30
  fly: 60
  climb: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage plus `dmg:1d6` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: slashing
        range:
          reach: 5
        extra_damage:
          dice: 1d6
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:13`, each creature in a 15-foot Cone. Failure: `dmg:7d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 4
  dex: 2
  con: 3
  int: 1
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
alignment: chaotic evil
passive_perception: 14
```
