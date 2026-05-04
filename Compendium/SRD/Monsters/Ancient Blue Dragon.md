---
archivist: true
entity_type: monster
slug: ancient-blue-dragon
name: Ancient Blue Dragon
compendium: SRD
---

```monster
name: Ancient Blue Dragon
size: Gargantuan
type: Dragon
alignment: lawful evil
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 481
  formula: 26d20+208
speed:
  walk: 40
  fly: 80
  burrow: 40
abilities:
  str: 29
  dex: 10
  con: 27
  int: 18
  wis: 17
  cha: 21
saves:
  dex: 7
  con: 15
  wis: 10
  cha: 12
skills:
  perception: 17
  stealth: 7
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 27
languages:
  - Common
  - Draconic
damage_immunities:
  - lightning
cr: '23'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:2d10` lightning damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 20 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:20` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Lightning Breath (Recharge 5-6)
    entries:
      - The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a `dc:23` Dexterity saving throw, taking `damage:16d10` lightning damage on a failed save, or half as much damage on a successful one.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a `dc:24` Dexterity saving throw or take `damage:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
