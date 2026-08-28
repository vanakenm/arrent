---
archivist: true
entity_type: monster
slug: srd-5e_monster_hezrou
name: Hezrou
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_hezrou
name: Hezrou
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 136
  formula: 13d10+65
speed:
  walk: 30
abilities:
  str: 19
  dex: 17
  con: 20
  int: 5
  wis: 12
  cha: 13
senses:
  - darkvision 120 ft.
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
      - 'The hezrou makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A hezrou has a 30 percent chance of summoning `dice:2d6` dretches or one hezrou.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The hezrou has advantage on saving throws against spells and other magical effects.
  - name: Stench
    entries:
      - Any creature that starts its turn within 10 feet of the hezrou must succeed on a `dc:14` Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.
cr: '8'
saves:
  str: 7
  con: 8
  wis: 4
subtype: Demons
alignment: chaotic evil
passive_perception: 11
```
