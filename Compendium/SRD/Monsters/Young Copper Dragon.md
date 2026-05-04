---
archivist: true
entity_type: monster
slug: young-copper-dragon
name: Young Copper Dragon
compendium: SRD
---

```monster
name: Young Copper Dragon
size: Large
type: Dragon
alignment: chaotic good
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 119
  formula: 14d10+42
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 19
  dex: 12
  con: 17
  int: 16
  wis: 13
  cha: 15
saves:
  dex: 4
  con: 6
  wis: 4
  cha: 5
skills:
  deception: 5
  perception: 7
  stealth: 4
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 17
languages:
  - Common
  - Draconic
damage_immunities:
  - acid
cr: '7'
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
        **Acid Breath.** The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a `dc:14` Dexterity saving throw, taking `damage:9d8` acid damage on a failed save, or half as much damage on a successful one.
        **Slowing Breath.** The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.
```
