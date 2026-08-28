---
archivist: true
entity_type: monster
slug: srd-5e_monster_purple-worm
name: Purple Worm
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.012Z'
---

```monster
slug: srd-5e_monster_purple-worm
name: Purple Worm
edition: '2014'
source: SRD 5.1
size: gargantuan
type: monstrosity
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 247
  formula: 15d20+90
speed:
  walk: 50
  burrow: 30
abilities:
  str: 28
  dex: 7
  con: 22
  int: 1
  wis: 8
  cha: 4
senses:
  - blindsight 30 ft.
  - tremorsense 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The worm makes two attacks: one with its bite and one with its stinger.'
  - name: Bite
    entries:
      - |-
        Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d8+STR` piercing damage. If the target is a Large or smaller creature, it must succeed on a `dc:19` Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes `dmg:6d6` acid damage at the start of each of the worm's turns.
        If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a `dc:21` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.
    attacks:
      - name: Bite attack
        type: melee
        bonus: 14
        damage: 3d8
        damage_type: thunder
        range:
          reach: 10
  - name: Tail Stinger
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:3d6+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:12d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Tail Stinger attack
        type: melee
        bonus: 14
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Tunneler
    entries:
      - The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.
cr: '15'
saves:
  con: 11
  wis: 4
alignment: unaligned
passive_perception: 9
```
