---
archivist: true
entity_type: spell
slug: srd-2024_spell_delayed-blast-fireball
name: Delayed Blast Fireball
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.155Z'
---

```spell
slug: srd-2024_spell_delayed-blast-fireball
name: Delayed Blast Fireball
edition: '2024'
source: SRD 5.2
level: 7
school: evocation
casting_time: action
range: 150 feet
components: V, S, M (a ball of bat guano and sulfur)
duration: 1 minute
concentration: true
ritual: false
description: A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one. The spell's base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn't ended. If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature's space or collides with a solid object, the spell ends, and the bead explodes. When the bead explodes, flammable objects in the explosion that aren't being worn or carried start burning.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The base damage increases by 1d6 for each spell slot level above 7.
damage:
  types:
    - fire
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_8
    damage_roll: 13d6
  - type: slot_level_9
    damage_roll: 14d6
```
