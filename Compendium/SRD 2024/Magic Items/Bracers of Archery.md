---
archivist: true
entity_type: item
slug: srd-2024_item_bracers-of-archery
name: Bracers of Archery
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.226Z'
---

```item
slug: srd-2024_item_bracers-of-archery
name: Bracers of Archery
edition: '2024'
source: SRD 5.2
rarity: uncommon
description: While wearing these bracers, you have proficiency with the Longbow and Shortbow, and you gain a +2 bonus to damage rolls made with such weapons.
type: wondrous item
attunement:
  required: true
bonuses:
  weapon_damage:
    value: 2
    when:
      - kind: on_attack_type
        value: ranged
grants:
  proficiency: true
```
