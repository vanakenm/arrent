---
archivist: true
entity_type: monster
slug: srd-2024_monster_triceratops
name: Triceratops
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.449Z'
---

```monster
slug: srd-2024_monster_triceratops
name: Triceratops
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d12 + 36
speed:
  walk: 50
abilities:
  str: 22
  dex: 9
  con: 17
  int: 2
  wis: 11
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The triceratops makes two Gore attacks.
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d12+STR` Piercing damage. If the target is Huge or smaller and the triceratops moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d8` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 9
        damage: 2d12+6
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 6
  dex: -1
  con: 3
  int: -4
  wis: 0
  cha: -3
alignment: unaligned
passive_perception: 10
```
