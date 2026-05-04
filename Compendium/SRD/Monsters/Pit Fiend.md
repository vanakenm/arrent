---
archivist: true
entity_type: monster
slug: pit-fiend
name: Pit Fiend
compendium: SRD
---

```monster
name: Pit Fiend
size: Large
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 300
  formula: 24d10+168
speed:
  walk: 30
  fly: 60
abilities:
  str: 26
  dex: 14
  con: 24
  int: 22
  wis: 18
  cha: 24
saves:
  dex: 8
  con: 13
  wis: 10
senses:
  - truesight 120 ft.
passive_perception: 14
languages:
  - Infernal
  - telepathy 120 ft.
damage_resistances:
  - cold; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: '20'
traits:
  - name: Fear Aura
    entries:
      - Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a `dc:21` Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours.
  - name: Magic Resistance
    entries:
      - The pit fiend has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The pit fiend's weapon attacks are magical.
  - name: Innate Spellcasting
    entries:
      - |-
        The pit fiend's spellcasting ability is Charisma (spell save `dc:CHA`). The pit fiend can innately cast the following spells, requiring no material components:
        At will: detect magic, fireball
        3/day each: hold monster, wall of fire
actions:
  - name: Multiattack
    entries:
      - 'The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d6+STR` piercing damage. The target must succeed on a `dc:CON` Constitution saving throw or become poisoned. While poisoned in this way, the target can''t regain hit points, and it takes `damage:6d6` poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage plus `damage:6d6` fire damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d10+STR` bludgeoning damage.'
```
