---
archivist: true
entity_type: monster
slug: giant-crab
name: Giant Crab
compendium: SRD
---

```monster
name: Giant Crab
size: Medium
type: Beast
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 13
  formula: 3d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 13
  dex: 15
  con: 11
  int: 1
  wis: 9
  cha: 3
skills:
  stealth: 4
senses:
  - blindsight 30 ft.
passive_perception: 9
cr: 1/8
traits:
  - name: Amphibious
    entries:
      - The crab can breathe air and water.
actions:
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). The crab has two claws, each of which can grapple only one target.'
```
