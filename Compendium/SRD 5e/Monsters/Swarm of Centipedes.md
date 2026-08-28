---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-centipedes
name: Swarm of Centipedes
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.019Z'
---

```monster
slug: srd-5e_monster_swarm-of-centipedes
name: Swarm of Centipedes
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 20
  climb: 20
abilities:
  str: 3
  dex: 13
  con: 10
  int: 1
  wis: 7
  cha: 1
senses:
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities: []
condition_immunities:
  - charmed
  - frightened
  - grappled
  - paralyzed
  - petrified
  - prone
  - restrained
  - stunned
actions:
  - name: Bites
    entries:
      - |-
        Melee Weapon Attack: `atk:+3`, reach 0 ft., one target in the swarm's space. Hit: `dmg:4d4` piercing damage, or `dmg:2d4` piercing damage if the swarm has half of its hit points or fewer.
        A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.
    attacks:
      - name: Bites attack
        type: melee
        bonus: 3
        damage_type: thunder
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.
cr: '0.5'
alignment: unaligned
passive_perception: 8
```
