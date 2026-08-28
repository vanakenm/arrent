---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-frog
name: Giant Frog
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.423Z'
---

```monster
slug: srd-2024_monster_giant-frog
name: Giant Frog
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 18
  formula: 4d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 12
  dex: 13
  con: 11
  int: 2
  wis: 10
  cha: 3
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:+3`, reach 5 ft. `dmg:1d6+2` Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`).'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Swallow
    entries:
      - The frog swallows a Small or smaller target it is grappling. While swallowed, the target isn't Grappled but has the Blinded and Restrained conditions, and it has Cover|XPHB|Total Cover against attacks and other effects outside the frog. While swallowing the target, the frog can't use Bite, and if the frog dies, the swallowed target is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition. At the end of the frog's next turn, the swallowed target takes `dmg:2d4` Acid damage. If that damage doesn't kill it, the frog disgorges it, causing it to exit Prone.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The frog can breathe air and water.
  - name: Standing Leap
    entries:
      - The frog's Long Jump is up to 20 feet and its High Jump is up to 10 feet with or without a running start.
cr: '0.25'
saves:
  str: 1
  dex: 1
  con: 0
  int: -4
  wis: 0
  cha: -4
skills:
  perception: 2
  stealth: 4
alignment: unaligned
passive_perception: 12
```
