---
archivist: true
entity_type: monster
slug: srd-2024_monster_harpy
name: Harpy
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_harpy
name: Harpy
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 38
  formula: 7d8 + 7
speed:
  walk: 20
  fly: 40
abilities:
  str: 12
  dex: 13
  con: 12
  int: 7
  wis: 10
  cha: 13
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage: 2d4+1
        damage_type: slashing
        range:
          reach: 5
  - name: Luring Song
    entries:
      - 'The harpy sings a magical melody, which lasts until the harpy''s Concentration ends on it. Wisdom Saving Throw: `dc:11`, each Humanoid and Giant in a 300-foot Emanation originating from the harpy when the song starts. Failure: The target has the Charmed condition until the song ends and repeats the save at the end of each of its turns. While Charmed, the target has the Incapacitated condition and ignores the Luring Song of other harpies. If the target is more than 5 feet from the harpy, the target moves on its turn toward the harpy by the most direct route, trying to get within 5 feet of the harpy. It doesn''t avoid Opportunity Attacks; however, before moving into damaging terrain (such as lava or a pit) and whenever it takes damage from a source other than the harpy, the target repeats the save. Success: The target is immune to this harpy''s Luring Song for 24 hours.'
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 1
  dex: 1
  con: 1
  int: -2
  wis: 0
  cha: 1
alignment: chaotic evil
passive_perception: 10
```
