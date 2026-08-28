---
archivist: true
entity_type: monster
slug: srd-5e_monster_ancient-bronze-dragon
name: Ancient Bronze Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.975Z'
---

```monster
slug: srd-5e_monster_ancient-bronze-dragon
name: Ancient Bronze Dragon
edition: '2014'
source: SRD 5.1
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 444
  formula: 24d20+192
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 29
  dex: 10
  con: 27
  int: 18
  wis: 17
  cha: 21
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:2d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 16
        damage: 2d10
        damage_type: thunder
        range:
          reach: 15
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 16
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 20 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 16
        damage: 2d8
        damage_type: thunder
        range:
          reach: 20
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:20` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a `dc:23` Dexterity saving throw, taking `dmg:16d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:23` Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Change Shape
    entries:
      - |-
        The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).
        In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.
reactions: []
legendary_actions:
  - name: Detect
    entries:
      - The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    entries:
      - The dragon makes a tail attack.
  - name: Wing Attack
    entries:
      - The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a `dc:24` Dexterity saving throw or take `dmg:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '22'
saves:
  dex: 7
  con: 15
  wis: 10
  cha: 12
skills:
  insight: 10
  perception: 17
  stealth: 7
subtype: Dragons, Metallic
alignment: lawful good
passive_perception: 27
legendary_resistance: 3
```
