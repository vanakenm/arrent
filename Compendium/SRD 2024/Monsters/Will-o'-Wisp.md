---
archivist: true
entity_type: monster
slug: srd-2024_monster_will-o-wisp
name: Will-o'-Wisp
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.454Z'
---

```monster
slug: srd-2024_monster_will-o-wisp
name: Will-o'-Wisp
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 27
  formula: 11d4
speed:
  walk: 5
  fly: 50
abilities:
  str: 1
  dex: 28
  con: 10
  int: 13
  wis: 14
  cha: 11
senses:
  - darkvision 120 ft.
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
  - necrotic
damage_immunities:
  - lightning
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Shock
    entries:
      - 'Melee Attack Roll: `atk:WIS+PB`, reach 5 ft. `dmg:2d8+WIS` Lightning damage.'
    attacks:
      - name: Shock attack
        type: melee
        bonus: 4
        damage: 2d8+2
        damage_type: lightning
        range:
          reach: 5
  - name: Consume Life
    entries:
      - 'Constitution Saving Throw: `dc:CON`, one living creature the wisp can see within 5 feet that has 0 Hit Points. Failure: The target dies, and the wisp regains 10 (`dice:3d6`) Hit Points.'
  - name: Vanish
    entries:
      - The wisp and its light have the Invisible condition until the wisp's Concentration ends on this effect, which ends early immediately after the wisp makes an attack roll or uses Consume Life.
reactions: []
legendary_actions: []
traits:
  - name: Ephemeral
    entries:
      - The wisp can't wear or carry anything.
  - name: Illumination
    entries:
      - The wisp sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.
  - name: Incorporeal Movement
    entries:
      - The wisp can move through other creatures and objects as if they were Difficult Terrain. It takes `dmg:1d10` Force damage if it ends its turn inside an object.
cr: '2'
saves:
  str: -5
  dex: 9
  con: 0
  int: 1
  wis: 2
  cha: 0
alignment: chaotic evil
passive_perception: 12
```
