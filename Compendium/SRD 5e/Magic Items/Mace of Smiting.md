---
archivist: true
entity_type: item
slug: srd-5e_item_mace-of-smiting
name: Mace of Smiting
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.908Z'
---

```item
slug: srd-5e_item_mace-of-smiting
name: Mace of Smiting
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.

  When you roll a 20 on an attack roll made with this weapon, the target takes an extra 2d6 bludgeoning damage, or 4d6 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.
type: weapon
weight: 4
base_item: '[[SRD 5e/Weapons/Mace]]'
damage_type: bludgeoning
bonuses:
  weapon_attack:
    value: 1
    when:
      - kind: vs_creature_type
        value: construct
  weapon_damage:
    value: 1
    when:
      - kind: vs_creature_type
        value: construct
tier: major
```
