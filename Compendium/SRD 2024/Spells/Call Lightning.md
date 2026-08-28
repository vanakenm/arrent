---
archivist: true
entity_type: spell
slug: srd-2024_spell_call-lightning
name: Call Lightning
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.149Z'
---

```spell
slug: srd-2024_spell_call-lightning
name: Call Lightning
edition: '2024'
source: SRD 5.2
level: 3
school: conjuration
casting_time: action
range: 120 feet
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: A storm cloud appears at a point within range that you can see above yourself. It takes the shape of a Cylinder that is 10 feet tall with a 60-foot radius. When you cast the spell, choose a point you can see under the cloud. A lightning bolt shoots from the cloud to that point. Each creature within 5 feet of that point makes a Dexterity saving throw, taking 3d10 Lightning damage on a failed save or half as much damage on a successful one. Until the spell ends, you can take a Magic action to call down lightning in that way again, targeting the same point or a different one. If you're outdoors in a storm when you cast this spell, the spell gives you control over that storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.
classes:
  - druid
at_higher_levels:
  - The damage increases by 1d10 for each spell slot level above 3.
damage:
  types:
    - lightning
saving_throw:
  ability: dexterity
casting_options:
  - type: slot_level_4
    damage_roll: 4d10
  - type: slot_level_5
    damage_roll: 5d10
  - type: slot_level_6
    damage_roll: 6d10
  - type: slot_level_7
    damage_roll: 7d10
  - type: slot_level_8
    damage_roll: 8d10
  - type: slot_level_9
    damage_roll: 9d10
```
