---
archivist: true
entity_type: background
slug: srd-2024_background_soldier
name: Soldier
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.129Z'
---

```background
slug: srd-2024_background_soldier
name: Soldier
edition: '2024'
source: SRD 5.2
description: ''
skill_proficiencies:
  - athletics
  - intimidation
tool_proficiencies: []
language_proficiencies:
  - kind: fixed
    languages:
      - common
equipment:
  - kind: choice
    options:
      - label: Spear, Shortbow, 20 Arrows, Gaming Set (Dice Set), Healer's Kit, Quiver, Traveler's Clothes, and 14 GP
        grants:
          - item: spear
          - item: shortbow
          - gold: 14
      - label: 50 GP
        grants:
          - gold: 50
feature:
  name: Background Feature
  description: (No description provided.)
ability_score_increases:
  pool:
    - str
    - dex
    - con
origin_feat: '[[SRD 2024/Feats/Savage Attacker]]'
suggested_characteristics: null
choices:
  - kind: ability-points
    id: abilities
    points: 3
    max_per: 2
    pool:
      - str
      - dex
      - con
  - kind: select-proficiency
    id: tool
    count: 1
    domain: tool
  - kind: select-proficiency
    id: languages
    count: 2
    domain: language
```
