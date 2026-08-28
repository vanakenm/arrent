---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-green-dragon
name: Young Green Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_young-green-dragon
name: Young Green Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10 + 48
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
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 2d6
          type: poison
  - name: Poison Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. Failure: `dmg:12d6` Poison damage. Success: Half damage.'
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
  str: 4
  dex: 4
  con: 3
  int: 3
  wis: 4
  cha: 2
skills:
  deception: 5
  perception: 7
  stealth: 4
alignment: lawful evil
passive_perception: 17
```
