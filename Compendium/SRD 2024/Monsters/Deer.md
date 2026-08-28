---
archivist: true
entity_type: monster
slug: srd-2024_monster_deer
name: Deer
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.415Z'
---

```monster
slug: srd-2024_monster_deer
name: Deer
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 4
  formula: 1d8
speed:
  walk: 50
abilities:
  str: 11
  dex: 16
  con: 11
  int: 2
  wis: 14
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4` Bludgeoning damage.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 2
        damage: 1d4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Agile
    entries:
      - The deer doesn't provoke an Opportunity Attack when it moves out of an enemy's reach.
cr: '0'
saves:
  str: 0
  dex: 3
  con: 0
  int: -4
  wis: 2
  cha: -3
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
