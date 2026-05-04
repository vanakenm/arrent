---
archivist: true
entity_type: monster
slug: magmin
name: Magmin
compendium: SRD
---

```monster
name: Magmin
size: Small
type: Elemental
alignment: chaotic neutral
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
passive_perception: 10
languages:
  - Ignan
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - fire
cr: 1/2
traits:
  - name: Death Burst
    entries:
      - When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a `dc:11` Dexterity saving throw, taking `damage:2d6` fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.
  - name: Ignited Illumination
    entries:
      - As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft.
actions:
  - name: Touch
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:2d6` fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes `damage:1d6` fire damage at the end of each of its turns.'
```
