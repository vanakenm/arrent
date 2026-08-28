---
archivist: true
entity_type: feat
slug: srd-2024_feat_magic-initiate
name: Magic Initiate
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.125Z'
---

```feat
slug: srd-2024_feat_magic-initiate
name: Magic Initiate
edition: '2024'
source: SRD 5.2
description: You gain the following benefits.
category: origin
prerequisites: []
benefits:
  - You learn two cantrips of your choice from the Cleric, Druid, or Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).
  - Choose a level 1 spell from the same list you selected for this feat's cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.
  - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.
  - You can take this feat more than once, but you must choose a different spell list each time.
repeatable: true
effects: []
grants_asi: null
choices:
  - kind: select-inline
    id: spell-list
    count: 1
    options:
      - value: cleric
        label: Cleric
        choices:
          - kind: select-entity
            id: mi-cantrips
            count: 2
            entity_type: spell
            where:
              list: cleric
              level: 0
              edition: '2024'
          - kind: select-entity
            id: mi-level1
            count: 1
            entity_type: spell
            where:
              list: cleric
              level: 1
              edition: '2024'
      - value: druid
        label: Druid
        choices:
          - kind: select-entity
            id: mi-cantrips
            count: 2
            entity_type: spell
            where:
              list: druid
              level: 0
              edition: '2024'
          - kind: select-entity
            id: mi-level1
            count: 1
            entity_type: spell
            where:
              list: druid
              level: 1
              edition: '2024'
      - value: wizard
        label: Wizard
        choices:
          - kind: select-entity
            id: mi-cantrips
            count: 2
            entity_type: spell
            where:
              list: wizard
              level: 0
              edition: '2024'
          - kind: select-entity
            id: mi-level1
            count: 1
            entity_type: spell
            where:
              list: wizard
              level: 1
              edition: '2024'
  - kind: select-inline
    id: spellcasting-ability
    count: 1
    options:
      - value: int
        label: Intelligence
      - value: wis
        label: Wisdom
      - value: cha
        label: Charisma
```
