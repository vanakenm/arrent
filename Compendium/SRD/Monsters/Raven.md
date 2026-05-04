---
archivist: true
entity_type: monster
slug: raven
name: Raven
compendium: SRD
---

```monster
name: Raven
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 10
  fly: 50
abilities:
  str: 2
  dex: 14
  con: 8
  int: 2
  wis: 12
  cha: 6
skills:
  perception: 3
passive_perception: 13
cr: '0'
traits:
  - name: Mimicry
    entries:
      - The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful `dc:10` Wisdom (Insight) check.
actions:
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: 1 piercing damage.'
```
