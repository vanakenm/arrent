---
archivist: true
entity_type: monster
slug: copper-dragon-wyrmling
name: Copper Dragon Wyrmling
compendium: SRD
---

```monster
name: Copper Dragon Wyrmling
size: Medium
type: Dragon
alignment: chaotic good
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 30
  fly: 60
  climb: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 14
  wis: 11
  cha: 13
saves:
  dex: 3
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 3
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - acid
cr: '1'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Acid Breath.** The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a `dc:DEX` Dexterity saving throw, taking `damage:4d8` acid damage on a failed save, or half as much damage on a successful one.
        **Slowing Breath.** The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.
```
