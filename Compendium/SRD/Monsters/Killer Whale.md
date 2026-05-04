---
archivist: true
entity_type: monster
slug: killer-whale
name: Killer Whale
compendium: SRD
---

```monster
name: Killer Whale
size: Huge
type: Beast
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 90
  formula: 12d12+12
speed:
  swim: 60
abilities:
  str: 19
  dex: 10
  con: 13
  int: 3
  wis: 12
  cha: 7
skills:
  perception: 3
senses:
  - blindsight 120 ft.
passive_perception: 13
cr: '3'
traits:
  - name: Echolocation
    entries:
      - The whale can't use its blindsight while deafened.
  - name: Hold Breath
    entries:
      - The whale can hold its breath for 30 minutes
  - name: Keen Hearing
    entries:
      - The whale has advantage on Wisdom (Perception) checks that rely on hearing.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:5d6+STR` piercing damage.'
```
