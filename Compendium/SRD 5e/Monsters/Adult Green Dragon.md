---
archivist: true
entity_type: monster
slug: srd-5e_monster_adult-green-dragon
name: Adult Green Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.973Z'
---

```monster
slug: srd-5e_monster_adult-green-dragon
name: Adult Green Dragon
edition: '2014'
source: SRD 5.1
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 207
  formula: 18d12+90
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 12
  con: 21
  int: 18
  wis: 15
  cha: 17
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:2d6` poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 11
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 11
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 11
        damage: 2d8
        damage_type: thunder
        range:
          reach: 15
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a `dc:16` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Poison Breath
    entries:
      - The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:16d6` poison damage on a failed save, or half as much damage on a successful one.
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
      - The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a `dc:19` Dexterity saving throw or take `dmg:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '15'
saves:
  dex: 6
  con: 10
  wis: 7
  cha: 8
skills:
  deception: 8
  insight: 7
  perception: 12
  persuasion: 8
  stealth: 6
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 22
legendary_resistance: 3
```
