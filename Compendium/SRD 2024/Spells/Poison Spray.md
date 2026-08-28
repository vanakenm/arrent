---
archivist: true
entity_type: spell
slug: srd-2024_spell_poison-spray
name: Poison Spray
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.174Z'
---

```spell
slug: srd-2024_spell_poison-spray
name: Poison Spray
edition: '2024'
source: SRD 5.2
level: 0
school: necromancy
casting_time: action
range: 30 feet
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage.
classes:
  - druid
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - The damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).
damage:
  types:
    - poison
casting_options:
  - type: player_level_5
    damage_roll: 2d12
  - type: player_level_11
    damage_roll: 3d12
  - type: player_level_17
    damage_roll: 4d12
```
