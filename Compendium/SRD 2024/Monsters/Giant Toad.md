---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-toad
name: Giant Toad
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-toad
name: Giant Toad
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 39
  formula: 6d10 + 6
speed:
  walk: 30
  swim: 30
abilities:
  str: 15
  dex: 13
  con: 13
  int: 2
  wis: 10
  cha: 3
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Piercing damage plus `dmg:2d4` Poison damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`).'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Swallow
    entries:
      - The toad swallows a Medium or smaller target it is grappling. While swallowed, the target isn't Grappled but has the Blinded and Restrained conditions, and it has Cover|XPHB|Total Cover against attacks and other effects outside the toad. In addition, the target takes `dmg:3d6` Acid damage at the end of each of the toad's turns. The toad can have only one target swallowed at a time, and it can't use Bite while it has a swallowed target. If the toad dies, a swallowed creature is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The toad can breathe air and water.
  - name: Standing Leap
    entries:
      - The toad's Long Jump is up to 20 feet and its High Jump is up to 10 feet with or without a running start.
cr: '1'
saves:
  str: 2
  dex: 1
  con: 1
  int: -4
  wis: 0
  cha: -4
alignment: unaligned
passive_perception: 10
```
