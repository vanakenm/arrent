---
archivist: true
entity_type: monster
slug: ancient-red-dragon
name: Ancient Red Dragon
compendium: SRD
---

```monster
name: Ancient Red Dragon
size: Gargantuan
type: Dragon
alignment: chaotic evil
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 546
  formula: 28d20+252
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 30
  dex: 10
  con: 29
  int: 18
  wis: 15
  cha: 23
saves:
  dex: 7
  con: 16
  wis: 9
  cha: 13
skills:
  perception: 16
  stealth: 7
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 26
languages:
  - Common
  - Draconic
damage_immunities:
  - fire
cr: '24'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:4d6` fire damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 20 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:21` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The dragon exhales fire in a 90-foot cone. Each creature in that area must make a `dc:24` Dexterity saving throw, taking `damage:26d6` fire damage on a failed save, or half as much damage on a successful one.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a `dc:25` Dexterity saving throw or take `damage:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
