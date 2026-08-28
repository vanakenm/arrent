---
archivist: true
entity_type: spell
slug: srd-2024_spell_wall-of-ice
name: Wall of Ice
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.186Z'
---

```spell
slug: srd-2024_spell_wall-of-ice
name: Wall of Ice
edition: '2024'
source: SRD 5.2
level: 6
school: evocation
casting_time: action
range: 120 feet
components: V, S, M (a piece of quartz)
duration: 10 minutes
concentration: true
ritual: false
description: You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side) and makes a Dexterity saving throw, taking 10d6 Cold damage on a failed save or half as much damage on a successful one. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 Hit Points per 10-foot section, and it has Immunity to Cold, Poison, and Psychic damage and Vulnerability to Fire damage. Reducing a 10-foot section of wall to 0 Hit Points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn makes a Constitution saving throw, taking 5d6 Cold damage on a failed save or half as much damage on a successful one.
classes:
  - wizard
at_higher_levels:
  - The damage the wall deals when it appears increases by 2d6 and the damage from passing through the sheet of frigid air increases by 1d6 for each spell slot level above 6.
damage:
  types:
    - fire
    - psychic
    - cold
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_7
    damage_roll: 11d6
  - type: slot_level_8
    damage_roll: 12d6
  - type: slot_level_9
    damage_roll: 13d6
```
