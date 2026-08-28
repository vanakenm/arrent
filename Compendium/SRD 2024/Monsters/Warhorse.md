---
archivist: true
entity_type: monster
slug: srd-2024_monster_warhorse
name: Warhorse
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_warhorse
name: Warhorse
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10 + 3
speed:
  walk: 60
abilities:
  str: 18
  dex: 12
  con: 13
  int: 2
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Bludgeoning damage. If the target is a Large or smaller creature and the horse moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d4` Bludgeoning damage and has the Prone condition.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 2d4+4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 4
  dex: 1
  con: 1
  int: -4
  wis: 3
  cha: -2
alignment: unaligned
passive_perception: 11
```
