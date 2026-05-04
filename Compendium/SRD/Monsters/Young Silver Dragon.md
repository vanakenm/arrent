---
archivist: true
entity_type: monster
slug: young-silver-dragon
name: Young Silver Dragon
compendium: SRD
---

```monster
name: Young Silver Dragon
size: Large
type: Dragon
alignment: lawful good
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 168
  formula: 16d10+80
speed:
  walk: 40
  fly: 80
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 11
  cha: 19
saves:
  dex: 4
  con: 9
  wis: 4
  cha: 8
skills:
  arcana: 6
  history: 6
  perception: 8
  stealth: 4
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 18
languages:
  - Common
  - Draconic
damage_immunities:
  - cold
cr: '9'
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Cold Breath.** The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:12d8` cold damage on a failed save, or half as much damage on a successful one.
        **Paralyzing Breath.** The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
