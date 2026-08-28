---
archivist: true
entity_type: race
slug: srd-2024_race_orc
name: Orc
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.120Z'
---

```race
slug: srd-2024_race_orc
name: Orc
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
    description: Medium (about 6–7 feet tall)
  - name: Speed
    description: 30 feet
  - name: Adrenaline Rush
    description: |-
      You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus.

      You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.
    action_cost: bonus-action
    id: adrenaline-rush
    resources:
      - id: orc:adrenaline-rush
        name: Adrenaline Rush
        max_formula: prof
        reset: short-rest
  - name: Darkvision
    description: You have Darkvision with a range of 120 feet.
  - name: Relentless Endurance
    description: When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest.
```
