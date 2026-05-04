---
archivist: true
entity_type: monster
slug: vrock
name: Vrock
compendium: SRD
---

```monster
name: Vrock
size: Large
type: Fiend
subtype: demon
alignment: chaotic evil
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
saves:
  dex: 5
  wis: 4
  cha: 2
senses:
  - darkvision 120 ft.
passive_perception: 11
languages:
  - Abyssal
  - telepathy 120 ft.
damage_resistances:
  - cold
  - fire
  - lightning; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '6'
traits:
  - name: Magic Resistance
    entries:
      - The vrock has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - 'The vrock makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage.'
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` slashing damage.'
  - name: Spores (Recharge 6)
    entries:
      - A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a `dc:14` Constitution saving throw or become poisoned. While poisoned in this way, a target takes `damage:1d10` poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.
  - name: Stunning Screech (1/Day)
    entries:
      - The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a `dc:14` Constitution saving throw or be stunned until the end of the vrock's next turn.
  - name: 'Variant: Summon Demon (1/Day)'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A vrock has a 30 percent chance of summoning `dice:2d4` dretches or one vrock.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
