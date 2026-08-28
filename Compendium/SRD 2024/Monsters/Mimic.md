---
archivist: true
entity_type: monster
slug: srd-2024_monster_mimic
name: Mimic
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_mimic
name: Mimic
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8 + 18
speed:
  walk: 20
abilities:
  str: 17
  dex: 12
  con: 15
  int: 5
  wis: 13
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities:
  - prone
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: +5 (with Advantage if the target is Grappled by the mimic), reach 5 ft. `dmg:1d8+STR` Piercing damage—or `dmg:2d8+STR` Piercing damage if the target is Grappled by the mimic—plus `dmg:1d8` Acid damage.'
  - name: Shape-Shift
    entries:
      - The mimic shape-shifts to resemble a Medium or Small object while retaining its game statistics, or it returns to its true blob form. Any equipment it is wearing or carrying isn't transformed.
  - name: Pseudopod
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Bludgeoning damage plus `dmg:1d8` Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:STR`). Ability checks made to escape this grapple have Disadvantage.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Adhesive (Object Form Only)
    entries:
      - The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic has the Grappled condition (escape `dc:STR`). Ability checks made to escape this grapple have Disadvantage.
cr: '2'
saves:
  str: 3
  dex: 1
  con: 2
  int: -3
  wis: 1
  cha: -1
skills:
  stealth: 5
alignment: neutral
passive_perception: 11
```
