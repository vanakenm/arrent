---
archivist: true
entity_type: monster
slug: adult-white-dragon
name: Adult White Dragon
compendium: SRD
---

```monster
name: Adult White Dragon
size: Huge
type: Dragon
alignment: chaotic evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 200
  formula: 16d12+96
speed:
  walk: 40
  fly: 80
  swim: 40
  burrow: 30
abilities:
  str: 22
  dex: 10
  con: 22
  int: 8
  wis: 12
  cha: 12
saves:
  dex: 5
  con: 11
  wis: 6
  cha: 6
skills:
  perception: 11
  stealth: 5
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 21
languages:
  - Common
  - Draconic
damage_immunities:
  - cold
cr: '13'
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage plus `damage:1d8` cold damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a `dc:WIS` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Cold Breath (Recharge 5-6)
    entries:
      - The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `damage:12d8` cold damage on a failed save, or half as much damage on a successful one.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a `dc:19` Dexterity saving throw or take `damage:2d6+CON` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
