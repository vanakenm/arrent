---
archivist: true
entity_type: monster
slug: srd-2024_monster_archelon
name: Archelon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_archelon
name: Archelon
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 90
  formula: 12d12 + 12
speed:
  walk: 20
  swim: 80
abilities:
  str: 18
  dex: 16
  con: 13
  int: 4
  wis: 14
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
      - The archelon makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 3d6+4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The archelon can breathe air and water.
cr: '4'
saves:
  str: 4
  dex: 3
  con: 1
  int: -3
  wis: 2
  cha: -2
skills:
  stealth: 5
alignment: unaligned
passive_perception: 12
```
