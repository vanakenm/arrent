---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-eagle
name: Giant Eagle
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.423Z'
---

```monster
slug: srd-2024_monster_giant-eagle
name: Giant Eagle
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10 + 4
speed:
  walk: 10
  fly: 80
abilities:
  str: 16
  dex: 17
  con: 13
  int: 8
  wis: 14
  cha: 10
senses: []
languages:
  - Celestial; understands Common and Primordial (Auran) but can't speak them
damage_vulnerabilities: []
damage_resistances:
  - necrotic
  - radiant
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The eagle makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Slashing damage plus `dmg:1d6` Radiant damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 3
  dex: 3
  con: 1
  int: -1
  wis: 2
  cha: 0
skills:
  perception: 6
alignment: neutral good
passive_perception: 16
```
