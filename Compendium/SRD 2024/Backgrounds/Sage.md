---
archivist: true
entity_type: background
slug: srd-2024_background_sage
name: Sage
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.128Z'
---

```background
slug: srd-2024_background_sage
name: Sage
edition: '2024'
source: SRD 5.2
description: ''
skill_proficiencies:
  - arcana
  - history
tool_proficiencies:
  - kind: fixed
    items:
      - calligrapher's-supplies
language_proficiencies:
  - kind: fixed
    languages:
      - common
equipment:
  - kind: choice
    options:
      - label: Quarterstaff, Calligrapher's Supplies, Book (History), 8 sheets Parchment, Robe, and 8 GP
        grants:
          - item: quarterstaff
          - gold: 8
      - label: 50 GP
        grants:
          - gold: 50
feature:
  name: Background Feature
  description: (No description provided.)
ability_score_increases:
  pool:
    - con
    - int
    - wis
origin_feat: '[[SRD 2024/Feats/Magic Initiate (Wizard)]]'
suggested_characteristics: null
choices:
  - kind: ability-points
    id: abilities
    points: 3
    max_per: 2
    pool:
      - con
      - int
      - wis
  - kind: select-proficiency
    id: languages
    count: 2
    domain: language
```
