---
archivist: true
entity_type: item
slug: srd-5e_item_bracers-of-archery
name: Bracers of Archery
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.881Z'
---

```item
slug: srd-5e_item_bracers-of-archery
name: Bracers of Archery
edition: '2014'
source: SRD 5.1
rarity: uncommon
description: While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.
type: wondrous item
attunement:
  required: true
bonuses:
  weapon_damage:
    value: 2
    when:
      - kind: on_attack_type
        value: ranged
      - kind: any_of
        conditions:
          - kind: with_weapon_property
            value: longbow
          - kind: with_weapon_property
            value: shortbow
tier: major
grants:
  proficiency: true
```
