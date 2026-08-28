---
archivist: true
entity_type: monster
slug: srd-5e_monster_glabrezu
name: Glabrezu
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.997Z'
---

```monster
slug: srd-5e_monster_glabrezu
name: Glabrezu
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 157
  formula: 15d10+75
speed:
  walk: 40
abilities:
  str: 20
  dex: 15
  con: 21
  int: 19
  wis: 17
  cha: 16
senses:
  - truesight 120 ft.
languages:
  - Abyssal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - slashing
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.'
  - name: Pincer
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape `dc:WIS`). The glabrezu has two pincers, each of which can grapple only one target.'
    attacks:
      - name: Pincer attack
        type: melee
        bonus: 9
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:+9`, reach 5 ft., one target. Hit: `dmg:2d4+DEX` bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 9
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A glabrezu has a 30 percent chance of summoning `dice:1d3` vrocks, `dice:1d2` hezrous, or one glabrezu.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The glabrezu's spellcasting ability is Intelligence (spell save `dc:INT`). The glabrezu can innately cast the following spells, requiring no material components:
        At will: darkness, detect magic, dispel magic
        1/day each: confusion, fly, power word stun
  - name: Magic Resistance
    entries:
      - The glabrezu has advantage on saving throws against spells and other magical effects.
cr: '9'
saves:
  str: 9
  con: 9
  wis: 7
  cha: 7
subtype: Demons
alignment: chaotic evil
passive_perception: 13
```
