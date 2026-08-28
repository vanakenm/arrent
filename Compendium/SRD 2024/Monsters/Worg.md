---
archivist: true
entity_type: monster
slug: srd-2024_monster_worg
name: Worg
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.454Z'
---

```monster
slug: srd-2024_monster_worg
name: Worg
edition: '2024'
source: SRD 5.2
size: large
type: fey
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10 + 4
speed:
  walk: 50
abilities:
  str: 16
  dex: 13
  con: 13
  int: 7
  wis: 11
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Goblin
  - Worg
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage, and the next attack roll made against the target before the start of the worg''s next turn has Advantage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 3
  dex: 1
  con: 1
  int: -2
  wis: 0
  cha: -1
skills:
  perception: 4
alignment: neutral evil
passive_perception: 14
```
