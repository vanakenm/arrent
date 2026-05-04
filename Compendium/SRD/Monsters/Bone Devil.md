---
archivist: true
entity_type: monster
slug: bone-devil
name: Bone Devil
compendium: SRD
---

```monster
name: Bone Devil
size: Large
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10+60
speed:
  walk: 40
  fly: 40
abilities:
  str: 18
  dex: 16
  con: 18
  int: 13
  wis: 14
  cha: 16
saves:
  int: 5
  wis: 6
  cha: 7
skills:
  deception: 7
  insight: 6
senses:
  - darkvision 120 ft.
passive_perception: 9
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
cr: '9'
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - 'The devil makes three attacks: two with its claws and one with its sting.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d8+STR` slashing damage.'
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d8+STR` piercing damage plus `damage:5d6` poison damage, and the target must succeed on a `dc:14` Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
```
