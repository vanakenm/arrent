---
archivist: true
entity_type: background
slug: srd-2024_background_acolyte
name: Acolyte
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.128Z'
---

```background
slug: srd-2024_background_acolyte
name: Acolyte
edition: '2024'
source: SRD 5.2
description: ''
skill_proficiencies:
  - insight
  - religion
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
      - label: Calligrapher's Supplies, Book (Prayers), Holy Symbol, 10 sheets Parchment, Robe, and 8 GP
        grants:
          - gold: 8
      - label: 50 GP
        grants:
          - gold: 50
feature:
  name: Background Feature
  description: (No description provided.)
ability_score_increases:
  pool:
    - int
    - wis
    - cha
origin_feat: '[[SRD 2024/Feats/Magic Initiate (Cleric)]]'
suggested_characteristics: null
choices:
  - kind: ability-points
    id: abilities
    points: 3
    max_per: 2
    pool:
      - int
      - wis
      - cha
  - kind: select-proficiency
    id: languages
    count: 2
    domain: language
```
