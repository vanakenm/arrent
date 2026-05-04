---
archivist: true
entity_type: monster
slug: giant-crocodile
name: Giant Crocodile
compendium: SRD
---

```monster
name: Giant Crocodile
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 85
  formula: 9d12+27
speed:
  walk: 30
  swim: 50
abilities:
  str: 21
  dex: 9
  con: 17
  int: 2
  wis: 10
  cha: 7
skills:
  stealth: 5
passive_perception: 10
cr: '5'
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 30 minutes.
actions:
  - name: Multiattack
    entries:
      - 'The crocodile makes two attacks: one with its bite and one with its tail.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d10+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the crocodile can''t bite another target.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target not grappled by the crocodile. Hit: `damage:2d8+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
```
