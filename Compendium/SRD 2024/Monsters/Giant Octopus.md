---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-octopus
name: Giant Octopus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.424Z'
---

```monster
slug: srd-2024_monster_giant-octopus
name: Giant Octopus
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 45
  formula: 7d10 + 7
speed:
  walk: 10
  swim: 60
abilities:
  str: 17
  dex: 13
  con: 13
  int: 5
  wis: 10
  cha: 4
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Tentacles
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`) from all eight tentacles. While Grappled, the target has the Restrained condition.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: bludgeoning
        range:
          reach: 10
reactions:
  - name: Ink Cloud
    entries:
      - _Trigger:_ The octopus takes damage while underwater. _Response:_ The octopus releases ink that fills a 10-foot Cube centered on itself, and the octopus moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink.
    recharge:
      type: per_day
      param: 1
legendary_actions: []
traits:
  - name: Water Breathing
    entries:
      - The octopus can breathe only underwater. It can hold its breath for 1 hour outside water.
cr: '1'
saves:
  str: 3
  dex: 1
  con: 1
  int: -3
  wis: 0
  cha: -3
skills:
  perception: 4
  stealth: 5
alignment: unaligned
passive_perception: 14
```
