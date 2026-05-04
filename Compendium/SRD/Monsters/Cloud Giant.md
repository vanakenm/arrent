---
archivist: true
entity_type: monster
slug: cloud-giant
name: Cloud Giant
compendium: SRD
---

```monster
name: Cloud Giant
size: Huge
type: Giant
alignment: neutral good (50%) or neutral evil (50%)
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 200
  formula: 16d12+96
speed:
  walk: 40
abilities:
  str: 27
  dex: 10
  con: 22
  int: 12
  wis: 16
  cha: 16
saves:
  con: 10
  wis: 7
  cha: 7
skills:
  insight: 7
  perception: 7
passive_perception: 17
languages:
  - Common
  - Giant
cr: '9'
traits:
  - name: Keen Smell
    entries:
      - The giant has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Innate Spellcasting
    entries:
      - |-
        The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:

        At will: detect magic, fog cloud, light
        3/day each: feather fall, fly, misty step, telekinesis
        1/day each: control weather, gaseous form
actions:
  - name: Multiattack
    entries:
      - The giant makes two morningstar attacks.
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d8+STR` piercing damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:4d10+STR` bludgeoning damage.'
```
