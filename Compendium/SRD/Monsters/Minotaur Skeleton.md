---
archivist: true
entity_type: monster
slug: minotaur-skeleton
name: Minotaur Skeleton
compendium: SRD
---

```monster
name: Minotaur Skeleton
size: Large
type: Undead
alignment: lawful evil
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 67
  formula: 9d10+18
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 15
  int: 6
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 9
languages:
  - understands Abyssal but can't speak
damage_vulnerabilities:
  - bludgeoning
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
cr: '2'
traits:
  - name: Charge
    entries:
      - If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `damage:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be pushed up to 10 feet away and knocked prone.
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d12+STR` slashing damage.'
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
```
