---
archivist: true
entity_type: monster
slug: srd-2024_monster_plesiosaurus
name: Plesiosaurus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_plesiosaurus
name: Plesiosaurus
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10 + 24
speed:
  walk: 20
  swim: 40
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 12
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The plesiosaurus can hold its breath for 1 hour.
cr: '2'
saves:
  str: 4
  dex: 2
  con: 3
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
  stealth: 4
alignment: unaligned
passive_perception: 13
```
