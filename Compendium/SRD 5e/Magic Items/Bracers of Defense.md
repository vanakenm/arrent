---
archivist: true
entity_type: item
slug: srd-5e_item_bracers-of-defense
name: Bracers of Defense
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.882Z'
---

```item
slug: srd-5e_item_bracers-of-defense
name: Bracers of Defense
edition: '2014'
source: SRD 5.1
rarity: rare
description: While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.
type: wondrous item
attunement:
  required: true
bonuses:
  ac:
    value: 2
    when:
      - kind: no_armor
      - kind: no_shield
tier: major
```
