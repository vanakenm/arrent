---
archivist: true
entity_type: monster
slug: gold-dragon-wyrmling
name: Gold Dragon Wyrmling
compendium: SRD
---

```monster
name: Gold Dragon Wyrmling
size: Medium
type: Dragon
alignment: lawful good
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 60
  formula: 8d8+24
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 19
  dex: 14
  con: 17
  int: 14
  wis: 11
  cha: 16
saves:
  dex: 4
  con: 5
  wis: 2
  cha: 5
skills:
  perception: 4
  stealth: 4
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - fire
cr: '3'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Fire Breath.** The dragon exhales fire in a 15-foot cone. Each creature in that area must make a `dc:13` Dexterity saving throw, taking `damage:4d10` fire damage on a failed save, or half as much damage on a successful one.
        **Weakening Breath.** The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a `dc:13` Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
