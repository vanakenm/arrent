---
archivist: true
entity_type: monster
slug: berserker
name: Berserker
compendium: SRD
---

```monster
name: Berserker
size: Medium
type: Humanoid
subtype: any race
alignment: any chaotic alignment
ac:
  - ac: 13
    from:
      - hide armor
hp:
  average: 67
  formula: 9d8+27
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 17
  int: 9
  wis: 11
  cha: 9
passive_perception: 10
languages:
  - any one language (usually Common)
cr: '2'
traits:
  - name: Reckless
    entries:
      - At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d12+STR` slashing damage.'
```
