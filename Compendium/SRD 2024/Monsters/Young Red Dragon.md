---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-red-dragon
name: Young Red Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_young-red-dragon
name: Young Red Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10 + 85
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
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d6` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 10
        damage: 2d6+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d6
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:17`, each creature in a 30-foot Cone. Failure: `dmg:16d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '10'
saves:
  str: 6
  dex: 4
  con: 5
  int: 2
  wis: 4
  cha: 4
skills:
  perception: 8
  stealth: 4
alignment: chaotic evil
passive_perception: 18
```
