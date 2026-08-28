---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-crawling-claws
name: Swarm of Crawling Claws
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_swarm-of-crawling-claws
name: Swarm of Crawling Claws
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 49
  formula: 11d8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 14
  con: 11
  int: 5
  wis: 10
  cha: 4
senses:
  - blindsight 30 ft.
languages:
  - Understands Common but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - grappled
  - incapacitated
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - stunned
actions:
  - name: Swarm of Grasping Hands
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:4d8+STR` Necrotic damage, or `dmg:2d8+STR` Necrotic damage if the swarm is Bloodied. If the target is a Medium or smaller creature, it has the Prone condition.'
    attacks:
      - name: Swarm of Grasping Hands attack
        type: melee
        bonus: 4
        damage: 4d8+2
        damage_type: necrotic
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '3'
saves:
  str: 2
  dex: 2
  con: 0
  int: -3
  wis: 0
  cha: -3
alignment: neutral evil
passive_perception: 10
```
