---
archivist: true
entity_type: monster
slug: srd-2024_monster_mammoth
name: Mammoth
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.434Z'
---

```monster
slug: srd-2024_monster_mammoth
name: Mammoth
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12 + 55
speed:
  walk: 50
abilities:
  str: 24
  dex: 9
  con: 21
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
      - The mammoth makes two Gore attacks.
  - name: Trample
    entries:
      - 'Dexterity Saving Throw: `dc:18`, one creature within 5 feet that has the Prone condition. Failure: `dmg:4d10+STR` Bludgeoning damage. Success: Half damage.'
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Piercing damage. If the target is a Huge or smaller creature and the mammoth moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 10
        damage: 2d10+7
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 10
  dex: -1
  con: 8
  int: -4
  wis: 0
  cha: -2
alignment: unaligned
passive_perception: 10
```
