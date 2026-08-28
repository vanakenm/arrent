---
archivist: true
entity_type: monster
slug: srd-2024_monster_elephant
name: Elephant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.418Z'
---

```monster
slug: srd-2024_monster_elephant
name: Elephant
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 76
  formula: 8d12 + 24
speed:
  walk: 40
abilities:
  str: 22
  dex: 9
  con: 17
  int: 3
  wis: 11
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The elephant makes two Gore attacks.
  - name: Trample
    entries:
      - 'Dexterity Saving Throw: `dc:16`, one creature within 5 feet that has the Prone condition. Failure: `dmg:2d10+STR` Bludgeoning damage. Success: Half damage.'
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage. If the target is a Huge or smaller creature and the elephant moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 8
        damage: 2d8+6
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 6
  dex: -1
  con: 3
  int: -4
  wis: 0
  cha: -2
alignment: unaligned
passive_perception: 10
```
