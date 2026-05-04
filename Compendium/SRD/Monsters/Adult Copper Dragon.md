---
archivist: true
entity_type: monster
slug: adult-copper-dragon
name: Adult Copper Dragon
compendium: SRD
---

```monster
name: Adult Copper Dragon
size: Huge
type: Dragon
alignment: chaotic good
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 184
  formula: 16d12+80
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 23
  dex: 12
  con: 21
  int: 18
  wis: 15
  cha: 17
saves:
  dex: 6
  con: 10
  wis: 7
  cha: 8
skills:
  deception: 8
  perception: 12
  stealth: 6
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 22
languages:
  - Common
  - Draconic
damage_immunities:
  - acid
cr: '14'
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
        **Acid Breath.** The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:18` Dexterity saving throw, taking `damage:12d8` acid damage on a failed save, or half as much damage on a successful one.
        **Slowing Breath.** The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.
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
