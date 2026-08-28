---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-blue-dragon
name: Young Blue Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_young-blue-dragon
name: Young Blue Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 152
  formula: 16d10 + 64
speed:
  walk: 40
  fly: 80
  burrow: 20
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
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d10` Lightning damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 9
        damage: 2d6+5
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d6
          type: lightning
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:16`, each creature in a 60-foot-long, 5-foot-wide Line. Failure: `dmg:10d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  str: 5
  dex: 4
  con: 4
  int: 2
  wis: 5
  cha: 3
skills:
  perception: 9
  stealth: 4
alignment: lawful evil
passive_perception: 19
```
