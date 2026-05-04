---
archivist: true
entity_type: monster
slug: harpy
name: Harpy
compendium: SRD
---

```monster
name: Harpy
size: Medium
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 11
hp:
  average: 38
  formula: 7d8+7
speed:
  walk: 20
  fly: 40
abilities:
  str: 12
  dex: 13
  con: 12
  int: 7
  wis: 10
  cha: 13
passive_perception: 10
languages:
  - Common
cr: '1'
actions:
  - name: Multiattack
    entries:
      - 'The harpy makes two attacks: one with its claws and one with its club.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` slashing damage.'
  - name: Club
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` bludgeoning damage.'
  - name: Luring Song
    entries:
      - |-
        The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a `dc:11` Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.
        While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.
        A target that successfully saves is immune to this harpy's song for the next 24 hours.
```
