---
archivist: true
entity_type: monster
slug: ochre-jelly
name: Ochre Jelly
compendium: SRD
---

```monster
name: Ochre Jelly
size: Large
type: Ooze
alignment: unaligned
ac:
  - ac: 8
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 10
  climb: 10
abilities:
  str: 15
  dex: 6
  con: 14
  int: 2
  wis: 6
  cha: 1
senses:
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 8
damage_resistances:
  - acid
damage_immunities:
  - lightning
  - slashing
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - prone
cr: '2'
traits:
  - name: Amorphous
    entries:
      - The jelly can move through a space as narrow as 1 inch wide without squeezing.
  - name: Spider Climb
    entries:
      - The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage plus `damage:1d6` acid damage.'
reactions:
  - name: Split
    entries:
      - When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.
```
