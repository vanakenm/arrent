---
archivist: true
entity_type: monster
slug: srd-2024_monster_saber-toothed-tiger
name: Saber-Toothed Tiger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_saber-toothed-tiger
name: Saber-Toothed Tiger
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 52
  formula: 7d10 + 14
speed:
  walk: 40
abilities:
  str: 18
  dex: 17
  con: 15
  int: 3
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The tiger makes two Rend attacks.
  - name: Nimble Escape
    entries:
      - The tiger takes the Disengage or Hide action.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Running Leap
    entries:
      - With a 10-foot running start, the tiger can Long Jump up to 25 feet.
cr: '2'
saves:
  str: 6
  dex: 5
  con: 2
  int: -4
  wis: 1
  cha: -1
skills:
  perception: 5
  stealth: 7
alignment: unaligned
passive_perception: 15
```
