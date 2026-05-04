---
archivist: true
entity_type: monster
slug: silver-dragon-wyrmling
name: Silver Dragon Wyrmling
compendium: SRD
---

```monster
name: Silver Dragon Wyrmling
size: Medium
type: Dragon
alignment: lawful good
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 45
  formula: 6d8+18
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 2
  con: 5
  wis: 2
  cha: 4
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
  - cold
cr: '2'
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Cold Breath.** The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:4d8` cold damage on a failed save, or half as much damage on a successful one.
        **Paralyzing Breath.** The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
