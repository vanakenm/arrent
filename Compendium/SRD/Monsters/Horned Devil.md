---
archivist: true
entity_type: monster
slug: horned-devil
name: Horned Devil
compendium: SRD
---

```monster
name: Horned Devil
size: Large
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 20
  fly: 60
abilities:
  str: 22
  dex: 17
  con: 21
  int: 12
  wis: 16
  cha: 17
saves:
  str: 10
  dex: 7
  wis: 7
  cha: 7
senses:
  - darkvision 120 ft.
passive_perception: 13
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
cr: '11'
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
      - 'The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.'
  - name: Fork
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d8+STR` piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a `dc:CON` Constitution saving throw or lose 10 (`dice:3d6`) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (`dice:3d6`). Any creature can take an action to stanch the wound with a successful `dc:12` Wisdom (Medicine) check. The wound also closes if the target receives magical healing.'
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:WIS`, range 150 ft., one target. Hit: `damage:4d6` fire damage. If the target is a flammable object that isn''t being worn or carried, it also catches fire.'
```
