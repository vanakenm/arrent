---
archivist: true
entity_type: monster
slug: basilisk
name: Basilisk
compendium: SRD
---

```monster
name: Basilisk
size: Medium
type: Monstrosity
alignment: unaligned
ac:
  - ac: 12
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
passive_perception: 9
cr: '3'
traits:
  - name: Petrifying Gaze
    entries:
      - |-
        If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a `dc:CON` Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.
        A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.
        If the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage plus `damage:2d6` poison damage.'
```
