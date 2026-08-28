---
archivist: true
entity_type: race
slug: srd-2024_race_human
name: Human
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.120Z'
---

```race
slug: srd-2024_race_human
name: Human
edition: '2024'
source: SRD 5.2
size: medium
speed:
  walk: 30
vision: {}
description: ''
ability_score_increases: []
age: ''
alignment: ''
languages:
  fixed: []
variant_label: base
traits:
  - name: Size
    description: Medium (about 4–7 feet tall) or Small (about 2–4 feet tall), chosen when you select this species
  - name: Speed
    description: 30 feet
  - name: Resourceful
    description: You gain Heroic Inspiration whenever you finish a Long Rest.
  - name: Skillful
    description: You gain proficiency in one skill of your choice.
    id: skillful
    choices:
      - kind: select-proficiency
        id: skill
        count: 1
        domain: skill
  - name: Versatile
    description: You gain an Origin feat of your choice (see "Feats"). Skilled is recommended.
    id: versatile
    choices:
      - kind: select-entity
        id: origin-feat
        count: 1
        entity_type: feat
        where:
          category: origin
```
