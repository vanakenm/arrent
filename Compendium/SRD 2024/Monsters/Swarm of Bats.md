---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-bats
name: Swarm of Bats
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_swarm-of-bats
name: Swarm of Bats
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 11
  formula: 2d10
speed:
  walk: 5
  fly: 30
abilities:
  str: 5
  dex: 15
  con: 10
  int: 2
  wis: 12
  cha: 4
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bites
    entries:
      - 'Melee Attack Roll: `atk:+4`, reach 5 ft. `dmg:2d4` Piercing damage, or `dmg:1d4` Piercing damage if the swarm is Bloodied.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '0.25'
saves:
  str: -3
  dex: 2
  con: 0
  int: -4
  wis: 1
  cha: -3
alignment: unaligned
passive_perception: 11
```
