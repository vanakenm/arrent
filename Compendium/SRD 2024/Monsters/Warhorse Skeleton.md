---
archivist: true
entity_type: monster
slug: srd-2024_monster_warhorse-skeleton
name: Warhorse Skeleton
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_warhorse-skeleton
name: Warhorse Skeleton
edition: '2024'
source: SRD 5.2
size: large
type: undead
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 22
  formula: 3d10 + 6
speed:
  walk: 60
abilities:
  str: 18
  dex: 12
  con: 15
  int: 2
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 1d6+4
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
  con: 2
  int: -4
  wis: -1
  cha: -3
alignment: lawful evil
passive_perception: 9
```
