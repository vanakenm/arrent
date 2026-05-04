---
archivist: true
entity_type: monster
slug: roc
name: Roc
compendium: SRD
---

```monster
name: Roc
size: Gargantuan
type: Monstrosity
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 248
  formula: 16d20+80
speed:
  walk: 20
  fly: 120
abilities:
  str: 28
  dex: 10
  con: 20
  int: 3
  wis: 10
  cha: 9
saves:
  dex: 4
  con: 9
  wis: 4
  cha: 3
skills:
  perception: 4
passive_perception: 14
cr: '11'
traits:
  - name: Keen Sight
    entries:
      - The roc has advantage on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Multiattack
    entries:
      - 'The roc makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:4d8+STR` piercing damage.'
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d6+STR` slashing damage, and the target is grappled (escape `dc:19`). Until this grapple ends, the target is restrained, and the roc can''t use its talons on another target.'
```
