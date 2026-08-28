---
archivist: true
entity_type: item
slug: srd-5e_item_arrow-catching-shield
name: Arrow-Catching Shield
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.878Z'
---

```item
slug: srd-5e_item_arrow-catching-shield
name: Arrow-Catching Shield
edition: '2014'
source: SRD 5.1
rarity: rare
description: You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.
type: shield
weight: 6
attunement:
  required: true
bonuses:
  ac:
    value: 2
    when:
      - kind: vs_attack_type
        value: ranged
tier: major
```
