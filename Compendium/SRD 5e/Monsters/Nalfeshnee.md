---
archivist: true
entity_type: monster
slug: srd-5e_monster_nalfeshnee
name: Nalfeshnee
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.008Z'
---

```monster
slug: srd-5e_monster_nalfeshnee
name: Nalfeshnee
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 184
  formula: 16d10+96
speed:
  walk: 20
  fly: 30
abilities:
  str: 21
  dex: 10
  con: 22
  int: 19
  wis: 12
  cha: 15
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
      - 'The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:5d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 5d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 10
        damage: 3d6
        damage_type: thunder
        range:
          reach: 10
  - name: Horror Nimbus
    entries:
      - The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a `dc:15` Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.
  - name: Teleport
    entries:
      - The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A nalfeshnee has a 50 percent chance of summoning `dice:1d4` vrocks, `dice:1d3` hezrous, `dice:1d2` glabrezus, or one nalfeshnee.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The nalfeshnee has advantage on saving throws against spells and other magical effects.
cr: '13'
saves:
  con: 11
  int: 9
  wis: 6
  cha: 7
subtype: Demons
alignment: chaotic evil
passive_perception: 11
```
