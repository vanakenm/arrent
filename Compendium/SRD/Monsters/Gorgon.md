---
archivist: true
entity_type: monster
slug: gorgon
name: Gorgon
compendium: SRD
---

```monster
name: Gorgon
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 40
abilities:
  str: 20
  dex: 11
  con: 18
  int: 2
  wis: 12
  cha: 7
skills:
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
condition_immunities:
  - petrified
cr: '5'
traits:
  - name: Trampling Charge
    entries:
      - If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d12+STR` piercing damage.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` bludgeoning damage.'
  - name: Petrifying Breath (Recharge 5-6)
    entries:
      - The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a `dc:13` Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.
```
