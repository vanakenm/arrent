---
archivist: true
entity_type: monster
slug: srd-2024_monster_jackal
name: Jackal
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_jackal
name: Jackal
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 3
  formula: 1d6
speed:
  walk: 40
abilities:
  str: 8
  dex: 15
  con: 11
  int: 3
  wis: 12
  cha: 6
senses:
  - darkvision 90 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 1
        damage: 1d4+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0'
saves:
  str: -1
  dex: 2
  con: 0
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
  stealth: 4
alignment: unaligned
passive_perception: 15
```
