---
archivist: true
entity_type: monster
slug: chain-devil
name: Chain Devil
compendium: SRD
---

```monster
name: Chain Devil
size: Medium
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 85
  formula: 10d8+40
speed:
  walk: 30
abilities:
  str: 18
  dex: 15
  con: 18
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 120 ft.
passive_perception: 8
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
      - The devil makes two attacks with its chains.
  - name: Chain
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` slashing damage. The target is grappled (escape `dc:DEX`) if the devil isn''t already grappling a creature. Until this grapple ends, the target is restrained and takes `damage:2d6` piercing damage at the start of each of its turns.'
  - name: Animate Chains (Recharges after a Short or Long Rest)
    entries:
      - |-
        Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.
        Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.
reactions:
  - name: Unnerving Mask
    entries:
      - When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a `dc:14` Wisdom saving throw or be frightened until the end of its turn.
```
