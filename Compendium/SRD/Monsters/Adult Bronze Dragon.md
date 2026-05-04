---
archivist: true
entity_type: monster
slug: adult-bronze-dragon
name: Adult Bronze Dragon
compendium: SRD
---

```monster
name: Adult Bronze Dragon
size: Huge
type: Dragon
alignment: lawful good
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 212
  formula: 17d12+102
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 25
  dex: 10
  con: 23
  int: 16
  wis: 15
  cha: 19
saves:
  dex: 5
  con: 11
  wis: 7
  cha: 9
skills:
  insight: 7
  perception: 12
  stealth: 5
senses:
  - blindsight 60 ft.
  - darkvision 120 ft.
passive_perception: 22
languages:
  - Common
  - Draconic
damage_immunities:
  - lightning
cr: '15'
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
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:17` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a `dc:19` Dexterity saving throw, taking `damage:12d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:19` Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.
  - name: Change Shape
    entries:
      - |-
        The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).
        In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.
legendary:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    entries:
      - The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a `dc:20` Dexterity saving throw or take `damage:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
legendary_actions: 3
```
