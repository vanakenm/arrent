---
archivist: true
entity_type: monster
slug: bearded-devil
name: Bearded Devil
compendium: SRD
---

```monster
name: Bearded Devil
size: Medium
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8+16
speed:
  walk: 30
abilities:
  str: 16
  dex: 15
  con: 15
  int: 9
  wis: 11
  cha: 11
saves:
  str: 5
  con: 4
  wis: 2
senses:
  - darkvision 120 ft.
passive_perception: 10
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
cr: '3'
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
  - name: Steadfast
    entries:
      - The devil can't be frightened while it can see an allied creature within 30 feet of it.
actions:
  - name: Multiattack
    entries:
      - 'The devil makes two attacks: one with its beard and one with its glaive.'
  - name: Beard
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d8+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can''t regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
  - name: Glaive
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d10+STR` slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a `dc:CON` Constitution saving throw or lose 5 (`dice:1d10`) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (`dice:1d10`). Any creature can take an action to stanch the wound with a successful `dc:12` Wisdom (Medicine) check. The wound also closes if the target receives magical healing.'
```
