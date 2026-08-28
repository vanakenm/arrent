---
archivist: true
entity_type: monster
slug: srd-2024_monster_octopus
name: Octopus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_octopus
name: Octopus
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 5
  swim: 30
abilities:
  str: 4
  dex: 15
  con: 0
  int: 3
  wis: 10
  cha: -3
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Tentacles
    entries:
      - 'Melee Attack Roll: `atk:+4`, reach 5 ft. Hit: `dmg:1` Bludgeoning damage.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 4
        damage_type: bludgeoning
        range:
          reach: 5
reactions:
  - name: Ink Cloud
    entries:
      - '_Trigger:_ A creature ends its turn within 5 feet of the octopus while underwater. Response: The octopus releases ink that fills a 5-foot Cube centered on itself, and the octopus moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink.'
    recharge:
      type: per_day
      param: 1
legendary_actions: []
traits:
  - name: Compression
    entries:
      - The octopus can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Water Breathing
    entries:
      - The octopus can breathe only underwater.
cr: '0'
saves:
  str: -3
  dex: 2
  con: 30
  int: -4
  wis: 0
  cha: -3
skills:
  perception: 2
  stealth: 6
alignment: unaligned
passive_perception: 12
```
