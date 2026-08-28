---
archivist: true
entity_type: spell
slug: srd-2024_spell_cloudkill
name: Cloudkill
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.151Z'
---

```spell
slug: srd-2024_spell_cloudkill
name: Cloudkill
edition: '2024'
source: SRD 5.2
level: 5
school: conjuration
casting_time: action
range: 120 feet
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: You create a 20-foot-radius Sphere of yellow-green fog centered on a point within range. The fog lasts for the duration or until strong wind (such as the one created by Gust of Wind) disperses it, ending the spell. Its area is Heavily Obscured. Each creature in the Sphere makes a Constitution saving throw, taking 5d8 Poison damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The Sphere moves 10 feet away from you at the start of each of your turns.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d8 for each spell slot level above 5.
damage:
  types:
    - poison
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_6
    damage_roll: 6d8
  - type: slot_level_7
    damage_roll: 7d8
  - type: slot_level_8
    damage_roll: 8d8
  - type: slot_level_9
    damage_roll: 9d8
```
