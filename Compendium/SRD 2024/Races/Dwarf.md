---
archivist: true
entity_type: race
slug: srd-2024_race_dwarf
name: Dwarf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.119Z'
---

```race
slug: srd-2024_race_dwarf
name: Dwarf
edition: '2024'
source: SRD 5.2
size: medium
speed:
  walk: 30
vision:
  darkvision: 120
description: ''
ability_score_increases: []
age: ''
alignment: ''
languages:
  fixed: []
variant_label: base
traits:
  - name: Size
    description: 'Medium (about 4–5 feet tall) '
  - name: Speed
    description: 30 feet
  - name: Darkvision
    description: You have Darkvision with a range of 120 feet.
  - name: Dwarven Resilience
    description: You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.
  - name: Dwarven Toughness
    description: Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.
  - name: Stonecunning
    description: |-
      As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked.

      You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.
    action_cost: bonus-action
    id: stonecunning
    resources:
      - id: dwarf:stonecunning
        name: Stonecunning
        max_formula: prof
        reset: long-rest
```
