---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-venomous-snakes
name: Swarm of Venomous Snakes
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_swarm-of-venomous-snakes
name: Swarm of Venomous Snakes
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 36
  formula: 8d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 8
  dex: 18
  con: 11
  int: 1
  wis: 10
  cha: 3
senses:
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bites
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Piercing damage—or `dmg:1d4+DEX` Piercing damage if the swarm is Bloodied—plus `dmg:3d6` Poison damage.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 6
        damage: 1d8+4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '2'
saves:
  str: -1
  dex: 4
  con: 0
  int: -5
  wis: 0
  cha: -4
alignment: unaligned
passive_perception: 10
```
