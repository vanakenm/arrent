---
archivist: true
entity_type: monster
slug: minotaur
name: Minotaur
compendium: SRD
---

```monster
name: Minotaur
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 76
  formula: 9d10+27
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 16
  int: 6
  wis: 16
  cha: 9
skills:
  perception: 7
senses:
  - darkvision 60 ft.
passive_perception: 17
languages:
  - Abyssal
cr: '3'
traits:
  - name: Charge
    entries:
      - If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `damage:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be pushed up to 10 ft. away and knocked prone.
  - name: Labyrinthine Recall
    entries:
      - The minotaur can perfectly recall any path it has traveled.
  - name: Reckless
    entries:
      - At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d12+STR` slashing damage.'
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
```
