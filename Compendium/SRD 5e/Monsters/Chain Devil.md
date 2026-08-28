---
archivist: true
entity_type: monster
slug: srd-5e_monster_chain-devil
name: Chain Devil
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.984Z'
---

```monster
slug: srd-5e_monster_chain-devil
name: Chain Devil
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
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
languages:
  - Infernal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes two attacks with its chains.
  - name: Chain
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` slashing damage. The target is grappled (escape `dc:DEX`) if the devil isn''t already grappling a creature. Until this grapple ends, the target is restrained and takes `dmg:2d6` piercing damage at the start of each of its turns.'
    attacks:
      - name: Chain attack
        type: melee
        bonus: 8
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Animate Chains
    entries:
      - |-
        Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.
        Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.
reactions:
  - name: Unnerving Mask
    entries:
      - When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a `dc:14` Wisdom saving throw or be frightened until the end of its turn.
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
cr: '11'
saves:
  con: 7
  wis: 4
  cha: 5
subtype: Devils
alignment: lawful evil
passive_perception: 8
```
