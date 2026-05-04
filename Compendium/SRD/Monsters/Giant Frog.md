---
archivist: true
entity_type: monster
slug: giant-frog
name: Giant Frog
compendium: SRD
---

```monster
name: Giant Frog
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 11
hp:
  average: 18
  formula: 4d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 12
  dex: 13
  con: 11
  int: 2
  wis: 10
  cha: 3
skills:
  perception: 2
  stealth: 3
senses:
  - darkvision 30 ft.
passive_perception: 12
cr: 1/4
traits:
  - name: Amphibious
    entries:
      - The frog can breathe air and water
  - name: Standing Leap
    entries:
      - The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the frog can''t bite another target.'
  - name: Swallow
    entries:
      - The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes `damage:2d4` acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone.
```
