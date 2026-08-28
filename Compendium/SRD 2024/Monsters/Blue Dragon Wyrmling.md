---
archivist: true
entity_type: monster
slug: srd-2024_monster_blue-dragon-wyrmling
name: Blue Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_blue-dragon-wyrmling
name: Blue Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 65
  formula: 10d8 + 20
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 17
  dex: 10
  con: 15
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
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage plus `dmg:1d6` Lightning damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: slashing
        range:
          reach: 5
        extra_damage:
          dice: 1d6
          type: lightning
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:12`, each creature in a 30-foot-long, 5-foot-wide Line. Failure: `dmg:6d6` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: 2
  con: 2
  int: 1
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
alignment: lawful evil
passive_perception: 14
```
