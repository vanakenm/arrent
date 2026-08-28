---
archivist: true
entity_type: monster
slug: srd-5e_monster_ancient-black-dragon
name: Ancient Black Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.974Z'
---

```monster
slug: srd-5e_monster_ancient-black-dragon
name: Ancient Black Dragon
edition: '2014'
source: SRD 5.1
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 367
  formula: 21d20+147
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 27
  dex: 14
  con: 25
  int: 16
  wis: 15
  cha: 19
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:2d8` acid damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 15
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
        bonus: 15
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
        bonus: 15
        damage: 2d8
        damage_type: thunder
        range:
          reach: 20
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:19` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Acid Breath
    entries:
      - The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a `dc:22` Dexterity saving throw, taking `dmg:15d8` acid damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
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
      - The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a `dc:23` Dexterity saving throw or take `dmg:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '21'
saves:
  dex: 9
  con: 14
  wis: 9
  cha: 11
skills:
  perception: 16
  stealth: 9
subtype: Dragons, Chromatic
alignment: chaotic evil
passive_perception: 26
legendary_resistance: 3
```
