---
archivist: true
entity_type: monster
slug: young-gold-dragon
name: Young Gold Dragon
compendium: SRD
---

```monster
name: Young Gold Dragon
size: Large
type: Dragon
alignment: lawful good
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 14
  con: 21
  int: 16
  wis: 13
  cha: 20
saves:
  dex: 6
  con: 9
  wis: 5
  cha: 9
skills:
  insight: 5
  perception: 9
  persuasion: 9
  stealth: 6
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 19
languages:
  - Common
  - Draconic
damage_immunities:
  - fire
cr: '10'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
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
        **Fire Breath.** The dragon exhales fire in a 30-foot cone. Each creature in that area must make a `dc:17` Dexterity saving throw, taking `damage:10d10` fire damage on a failed save, or half as much damage on a successful one.
        **Weakening Breath.** The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a `dc:17` Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
