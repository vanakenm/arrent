---
archivist: true
entity_type: monster
slug: hezrou
name: Hezrou
compendium: SRD
---

```monster
name: Hezrou
size: Large
type: Fiend
subtype: demon
alignment: chaotic evil
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 136
  formula: 13d10+65
speed:
  walk: 30
abilities:
  str: 19
  dex: 17
  con: 20
  int: 5
  wis: 12
  cha: 13
saves:
  str: 7
  con: 8
  wis: 4
senses:
  - darkvision 120 ft.
passive_perception: 11
languages:
  - Abyssal
  - telepathy 120 ft.
damage_resistances:
  - cold
  - fire
  - lightning; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '8'
traits:
  - name: Magic Resistance
    entries:
      - The hezrou has advantage on saving throws against spells and other magical effects.
  - name: Stench
    entries:
      - Any creature that starts its turn within 10 feet of the hezrou must succeed on a `dc:14` Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.
actions:
  - name: Multiattack
    entries:
      - 'The hezrou makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: 'Variant: Summon Demon (1/Day)'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A hezrou has a 30 percent chance of summoning `dice:2d6` dretches or one hezrou.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
