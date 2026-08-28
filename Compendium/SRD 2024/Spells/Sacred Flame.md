---
archivist: true
entity_type: spell
slug: srd-2024_spell_sacred-flame
name: Sacred Flame
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.177Z'
---

```spell
slug: srd-2024_spell_sacred-flame
name: Sacred Flame
edition: '2024'
source: SRD 5.2
level: 0
school: evocation
casting_time: action
range: 60 feet
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this save.
classes:
  - cleric
at_higher_levels:
  - The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).
damage:
  types:
    - radiant
saving_throw:
  ability: dexterity
casting_options:
  - type: player_level_5
    damage_roll: 2d8
  - type: player_level_11
    damage_roll: 3d8
  - type: player_level_17
    damage_roll: 4d8
```
