---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-bats
name: Swarm of Bats
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.019Z'
---

```monster
slug: srd-5e_monster_swarm-of-bats
name: Swarm of Bats
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
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
      - 'Melee Weapon Attack: `atk:+4`, reach 0 ft., one creature in the swarm''s space. Hit: `dmg:2d4` piercing damage, or `dmg:1d4` piercing damage if the swarm has half of its hit points or fewer.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 4
        damage_type: thunder
reactions: []
legendary_actions: []
traits:
  - name: Echolocation
    entries:
      - The swarm can't use its blindsight while deafened.
  - name: Keen Hearing
    entries:
      - The swarm has advantage on Wisdom (Perception) checks that rely on hearing.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.
cr: '0.25'
alignment: unaligned
passive_perception: 11
```
