---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-elk
name: Giant Elk
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.423Z'
---

```monster
slug: srd-2024_monster_giant-elk
name: Giant Elk
edition: '2024'
source: SRD 5.2
size: huge
type: celestial
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 42
  formula: 5d12 + 10
speed:
  walk: 60
abilities:
  str: 19
  dex: 18
  con: 14
  int: 7
  wis: 14
  cha: 10
senses:
  - darkvision 90 ft.
languages:
  - Celestial; understands Common
  - Elvish
  - And Sylvan but can't speak them
damage_vulnerabilities: []
damage_resistances:
  - necrotic
  - radiant
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Bludgeoning damage plus `dmg:2d4` Radiant damage. If the target is a Huge or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d4` Bludgeoning damage and has the Prone condition.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: bludgeoning
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 6
  dex: 6
  con: 2
  int: -2
  wis: 2
  cha: 0
skills:
  perception: 4
alignment: neutral good
passive_perception: 14
```
