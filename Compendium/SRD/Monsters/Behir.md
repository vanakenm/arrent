---
archivist: true
entity_type: monster
slug: behir
name: Behir
compendium: SRD
---

```monster
name: Behir
size: Huge
type: Monstrosity
alignment: neutral evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 168
  formula: 16d12+64
speed:
  walk: 50
  climb: 40
abilities:
  str: 23
  dex: 16
  con: 18
  int: 7
  wis: 14
  cha: 12
skills:
  perception: 6
  stealth: 7
senses:
  - darkvision 90 ft.
passive_perception: 16
languages:
  - Draconic
damage_immunities:
  - lightning
cr: '11'
actions:
  - name: Multiattack
    entries:
      - 'The behir makes two attacks: one with its bite and one to constrict.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:3d10+STR` piercing damage.'
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one Large or smaller creature. Hit: `damage:2d10+STR` bludgeoning damage plus `damage:2d10+STR` slashing damage. The target is grappled (escape `dc:CON`) if the behir isn''t already constricting a creature, and the target is restrained until this grapple ends.'
  - name: Lightning Breath (Recharge 5-6)
    entries:
      - The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a `dc:16` Dexterity saving throw, taking `damage:12d10` lightning damage on a failed save, or half as much damage on a successful one.
  - name: Swallow
    entries:
      - |-
        The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes `damage:6d6` acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.
        If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a `dc:14` Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.
```
