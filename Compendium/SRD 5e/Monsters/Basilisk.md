---
archivist: true
entity_type: monster
slug: srd-5e_monster_basilisk
name: Basilisk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.981Z'
---

```monster
slug: srd-5e_monster_basilisk
name: Basilisk
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8+16
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage plus `dmg:2d6` poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Petrifying Gaze
    entries:
      - |-
        If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a `dc:CON` Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.
        A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.
        If the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.
cr: '3'
alignment: unaligned
passive_perception: 9
```
