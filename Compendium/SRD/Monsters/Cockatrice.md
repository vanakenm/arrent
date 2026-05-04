---
archivist: true
entity_type: monster
slug: cockatrice
name: Cockatrice
compendium: SRD
---

```monster
name: Cockatrice
size: Small
type: Monstrosity
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 27
  formula: 6d6+6
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 12
  con: 12
  int: 2
  wis: 13
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 11
cr: 1/2
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.'
```
