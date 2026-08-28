---
archivist: true
entity_type: monster
slug: srd-5e_monster_behir
name: Behir
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.981Z'
---

```monster
slug: srd-5e_monster_behir
name: Behir
edition: '2014'
source: SRD 5.1
size: huge
type: monstrosity
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
senses:
  - darkvision 90 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The behir makes two attacks: one with its bite and one to constrict.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 3d10
        damage_type: thunder
        range:
          reach: 10
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one Large or smaller creature. Hit: `dmg:2d10+STR` bludgeoning damage plus `dmg:2d10+STR` slashing damage. The target is grappled (escape `dc:CON`) if the behir isn''t already constricting a creature, and the target is restrained until this grapple ends.'
    attacks:
      - name: Constrict attack
        type: melee
        bonus: 10
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
        extra_damage:
          dice: 2d10
          type: thunder
  - name: Lightning Breath
    entries:
      - The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a `dc:16` Dexterity saving throw, taking `dmg:12d10` lightning damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Swallow
    entries:
      - |-
        The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes `dmg:6d6` acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.
        If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a `dc:14` Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.
reactions: []
legendary_actions: []
traits: []
cr: '11'
skills:
  perception: 6
  stealth: 7
alignment: neutral evil
passive_perception: 16
```
