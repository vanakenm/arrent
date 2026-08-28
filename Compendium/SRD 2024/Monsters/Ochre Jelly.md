---
archivist: true
entity_type: monster
slug: srd-2024_monster_ochre-jelly
name: Ochre Jelly
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_ochre-jelly
name: Ochre Jelly
edition: '2024'
source: SRD 5.2
size: large
type: ooze
ac:
  - ac: 8
    from:
      - natural armor
hp:
  average: 52
  formula: 7d10 + 14
speed:
  walk: 20
  climb: 20
abilities:
  str: 15
  dex: 6
  con: 14
  int: 2
  wis: 6
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - acid
damage_immunities:
  - lightning
condition_immunities:
  - charmed
  - deafened
  - exhaustion
  - frightened
  - grappled
  - prone
  - restrained
actions:
  - name: Pseudopod
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Acid damage.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 4
        damage: 3d6+2
        damage_type: acid
        range:
          reach: 5
reactions:
  - name: Split
    entries:
      - _Trigger:_ While the jelly is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. _Response:_ The jelly splits into two new Ochre Jellies. Each new jelly is one size smaller than the original jelly and acts on its Initiative. The original jelly’s Hit Points are divided evenly between the new jellies (round down).
legendary_actions: []
traits:
  - name: Amorphous
    entries:
      - The jelly can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Spider Climb
    entries:
      - The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check.
cr: '2'
saves:
  str: 2
  dex: -2
  con: 2
  int: -4
  wis: -2
  cha: -5
alignment: unaligned
passive_perception: 8
```
