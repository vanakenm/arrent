---
archivist: true
entity_type: monster
slug: cultist
name: Cultist
compendium: SRD
---

```monster
name: Cultist
size: Medium
type: Humanoid
subtype: any race
alignment: any non-good alignment
ac:
  - ac: 12
    from:
      - leather armor
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 10
  int: 10
  wis: 11
  cha: 10
skills:
  deception: 2
  religion: 2
passive_perception: 10
languages:
  - any one language (usually Common)
cr: 1/8
traits:
  - name: Dark Devotion
    entries:
      - The cultist has advantage on saving throws against being charmed or frightened.
actions:
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d6+DEX` slashing damage.'
```
