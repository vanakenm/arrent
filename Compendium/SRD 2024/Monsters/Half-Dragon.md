---
archivist: true
entity_type: monster
slug: srd-2024_monster_half-dragon
name: Half-Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_half-dragon
name: Half-Dragon
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 105
  formula: 14d8 + 42
speed:
  walk: 40
abilities:
  str: 19
  dex: 14
  con: 16
  int: 10
  wis: 15
  cha: 14
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The half-dragon makes two Claw attacks.
  - name: Leap
    entries:
      - The half-dragon jumps up to 30 feet by spending 10 feet of movement.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d4+STR` Slashing damage plus `dmg:2d6` damage of the type chosen for the Draconic Origin trait.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 1d4+4
        damage_type: slashing
        range:
          reach: 10
  - name: Dragon's Breath
    entries:
      - 'Dexterity Saving Throw: `dc:14`, each creature in a 30-foot Cone. Failure: `dmg:8d6` damage of the type chosen for the Draconic Origin trait. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Draconic Origin
    entries:
      - 'The half-dragon is related to a type of dragon associated with one of the following damage types (DM''s choice): Acid, Cold, Fire, Lightning, or Poison. This choice affects other aspects of the stat block.'
cr: '5'
saves:
  str: 4
  dex: 5
  con: 3
  int: 0
  wis: 5
  cha: 2
skills:
  athletics: 7
  perception: 5
  stealth: 5
alignment: neutral
passive_perception: 15
```
