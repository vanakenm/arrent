---
archivist: true
entity_type: monster
slug: barbed-devil
name: Barbed Devil
compendium: SRD
---

```monster
name: Barbed Devil
size: Medium
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 110
  formula: 13d8+52
speed:
  walk: 30
abilities:
  str: 16
  dex: 17
  con: 18
  int: 12
  wis: 14
  cha: 14
saves:
  str: 6
  con: 7
  wis: 5
  cha: 5
skills:
  deception: 5
  insight: 5
  perception: 8
senses:
  - darkvision 120 ft.
passive_perception: 18
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
cr: '5'
traits:
  - name: Barbed Hide
    entries:
      - At the start of each of its turns, the barbed devil deals `damage:1d10` piercing damage to any creature grappling it.
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - 'The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage.'
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:WIS`, range 150 ft., one target. Hit: `damage:3d6` fire damage. If the target is a flammable object that isn''t being worn or carried, it also catches fire.'
```
