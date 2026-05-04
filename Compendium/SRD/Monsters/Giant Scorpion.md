---
archivist: true
entity_type: monster
slug: giant-scorpion
name: Giant Scorpion
compendium: SRD
---

```monster
name: Giant Scorpion
size: Large
type: Beast
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 7d10+14
speed:
  walk: 40
abilities:
  str: 15
  dex: 13
  con: 15
  int: 1
  wis: 9
  cha: 3
senses:
  - blindsight 60 ft.
passive_perception: 9
cr: '3'
actions:
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). The scorpion has two claws, each of which can grapple only one target.'
  - name: Multiattack
    entries:
      - 'The scorpion makes three attacks: two with its claws and one with its sting.'
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d10+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:4d10` poison damage on a failed save, or half as much damage on a successful one.'
```
