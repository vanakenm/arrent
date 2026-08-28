---
archivist: true
entity_type: background
slug: srd-2024_background_criminal
name: Criminal
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.128Z'
---

```background
slug: srd-2024_background_criminal
name: Criminal
edition: '2024'
source: SRD 5.2
description: ''
skill_proficiencies:
  - sleight-of-hand
  - stealth
tool_proficiencies:
  - kind: fixed
    items:
      - thieves'-tools
language_proficiencies:
  - kind: fixed
    languages:
      - common
equipment:
  - kind: choice
    options:
      - label: 2 Daggers, Thieves' Tools, Crowbar, 2 Pouches, Traveler's Clothes, and 16 GP
        grants:
          - item: dagger
            qty: 2
          - gold: 16
      - label: 50 GP
        grants:
          - gold: 50
feature:
  name: Background Feature
  description: (No description provided.)
ability_score_increases:
  pool:
    - dex
    - con
    - int
origin_feat: '[[SRD 2024/Feats/Alert]]'
suggested_characteristics: null
choices:
  - kind: ability-points
    id: abilities
    points: 3
    max_per: 2
    pool:
      - dex
      - con
      - int
  - kind: select-proficiency
    id: languages
    count: 2
    domain: language
```
