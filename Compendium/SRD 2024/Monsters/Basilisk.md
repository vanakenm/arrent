---
archivist: true
entity_type: monster
slug: srd-2024_monster_basilisk
name: Basilisk
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_basilisk
name: Basilisk
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8 + 16
speed:
  walk: 20
abilities:
  str: 16
  dex: 8
  con: 15
  int: 2
  wis: 8
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Petrifying Gaze (Recharge 4-6)
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. If the basilisk sees its reflection within the Cone, the basilisk must make this save. First Failure The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure The target has the Petrified condition instead of the Restrained condition.'
    recharge:
      type: recharge_on_roll
      param: 4
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: -1
  con: 2
  int: -4
  wis: -1
  cha: -2
alignment: unaligned
passive_perception: 9
```
