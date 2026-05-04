---
archivist: true
entity_type: monster
slug: griffon
name: Griffon
compendium: SRD
---

```monster
name: Griffon
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 30
  fly: 80
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 13
  cha: 8
skills:
  perception: 5
senses:
  - darkvision 60 ft.
passive_perception: 15
cr: '2'
traits:
  - name: Keen Sight
    entries:
      - The griffon has advantage on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Multiattack
    entries:
      - 'The griffon makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
```
