---
archivist: true
entity_type: spell
slug: srd-2024_spell_freezing-sphere
name: Freezing Sphere
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.162Z'
---

```spell
slug: srd-2024_spell_freezing-sphere
name: Freezing Sphere
edition: '2024'
source: SRD 5.2
level: 6
school: evocation
casting_time: action
range: 300 feet
components: V, S, M (a miniature crystal sphere)
duration: instantaneous
concentration: false
ritual: false
description: |-
  A frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one.

  If the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free.

  You can refrain from firing the globe after completing the spell's casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.
classes:
  - sorcerer
  - wizard
at_higher_levels:
  - The damage increases by 1d6 for each spell slot level above 6.
damage:
  types:
    - cold
saving_throw:
  ability: constitution
casting_options:
  - type: slot_level_7
    damage_roll: 11d6
    desc: The damage increases to 11d6.
  - type: slot_level_8
    damage_roll: 12d6
    desc: The damage increases to 12d6.
  - type: slot_level_9
    damage_roll: 13d6
    desc: The damage increases to 13d6.
```
