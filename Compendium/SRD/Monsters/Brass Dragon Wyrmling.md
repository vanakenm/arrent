---
archivist: true
entity_type: monster
slug: brass-dragon-wyrmling
name: Brass Dragon Wyrmling
compendium: SRD
---

```monster
name: Brass Dragon Wyrmling
size: Medium
type: Dragon
alignment: chaotic good
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 16
  formula: 3d8+3
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 15
  dex: 10
  con: 13
  int: 10
  wis: 11
  cha: 13
saves:
  dex: 2
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 2
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - fire
cr: '1'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Fire Breath.** The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a `dc:11` Dexterity saving throw, taking `damage:4d6` fire damage on a failed save, or half as much damage on a successful one.
        **Sleep Breath.** The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.
```
