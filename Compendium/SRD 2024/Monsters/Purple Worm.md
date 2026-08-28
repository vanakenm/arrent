---
archivist: true
entity_type: monster
slug: srd-2024_monster_purple-worm
name: Purple Worm
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.440Z'
---

```monster
slug: srd-2024_monster_purple-worm
name: Purple Worm
edition: '2024'
source: SRD 5.2
size: gargantuan
type: monstrosity
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 247
  formula: 15d20 + 90
speed:
  walk: 50
  burrow: 50
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
      - The worm makes one Bite attack and one Tail Stinger attack.
  - name: Swallow
    entries:
      - 'Strength Saving Throw: `dc:19`, one Large or smaller creature Grappled by the worm (it can have up to three creatures swallowed at a time). Failure: The target is swallowed by the worm, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions, has Cover|XPHB|Total Cover against attacks and other effects outside the worm, and takes `dmg:5d6` Acid damage at the start of each of the worm''s turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a `dc:21` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the worm and has the Prone condition. If the worm dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone.'
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:CON`), and it has the Restrained condition until the grapple ends.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 14
        damage: 3d8+9
        damage_type: piercing
        range:
          reach: 10
  - name: Tail Stinger
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Piercing damage plus `dmg:10d6` Poison damage.'
    attacks:
      - name: Tail Stinger attack
        type: melee
        bonus: 14
        damage: 2d6+9
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Tunneler
    entries:
      - The worm can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake.
cr: '15'
saves:
  str: 9
  dex: -2
  con: 11
  int: -5
  wis: 4
  cha: -3
alignment: unaligned
passive_perception: 9
```
