---
archivist: true
entity_type: monster
slug: grimlock
name: Grimlock
compendium: SRD
---

```monster
name: Grimlock
size: Medium
type: Humanoid
subtype: grimlock
alignment: neutral evil
ac:
  - ac: 11
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 12
  int: 9
  wis: 8
  cha: 6
skills:
  athletics: 5
  perception: 3
  stealth: 3
senses:
  - blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius)
passive_perception: 13
languages:
  - Undercommon
condition_immunities:
  - blinded
cr: 1/4
traits:
  - name: Blind Senses
    entries:
      - The grimlock can't use its blindsight while deafened and unable to smell.
  - name: Keen Hearing and Smell
    entries:
      - The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Stone Camouflage
    entries:
      - The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
actions:
  - name: Spiked Bone Club
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` bludgeoning damage plus `damage:1d4` piercing damage.'
```
