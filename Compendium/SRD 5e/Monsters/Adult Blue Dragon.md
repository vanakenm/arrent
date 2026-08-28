---
archivist: true
entity_type: monster
slug: srd-5e_monster_adult-blue-dragon
name: Adult Blue Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.971Z'
---

```monster
slug: srd-5e_monster_adult-blue-dragon
name: Adult Blue Dragon
edition: '2014'
source: SRD 5.1
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 225
  formula: 18d12+108
speed:
  walk: 40
  fly: 80
  burrow: 30
abilities:
  str: 25
  dex: 10
  con: 23
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
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage plus `dmg:1d10` lightning damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 12
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
        bonus: 12
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
        bonus: 12
        damage: 2d8
        damage_type: thunder
        range:
          reach: 15
  - name: Frightful Presence
    entries:
      - Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a `dc:17` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
  - name: Lightning Breath
    entries:
      - The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a `dc:19` Dexterity saving throw, taking `dmg:12d10` lightning damage on a failed save, or half as much damage on a successful one.
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
      - The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a `dc:20` Dexterity saving throw or take `dmg:2d6+STR` bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
traits:
  - name: Legendary Resistance (3/Day)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '16'
saves:
  dex: 5
  con: 11
  wis: 7
  cha: 9
skills:
  perception: 12
  stealth: 5
subtype: Dragons, Chromatic
alignment: lawful evil
passive_perception: 22
legendary_resistance: 3
```
