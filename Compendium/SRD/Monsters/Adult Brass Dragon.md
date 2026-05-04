---
archivist: true
entity_type: monster
slug: adult-brass-dragon
name: Adult Brass Dragon
compendium: SRD
---

```monster
name: Adult Brass Dragon
size: Huge
type: Dragon
alignment: chaotic good
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 172
  formula: 15d12+75
speed:
  walk: 40
  fly: 80
  burrow: 40
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 13
  cha: 17
saves:
  dex: 5
  con: 10
  wis: 6
  cha: 8
skills:
  history: 7
  perception: 11
  persuasion: 8
  stealth: 5
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 21
languages:
  - Common
  - Draconic
damage_immunities:
  - fire
cr: '13'
traits:
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:16` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Fire Breath.** The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:18` Dexterity saving throw, taking `damage:13d6` fire damage on a failed save, or half as much damage on a successful one.
        **Sleep Breath.** The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a `dc:19` Dexterity saving throw or take `damage:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
