---
archivist: true
entity_type: monster
slug: young-brass-dragon
name: Young Brass Dragon
compendium: SRD
---

```monster
name: Young Brass Dragon
size: Large
type: Dragon
alignment: chaotic good
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10+39
speed:
  walk: 40
  fly: 80
  burrow: 20
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 3
  con: 6
  wis: 3
  cha: 5
skills:
  perception: 6
  persuasion: 5
  stealth: 3
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 16
languages:
  - Common
  - Draconic
damage_immunities:
  - fire
cr: '6'
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
        **Fire Breath.** The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a `dc:14` Dexterity saving throw, taking `damage:12d6` fire damage on a failed save, or half as much damage on a successful one.
        **Sleep Breath.** The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.
```
