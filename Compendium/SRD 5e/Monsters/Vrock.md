---
archivist: true
entity_type: monster
slug: srd-5e_monster_vrock
name: Vrock
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.023Z'
---

```monster
slug: srd-5e_monster_vrock
name: Vrock
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 104
  formula: 11d10+44
speed:
  walk: 40
  fly: 60
abilities:
  str: 17
  dex: 15
  con: 18
  int: 8
  wis: 13
  cha: 8
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
      - 'The vrock makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` slashing damage.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 6
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Spores
    entries:
      - A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a `dc:14` Constitution saving throw or become poisoned. While poisoned in this way, a target takes `dmg:1d10` poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.
  - name: Stunning Screech
    entries:
      - The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a `dc:14` Constitution saving throw or be stunned until the end of the vrock's next turn.
    recharge:
      type: per_day
      param: 1
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A vrock has a 30 percent chance of summoning `dice:2d4` dretches or one vrock.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The vrock has advantage on saving throws against spells and other magical effects.
cr: '6'
saves:
  dex: 5
  wis: 4
  cha: 2
subtype: Demons
alignment: chaotic evil
passive_perception: 11
```
