---
archivist: true
entity_type: spell
slug: srd-2024_spell_chill-touch
name: Chill Touch
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.150Z'
---

```spell
slug: srd-2024_spell_chill-touch
name: Chill Touch
edition: '2024'
source: SRD 5.2
level: 0
school: necromancy
casting_time: action
range: Touch
components: V, S
duration: instantaneous
concentration: false
ritual: false
description: Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can't regain Hit Points until the end of your next turn.
classes:
  - sorcerer
  - warlock
  - wizard
at_higher_levels:
  - The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).
damage:
  types:
    - necrotic
casting_options:
  - type: player_level_5
    damage_roll: 2d10
  - type: player_level_11
    damage_roll: 3d10
  - type: player_level_17
    damage_roll: 4d10
```
