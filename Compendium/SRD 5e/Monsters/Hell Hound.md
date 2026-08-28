---
archivist: true
entity_type: monster
slug: srd-5e_monster_hell-hound
name: Hell Hound
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_hell-hound
name: Hell Hound
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 45
  formula: 7d8+14
speed:
  walk: 50
abilities:
  str: 17
  dex: 12
  con: 14
  int: 6
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
languages:
  - understands Infernal but can't speak it
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage plus `dmg:2d6` fire damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - The hound exhales fire in a 15-foot cone. Each creature in that area must make a `dc:12` Dexterity saving throw, taking `dmg:6d6` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '3'
skills:
  perception: 5
alignment: lawful evil
passive_perception: 15
```
