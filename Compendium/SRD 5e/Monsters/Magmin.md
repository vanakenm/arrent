---
archivist: true
entity_type: monster
slug: srd-5e_monster_magmin
name: Magmin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.006Z'
---

```monster
slug: srd-5e_monster_magmin
name: Magmin
edition: '2014'
source: SRD 5.1
size: small
type: elemental
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 9
  formula: 2d6+2
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 12
  int: 8
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Ignan
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Touch
    entries:
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one target. Hit: `dmg:2d6` fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes `dmg:1d6` fire damage at the end of each of its turns.'
    attacks:
      - name: Touch attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a `dc:11` Dexterity saving throw, taking `dmg:2d6` fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.
  - name: Ignited Illumination
    entries:
      - As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft.
cr: '0.5'
alignment: chaotic neutral
passive_perception: 10
```
