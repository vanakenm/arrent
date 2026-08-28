---
archivist: true
entity_type: spell
slug: srd-2024_spell_acid-splash
name: Acid Splash
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.144Z'
---

```spell
slug: srd-2024_spell_acid-splash
name: Acid Splash
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
description: You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).
damage:
  types:
    - acid
saving_throw:
  ability: dexterity
casting_options:
  - type: player_level_5
    damage_roll: 2d6
  - type: player_level_11
    damage_roll: 3d6
  - type: player_level_17
    damage_roll: 4d6
```
