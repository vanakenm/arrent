---
archivist: true
entity_type: monster
slug: srd-2024_monster_bugbear-stalker
name: Bugbear Stalker
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.412Z'
---

```monster
slug: srd-2024_monster_bugbear-stalker
name: Bugbear Stalker
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 65
  formula: 10d8 + 20
speed:
  walk: 30
abilities:
  str: 17
  dex: 14
  con: 14
  int: 11
  wis: 12
  cha: 11
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
  - name: Multiattack
    entries:
      - The bugbear makes two Javelin or Morningstar attacks.
  - name: Quick Grapple
    entries:
      - 'Dexterity Saving Throw: `dc:13`, one Medium or smaller creature the bugbear can see within 10 feet. Failure: The target has the Grappled condition (escape `dc:STR`).'
  - name: Javelin
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 10 ft. or range 30/120 ft. `dmg:3d6+STR` Piercing damage.'
    attacks:
      - name: Javelin attack
        type: ranged
        bonus: 5
        damage: 3d6+3
        damage_type: piercing
        range:
          reach: 10
          normal: 30
          long: 120
  - name: Morningstar
    entries:
      - 'Melee Attack Roll: +5 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. `dmg:2d8+STR` Piercing damage.'
reactions: []
legendary_actions: []
traits:
  - name: Abduct
    entries:
      - The bugbear needn't spend extra movement to move a creature it is grappling.
cr: '3'
saves:
  str: 3
  dex: 2
  con: 4
  int: 0
  wis: 3
  cha: 0
skills:
  stealth: 6
  survival: 3
alignment: chaotic evil
passive_perception: 11
```
