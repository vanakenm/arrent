---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-rats
name: Swarm of Rats
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_swarm-of-rats
name: Swarm of Rats
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 14
  formula: 4d8 - 4
speed:
  walk: 30
  climb: 30
abilities:
  str: 9
  dex: 11
  con: 9
  int: 2
  wis: 10
  cha: 3
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bites
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d4` Piercing damage, or `dmg:1d4` Piercing damage if the swarm is Bloodied.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 2
        damage: 2d4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '0.25'
saves:
  str: -1
  dex: 0
  con: -1
  int: -4
  wis: 0
  cha: -4
alignment: unaligned
passive_perception: 10
```
