---
archivist: true
entity_type: feat
slug: srd-2024_feat_skilled
name: Skilled
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.125Z'
---

```feat
slug: srd-2024_feat_skilled
name: Skilled
edition: '2024'
source: SRD 5.2
description: ''
category: origin
prerequisites: []
benefits:
  - You gain proficiency in any combination of three skills or tools of your choice.
  - You can take this feat more than once.
repeatable: true
effects: []
grants_asi: null
choices:
  - kind: select-inline
    id: skills-or-tools
    count: 1
    options:
      - value: three-skills
        label: Three skills
        choices:
          - kind: select-proficiency
            id: skills
            count: 3
            domain: skill
      - value: two-skills-one-tool
        label: Two skills and one tool
        choices:
          - kind: select-proficiency
            id: skills
            count: 2
            domain: skill
          - kind: select-proficiency
            id: tools
            count: 1
            domain: tool
      - value: one-skill-two-tools
        label: One skill and two tools
        choices:
          - kind: select-proficiency
            id: skills
            count: 1
            domain: skill
          - kind: select-proficiency
            id: tools
            count: 2
            domain: tool
      - value: three-tools
        label: Three tools
        choices:
          - kind: select-proficiency
            id: tools
            count: 3
            domain: tool
```
