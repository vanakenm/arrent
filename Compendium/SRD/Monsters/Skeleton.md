---
archivist: true
entity_type: monster
slug: skeleton
name: Skeleton
compendium: SRD
---

```monster
name: Skeleton
size: Medium
type: Undead
alignment: lawful evil
ac:
  - ac: 13
    from:
      - armor scraps
hp:
  average: 13
  formula: 2d8+4
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 15
  int: 6
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 9
languages:
  - understands the languages it knew in life but can't speak
damage_vulnerabilities:
  - bludgeoning
damage_resistances:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
cr: 1/4
actions:
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 80/320 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
```
