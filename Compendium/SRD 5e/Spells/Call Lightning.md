---
archivist: true
entity_type: spell
slug: srd-5e_spell_call-lightning
name: Call Lightning
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.806Z'
---

```spell
slug: srd-5e_spell_call-lightning
name: Call Lightning
edition: '2014'
source: SRD 5.1
level: 3
school: conjuration
casting_time: action
range: 120 feet
components: V, S
duration: 10 minutes
concentration: true
ritual: false
description: A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.
classes:
  - cleric
  - druid
at_higher_levels:
  - When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.
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
