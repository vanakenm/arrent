---
archivist: true
entity_type: monster
slug: srd-2024_monster_bugbear-warrior
name: Bugbear Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.412Z'
---

```monster
slug: srd-2024_monster_bugbear-warrior
name: Bugbear Warrior
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8 + 6
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 13
  int: 8
  wis: 11
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Grab
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:DEX`).'
    attacks:
      - name: Grab attack
        type: melee
        bonus: 4
        damage: 2d6+2
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Light Hammer
    entries:
      - 'Melee or Ranged Attack Roll: +4 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. or range 20/60 ft. `dmg:3d4+STR` Bludgeoning damage.'
reactions: []
legendary_actions: []
traits:
  - name: Abduct
    entries:
      - The bugbear needn't spend extra movement to move a creature it is grappling.
cr: '1'
saves:
  str: 2
  dex: 2
  con: 1
  int: -1
  wis: 0
  cha: -1
skills:
  stealth: 6
  survival: 2
alignment: chaotic evil
passive_perception: 10
```
