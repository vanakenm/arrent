---
archivist: true
entity_type: monster
slug: srd-2024_monster_minotaur-skeleton
name: Minotaur Skeleton
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_minotaur-skeleton
name: Minotaur Skeleton
edition: '2024'
source: SRD 5.2
size: large
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 15
  int: 6
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
languages:
  - Understands Abyssal but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d8` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 6
        damage: 2d10+4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 0
  con: 2
  int: -2
  wis: -1
  cha: -3
alignment: lawful evil
passive_perception: 9
```
