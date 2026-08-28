---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-insects
name: Swarm of Insects
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_swarm-of-insects
name: Swarm of Insects
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d8 + 6
speed:
  walk: 20
  fly: 20
abilities:
  str: 3
  dex: 13
  con: 14
  int: 1
  wis: 7
  cha: 1
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bites
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d4+DEX` Poison damage, or `dmg:1d4+DEX` Poison damage if the swarm is Bloodied.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 3
        damage: 2d4+1
        damage_type: poison
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - If the swarm has a Climb Speed, the swarm can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '0.5'
saves:
  str: -4
  dex: 1
  con: 2
  int: -5
  wis: -2
  cha: -5
alignment: unaligned
passive_perception: 8
```
