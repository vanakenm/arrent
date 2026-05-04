---
archivist: true
entity_type: monster
slug: ancient-green-dragon
name: Ancient Green Dragon
compendium: SRD
---

```monster
name: Ancient Green Dragon
size: Gargantuan
type: Dragon
alignment: lawful evil
ac:
  - ac: 21
    from:
      - natural armor
hp:
  average: 385
  formula: 22d20+154
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 27
  dex: 12
  con: 25
  int: 20
  wis: 17
  cha: 19
saves:
  dex: 8
  con: 14
  wis: 10
  cha: 11
skills:
  deception: 11
  insight: 10
  perception: 17
  persuasion: 11
  stealth: 8
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 27
languages:
  - Common
  - Draconic
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '22'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:3d6` poison damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:4d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 20 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:19` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Poison Breath (Recharge 5-6)
    entries:
      - The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:22d6` poison damage on a failed save, or half as much damage on a successful one.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a `dc:23` Dexterity saving throw or take `damage:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
