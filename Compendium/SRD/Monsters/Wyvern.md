---
archivist: true
entity_type: monster
slug: wyvern
name: Wyvern
compendium: SRD
---

```monster
name: Wyvern
size: Large
type: Dragon
alignment: unaligned
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10+39
speed:
  walk: 20
  fly: 80
abilities:
  str: 19
  dex: 10
  con: 16
  int: 5
  wis: 12
  cha: 6
skills:
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
cr: '6'
actions:
  - name: Multiattack
    entries:
      - 'The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one creature. Hit: `damage:2d6+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Stinger
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one creature. Hit: `damage:2d6+STR` piercing damage. The target must make a `dc:15` Constitution saving throw, taking `damage:7d6` poison damage on a failed save, or half as much damage on a successful one.'
```
