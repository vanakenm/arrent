---
archivist: true
entity_type: monster
slug: crocodile
name: Crocodile
compendium: SRD
---

```monster
name: Crocodile
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 20
  swim: 20
abilities:
  str: 15
  dex: 10
  con: 13
  int: 2
  wis: 10
  cha: 5
skills:
  stealth: 2
passive_perception: 10
cr: 1/2
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 15 minutes.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d10+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the crocodile can''t bite another target.'
```
