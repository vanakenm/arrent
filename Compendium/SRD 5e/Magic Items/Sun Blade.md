---
archivist: true
entity_type: item
slug: srd-5e_item_sun-blade
name: Sun Blade
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.929Z'
---

```item
slug: srd-5e_item_sun-blade
name: Sun Blade
edition: '2014'
source: SRD 5.1
rarity: rare
description: |-
  This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the _sun blade_.

  You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.

  The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.
type: weapon
weight: 3
base_item: '[[SRD 5e/Weapons/Longsword]]'
attunement:
  required: true
damage_type: radiant
properties:
  - finesse
  - versatile
bonuses:
  weapon_attack: 2
  weapon_damage:
    value: 2
    when:
      - kind: vs_creature_type
        value: undead
tier: major
```
