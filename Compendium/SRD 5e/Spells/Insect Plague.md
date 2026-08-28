---
archivist: true
entity_type: spell
slug: srd-5e_spell_insect-plague
name: Insect Plague
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.825Z'
---

```spell
slug: srd-5e_spell_insect-plague
name: Insect Plague
edition: '2014'
source: SRD 5.1
level: 5
school: conjuration
casting_time: action
range: 300 feet
components: V, S, M (A few grains of sugar, some kernels of grain, and a smear of fat.)
duration: 10 minutes
concentration: true
ritual: false
description: Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain. When the area appears, each creature in it must make a constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.
classes:
  - cleric
  - druid
  - sorcerer
at_higher_levels:
  - When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.
damage:
  types:
    - piercing
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_6
    damage_roll: 5d10
  - type: slot_level_7
    damage_roll: 6d10
  - type: slot_level_8
    damage_roll: 7d10
  - type: slot_level_9
    damage_roll: 8d10
```
